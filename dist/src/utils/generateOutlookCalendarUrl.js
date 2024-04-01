var BASE_URL = "https://outlook.live.com/calendar/0/action/compose?path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&allday=false&";
function getIsoFormat(data) {
    return encodeURIComponent((data === null || data === void 0 ? void 0 : data.toISOString()) || "");
}
export var generateOutlookCalendarUrl = function(options) {
    options = options || {};
    return "".concat(BASE_URL, "subject=").concat(encodeURIComponent(options.title || options.text || ""), "&startdt=").concat(getIsoFormat(options.start), "&enddt=").concat(getIsoFormat(options.end), "&location=").concat(encodeURIComponent(options.location || ""), "&body=").concat(encodeURIComponent(options.details || ""));
};
