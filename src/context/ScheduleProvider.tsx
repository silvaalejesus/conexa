import { addDays, startOfWeek } from "date-fns";
import { useState } from "react";
import { DaySchedule, TimeSlot } from "../types";
import ScheduleContext from "./ScheduleContext";

interface ScheduleProviderProps {
  children: React.ReactNode;
}

const generateSchedule = (): DaySchedule[] => {
  const schedule: DaySchedule[] = [];
  const today = new Date();
  const startOfWeekDate = startOfWeek(today);

  for (let i = 0; i < 4; i++) {
    const date = addDays(startOfWeekDate, i); // Adiciona 'i' dias ao início da semana

    const slots = [];
    for (let hour = 8; hour <= 10; hour++) {
      for (const minute of ["00", "30"]) {
        slots.push({
          time: `${hour.toString().padStart(2, "0")}:${minute}`,
          available: Math.random() > 0.3,
        });
      }
    }

    schedule.push({ date, slots });
  }

  return schedule;
};

const ScheduleProvider: React.FC<ScheduleProviderProps> = ({ children }) => {
  const [schedule, setSchedule] = useState<DaySchedule[]>(generateSchedule());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<TimeSlot | null>(null);

  const updateSchedule = (newSchedule: DaySchedule[]) => {
    setSchedule(newSchedule);
  };

  const handleTimeSelect = (
    date: Date,
    time: string
  ): { date: Date; time: string } | null => {
    if (date && time) {
      return { date, time };
    } else {
      return null;
    }
  };

  const value = {
    schedule,
    onTimeSelect: handleTimeSelect,
    updateSchedule,
    selectedDate,
    setSelectedDate,
    selectedTime,
    setSelectedTime,
  };

  return (
    <ScheduleContext.Provider value={value}>
      {children}
    </ScheduleContext.Provider>
  );
};

export default ScheduleProvider;
