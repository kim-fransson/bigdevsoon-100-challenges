"use client";

import { fredoka } from "@/app/fonts";
import Image from "next/image";
import {
  Button,
  DateInput,
  DateSegment,
  GridList,
  GridListItem,
  Group,
  Input,
  Label,
  ListBox,
  ListBoxItem,
  Radio,
  RadioGroup,
  TextField,
  TimeField,
} from "react-aria-components";
import { tv } from "tailwind-variants";

import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import { useState } from "react";
import { NotificationsActiveOutlined } from "@mui/icons-material";
import { twMerge } from "tailwind-merge";

const focusRing = tv({
  base: "outline outline-violet-500 outline-offset-1 outline-0 focus-visible:outline-2",
});

const focusStyles = tv({
  base: "outline outline-violet-500 outline-offset-1 outline-0 focus:outline-2",
});

const buttonStyles = tv({
  extend: focusRing,
  base: ["flex items-center justify-center transition-all pressed:scale-95"],
});

const inputStyles = tv({
  extend: focusStyles,
  base: ["bg-[#332b52] py-1 px-2 rounded-lg text-neutral-200"],
});

const segmentStyles = tv({
  extend: focusStyles,
  base: ["px-0.5 rounded-md selection:bg-violet-200"],
});

const radioStyles = tv({
  extend: focusStyles,
  base: ["selected:bg-[#3fbf44] rounded-full py-1.5 px-2 text-sm bg-[#322a50]"],
});

const dateListItemStyles = tv({
  extend: focusRing,
  base: [
    "rounded-full flex flex-col items-center min-w-10 bg-[#332b52] first:bg-[#3fbf44] p-1",
  ],
});

const todaysActivitiesItemStyles = tv({
  extend: focusRing,
  base: ["flex gap-4"],
});

export const TaskManager = () => {
  const [inOverview, setInOverview] = useState(true);

  return (
    <main
      className={`${fredoka.className} min-h-dvh bg-[#9080c9] flex items-center justify-center`}
    >
      <div
        className="lg:h-[650px] h-dvh bg-[#070021] text-neutral-100 lg:rounded-2xl lg:shadow-2xl
      lg:max-w-sm w-full py-6 flex flex-col relative"
      >
        <header className="flex items-center px-4">
          {inOverview ? (
            <div className="flex flex-col items-center mx-auto">
              <span className="text-sm opacity-70">Monday</span>
              <span className="font-medium">27 May</span>
            </div>
          ) : (
            <>
              <Button
                onPress={() => setInOverview(true)}
                className={buttonStyles({ class: "" })}
              >
                <ArrowBackIcon />
              </Button>
              <span className="ml-2 block font-semibold text-lg">New Task</span>
            </>
          )}
          <Image
            width={36}
            height={36}
            alt=""
            src={`https://robohash.org/joushua?set=set5`}
            className="rounded-full bg-violet-300 absolute right-4 top-4"
            priority
          />
        </header>
        {inOverview ? (
          <Overview setInOverview={setInOverview} />
        ) : (
          <AddNewTask setInOverview={setInOverview} />
        )}
      </div>
    </main>
  );
};

const AddNewTask = ({ setInOverview }) => {
  return (
    <div className="flex flex-1 flex-col gap-4 px-4">
      <TextField className="grid gap-1 mt-4">
        <Label className="opacity-80">Task name</Label>
        <Input placeholder="Enter name" className={inputStyles()} />
      </TextField>

      <Group className="grid grid-cols-2 gap-4">
        <TimeField>
          <Label className="opacity-80">Start time</Label>
          <DateInput className={inputStyles({ class: "flex order-2" })}>
            {(segment) => (
              <DateSegment className={segmentStyles()} segment={segment} />
            )}
          </DateInput>
        </TimeField>

        <TimeField>
          <Label className="opacity-80">End time</Label>
          <DateInput className={inputStyles({ class: "flex order-2" })}>
            {(segment) => (
              <DateSegment className={segmentStyles()} segment={segment} />
            )}
          </DateInput>
        </TimeField>
      </Group>

      <RadioGroup orientation="horizontal">
        <Label className="opacity-80 flex items-center gap-2">
          <NotificationsActiveOutlined fontSize="inherit" />
          Set Reminder
        </Label>
        <Group className="flex items-center flex-wrap gap-2 mt-2">
          <Radio className={radioStyles()} value="5">
            5 mins before
          </Radio>
          <Radio className={radioStyles()} value="15">
            15 mins before
          </Radio>
          <Radio className={radioStyles()} value="30">
            30 mins before
          </Radio>
        </Group>
      </RadioGroup>

      <Button
        onPress={() => setInOverview(false)}
        className={buttonStyles({
          class: "bg-[#40c045] w-full mt-auto py-2 rounded-lg",
        })}
      >
        Create Task
      </Button>
    </div>
  );
};

const Overview = ({ setInOverview }) => {
  return (
    <div className="flex flex-col px-4 flex-1">
      <div className="overflow-auto outline-none -mx-4 px-4">
        <ListBox
          className="flex items-center gap-3.5 pt-8 pb-4"
          items={dates}
          orientation="horizontal"
          aria-label="dates"
        >
          {(item) => (
            <ListBoxItem
              className={dateListItemStyles()}
              id={item.day + item.number + item.month}
            >
              <span className="text-sm opacity-80">
                {item.day.substring(0, 3)}
              </span>
              <span className="font-medium">{item.number}</span>
            </ListBoxItem>
          )}
        </ListBox>
      </div>

      <GridList
        className="flex flex-col gap-3.5 py-4 overflow-auto -mx-4 px-4"
        items={todaysActivities}
        orientation="vertical"
        aria-label="todays activities"
        selectionMode="single"
      >
        {(item) => (
          <GridListItem
            className={todaysActivitiesItemStyles()}
            id={item.title}
          >
            {({ isFocusVisible, isSelected }) => (
              <>
                <div className="rounded-lg flex-1 flex items-center gap-2 bg-[#332b52] p-2">
                  <span className="bg-[#514b67] text-3xl size-14 rounded-md grid place-content-center">
                    {item.emoji}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-xs opacity-70">Today</span>
                    <span className="font-medium">{item.title}</span>
                    <div className="text-xs opacity-80 flex items-center gap-1">
                      <AccessTimeOutlinedIcon fontSize="inherit" />
                      {item.time_range}
                    </div>
                  </div>
                </div>
                <Group
                  className={twMerge(
                    "flex-col gap-2 justify-between",
                    isSelected ? "flex" : "hidden",
                  )}
                >
                  <Button
                    className={buttonStyles({
                      class: "bg-[#bc9457] p-1 rounded-md",
                    })}
                  >
                    <DriveFileRenameOutlineOutlinedIcon />
                  </Button>
                  <Button
                    className={buttonStyles({
                      class: "bg-[#bd5859] p-1 rounded-md",
                    })}
                  >
                    <DeleteOutlineOutlinedIcon />
                  </Button>
                </Group>
              </>
            )}
          </GridListItem>
        )}
      </GridList>
      <Button
        onPress={() => setInOverview(false)}
        className={buttonStyles({
          class: "bg-[#40c045] w-full mt-auto py-2 rounded-lg",
        })}
      >
        <AddIcon fontSize="inherit" />
        New Task
      </Button>
    </div>
  );
};

const todaysActivities = [
  { title: "Morning Jog", emoji: "🏃‍♂️", time_range: "6:00am to 7:00am" },
  { title: "Team Meeting", emoji: "📊", time_range: "9:00am to 10:00am" },
  {
    title: "Lunch with Friends",
    emoji: "🍽️",
    time_range: "12:30pm to 1:30pm",
  },
  { title: "Guitar Practice", emoji: "🎸", time_range: "6:00pm to 7:00pm" },
];

const dates = [
  { day: "Monday", number: 27, month: "May" },
  { day: "Tuesday", number: 28, month: "May" },
  { day: "Wednesday", number: 29, month: "May" },
  { day: "Thursday", number: 30, month: "May" },
  { day: "Friday", number: 31, month: "May" },
  { day: "Saturday", number: 1, month: "June" },
  { day: "Sunday", number: 2, month: "June" },
  { day: "Monday", number: 3, month: "June" },
  { day: "Tuesday", number: 4, month: "June" },
  { day: "Wednesday", number: 5, month: "June" },
  { day: "Thursday", number: 6, month: "June" },
  { day: "Friday", number: 7, month: "June" },
  { day: "Saturday", number: 8, month: "June" },
  { day: "Sunday", number: 9, month: "June" },
];
