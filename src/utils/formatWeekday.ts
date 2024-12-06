export function formatWeekday(date: Date) {
  return date
    ? new Intl.DateTimeFormat("en-US", { weekday: "short" })
        .format(date)
        .toUpperCase()
    : "";
}
