"use client";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DateRangeIcon from "@mui/icons-material/DateRange";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CircleIcon from "@mui/icons-material/Circle";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { tv } from "tailwind-variants";
import { fredoka } from "@/app/fonts";
import {
  Button,
  CalendarCell,
  CalendarGrid,
  Heading,
  Calendar as AriaCalendar,
  Group,
  CalendarGridHeader,
  CalendarHeaderCell,
  CalendarGridBody,
  TextField,
  Input,
  Label,
  TimeField,
  DateInput,
  DateSegment,
} from "react-aria-components";
import { useState } from "react";
import { parseDate } from "@internationalized/date";

const badge = tv({
  base: ["rounded-full py-1 px-2 text-center text-gray-50"],
  variants: {
    variant: {
      done: ["bg-pink-400"],
      inProgress: ["bg-blue-400"],
      notStarted: ["bg-indigo-400"],
    },
  },
});

const input = tv({
  base: [
    "outline-none border-2 selection:bg-green-100 focus:border-green-300 px-2 py-1 rounded-md transition-all",
  ],
});

const button = tv({
  base: ["flex items-center justify-center transition-all outline-none"],
  variants: {
    variant: {
      primary: [
        "bg-yellow-300 text-gray-900 ring-yellow-300 rounded-lg py-2 px-3 font-medium",
        "hover:ring-2 hover:bg-transparent hover:text-yellow-500",
        "focus-visible:ring-2 focus-visible:ring-offset-2",
      ],
      ghost: [
        "rounded-full bg-transparent text-green-200 p-0.5 ring-green-200",
        "hover:bg-green-300 hover:text-gray-700",
        "focus-visible:ring-2",
      ],
    },
    isPressed: {
      true: ["scale-95"],
    },
  },
});

export const MeetingSchedule = () => {
  const [date, setDate] = useState(null);
  const [showForm, setShowForm] = useState(false);
  return (
    <main
      className={`flex items-center justify-center min-h-dvh bg-green-200 ${fredoka.className}`}
    >
      <div className="w-full max-w-md rounded-3xl shadow-2xl overflow-hidden">
        {!date && !showForm && (
          <Calendar selectedDate={date} setSelectedDate={setDate} />
        )}
        {date && !showForm && (
          <Today
            selectedDate={date}
            onClose={() => setDate(null)}
            onAdd={() => setShowForm(true)}
          />
        )}
        {date && showForm && (
          <Form
            selectedDate={date}
            onSave={() => {
              setDate(null);
              setShowForm(false);
            }}
          />
        )}
      </div>
    </main>
  );
};

export const Form = ({ selectedDate, onSave }) => {
  return (
    <div className="bg-green-700">
      <h2 className="text-gray-50 font-semibold text-2xl p-4">Add meeting</h2>
      <form className="bg-white rounded-t-3xl p-4 grid grid-cols-2 gap-8">
        <TextField className="col-span-full grid gap-2">
          <Label className="font-semibold">Title</Label>
          <Input className={input()} placeholder="Enter the title" />
        </TextField>

        <TextField
          className="col-span-full grid gap-2"
          isReadOnly
          value={selectedDate}
        >
          <Group className="flex items-center gap-2">
            <DateRangeIcon />
            <Label className="font-semibold">Date</Label>
          </Group>
          <Input className={input()} />
        </TextField>

        <TimeField className="grid gap-2">
          <Group className="flex items-center gap-2">
            <AccessTimeIcon />
            <Label className="font-semibold">Start</Label>
          </Group>
          <DateInput className={input({ class: "flex" })}>
            {(segment) => (
              <DateSegment
                className="focus:bg-green-300 px-0.5 rounded-sm outline-none"
                segment={segment}
              />
            )}
          </DateInput>
        </TimeField>

        <TimeField className="grid gap-2">
          <Group className="flex items-center gap-2">
            <AccessTimeIcon />
            <Label className="font-semibold">End</Label>
          </Group>
          <DateInput className={input({ class: "flex items-center" })}>
            {(segment) => (
              <DateSegment
                className="focus:bg-green-300 px-0.5 rounded-sm outline-none"
                segment={segment}
              />
            )}
          </DateInput>
        </TimeField>

        <Button
          onPress={onSave}
          className={(states) =>
            button({
              ...states,
              variant: "primary",
              class: "col-span-full py-3",
            })
          }
        >
          Save
        </Button>
      </form>
    </div>
  );
};

export const Today = ({ onClose, onAdd }) => {
  return (
    <div className="bg-white p-4 pb-20 relative">
      <header className="flex items-center justify-between">
        <h2 className="font-medium text-2xl">Today</h2>
        <Button
          onPress={onClose}
          className={(states) =>
            button({
              ...states,
              variant: "ghost",
              class: "text-gray-900 hover:bg-gray-300",
            })
          }
        >
          <CloseOutlinedIcon />
        </Button>
      </header>
      <div className="mt-6 grid gap-4">
        <div className="grid grid-cols-[auto_1fr_auto] items-start gap-4">
          <CheckCircleIcon className="text-pink-400 mt-1" />
          <div>
            <p className="text-lg font-semibold">
              Teach a goldfish synchronized swimming routines.
            </p>
            <span className="text-sm opacity-70">10:00 AM - 11:00 AM</span>
          </div>
          <div
            className={badge({
              variant: "done",
              class: "mt-1 self-start",
            })}
          >
            Done
          </div>
        </div>
        <div>
          <div className="grid grid-cols-[auto_1fr_auto] items-start gap-4">
            <CircleOutlinedIcon className="text-blue-400 mt-1" />
            <div>
              <p className="text-lg font-semibold">
                Host a solo dance party in your living room.
              </p>
              <span className="text-sm opacity-70">1:00 PM - 1:30 PM</span>
            </div>
            <div className={badge({ variant: "inProgress", class: "mt-1" })}>
              In progress
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-[auto_1fr_auto] items-start gap-4">
            <CircleIcon className="text-indigo-400 mt-1" />
            <div>
              <p className="text-lg font-semibold">
                Write a love letter to your favorite snack.
              </p>
              <span className="text-sm opacity-70">2:00 PM - 3:00 PM</span>
            </div>
            <div className={badge({ variant: "notStarted", class: "mt-1" })}>
              Not started
            </div>
          </div>
        </div>
      </div>
      <Button
        onPress={onAdd}
        className={(states) =>
          button({
            ...states,
            variant: "primary",
            class: "absolute bottom-4 right-4 p-4 rounded-2xl drop-shadow-xl",
          })
        }
      >
        <AddOutlinedIcon fontSize="large" />
      </Button>
    </div>
  );
};

export const Calendar = ({ setSelectedDate, selectedDate }) => {
  return (
    <div className="bg-green-800 p-4 text-gray-50">
      <h2 className="font-medium text-green-200">Calendar</h2>
      <AriaCalendar
        value={selectedDate}
        onChange={setSelectedDate}
        aria-label="Meeting date"
      >
        <header className="flex items-center justify-between">
          <Heading className="text-2xl font-semibold mr-auto" />
          <Group className="flex gap-4">
            <Button
              className={(states) => button({ ...states, variant: "ghost" })}
              slot="previous"
            >
              <ChevronLeftIcon />
            </Button>
            <Button
              className={(states) => button({ ...states, variant: "ghost" })}
              slot="next"
            >
              <ChevronRightIcon />
            </Button>
          </Group>
        </header>
        <CalendarGrid className="w-full mt-4">
          <CalendarGridHeader className="border-b-2 border-gray-50/50">
            {(day) => (
              <CalendarHeaderCell className="font-semibold pb-4">
                <div className="text-center">{day}</div>
              </CalendarHeaderCell>
            )}
          </CalendarGridHeader>

          <CalendarGridBody className="">
            {(date) => (
              <CalendarCell
                date={date}
                className="m-3 rounded-full outline-none hover:bg-green-300 hover:text-gray-700 transition-colors aspect-square
                flex items-center justify-center outside-month:opacity-50 outside-month:cursor-default
                focus-visible:outline focus-visible:outline-green-300 focus-visible:outline-offset-1
                selected:bg-green-300 selected:outline-green-300 selected:outline-offset-1 selected:text-gray-700"
              />
            )}
          </CalendarGridBody>
        </CalendarGrid>
      </AriaCalendar>
    </div>
  );
};
