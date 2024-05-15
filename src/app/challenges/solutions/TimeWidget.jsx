"use client";

import { fredoka } from "@/app/fonts";
import {
  Button,
  Dialog,
  DialogTrigger,
  Group,
  Popover,
  ProgressBar,
  Separator,
} from "react-aria-components";
import { tv } from "tailwind-variants";

import TimerIcon from "@mui/icons-material/Timer";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StopIcon from "@mui/icons-material/Stop";
import { useEffect, useState } from "react";

const focusRing = tv({
  base: "outline outline-[#cc59ce] outline-offset-1 outline-0 focus-visible:outline-2",
});

const buttonStyles = tv({
  extend: focusRing,
  base: ["transition-all pressed:scale-95"],
});

export const TimeWidget = () => {
  const [count, setCount] = useState(816);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let interval;
    if (!isPaused && count < 3600) {
      interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isPaused, count]);

  const togglePause = () => {
    setIsPaused((prevPaused) => !prevPaused);
  };

  return (
    <main
      className={`${fredoka.className} min-h-dvh flex items-center justify-center bg-[#cc59ce] p-4`}
    >
      <Group className="bg-white shadow-lg p-2 rounded-xl flex gap-2 lg:mb-64 lg:mr-64">
        <WidgetTrigger defaultOpen icon={<TimerIcon />}>
          <header className="flex items-center gap-4 justify-between">
            <h2 className="text-lg font-medium">Time Widget</h2>
            <Button
              onPress={() => {
                setCount(0);
                setIsPaused(false);
              }}
              className={buttonStyles({ class: "text-[#fe8a8b]" })}
            >
              restart
            </Button>
          </header>

          <ProgressBar className="w-full" value={count} maxValue={3600}>
            {({ percentage }) => (
              <div className="flex relative justify-center items-center">
                <div
                  className={`size-32 rounded-full grid place-items-center 
                  after:size-24 after:bg-white after:rounded-full 
                  after:grid after:place-items-center`}
                  style={{
                    background: `conic-gradient(#cb58cd 0%, #cb58cd ${percentage}%, #ece7e7 ${percentage}%, #ece7e7 100%)`,
                  }}
                />
                <span className="text-2xl font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%]">
                  {formatTime(count)}
                </span>
              </div>
            )}
          </ProgressBar>

          <Separator
            orientation="horizontal"
            className="border border-neutral-200 rounded-full"
          />

          <footer className="flex items-cente gap-2">
            <Button
              onPress={togglePause}
              className={buttonStyles({
                class:
                  "text-[#3c3c3c] bg-[#f2edec] rounded-md grid place-items-center size-6",
              })}
            >
              {isPaused ? <PlayArrowIcon /> : <PauseIcon />}
            </Button>

            <Button
              onPress={() => {
                setIsPaused(true);
                setCount(0);
              }}
              className={buttonStyles({
                class:
                  "text-[#3c3c3c] grid place-items-center size-6 bg-[#f2edec] rounded-md",
              })}
            >
              <StopIcon />
            </Button>

            <Button
              onPress={() => {
                if (count + 60 <= 3600) {
                  setCount((curr) => curr + 60);
                }
              }}
              className={buttonStyles({
                class:
                  "text-[#3c3c3c] px-2 py-0.5 bg-[#f2edec] rounded-md ml-auto",
              })}
            >
              + 1 min
            </Button>
          </footer>
        </WidgetTrigger>
        <WidgetTrigger isDisabled icon={<AccessAlarmIcon />} />
        <WidgetTrigger isDisabled icon={<CalendarMonthIcon />} />
      </Group>
    </main>
  );
};

const WidgetTrigger = ({
  icon,
  isDisabled = false,
  defaultOpen = false,
  children,
}) => {
  return (
    <DialogTrigger defaultOpen={defaultOpen}>
      <Button
        isDisabled={isDisabled}
        className={buttonStyles({
          class: [
            "text-[#3b3b3b] bg-[#ebe5e5] disabled:bg-transparent disabled:text-[#818181] p-1 rounded-md",
          ],
        })}
        aria-label="toggle widget"
      >
        {icon}
      </Button>
      <Widget placement="bottom left">{children}</Widget>
    </DialogTrigger>
  );
};

const Widget = ({ children, ...props }) => {
  return (
    <Popover
      {...props}
      offset={20}
      crossOffset={-8}
      className={`bg-white shadow-xl rounded-xl p-6 max-w-sm w-full text-neutral-800 entering:animate-in entering:fade-in exiting:animate-out exiting:fade-out ${fredoka.className}`}
    >
      <Dialog className="outline-none flex flex-col gap-4">{children}</Dialog>
    </Popover>
  );
};

const formatTime = (count) => {
  const minutes = Math.floor(count / 60);
  const seconds = count % 60;
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");
  return `${formattedMinutes}:${formattedSeconds}`;
};
