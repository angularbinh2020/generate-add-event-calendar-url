function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
import * as dayjs from "date-and-time";
var BASE_URL = "http://www.google.com/calendar/event?action=TEMPLATE";
var MAX_LENGTH = 512;
function toAllDay(options) {
    if (!options.date) return "";
    var date = options.date;
    return "&dates=" + dayjs.format(date, "YYYYMMDD") + "/" + dayjs.format(dayjs.addDays(date, 1), "YYYYMMDD");
}
function toIsoHour(date) {
    return dayjs.format(date, "YYYYMMDDTHHmmss", true) + "Z";
}
function toHour(options) {
    if (!_instanceof(options.start, Date) || !_instanceof(options.end, Date)) return "";
    return "&dates=" + toIsoHour(options.start) + "/" + toIsoHour(options.end);
}
function toStringParameter(options, propertyName, alternativeName) {
    if (!options[propertyName]) return "";
    return "&" + (alternativeName || propertyName) + "=" + encodeURIComponent(options[propertyName].substr(0, MAX_LENGTH - 1));
}
function toDatesParameter(options) {
    return options.start && options.end ? toHour(options) : options.date ? toAllDay(options) : "";
}
export var generateGoogleCalendarUrl = function(options) {
    options = options || {};
    return BASE_URL + toStringParameter(options, "title", "text") + toStringParameter(options, "location") + toStringParameter(options, "details") + toDatesParameter(options);
};
