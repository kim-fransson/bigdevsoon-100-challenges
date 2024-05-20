"use client";

import { fredoka } from "@/app/fonts";
import { Button, GridList, GridListItem, Group } from "react-aria-components";
import { tv } from "tailwind-variants";

import MicNoneOutlinedIcon from "@mui/icons-material/MicNoneOutlined";
import {
  ExpandMore,
  PlayArrow,
  Pause,
  Share,
  Delete,
} from "@mui/icons-material";
import { twMerge } from "tailwind-merge";
import { useState } from "react";

const focusRing = tv({
  base: "outline outline-[#fe5454] outline-offset-1 outline-0 focus-visible:outline-2",
});

const recordingListItemStyles = tv({
  base: "rounded-lg",
  extend: focusRing,
});

const buttonStyles = tv({
  extend: focusRing,
  base: ["flex items-center justify-center transition-all pressed:scale-95"],
  variants: {
    intent: {
      primary: [
        "bg-[#ff5555] text-neutral-100 px-4 py-1.5 gap-1.5 rounded-full shadow-lg",
      ],
      action: ["text-sm bg-white px-3 py-1 rounded-full gap-2"],
    },
  },
});

export const VoiceRecording = () => {
  return (
    <main
      className={`${fredoka.className} min-h-dvh flex items-center justify-center bg-[#e7c7c8] p-4`}
    >
      <div
        className="w-full max-w-sm shadow-xl rounded-2xl px-4 py-5 bg-white text-neutral-800
      min-h-[600px] flex flex-col"
      >
        <Recordings />
      </div>
    </main>
  );
};

const Recordings = () => {
  return (
    <div className="flex-1 flex flex-col w-full">
      <h1 className="text-center text-2xl text-neutral-600 font-semibold mb-12">
        Recordings
      </h1>

      <GridList
        selectionMode="single"
        selectionBehavior="replace"
        items={recordings}
        className="flex flex-col gap-4"
      >
        {(item) => (
          <GridListItem className={recordingListItemStyles()}>
            {({ isFocusVisible, isFocused }) => (
              <div className="cursor-pointer bg-[#f5ebec] rounded-lg px-4 py-2">
                <div className="flex items-center gap-4 justify-between">
                  <div className="flex gap-3 items-center">
                    <span
                      className="bg-[#fd8081] text-neutral-100 border-2 border-[#fe595a] 
                    rounded-full p-0.5 grid place-items-center"
                    >
                      <PlayArrow fontSize="small" />
                    </span>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium">{item.name}</span>
                      <span className="text-xs opacity-60">
                        {item.createdAt}
                      </span>
                    </div>
                  </div>

                  <span
                    className={twMerge(
                      "transition-transform duration-500",
                      isFocused ? "-rotate-180" : "rotate-0",
                    )}
                  >
                    <ExpandMore fontSize="small" />
                  </span>
                </div>
                <div
                  className={twMerge(
                    "grid transition-[grid-template-rows] duration-500",
                    isFocusVisible || isFocused
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden flex flex-col gap-4 -mx-4 px-4 -mb-2 pb-2">
                    <div className="mt-4 h-10 w-full flex items-center gap-1">
                      {item.bars?.map((bar, index) => {
                        const threshold = Math.floor(item.bars.length * 0.65);
                        const barColor =
                          index < threshold ? "#fe5353" : "#a1a1a1";
                        return (
                          <div
                            key={`bar-${index}`}
                            className="rounded-t-full rounded-b-full w-1.5"
                            style={{
                              height: `${bar}%`,
                              backgroundColor: barColor,
                            }}
                          />
                        );
                      })}
                    </div>

                    <Group className="flex justify-between gap-2">
                      <Button className={buttonStyles({ intent: "action" })}>
                        <span className="grid place-items-center bg-[#f3c6c6] rounded-full p-0.5">
                          <Pause fontSize="inherit" />
                        </span>
                        Pause
                      </Button>

                      <Button className={buttonStyles({ intent: "action" })}>
                        <span className="grid place-items-center bg-[#f3c6c6] rounded-full p-0.5">
                          <Share fontSize="inherit" />
                        </span>
                        Share
                      </Button>

                      <Button className={buttonStyles({ intent: "action" })}>
                        <span className="grid place-items-center bg-[#f3c6c6] rounded-full p-0.5">
                          <Delete fontSize="inherit" />
                        </span>
                        Delete
                      </Button>
                    </Group>
                  </div>
                </div>
              </div>
            )}
          </GridListItem>
        )}
      </GridList>

      <Button
        className={buttonStyles({
          intent: "primary",
          class: "mx-auto mt-auto",
        })}
      >
        <MicNoneOutlinedIcon fontSize="small" />
        Record
      </Button>
    </div>
  );
};

const generateRandomValues = (songLength) => {
  const values = [];
  const numIntervals = Math.ceil(songLength / 5);

  for (let i = 0; i < numIntervals; i++) {
    const randomValue = Math.floor(Math.random() * 51) + 25; // Random value between 25 and 75
    values.push(randomValue);
  }

  return values;
};

const recordings = [
  {
    id: 1,
    name: "Recording 1",
    createdAt: "21 May - 10:51AM",
    bars: generateRandomValues(120),
  },
  {
    id: 2,
    name: "Recording 2",
    createdAt: "19 June - 07:31AM",
    bars: generateRandomValues(180),
  },
  {
    id: 3,
    name: "Recording 3",
    createdAt: "25 July - 03:11PM",
    bars: generateRandomValues(115),
  },
  {
    id: 4,
    name: "Recording 4",
    createdAt: "06 August - 01:51PM",
    bars: generateRandomValues(105),
  },
];
