export function escapeRegEx(plaintext: string): string {
    return plaintext.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
}