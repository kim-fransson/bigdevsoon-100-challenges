"use client";

import { fredoka } from "@/app/fonts";
import {
  Button,
  Calendar,
  CalendarCell,
  CalendarGrid,
  DateInput,
  DatePicker,
  DateSegment,
  Dialog,
  Group,
  Heading,
  Input,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  Radio,
  RadioGroup,
  Select,
  SelectValue,
  Separator,
  Tag,
  TagGroup,
  TagList,
  TextField,
} from "react-aria-components";

import { today, getLocalTimeZone } from "@internationalized/date";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ClearIcon from "@mui/icons-material/Clear";

import { useListData } from "react-stately";
import { tv } from "tailwind-variants";
import Image from "next/image";
import { useState } from "react";

const radioStyles = tv({
  base: [
    "size-5 rounded-full relative cursor-pointer",
    "selected:ring-2 selected:ring-offset-2 ring-offset-zinc-950",
    "focus-visible:after:content-[''] focus-visible:after:size-3 focus-visible:after:bg-purple-600",
    "focus-visible:after:rounded-full focus-visible:after:absolute-center",
  ],
  variants: {
    color: {
      blue: ["bg-blue-400 ring-blue-400"],
      green: ["bg-green-400 ring-green-400"],
      yellow: ["bg-yellow-400 ring-yellow-400"],
      red: ["bg-red-400 ring-red-400"],
    },
  },
});

const labelStyles = tv({
  base: ["font-medium text-gray-300"],
});

const listBoxItemStyles = tv({
  base: [
    "focus:bg-zinc-600 flex gap-3 px-2 py-1 rounded-lg outline-none cursor-pointer",
  ],
});

const buttonStyles = tv({
  base: [
    "transition-all outline-none grid place-items-center",
    "pressed:scale-95 focus-visible:outline-2 focus-visible:outline-purple-600 focus-visible:outline-offset-2",
  ],
  variants: {
    variant: {
      ghost: [
        "px-4 py-2 text-teal-400 font-medium hover:ring-2 hover:ring-teal-400 rounded-lg",
      ],
      primary: [
        "px-4 py-2 bg-teal-400 text-gray-950 font-medium hover:bg-teal-200 rounded-lg",
      ],
    },
  },
});

export const CreateTask = () => {
  const assignees = useListData({
    initialItems: [
      { id: 1, name: "Julie Wright" },
      { id: 2, name: "Connie Dietz" },
      { id: 3, name: "Richard Bright" },
    ],
  });

  const [taskName, setTaskName] = useState("Task 1");

  return (
    <main
      className={`${fredoka.className} min-h-dvh flex items-center justify-center p-4
    bg-zinc-700`}
    >
      <div
        className="rounded-3xl shadow-2xl px-4 py-6 text-gray-50 bg-zinc-950
      max-w-sm w-full grid gap-6"
      >
        <h2 className="text-2xl font-semibold">Create a Task</h2>

        <TextField
          value={taskName}
          onChange={setTaskName}
          maxLength={56}
          className="grid gap-2"
        >
          <Label className={labelStyles()}>Title</Label>
          <Group
            className="py-2 px-4 bg-zinc-800 rounded-lg text-gray-300 selection:bg-purple-600 flex gap-2 
          focus-within:ring-2 focus-within:ring-purple-600"
          >
            <Input
              placeholder="Input"
              className="bg-transparent 
              outline-none flex-1"
            />
            <div className="text-xs aspect-square h-full grid place-items-center bg-zinc-700 text-gray-300 rounded-md">
              {56 - taskName.length}
            </div>
          </Group>
        </TextField>

        <DatePicker
          defaultValue={today(getLocalTimeZone())}
          className="grid gap-2"
        >
          <Label className={labelStyles()}>Date</Label>
          <Group
            className="py-2 px-4 bg-zinc-800 rounded-lg text-gray-300 flex gap-2 
          focus-within:ring-2 focus-within:ring-purple-600 justify-between"
          >
            <DateInput className="flex">
              {(segment) => (
                <DateSegment
                  className="focus:bg-purple-600 px-0.5 focus:text-gray-50 rounded-sm outline-none"
                  segment={segment}
                />
              )}
            </DateInput>
            <Button className={buttonStyles()}>
              <CalendarMonthIcon />
            </Button>
          </Group>
          <Popover
            className={`entering:animate-in entering:fade-in exiting:animate-out exiting:fade-out ${fredoka.className}`}
          >
            <Dialog>
              <Calendar
                className="bg-zinc-900/95 shadow-2xl backdrop-blur-sm text-gray-200 outline-none p-4 rounded-lg select-none
              max-w-full w-fit"
              >
                <header className="flex items-center gap-4 mb-4 justify-center">
                  <Button className={buttonStyles()} slot="previous">
                    <ChevronLeftIcon />
                  </Button>
                  <Heading />
                  <Button className={buttonStyles()} slot="next">
                    <ChevronRightIcon />
                  </Button>
                </header>
                <CalendarGrid>
                  {(date) => (
                    <CalendarCell
                      className="px-2 py-1.5 aspect-square text-center outline-none rounded-md
                      focus-visible:outline-2 focus-visible:outline-purple-600 focus-visible:-outline-offset-2 hover:bg-teal-200
                      outside-month:hidden selected:bg-teal-400 hover:text-gray-950"
                      date={date}
                    />
                  )}
                </CalendarGrid>
              </Calendar>
            </Dialog>
          </Popover>
        </DatePicker>

        <RadioGroup
          defaultValue="yellow"
          className="grid gap-2"
          orientation="horizontal"
        >
          <Label className={labelStyles()}>Color</Label>
          <div className="flex gap-3">
            <Radio className={radioStyles({ color: "blue" })} value="blue" />
            <Radio className={radioStyles({ color: "green" })} value="green" />
            <Radio
              className={radioStyles({ color: "yellow" })}
              value="yellow"
            />
            <Radio className={radioStyles({ color: "red" })} value="red" />
          </div>
        </RadioGroup>

        <TagGroup className="grid gap-2">
          <Label className={labelStyles()}>Categories</Label>
          <TagList
            className="flex flex-wrap gap-2 p-2 bg-zinc-800 rounded-lg
            focus-visible:outline-2 focus-visible:outline-purple-600 focus-visible:outline-offset-1 outline-none"
            items={assignees.items}
          >
            {(tag) => (
              <Tag
                className="flex items-center gap-1 border rounded-full 
              bg-zinc-700 p-1 text-sm border-zinc-400 text-gray-300
              focus-visible:outline-2 focus-visible:outline-purple-600 focus-visible:outline-offset-1 outline-none"
              >
                <Image
                  width={20}
                  height={20}
                  alt=""
                  src={`https://robohash.org/${tag.name}?set=set5`}
                  className="rounded-full bg-zink-300"
                  priority
                />
                {tag.name}
                <Button className={buttonStyles()} slot="remove">
                  <ClearIcon className="p-0.5" fontSize="small" />
                </Button>
              </Tag>
            )}
          </TagList>
        </TagGroup>

        <Separator
          className="border-1 border-zinc-600"
          orientation="horizontal"
        />

        <div className="flex items-end gap-2 justify-between">
          <Select defaultSelectedKey={2} className="grid gap-2 flex-1">
            <Label className={labelStyles()}>Priority</Label>
            <Button
              className="focus-visible:outline-2 focus-visible:outline-purple-600 focus-visible:outline-offset-1 outline-none
            px-4 py-2 flex justify-between items-center rounded-lg bg-zinc-800 text-sm"
            >
              <SelectValue />
              <span aria-hidden="true">
                <ExpandMoreIcon />
              </span>
            </Button>
            <Popover
              className={`w-[--trigger-width] entering:animate-in entering:fade-in exiting:animate-out exiting:fade-out ${fredoka.className}`}
            >
              <ListBox className="p-2 rounded-lg bg-zinc-800 shadow-2xl grid text-gray-200 text-sm">
                <ListBoxItem className={listBoxItemStyles()} id={1}>
                  🌥️ Low
                </ListBoxItem>
                <ListBoxItem className={listBoxItemStyles()} id={2}>
                  🤞🏻 Medium
                </ListBoxItem>
                <ListBoxItem className={listBoxItemStyles()} id={3}>
                  🔥 High
                </ListBoxItem>
              </ListBox>
            </Popover>
          </Select>

          <Button className={buttonStyles({ variant: "ghost" })}>Cancel</Button>
          <Button className={buttonStyles({ variant: "primary" })}>
            Save Task
          </Button>
        </div>
      </div>
    </main>
  );
};
