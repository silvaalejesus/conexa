import { useContext, useEffect } from "react";
import ScheduleContext from "../../context/Schedule/ScheduleContext";
import { TimeSlot } from "../../types";

export function TimeSlots() {
  const {
    schedule,
    onTimeSelect,
    setSelectedDate,
    selectedTime,
    setSelectedTime,
  } = useContext(ScheduleContext);

  useEffect(() => {
    setSelectedDate(null);
    setSelectedTime(null);
  }, [schedule]);

  const handleSlotClick = (slot: TimeSlot, date: Date) => {
    setSelectedTime(slot);
    setSelectedDate(date);
    onTimeSelect(date, slot.time);
  };

  return (
    <div role="group" className="grid grid-cols-4 gap-x-4 px-4 py-2">
      {schedule.map((day, dayIndex) => {
        return (
          <div key={day.date.toISOString()} className="space-y-2">
            {dayIndex === 0 && (
              <div className="h-8 flex items-center text-gray-400">-</div>
            )}
            {day.slots.map((slot) => {
              return (
                <button
                  key={slot.time}
                  disabled={!slot.available}
                  onClick={() => handleSlotClick(slot, day.date)}
                  data-testid={`slot-${dayIndex}-${slot.time}-${
                    !slot.available ? "available" : "unavailable"
                  }`}
                  className={`w-full py-2 text-sm font-medium rounded
                    ${
                      slot.available
                        ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        : "bg-gray-100 text-gray-400 cursor-not-allowed"
                    }
                    ${
                      selectedTime === slot &&
                      "bg-purple-400 border-2 border-purple-600 text-white pointer-events-none"
                    }
                    `}
                >
                  {slot.time}
                </button>
              );
            })}
            <button className="w-full py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded hover:bg-gray-200">
              MORE
            </button>
          </div>
        );
      })}
    </div>
  );
}
