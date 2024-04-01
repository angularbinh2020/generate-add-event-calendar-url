const BASE_URL =
  "https://outlook.live.com/calendar/0/action/compose?path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&allday=false&";

interface Params {
  title?: string;
  location?: string;
  details?: string;
  text?: string;
  end?: Date;
  start?: Date;
  date?: Date;
}

function getIsoFormat(data?: Date) {
  return encodeURIComponent(data?.toISOString() || "");
}

export const generateOutlookCalendarUrl = (options: Params) => {
  options = options || {};
  return `${BASE_URL}subject=${encodeURIComponent(
    options.title || options.text || ""
  )}&startdt=${getIsoFormat(options.start)}&enddt=${getIsoFormat(
    options.end
  )}&location=${encodeURIComponent(
    options.location || ""
  )}&body=${encodeURIComponent(options.details || "")}`;
};
