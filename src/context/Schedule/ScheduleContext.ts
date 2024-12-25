import { createContext } from "react";
import { DaySchedule, TimeSlot } from "../../types";

interface ScheduleContextProps {
  schedule: DaySchedule[];
  onTimeSelect: (
    date: Date,
    time: string
  ) => { date: Date; time: string } | null;
  updateSchedule: (newSchedule: DaySchedule[]) => void;
  selectedDate: Date | null;
  setSelectedDate: (date: Date | null) => void;
  selectedTime: TimeSlot | null;
  setSelectedTime: (time: TimeSlot | null) => void;
}

const ScheduleContext = createContext<ScheduleContextProps>({
  schedule: [],
  onTimeSelect: () => null,
  updateSchedule: () => {},
  selectedDate: null,
  setSelectedDate: () => {},
  selectedTime: null,
  setSelectedTime: () => {},
});

export { ScheduleContext };
export default ScheduleContext;
