/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { decimalDigest } from '../digest';
import { Serializer, SimplePlaceholderMapper } from './serializer';
import * as xml from './xml_helper';
const _MESSAGES_TAG = 'messagebundle';
const _MESSAGE_TAG = 'msg';
const _PLACEHOLDER_TAG = 'ph';
const _EXAMPLE_TAG = 'ex';
const _SOURCE_TAG = 'source';
const _DOCTYPE = `<!ELEMENT messagebundle (msg)*>
<!ATTLIST messagebundle class CDATA #IMPLIED>

<!ELEMENT msg (#PCDATA|ph|source)*>
<!ATTLIST msg id CDATA #IMPLIED>
<!ATTLIST msg seq CDATA #IMPLIED>
<!ATTLIST msg name CDATA #IMPLIED>
<!ATTLIST msg desc CDATA #IMPLIED>
<!ATTLIST msg meaning CDATA #IMPLIED>
<!ATTLIST msg obsolete (obsolete) #IMPLIED>
<!ATTLIST msg xml:space (default|preserve) "default">
<!ATTLIST msg is_hidden CDATA #IMPLIED>

<!ELEMENT source (#PCDATA)>

<!ELEMENT ph (#PCDATA|ex)*>
<!ATTLIST ph name CDATA #REQUIRED>

<!ELEMENT ex (#PCDATA)>`;
export class Xmb extends Serializer {
    write(messages, locale) {
        const exampleVisitor = new ExampleVisitor();
        const visitor = new _Visitor();
        let rootNode = new xml.Tag(_MESSAGES_TAG);
        messages.forEach(message => {
            const attrs = { id: message.id };
            if (message.description) {
                attrs['desc'] = message.description;
            }
            if (message.meaning) {
                attrs['meaning'] = message.meaning;
            }
            let sourceTags = [];
            message.sources.forEach((source) => {
                sourceTags.push(new xml.Tag(_SOURCE_TAG, {}, [
                    new xml.Text(`${source.filePath}:${source.startLine}${source.endLine !== source.startLine ? ',' + source.endLine : ''}`)
                ]));
            });
            rootNode.children.push(new xml.CR(2), new xml.Tag(_MESSAGE_TAG, attrs, [...sourceTags, ...visitor.serialize(message.nodes)]));
        });
        rootNode.children.push(new xml.CR());
        return xml.serialize([
            new xml.Declaration({ version: '1.0', encoding: 'UTF-8' }),
            new xml.CR(),
            new xml.Doctype(_MESSAGES_TAG, _DOCTYPE),
            new xml.CR(),
            exampleVisitor.addDefaultExamples(rootNode),
            new xml.CR(),
        ]);
    }
    load(content, url) {
        throw new Error('Unsupported');
    }
    digest(message) { return digest(message); }
    createNameMapper(message) {
        return new SimplePlaceholderMapper(message, toPublicName);
    }
}
class _Visitor {
    visitText(text, context) { return [new xml.Text(text.value)]; }
    visitContainer(container, context) {
        const nodes = [];
        container.children.forEach((node) => nodes.push(...node.visit(this)));
        return nodes;
    }
    visitIcu(icu, context) {
        const nodes = [new xml.Text(`{${icu.expressionPlaceholder}, ${icu.type}, `)];
        Object.keys(icu.cases).forEach((c) => {
            nodes.push(new xml.Text(`${c} {`), ...icu.cases[c].visit(this), new xml.Text(`} `));
        });
        nodes.push(new xml.Text(`}`));
        return nodes;
    }
    visitTagPlaceholder(ph, context) {
        const startTagAsText = new xml.Text(`<${ph.tag}>`);
        const startEx = new xml.Tag(_EXAMPLE_TAG, {}, [startTagAsText]);
        // TC requires PH to have a non empty EX, and uses the text node to show the "original" value.
        const startTagPh = new xml.Tag(_PLACEHOLDER_TAG, { name: ph.startName }, [startEx, startTagAsText]);
        if (ph.isVoid) {
            // void tags have no children nor closing tags
            return [startTagPh];
        }
        const closeTagAsText = new xml.Text(`</${ph.tag}>`);
        const closeEx = new xml.Tag(_EXAMPLE_TAG, {}, [closeTagAsText]);
        // TC requires PH to have a non empty EX, and uses the text node to show the "original" value.
        const closeTagPh = new xml.Tag(_PLACEHOLDER_TAG, { name: ph.closeName }, [closeEx, closeTagAsText]);
        return [startTagPh, ...this.serialize(ph.children), closeTagPh];
    }
    visitPlaceholder(ph, context) {
        const interpolationAsText = new xml.Text(`{{${ph.value}}}`);
        // Example tag needs to be not-empty for TC.
        const exTag = new xml.Tag(_EXAMPLE_TAG, {}, [interpolationAsText]);
        return [
            // TC requires PH to have a non empty EX, and uses the text node to show the "original" value.
            new xml.Tag(_PLACEHOLDER_TAG, { name: ph.name }, [exTag, interpolationAsText])
        ];
    }
    visitIcuPlaceholder(ph, context) {
        const icuExpression = ph.value.expression;
        const icuType = ph.value.type;
        const icuCases = Object.keys(ph.value.cases).map((value) => value + ' {...}').join(' ');
        const icuAsText = new xml.Text(`{${icuExpression}, ${icuType}, ${icuCases}}`);
        const exTag = new xml.Tag(_EXAMPLE_TAG, {}, [icuAsText]);
        return [
            // TC requires PH to have a non empty EX, and uses the text node to show the "original" value.
            new xml.Tag(_PLACEHOLDER_TAG, { name: ph.name }, [exTag, icuAsText])
        ];
    }
    serialize(nodes) {
        return [].concat(...nodes.map(node => node.visit(this)));
    }
}
export function digest(message) {
    return decimalDigest(message);
}
// TC requires at least one non-empty example on placeholders
class ExampleVisitor {
    addDefaultExamples(node) {
        node.visit(this);
        return node;
    }
    visitTag(tag) {
        if (tag.name === _PLACEHOLDER_TAG) {
            if (!tag.children || tag.children.length == 0) {
                const exText = new xml.Text(tag.attrs['name'] || '...');
                tag.children = [new xml.Tag(_EXAMPLE_TAG, {}, [exText])];
            }
        }
        else if (tag.children) {
            tag.children.forEach(node => node.visit(this));
        }
    }
    visitText(text) { }
    visitDeclaration(decl) { }
    visitDoctype(doctype) { }
}
// XMB/XTB placeholders can only contain A-Z, 0-9 and _
export function toPublicName(internalName) {
    return internalName.toUpperCase().replace(/[^A-Z0-9_]/g, '_');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieG1iLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLyIsInNvdXJjZXMiOlsicGFja2FnZXMvY29tcGlsZXIvc3JjL2kxOG4vc2VyaWFsaXplcnMveG1iLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFHeEMsT0FBTyxFQUFvQixVQUFVLEVBQUUsdUJBQXVCLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFDcEYsT0FBTyxLQUFLLEdBQUcsTUFBTSxjQUFjLENBQUM7QUFFcEMsTUFBTSxhQUFhLEdBQUcsZUFBZSxDQUFDO0FBQ3RDLE1BQU0sWUFBWSxHQUFHLEtBQUssQ0FBQztBQUMzQixNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQztBQUM5QixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUM7QUFDMUIsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDO0FBRTdCLE1BQU0sUUFBUSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBa0JPLENBQUM7QUFFekIsTUFBTSxPQUFPLEdBQUksU0FBUSxVQUFVO0lBQ2pDLEtBQUssQ0FBQyxRQUF3QixFQUFFLE1BQW1CO1FBQ2pELE1BQU0sY0FBYyxHQUFHLElBQUksY0FBYyxFQUFFLENBQUM7UUFDNUMsTUFBTSxPQUFPLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQztRQUMvQixJQUFJLFFBQVEsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFMUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUN6QixNQUFNLEtBQUssR0FBMEIsRUFBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLEVBQUUsRUFBQyxDQUFDO1lBRXRELElBQUksT0FBTyxDQUFDLFdBQVcsRUFBRTtnQkFDdkIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUM7YUFDckM7WUFFRCxJQUFJLE9BQU8s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QUcsQ0FBQyxRQUFRLElBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO2dCQUM3QyxNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQztnQkFDeEQsR0FBRyxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzFEO1NBQ0Y7YUFBTSxJQUFJLEdBQUcsQ0FBQyxRQUFRLEVBQUU7WUFDdkIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDaEQ7SUFDSCxDQUFDO0lBRUQsU0FBUyxDQUFDLElBQWMsSUFBUyxDQUFDO0lBQ2xDLGdCQUFnQixDQUFDLElBQXFCLElBQVMsQ0FBQztJQUNoRCxZQUFZLENBQUMsT0FBb0IsSUFBUyxDQUFDO0NBQzVDO0FBRUQsdURBQXVEO0FBQ3ZELE1BQU0sVUFBVSxZQUFZLENBQUMsWUFBb0I7SUFDL0MsT0FBTyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNoRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge2RlY2ltYWxEaWdlc3R9IGZyb20gJy4uL2RpZ2VzdCc7XG5pbXBvcnQgKiBhcyBpMThuIGZyb20gJy4uL2kxOG5fYXN0JztcblxuaW1wb3J0IHtQbGFjZWhvbGRlck1hcHBlciwgU2VyaWFsaXplciwgU2ltcGxlUGxhY2Vob2xkZXJNYXBwZXJ9IGZyb20gJy4vc2VyaWFsaXplcic7XG5pbXBvcnQgKiBhcyB4bWwgZnJvbSAnLi94bWxfaGVscGVyJztcblxuY29uc3QgX01FU1NBR0VTX1RBRyA9ICdtZXNzYWdlYnVuZGxlJztcbmNvbnN0IF9NRVNTQUdFX1RBRyA9ICdtc2cnO1xuY29uc3QgX1BMQUNFSE9MREVSX1RBRyA9ICdwaCc7XG5jb25zdCBfRVhBTVBMRV9UQUcgPSAnZXgnO1xuY29uc3QgX1NPVVJDRV9UQUcgPSAnc291cmNlJztcblxuY29uc3QgX0RPQ1RZUEUgPSBgPCFFTEVNRU5UIG1lc3NhZ2VidW5kbGUgKG1zZykqPlxuPCFBVFRMSVNUIG1lc3NhZ2VidW5kbGUgY2xhc3MgQ0RBVEEgI0lNUExJRUQ+XG5cbjwhRUxFTUVOVCBtc2cgKCNQQ0RBVEF8cGh8c291cmNlKSo+XG48IUFUVExJU1QgbXNnIGlkIENEQVRBICNJTVBMSUVEPlxuPCFBVFRMSVNUIG1zZyBzZXEgQ0RBVEEgI0lNUExJRUQ+XG48IUFUVExJU1QgbXNnIG5hbWUgQ0RBVEEgI0lNUExJRUQ+XG48IUFUVExJU1QgbXNnIGRlc2MgQ0RBVEEgI0lNUExJRUQ+XG48IUFUVExJU1QgbXNnIG1lYW5pbmcgQ0RBVEEgI0lNUExJRUQ+XG48IUFUVExJU1QgbXNnIG9ic29sZXRlIChvYnNvbGV0ZSkgI0lNUExJRUQ+XG48IUFUVExJU1QgbXNnIHhtbDpzcGFjZSAoZGVmYXVsdHxwcmVzZXJ2ZSkgXCJkZWZhdWx0XCI+XG48IUFUVExJU1QgbXNnIGlzX2hpZGRlbiBDREFUQSAjSU1QTElFRD5cblxuPCFFTEVNRU5UIHNvdXJjZSAoI1BDREFUQSk+XG5cbjwhRUxFTUVOVCBwaCAoI1BDREFUQXxleCkqPlxuPCFBVFRMSVNUIHBoIG5hbWUgQ0RBVEEgI1JFUVVJUkVEPlxuXG48IUVMRU1FTlQgZXggKCNQQ0RBVEEpPmA7XG5cbmV4cG9ydCBjbGFzcyBYbWIgZXh0ZW5kcyBTZXJpYWxpemVyIHtcbiAgd3JpdGUobWVzc2FnZXM6IGkxOG4uTWVzc2FnZVtdLCBsb2NhbGU6IHN0cmluZ3xudWxsKTogc3RyaW5nIHtcbiAgICBjb25zdCBleGFtcGxlVmlzaXRvciA9IG5ldyBFeGFtcGxlVmlzaXRvcigpO1xuICAgIGNvbnN0IHZpc2l0b3IgPSBuZXcgX1Zpc2l0b3IoKTtcbiAgICBsZXQgcm9vdE5vZGUgPSBuZXcgeG1sLlRhZyhfTUVTU0FHRVNfVEFHKTtcblxuICAgIG1lc3NhZ2VzLmZvckVhY2gobWVzc2FnZSA9PiB7XG4gICAgICBjb25zdCBhdHRyczoge1trOiBzdHJpbmddOiBzdHJpbmd9ID0ge2lkOiBtZXNzYWdlLmlkfTtcblxuICAgICAgaWYgKG1lc3NhZ2UuZGVzY3JpcHRpb24pIHtcbiAgICAgICAgYXR0cnNbJ2Rlc2MnXSA9IG1lc3NhZ2UuZGVzY3JpcHRpb247XG4gICAgICB9XG5cbiAgICAgIGlmIChtZXNzYWdlLm1lYW5pbmcpIHtcbiAgICAgICAgYXR0cnNbJ21lYW5pbmcnXSA9IG1lc3NhZ2UubWVhbmluZztcbiAgICAgIH1cblxuICAgICAgbGV0IHNvdXJjZVRhZ3M6IHhtbC5UYWdbXSA9IFtdO1xuICAgICAgbWVzc2FnZS5zb3VyY2VzLmZvckVhY2goKHNvdXJjZTogaTE4bi5NZXNzYWdlU3BhbikgPT4ge1xuICAgICAgICBzb3VyY2VUYWdzLnB1c2gobmV3IHhtbC5UYWcoX1NPVVJDRV9UQUcsIHt9LCBbXG4gICAgICAgICAgbmV3IHhtbC5UZXh0KFxuICAgICAgICAgICAgICBgJHtzb3VyY2UuZmlsZVBhdGh9OiR7c291cmNlLnN0YXJ0TGluZX0ke3NvdXJjZS5lbmRMaW5lICE9PSBzb3VyY2Uuc3RhcnRMaW5lID8gJywnICsgc291cmNlLmVuZExpbmUgOiAnJ31gKVxuICAgICAgICBdKSk7XG4gICAgICB9KTtcblxuICAgICAgcm9vdE5vZGUuY2hpbGRyZW4ucHVzaChcbiAgICAgICAgICBuZXcgeG1sLkNSKDIpLFxuICAgICAgICAgIG5ldyB4bWwuVGFnKF9NRVNTQUdFX1RBRywgYXR0cnMsIFsuLi5zb3VyY2VUYWdzLCAuLi52aXNpdG9yLnNlcmlhbGl6ZShtZXNzYWdlLm5vZGVzKV0pKTtcbiAgICB9KTtcblxuICAgIHJvb3ROb2RlLmNoaWxkcmVuLnB1c2gobmV3IHhtbC5DUigpKTtcblxuICAgIHJldHVybiB4bWwuc2VyaWFsaXplKFtcbiAgICAgIG5ldyB4bWwuRGVjbGFyYXRpb24oe3ZlcnNpb246ICcxLjAnLCBlbmNvZGluZzogJ1VURi04J30pLFxuICAgICAgbmV3IHhtbC5DUigpLFxuICAgICAgbmV3IHhtbC5Eb2N0eXBlKF9NRVNTQUdFU19UQUcsIF9ET0NUWVBFKSxcbiAgICAgIG5ldyB4bWwuQ1IoKSxcbiAgICAgIGV4YW1wbGVWaXNpdG9yLmFkZERlZmF1bHRFeGFtcGxlcyhyb290Tm9kZSksXG4gICAgICBuZXcgeG1sLkNSKCksXG4gICAgXSk7XG4gIH1cblxuICBsb2FkKGNvbnRlbnQ6IHN0cmluZywgdXJsOiBzdHJpbmcpOlxuICAgICAge2xvY2FsZTogc3RyaW5nLCBpMThuTm9kZXNCeU1zZ0lkOiB7W21zZ0lkOiBzdHJpbmddOiBpMThuLk5vZGVbXX19IHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vuc3VwcG9ydGVkJyk7XG4gIH1cblxuICBkaWdlc3QobWVzc2FnZTogaTE4bi5NZXNzYWdlKTogc3RyaW5nIHsgcmV0dXJuIGRpZ2VzdChtZXNzYWdlKTsgfVxuXG5cbiAgY3JlYXRlTmFtZU1hcHBlcihtZXNzYWdlOiBpMThuLk1lc3NhZ2UpOiBQbGFjZWhvbGRlck1hcHBlciB7XG4gICAgcmV0dXJuIG5ldyBTaW1wbGVQbGFjZWhvbGRlck1hcHBlcihtZXNzYWdlLCB0b1B1YmxpY05hbWUpO1xuICB9XG59XG5cbmNsYXNzIF9WaXNpdG9yIGltcGxlbWVudHMgaTE4bi5WaXNpdG9yIHtcbiAgdmlzaXRUZXh0KHRleHQ6IGkxOG4uVGV4dCwgY29udGV4dD86IGFueSk6IHhtbC5Ob2RlW10geyByZXR1cm4gW25ldyB4bWwuVGV4dCh0ZXh0LnZhbHVlKV07IH1cblxuICB2aXNpdENvbnRhaW5lcihjb250YWluZXI6IGkxOG4uQ29udGFpbmVyLCBjb250ZXh0OiBhbnkpOiB4bWwuTm9kZVtdIHtcbiAgICBjb25zdCBub2RlczogeG1sLk5vZGVbXSA9IFtdO1xuICAgIGNvbnRhaW5lci5jaGlsZHJlbi5mb3JFYWNoKChub2RlOiBpMThuLk5vZGUpID0+IG5vZGVzLnB1c2goLi4ubm9kZS52aXNpdCh0aGlzKSkpO1xuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIHZpc2l0SWN1KGljdTogaTE4bi5JY3UsIGNvbnRleHQ/OiBhbnkpOiB4bWwuTm9kZVtdIHtcbiAgICBjb25zdCBub2RlcyA9IFtuZXcgeG1sLlRleHQoYHske2ljdS5leHByZXNzaW9uUGxhY2Vob2xkZXJ9LCAke2ljdS50eXBlfSwgYCldO1xuXG4gICAgT2JqZWN0LmtleXMoaWN1LmNhc2VzKS5mb3JFYWNoKChjOiBzdHJpbmcpID0+IHtcbiAgICAgIG5vZGVzLnB1c2gobmV3IHhtbC5UZXh0KGAke2N9IHtgKSwgLi4uaWN1LmNhc2VzW2NdLnZpc2l0KHRoaXMpLCBuZXcgeG1sLlRleHQoYH0gYCkpO1xuICAgIH0pO1xuXG4gICAgbm9kZXMucHVzaChuZXcgeG1sLlRleHQoYH1gKSk7XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICB2aXNpdFRhZ1BsYWNlaG9sZGVyKHBoOiBpMThuLlRhZ1BsYWNlaG9sZGVyLCBjb250ZXh0PzogYW55KTogeG1sLk5vZGVbXSB7XG4gICAgY29uc3Qgc3RhcnRUYWdBc1RleHQgPSBuZXcgeG1sLlRleHQoYDwke3BoLnRhZ30+YCk7XG4gICAgY29uc3Qgc3RhcnRFeCA9IG5ldyB4bWwuVGFnKF9FWEFNUExFX1RBRywge30sIFtzdGFydFRhZ0FzVGV4dF0pO1xuICAgIC8vIFRDIHJlcXVpcmVzIFBIIHRvIGhhdmUgYSBub24gZW1wdHkgRVgsIGFuZCB1c2VzIHRoZSB0ZXh0IG5vZGUgdG8gc2hvdyB0aGUgXCJvcmlnaW5hbFwiIHZhbHVlLlxuICAgIGNvbnN0IHN0YXJ0VGFnUGggPVxuICAgICAgICBuZXcgeG1sLlRhZyhfUExBQ0VIT0xERVJfVEFHLCB7bmFtZTogcGguc3RhcnROYW1lfSwgW3N0YXJ0RXgsIHN0YXJ0VGFnQXNUZXh0XSk7XG4gICAgaWYgKHBoLmlzVm9pZCkge1xuICAgICAgLy8gdm9pZCB0YWdzIGhhdmUgbm8gY2hpbGRyZW4gbm9yIGNsb3NpbmcgdGFnc1xuICAgICAgcmV0dXJuIFtzdGFydFRhZ1BoXTtcbiAgICB9XG5cbiAgICBjb25zdCBjbG9zZVRhZ0FzVGV4dCA9IG5ldyB4bWwuVGV4dChgPC8ke3BoLnRhZ30+YCk7XG4gICAgY29uc3QgY2xvc2VFeCA9IG5ldyB4bWwuVGFnKF9FWEFNUExFX1RBRywge30sIFtjbG9zZVRhZ0FzVGV4dF0pO1xuICAgIC8vIFRDIHJlcXVpcmVzIFBIIHRvIGhhdmUgYSBub24gZW1wdHkgRVgsIGFuZCB1c2VzIHRoZSB0ZXh0IG5vZGUgdG8gc2hvdyB0aGUgXCJvcmlnaW5hbFwiIHZhbHVlLlxuICAgIGNvbnN0IGNsb3NlVGFnUGggPVxuICAgICAgICBuZXcgeG1sLlRhZyhfUExBQ0VIT0xERVJfVEFHLCB7bmFtZTogcGguY2xvc2VOYW1lfSwgW2Nsb3NlRXgsIGNsb3NlVGFnQXNUZXh0XSk7XG5cbiAgICByZXR1cm4gW3N0YXJ0VGFnUGgsIC4uLnRoaXMuc2VyaWFsaXplKHBoLmNoaWxkcmVuKSwgY2xvc2VUYWdQaF07XG4gIH1cblxuICB2aXNpdFBsYWNlaG9sZGVyKHBoOiBpMThuLlBsYWNlaG9sZGVyLCBjb250ZXh0PzogYW55KTogeG1sLk5vZGVbXSB7XG4gICAgY29uc3QgaW50ZXJwb2xhdGlvbkFzVGV4dCA9IG5ldyB4bWwuVGV4dChge3ske3BoLnZhbHVlfX19YCk7XG4gICAgLy8gRXhhbXBsZSB0YWcgbmVlZHMgdG8gYmUgbm90LWVtcHR5IGZvciBUQy5cbiAgICBjb25zdCBleFRhZyA9IG5ldyB4bWwuVGFnKF9FWEFNUExFX1RBRywge30sIFtpbnRlcnBvbGF0aW9uQXNUZXh0XSk7XG4gICAgcmV0dXJuIFtcbiAgICAgIC8vIFRDIHJlcXVpcmVzIFBIIHRvIGhhdmUgYSBub24gZW1wdHkgRVgsIGFuZCB1c2VzIHRoZSB0ZXh0IG5vZGUgdG8gc2hvdyB0aGUgXCJvcmlnaW5hbFwiIHZhbHVlLlxuICAgICAgbmV3IHhtbC5UYWcoX1BMQUNFSE9MREVSX1RBRywge25hbWU6IHBoLm5hbWV9LCBbZXhUYWcsIGludGVycG9sYXRpb25Bc1RleHRdKVxuICAgIF07XG4gIH1cblxuICB2aXNpdEljdVBsYWNlaG9sZGVyKHBoOiBpMThuLkljdVBsYWNlaG9sZGVyLCBjb250ZXh0PzogYW55KTogeG1sLk5vZGVbXSB7XG4gICAgY29uc3QgaWN1RXhwcmVzc2lvbiA9IHBoLnZhbHVlLmV4cHJlc3Npb247XG4gICAgY29uc3QgaWN1VHlwZSA9IHBoLnZhbHVlLnR5cGU7XG4gICAgY29uc3QgaWN1Q2FzZXMgPSBPYmplY3Qua2V5cyhwaC52YWx1ZS5jYXNlcykubWFwKCh2YWx1ZTogc3RyaW5nKSA9PiB2YWx1ZSArICcgey4uLn0nKS5qb2luKCcgJyk7XG4gICAgY29uc3QgaWN1QXNUZXh0ID0gbmV3IHhtbC5UZXh0KGB7JHtpY3VFeHByZXNzaW9ufSwgJHtpY3VUeXBlfSwgJHtpY3VDYXNlc319YCk7XG4gICAgY29uc3QgZXhUYWcgPSBuZXcgeG1sLlRhZyhfRVhBTVBMRV9UQUcsIHt9LCBbaWN1QXNUZXh0XSk7XG4gICAgcmV0dXJuIFtcbiAgICAgIC8vIFRDIHJlcXVpcmVzIFBIIHRvIGhhdmUgYSBub24gZW1wdHkgRVgsIGFuZCB1c2VzIHRoZSB0ZXh0IG5vZGUgdG8gc2hvdyB0aGUgXCJvcmlnaW5hbFwiIHZhbHVlLlxuICAgICAgbmV3IHhtbC5UYWcoX1BMQUNFSE9MREVSX1RBRywge25hbWU6IHBoLm5hbWV9LCBbZXhUYWcsIGljdUFzVGV4dF0pXG4gICAgXTtcbiAgfVxuXG4gIHNlcmlhbGl6ZShub2RlczogaTE4bi5Ob2RlW10pOiB4bWwuTm9kZVtdIHtcbiAgICByZXR1cm4gW10uY29uY2F0KC4uLm5vZGVzLm1hcChub2RlID0+IG5vZGUudmlzaXQodGhpcykpKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlnZXN0KG1lc3NhZ2U6IGkxOG4uTWVzc2FnZSk6IHN0cmluZyB7XG4gIHJldHVybiBkZWNpbWFsRGlnZXN0KG1lc3NhZ2UpO1xufVxuXG4vLyBUQyByZXF1aXJlcyBhdCBsZWFzdCBvbmUgbm9uLWVtcHR5IGV4YW1wbGUgb24gcGxhY2Vob2xkZXJzXG5jbGFzcyBFeGFtcGxlVmlzaXRvciBpbXBsZW1lbnRzIHhtbC5JVmlzaXRvciB7XG4gIGFkZERlZmF1bHRFeGFtcGxlcyhub2RlOiB4bWwuTm9kZSk6IHhtbC5Ob2RlIHtcbiAgICBub2RlLnZpc2l0KHRoaXMpO1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgdmlzaXRUYWcodGFnOiB4bWwuVGFnKTogdm9pZCB7XG4gICAgaWYgKHRhZy5uYW1lID09PSBfUExBQ0VIT0xERVJfVEFHKSB7XG4gICAgICBpZiAoIXRhZy5jaGlsZHJlbiB8fCB0YWcuY2hpbGRyZW4ubGVuZ3RoID09IDApIHtcbiAgICAgICAgY29uc3QgZXhUZXh0ID0gbmV3IHhtbC5UZXh0KHRhZy5hdHRyc1snbmFtZSddIHx8ICcuLi4nKTtcbiAgICAgICAgdGFnLmNoaWxkcmVuID0gW25ldyB4bWwuVGFnKF9FWEFNUExFX1RBRywge30sIFtleFRleHRdKV07XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0YWcuY2hpbGRyZW4pIHtcbiAgICAgIHRhZy5jaGlsZHJlbi5mb3JFYWNoKG5vZGUgPT4gbm9kZS52aXNpdCh0aGlzKSk7XG4gICAgfVxuICB9XG5cbiAgdmlzaXRUZXh0KHRleHQ6IHhtbC5UZXh0KTogdm9pZCB7fVxuICB2aXNpdERlY2xhcmF0aW9uKGRlY2w6IHhtbC5EZWNsYXJhdGlvbik6IHZvaWQge31cbiAgdmlzaXREb2N0eXBlKGRvY3R5cGU6IHhtbC5Eb2N0eXBlKTogdm9pZCB7fVxufVxuXG4vLyBYTUIvWFRCIHBsYWNlaG9sZGVycyBjYW4gb25seSBjb250YWluIEEtWiwgMC05IGFuZCBfXG5leHBvcnQgZnVuY3Rpb24gdG9QdWJsaWNOYW1lKGludGVybmFsTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGludGVybmFsTmFtZS50b1VwcGVyQ2FzZSgpLnJlcGxhY2UoL1teQS1aMC05X10vZywgJ18nKTtcbn1cbiJdfQ==