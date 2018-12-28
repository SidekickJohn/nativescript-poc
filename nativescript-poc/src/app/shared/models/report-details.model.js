"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var report_model_1 = require("./report.model");
var ReportDetails = /** @class */ (function (_super) {
    __extends(ReportDetails, _super);
    function ReportDetails(id, name, date, dataStructure, messageString, fileUri) {
        var _this = _super.call(this, id, name, date) || this;
        _this.id = id;
        _this.name = name;
        _this.date = date;
        _this.dataStructure = dataStructure;
        _this.messageString = messageString;
        _this.fileUri = fileUri;
        return _this;
    }
    return ReportDetails;
}(report_model_1.Report));
exports.ReportDetails = ReportDetails;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0LWRldGFpbHMubW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZXBvcnQtZGV0YWlscy5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtDQUF3QztBQUd4QztJQUFtQyxpQ0FBTTtJQUNyQyx1QkFDVyxFQUFVLEVBQ1YsSUFBWSxFQUNaLElBQVksRUFDWixhQUFpQyxFQUNqQyxhQUFxQixFQUNyQixPQUFlO1FBTjFCLFlBUUksa0JBQU0sRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FDeEI7UUFSVSxRQUFFLEdBQUYsRUFBRSxDQUFRO1FBQ1YsVUFBSSxHQUFKLElBQUksQ0FBUTtRQUNaLFVBQUksR0FBSixJQUFJLENBQVE7UUFDWixtQkFBYSxHQUFiLGFBQWEsQ0FBb0I7UUFDakMsbUJBQWEsR0FBYixhQUFhLENBQVE7UUFDckIsYUFBTyxHQUFQLE9BQU8sQ0FBUTs7SUFHMUIsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQyxBQVhELENBQW1DLHFCQUFNLEdBV3hDO0FBWFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXBvcnQgfSBmcm9tIFwiLi9yZXBvcnQubW9kZWxcIjtcclxuaW1wb3J0IHsgRGF0YUVsZW1lbnQgfSBmcm9tIFwiLi9kYXRhRWxlbWVudC5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlcG9ydERldGFpbHMgZXh0ZW5kcyBSZXBvcnQge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIGlkOiBudW1iZXIsIFxyXG4gICAgICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIGRhdGU6IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgZGF0YVN0cnVjdHVyZTogQXJyYXk8RGF0YUVsZW1lbnQ+LFxyXG4gICAgICAgIHB1YmxpYyBtZXNzYWdlU3RyaW5nOiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIGZpbGVVcmk6IHN0cmluZ1xyXG4gICAgKSB7IFxyXG4gICAgICAgIHN1cGVyKGlkLCBuYW1lLCBkYXRlKTtcclxuICAgIH1cclxufSJdfQ==