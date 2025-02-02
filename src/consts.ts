import ical from "node-ical";
// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "CT Hackerspace";
export const SITE_DESCRIPTION = "Welcome to the CT Hackerspace";

const calendarData = await fetch("https://calendar.google.com/calendar/ical/contact.cthackerspace@gmail.com/public/basic.ics");
const calendarText = await calendarData.text();
const today = new Date();
today.setHours(0,0,0,0);

export const getEffectiveStartDate = (cal: ical.CalendarComponent) => {
    const recurring = cal.rrule?.after(today);
    if (recurring !== undefined && recurring !== null) {
        // RRule assumes UTC, but Google is sending us 'America/New_York', so we need to adjust for local time.
        recurring.setMinutes(recurring.getMinutes() + new Date().getTimezoneOffset());
        return recurring;
    }
    return cal.start ?? new Date(0);
}
export const getEffectiveEndDate = (cal: ical.CalendarComponent) => {
    const startDate = getEffectiveStartDate(cal);
    const endDate = new Date(startDate.getTime() - cal.start.getTime() + cal.end.getTime());
    return endDate;
}

export const events: ical.CalendarComponent[] = Object.values(await ical.async.parseICS(calendarText))
    .filter(e => {
        const eventDate = getEffectiveStartDate(e);
        return eventDate >= today;
    })
    .sort((a,b) => getEffectiveStartDate(a) - getEffectiveStartDate(b))
    .slice(0, 5);
