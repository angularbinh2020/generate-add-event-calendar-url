# Generate link to add event to gmail, outlook calendar

## Google example
window.location.href = generateGoogleCalendarUrl({
  text: "Event name",
  details: "Event description",
  date: new Date(),
});

## Outlook example
window.location.href = generateOutlookCalendarUrl({
  text: "Event name",
  details: "Event description",
  date: new Date(),
});


## Options

- title?: string;
- location?: string;
- details?: string;
- text?: string;
- end?: Date;
- start?: Date;
- date?: Date;