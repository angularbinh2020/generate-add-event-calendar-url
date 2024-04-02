import dateJs from "date-and-time";
const BASE_URL = "http://www.google.com/calendar/event?action=TEMPLATE";
const MAX_LENGTH = 512;
const { format, addDays } = dateJs;
interface Params {
  title?: string;
  location?: string;
  details?: string;
  text?: string;
  end?: Date;
  start?: Date;
  date?: Date;
}

function toAllDay(options: Params) {
  if (!options.date) return "";
  const { date } = options;
  return (
    "&dates=" +
    format(date, "YYYYMMDD") +
    "/" +
    format(addDays(date, 1), "YYYYMMDD")
  );
}

function toIsoHour(date: Date) {
  return format(date, "YYYYMMDDTHHmmss", true) + "Z";
}

function toHour(options: Params) {
  if (!(options.start instanceof Date) || !(options.end instanceof Date))
    return "";

  return "&dates=" + toIsoHour(options.start) + "/" + toIsoHour(options.end);
}

function toStringParameter(
  options: any,
  propertyName: string,
  alternativeName?: string
) {
  if (!options[propertyName]) return "";
  return (
    "&" +
    (alternativeName || propertyName) +
    "=" +
    encodeURIComponent(options[propertyName].substr(0, MAX_LENGTH - 1))
  );
}

function toDatesParameter(options: Params) {
  return options.start && options.end
    ? toHour(options)
    : options.date
    ? toAllDay(options)
    : "";
}

export const generateGoogleCalendarUrl = (options: Params) => {
  options = options || {};

  return (
    BASE_URL +
    toStringParameter(options, "title", "text") +
    toStringParameter(options, "location") +
    toStringParameter(options, "details") +
    toDatesParameter(options)
  );
};
