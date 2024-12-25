import { fireEvent, render } from "@testing-library/react";
import { addDays } from "date-fns";
import { afterEach, describe, expect, test, vi } from "vitest";
import DateNavigation from "../components/DateNavigation";
import ScheduleProvider from "../context/Schedule/ScheduleProvider";
import { DaySchedule } from "../types";

const initialSchedule: DaySchedule[] = [
  {
    date: "2024-12-01T03:00:00.000Z",
    slots: [
      {
        time: "08:00",
        available: true,
      },
      {
        time: "08:30",
        available: false,
      },
      {
        time: "09:00",
        available: true,
      },
      {
        time: "09:30",
        available: true,
      },
      {
        time: "10:00",
        available: true,
      },
      {
        time: "10:30",
        available: true,
      },
    ],
  },
  {
    date: "2024-12-02T03:00:00.000Z",
    slots: [
      {
        time: "08:00",
        available: true,
      },
      {
        time: "08:30",
        available: false,
      },
      {
        time: "09:00",
        available: true,
      },
      {
        time: "09:30",
        available: false,
      },
      {
        time: "10:00",
        available: false,
      },
      {
        time: "10:30",
        available: true,
      },
    ],
  },
  {
    date: "2024-12-03T03:00:00.000Z",
    slots: [
      {
        time: "08:00",
        available: true,
      },
      {
        time: "08:30",
        available: false,
      },
      {
        time: "09:00",
        available: true,
      },
      {
        time: "09:30",
        available: true,
      },
      {
        time: "10:00",
        available: true,
      },
      {
        time: "10:30",
        available: true,
      },
    ],
  },
  {
    date: "2024-12-04T03:00:00.000Z",
    slots: [
      {
        time: "08:00",
        available: true,
      },
      {
        time: "08:30",
        available: false,
      },
      {
        time: "09:00",
        available: false,
      },
      {
        time: "09:30",
        available: true,
      },
      {
        time: "10:00",
        available: true,
      },
      {
        time: "10:30",
        available: true,
      },
    ],
  },
];

const updateScheduleMock = vi.fn();
const onTimeSelectMock = vi.fn();

describe("DateNavigation", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  test("should update schedule and display correct date when navigating to next week", async () => {
    const { getByTestId, getByText } = render(
      <ScheduleProvider>
        <DateNavigation />
      </ScheduleProvider>
    );

    fireEvent.click(getByTestId("next-button"));
    // Formatar a data esperada no mesmo formato que o componente exibe
    const expectedDate = addDays(new Date(initialSchedule[0].date), 4);
    const expectedDateString = expectedDate
      .toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      })
      .toUpperCase();

    expect(getByText(expectedDateString)).toBeInTheDocument();
  });

  test("should update schedule when navigating to previous week", () => {
    const { getByTestId, getByText, debug } = render(
      <ScheduleProvider>
        <DateNavigation />
      </ScheduleProvider>
    );

    fireEvent.click(getByTestId("prev-button"));

    const expectedDate = addDays(new Date(initialSchedule[0].date), -4);
    const expectedDateString = expectedDate
      .toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      })
      .toUpperCase();

    expect(getByText(expectedDateString)).toBeInTheDocument();
  });

  test("should format dates correctly", () => {
    const { getByText } = render(
      <ScheduleProvider>
        <DateNavigation />
      </ScheduleProvider>
    );

    // Verificar a formatação de cada dia
    initialSchedule.forEach((day) => {
      const expectedWeekday = new Date(day.date)
        .toLocaleDateString("en-US", { weekday: "short" })
        .toUpperCase();

      const expectedDayOfMonth = new Date(day.date)
        .toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        })
        .toUpperCase();

      expect(getByText(expectedWeekday)).toBeInTheDocument();
      expect(getByText(expectedDayOfMonth)).toBeInTheDocument();
    });
  });
});
