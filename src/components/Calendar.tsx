import { CalendarHeader } from "./CalendarHeader";
import DateNavigation from "./DateNavigation";
import ScheduleButton from "./ScheduleButton";
import { TimeSlots } from "./TimeSlots";

export function Calendar() {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-3xl mx-auto">
      <CalendarHeader />
      <div className="flex flex-col">
        <DateNavigation />
        <TimeSlots />
      </div>
      <div className="text-end px-4 py-2 ">
        <ScheduleButton />
      </div>
    </div>
  );
}
