// const time = new Date();

// const parsedTime = parseISO(time.toISOString());
// console.log(parsedTime); // 2019-10-25T08:10:00.000Z
// const formattedDateTime = format(time, "Z");

// const formatInTimeZone = (date, fmt, tz) =>
//   format(toZonedTime(date, tz), fmt, { timeZone: tz });

// const formattedTime = formatInTimeZone(
//   parsedTime,
//   "yyyy-MM-dd kk:mm:ss xxx",
//   "UTC"
// );
// console.log("formattedDateTime", formattedDateTime);
// console.log(formattedTime); // 2019-10-25 08:10:00 +00:00

export function CalendarHeader() {
  return (
    <div className="bg-blue-500 text-white p-4 rounded-t-lg">
      <h2 className="text-2xl font-bold text-center">Schedule your session!</h2>
      <p className="text-center text-blue-100 mt-1">Timezone: Lisbon (+1)</p>
    </div>
  );
}
