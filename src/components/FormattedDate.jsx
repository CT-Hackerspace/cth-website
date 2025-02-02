export default function FormattedDate({ date, showDate = true, showTime = false, showWeekday = false }) {
  const dateOptions = {
    weekday: showWeekday ? "long" : undefined,
    year: showDate ? "numeric" : undefined,
    month: showDate ? "short" : undefined,
    day: showDate ? "numeric": undefined,
    hour: showTime ? "numeric" : undefined,
    minute: showTime ? "numeric" : undefined,
  };

  return (
    <time datetime={date.toISOString()}>
      { date.toLocaleString("en-us", dateOptions) }
    </time>
  );
}
