"use client";

import { fredoka } from "@/app/fonts";
import Image from "next/image";
import {
  ListBox,
  ListBoxItem,
  Popover,
  ProgressBar,
} from "react-aria-components";

import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import TextSnippetRoundedIcon from "@mui/icons-material/TextSnippetRounded";
import PlayCircleFilledWhiteRoundedIcon from "@mui/icons-material/PlayCircleFilledWhiteRounded";
import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

export const LanguageApp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const triggerRef = useRef(null);

  return (
    <main
      className={`min-h-dvh lg:flex lg:items-center lg:justify-center ${fredoka.className} bg-purple-500`}
    >
      <div
        className="lg:min-h-0 min-h-dvh lg:rounded-xl lg:shadow-xl p-4 bg-[#f9f9f9]
      lg:max-w-sm w-full flex flex-col gap-4 relative overflow-hidden"
      >
        <header className="flex items-center gap-2 text-gray-950/80">
          <Image
            width={42}
            height={42}
            alt=""
            src={`https://robohash.org/kim?set=set5`}
            className="rounded-full border border-purple-200"
          />
          <span className="font-medium text-lg">Kim</span>
          <div className="flex items-center gap-1 ml-auto bg-purple-100 px-2 py-0.5 rounded-full">
            <span className="text-lg mb-0.5">👑</span>
            <span className="text-sm font-medium">340</span>
          </div>
        </header>

        <div
          onMouseEnter={() => {
            setIsOpen(true);
          }}
          onMouseLeave={() => {
            setIsOpen(false);
          }}
          ref={triggerRef}
          className="rounded-lg relative p-2 bg-purple-600 text-gray-50 grid grid-cols-[auto_1fr] items-center gap-2 shadow-md"
        >
          <span className="text-6xl">🇫🇷</span>
          <div className="grid gap-1">
            <span>French lesson</span>
            <ProgressBar aria-label="progress" value={60}>
              {({ percentage, valueText }) => (
                <div className="grid grid-cols-[1fr_auto] gap-2 items-center">
                  <div className="will-change-transform transition-transform overflow-hidden rounded-full h-1.5 bg-purple-400">
                    <div
                      className="h-full bg-gray-50"
                      style={{ width: percentage + "%" }}
                    />
                  </div>
                  <span className="text-sm">{valueText}</span>
                </div>
              )}
            </ProgressBar>
          </div>
          <div
            className={twMerge(
              `bg-white rounded-full py-1 px-2 text-purple-500 text-sm font-medium 
            entering:animate-in entering:fade-in exiting:animate-out exiting:fade-out 
            flex items-center gap-1 shadow-md cursor-pointer transition-all absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2`,
              isOpen ? "opacity-100" : "opacity-0",
            )}
          >
            <PlayCircleFilledWhiteRoundedIcon />
            Continue
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-medium">My lessons</h2>
          <ListBox
            aria-label="lessons"
            items={lessons}
            className="grid md:grid-cols-2 gap-4"
            layout="grid"
          >
            {(item) => (
              <ListBoxItem
                id={item.category}
                className="rounded-xl p-2 shadow-md outline-none
              focus-visible:outline-2 focus-visible:outline-purple-500 cursor-pointer space-y-2 bg-white"
              >
                <header className="flex gap-2 items-center">
                  <span className="text-2xl">{item.emoji}</span>
                  <span>{item.category}</span>
                </header>
                <ProgressBar aria-label="progress" value={item.completion}>
                  {({ percentage, valueText }) => (
                    <div className="grid gap-1">
                      <span className="text-sm">{valueText} completed</span>
                      <div className="will-change-transform transition-transform overflow-hidden rounded-full h-1.5 bg-gray-100">
                        <div
                          className="h-full bg-purple-500"
                          style={{ width: percentage + "%" }}
                        />
                      </div>
                    </div>
                  )}
                </ProgressBar>
              </ListBoxItem>
            )}
          </ListBox>
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-medium">Leaderboard</h2>
          <ListBox
            aria-label="leaderboard"
            items={leaderboard}
            className="grid gap-2 lg:max-h-[180px] overflow-auto pb-14"
            orientation="vertical"
          >
            {(item) => (
              <ListBoxItem
                id={item.name}
                className="rounded-xl p-2 shadow-md outline-none
              focus-visible:outline-2 focus-visible:outline-purple-500 cursor-pointer flex gap-2 items-center bg-white"
              >
                <Image
                  width={42}
                  height={42}
                  alt=""
                  src={`https://robohash.org/${item.name}?set=set5`}
                  className="rounded-full border border-purple-200"
                />
                <span className="font-medium">{item.name}</span>
                <div className="flex items-center gap-1 ml-auto">
                  <span className="text-lg mb-0.5">👑</span>
                  <span className="text-sm font-medium">{item.score}</span>
                </div>
              </ListBoxItem>
            )}
          </ListBox>
        </div>

        <nav className="grid grid-cols-3 fixed lg:absolute bg-white bottom-0 left-0 right-0 border-t border-purple-200">
          <div className="text-purple-300 flex items-center justify-center p-2">
            <AccountCircleRoundedIcon fontSize="large" />
          </div>
          <div className="text-purple-500 bg-purple-200 flex items-center justify-center p-2">
            <HomeRoundedIcon fontSize="large" />
          </div>
          <div className="text-purple-300 flex items-center justify-center p-2">
            <TextSnippetRoundedIcon fontSize="large" />
          </div>
        </nav>
      </div>
    </main>
  );
};

const lessons = [
  {
    category: "Grammar",
    completion: 45,
    emoji: "✍️",
  },
  {
    category: "Reading",
    completion: 60,
    emoji: "📖",
  },
  {
    category: "Speaking",
    completion: 20,
    emoji: "🗣️",
  },
  {
    category: "Listening",
    completion: 80,
    emoji: "👂",
  },
];

const leaderboard = [
  {
    name: "Chris",
    score: 520,
  },
  {
    name: "David",
    score: 340,
  },
  {
    name: "Sam",
    score: 335,
  },
  {
    name: "Jamie",
    score: 330,
  },
  {
    name: "Pat",
    score: 320,
  },
  {
    name: "Alex",
    score: 300,
  },
  {
    name: "Taylor",
    score: 285,
  },
  {
    name: "Jordan",
    score: 270,
  },
  {
    name: "Morgan",
    score: 260,
  },
  {
    name: "Casey",
    score: 250,
  },
];
