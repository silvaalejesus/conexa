import { addDays } from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useContext } from "react";
import ScheduleContext from "../../context/Schedule/ScheduleContext";
import { formatWeekday } from "../../utils/formatWeekday";

const DateNavigation = () => {
  const { schedule, updateSchedule, selectedDate } =
    useContext(ScheduleContext);

  const handlePrevWeek = () => {
    const previousWeekSchedule = schedule.map((day) => ({
      ...day,
      date: addDays(new Date(day.date), -4),
    }));
    updateSchedule(previousWeekSchedule);
  };

  const handleNextWeek = () => {
    const nextWeekSchedule = schedule.map((day) => ({
      ...day,
      date: addDays(new Date(day.date), 4),
    }));
    updateSchedule(nextWeekSchedule);
  };

  return (
    <div className="bg-white px-4 py-3 flex items-center justify-between border-b">
      <button
        className="p-1 rounded-full hover:bg-gray-100"
        data-testid="prev-button"
        onClick={handlePrevWeek}
      >
        <ChevronLeft className="w-6 h-6 text-gray-600" />
      </button>

      <div className="grid grid-cols-4 flex-1 text-center gap-4">
        {schedule.map((day) => {
          return (
            <div
              key={day.date}
              className={`rounded-md p-2 
              ${
                selectedDate?.toDateString() === day.date.toDateString() &&
                "bg-purple-400 text-white border-2 border-purple-600"
              }`}
            >
              <div className="text-gray-500 text-sm">
                {formatWeekday(new Date(day.date))}
              </div>
              <div className="font-medium">
                {new Date(day.date)
                  .toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })
                  .toUpperCase()}
              </div>
            </div>
          );
        })}
      </div>

      <button
        className="p-1 rounded-full hover:bg-gray-100"
        data-testid="next-button"
        onClick={handleNextWeek}
      >
        <ChevronRight className="w-6 h-6 text-gray-600" />
      </button>
    </div>
  );
};

export default DateNavigation;
