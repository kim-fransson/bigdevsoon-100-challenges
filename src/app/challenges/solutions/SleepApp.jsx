"use client";

import { fredoka } from "@/app/fonts";
import { useState } from "react";
import { Button, ProgressBar } from "react-aria-components";
import { tv } from "tailwind-variants";

import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import Image from "next/image";

import SleepSvg from "../../assets/sleep.svg";
import { twMerge } from "tailwind-merge";

const button = tv({
  base: ["outline-none transition-all flex items-center justify-center"],
  variants: {
    variant: {
      primary: [
        "bg-orange-500 text-gray-50 font-semibold text-lg px-4 py-3",
        "hover:bg-orange-600 rounded-lg",
      ],
    },
    isRounded: {
      true: ["rounded-full p-1 aspect-square"],
    },
    isPressed: {
      true: ["scale-95"],
    },
    isFocusVisible: {
      true: ["outline-2 outline-offset-1 outline-orange-500"],
    },
  },
});

export const SleepApp = () => {
  const [isStart, setIsStart] = useState(false);

  const getStarted = () => setIsStart(false);
  const returnToStart = () => setIsStart(true);

  return (
    <main
      className={`flex md:items-center md:justify-center min-h-dvh ${fredoka.className} bg-indigo-300`}
    >
      <div
        className="md:rounded-2xl md:shadow-2xl md:max-w-sm w-full text-gray-50 
      bg-indigo-950 overflow-hidden md:h-[650px] grid p-4 "
      >
        {isStart ? (
          <Start getStarted={getStarted} />
        ) : (
          <Home returnToStart={returnToStart} />
        )}
      </div>
    </main>
  );
};

const Start = ({ getStarted }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="-mt-4 -mx-4 rounded-b-[120%_100%] overflow-hidden">
        <Image
          height={800}
          width={800}
          src="/challenges/36/night-sky.png"
          alt=""
          className=""
        />
      </div>
      <h2 className="text-2xl font-semibold self-center mt-auto">
        Track your sleep
      </h2>
      <p className="text-center text-gray-300">
        Upgrade your sleep quality with our cutting-edge tracking app.
        Experience deeper rest and wake up revitalized. Sleep better, live
        better.
      </p>
      <Button
        onPress={getStarted}
        className={(states) =>
          button({ ...states, variant: "primary", class: "mb-8" })
        }
      >
        Get Started
      </Button>
    </div>
  );
};

const Home = ({ returnToStart }) => {
  return (
    <div className="">
      <div className="flex items-center justify-between">
        <Button
          className={(states) =>
            button({ ...states, class: "p-1 rounded-lg hover:bg-indigo-900" })
          }
        >
          <MenuIcon fontSize="large" />
        </Button>

        <Button
          onPress={returnToStart}
          className={(states) =>
            button({
              ...states,
              class: "hover:animate-wiggle hover:animate-infinite",
            })
          }
        >
          <Image width={64} height={53.91} src={SleepSvg} alt="" />
        </Button>
      </div>

      <div className="flex items-center justify-around gap-4 mt-6">
        <Button
          className={(states) =>
            button({
              ...states,
              isRounded: true,
              class: "text-gray-400 hover:bg-indigo-800 hover:text-gray-50",
            })
          }
        >
          <ArrowCircleLeftOutlinedIcon />
        </Button>

        <div className="grid">
          <span className="font-semibold">Wednesday</span>
          <span className="text-gray-400 text-sm">4 March 2024</span>
        </div>

        <Button
          className={(states) =>
            button({
              ...states,
              isRounded: true,
              class: "text-gray-400 hover:bg-indigo-800 hover:text-gray-50",
            })
          }
        >
          <ArrowCircleRightOutlinedIcon />
        </Button>
      </div>

      <div className="relative size-64 mx-auto">
        <div className="absolute-center bg-pink-900 rounded-full size-[7.65rem]"></div>
        <Progress
          className="absolute-center stroke-pink-700"
          value={90}
          size={135}
        />
        <Progress
          className="absolute-center stroke-purple-700"
          value={100}
          size={180}
        />
        <div className="bg-black text-gray-50 rounded-full p-3 inline-flex flex-col aspect-square items-center justify-center absolute-center">
          <span className="font-medium text-5xl">90</span>
          <span className="text-sm text-gray-400 -mt-1">Sleep score</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-2xl p-2 bg-indigo-900 space-y-1">
          <div className="text-gray-400 flex items-center justify-between">
            Sleep time
            <InfoOutlinedIcon fontSize="small" />
          </div>
          <div className="space-x-2">
            <span className="text-4xl font-medium text-gray-50 tracking-wider">
              8<span className="text-sm text-gray-300">h</span>
            </span>
            <span className="text-4xl font-medium text-gray-50 tracking-wider">
              21
              <span className="text-sm text-gray-300">m</span>
            </span>
          </div>
          <div className="text-green-400 font-medium flex items-center gap-2">
            <CheckCircleIcon fontSize="small" />
            Normal
          </div>
        </div>

        <div className="rounded-2xl p-2 bg-indigo-900 space-y-1">
          <div className="text-gray-400 flex items-center justify-between">
            Sleep quality
            <InfoOutlinedIcon fontSize="small" />
          </div>
          <div className="space-x-2">
            <span className="text-4xl font-medium text-gray-50 tracking-wider">
              92
              <span className="text-sm text-gray-300">%</span>
            </span>
          </div>
          <div className="text-yellow-400 font-medium flex items-center gap-2">
            <AutoAwesomeOutlinedIcon fontSize="small" />
            Excellent
          </div>
        </div>
      </div>

      <div className="grid gap-2 mt-6">
        <div className="flex gap-1 h-12">
          {[
            { color: "bg-green-400", percentage: 8 },
            { color: "bg-blue-400", percentage: 18 },
            { color: "bg-green-400", percentage: 4 },
            { color: "bg-orange-500", percentage: 11 },
            { color: "bg-green-400", percentage: 25 },
            { color: "bg-blue-400", percentage: 8 },
            { color: "bg-orange-500", percentage: 6 },
            { color: "bg-green-400", percentage: 20 },
          ].map((bar, index) => (
            <div
              key={index}
              className={twMerge("rounded-lg", bar.color)}
              style={{ flexGrow: bar.percentage }}
            ></div>
          ))}
        </div>
        <div className="flex justify-between gap-4">
          <div className="text-gray-300 flex items-center gap-1 text-sm">
            <DarkModeOutlinedIcon fontSize="small" />
            11:24 PM
          </div>

          <div className="text-gray-300 flex items-center gap-1 text-sm">
            <LightModeOutlinedIcon fontSize="small" />
            7:45 AM
          </div>
        </div>
      </div>
    </div>
  );
};

const Progress = ({ value, className, size }) => {
  const center = 16;
  const strokeWidth = 3;
  const r = 16 - strokeWidth;
  const c = 2 * r * Math.PI;
  return (
    <ProgressBar aria-label="progress" value={value} className={className}>
      {({ percentage }) => (
        <>
          <svg
            width={size}
            height={size}
            viewBox="0 0 32 32"
            fill="none"
            strokeWidth={strokeWidth}
          >
            <circle
              cx={center}
              cy={center}
              r={r}
              strokeDasharray={`${c} ${c}`}
              strokeDashoffset={c - (percentage / 100) * c}
              transform="rotate(-90 16 16)"
            />
          </svg>
        </>
      )}
    </ProgressBar>
  );
};
