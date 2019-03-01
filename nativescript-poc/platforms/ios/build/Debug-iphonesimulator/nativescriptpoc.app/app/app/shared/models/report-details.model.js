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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0LWRldGFpbHMubW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZXBvcnQtZGV0YWlscy5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtDQUF3QztBQUd4QztJQUFtQyxpQ0FBTTtJQUNyQyx1QkFDVyxFQUFVLEVBQ1YsSUFBWSxFQUNaLElBQVksRUFDWixhQUFpQyxFQUNqQyxhQUFxQixFQUNyQixPQUFlO1FBTjFCLFlBUUksa0JBQU0sRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FDeEI7UUFSVSxRQUFFLEdBQUYsRUFBRSxDQUFRO1FBQ1YsVUFBSSxHQUFKLElBQUksQ0FBUTtRQUNaLFVBQUksR0FBSixJQUFJLENBQVE7UUFDWixtQkFBYSxHQUFiLGFBQWEsQ0FBb0I7UUFDakMsbUJBQWEsR0FBYixhQUFhLENBQVE7UUFDckIsYUFBTyxHQUFQLE9BQU8sQ0FBUTs7SUFHMUIsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQyxBQVhELENBQW1DLHFCQUFNLEdBV3hDO0FBWFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXBvcnQgfSBmcm9tIFwiLi9yZXBvcnQubW9kZWxcIjtcbmltcG9ydCB7IERhdGFFbGVtZW50IH0gZnJvbSBcIi4vZGF0YUVsZW1lbnQubW9kZWxcIjtcblxuZXhwb3J0IGNsYXNzIFJlcG9ydERldGFpbHMgZXh0ZW5kcyBSZXBvcnQge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgaWQ6IG51bWJlciwgXG4gICAgICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcsXG4gICAgICAgIHB1YmxpYyBkYXRlOiBzdHJpbmcsXG4gICAgICAgIHB1YmxpYyBkYXRhU3RydWN0dXJlOiBBcnJheTxEYXRhRWxlbWVudD4sXG4gICAgICAgIHB1YmxpYyBtZXNzYWdlU3RyaW5nOiBzdHJpbmcsXG4gICAgICAgIHB1YmxpYyBmaWxlVXJpOiBzdHJpbmdcbiAgICApIHsgXG4gICAgICAgIHN1cGVyKGlkLCBuYW1lLCBkYXRlKTtcbiAgICB9XG59Il19