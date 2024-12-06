import { render, renderHook, within } from "@testing-library/react";
import { useContext } from "react";
import { describe, expect, test } from "vitest";
import { TimeSlots } from "../components/TimeSlots";
import ScheduleContext from "../context/ScheduleContext";
import ScheduleProvider from "../context/ScheduleProvider";
import { DaySchedule } from "../types";

const initialSchedule: DaySchedule[] = [
  {
    date: new Date("2024-12-08T12:00:00.000Z"),
    slots: [
      { time: "08:00", available: true },
      { time: "08:30", available: false },
      { time: "09:00", available: true },
    ],
  },
];

describe("TimeSlots", () => {
  test("should display time slots correctly", () => {
    const { getAllByRole } = render(
      <ScheduleProvider>
        <TimeSlots />
      </ScheduleProvider>
    );

    const dayContainers = getAllByRole("group");

    initialSchedule.forEach((day, dayIndex) => {
      const dayContainer = dayContainers[dayIndex];
      const slotButtons = within(dayContainer).getAllByRole("button");

      // expect(slotButtons).toHaveLength(day.slots.length);

      day.slots.forEach((slot, slotIndex) => {
        const button = slotButtons[slotIndex];
        expect(button).toHaveTextContent(slot.time);
      });
    });
  });

  test("should display available and unavailable slots with correct styles", () => {
    const { result } = renderHook(() => useContext(ScheduleContext), {
      wrapper: ({ children }) => (
        <ScheduleProvider>{children}</ScheduleProvider>
      ),
    });

    const { schedule } = result.current;

    const { getByTestId, debug } = render(
      <ScheduleProvider>
        <TimeSlots />
      </ScheduleProvider>
    );

    // Verificar os estilos dos slots disponíveis
    schedule.forEach((day, dayIndex) => {
      day.slots.forEach((slot) => {
        const slotButton = getByTestId(
          `slot-${dayIndex}-${slot.time}-${
            slot.available ? "available" : "unavailable"
          }`
        );

        if (slot.available) {
          expect(slotButton).toHaveClass(
            "w-full py-2 text-sm font-medium rounded bg-gray-100 text-gray-700 hover:bg-gray-200"
          );
        } else {
          expect(slotButton).toHaveClass(
            "w-full py-2 text-sm font-medium rounded bg-gray-100 text-gray-400 cursor-not-allowed"
          );
        }
      });
    });
  });
});
