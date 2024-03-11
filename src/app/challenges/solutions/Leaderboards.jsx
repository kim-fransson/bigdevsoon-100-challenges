"use client";

import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Tabs, TabList, Tab, TabPanel } from "react-aria-components";
import { tv } from "tailwind-variants";
import Image from "next/image";
import { fredoka } from "@/app/fonts";

const tab = tv({
  base: [
    "rounded-full py-1 px-3 cursor-pointer",
    "transition-all duration-100 outline-none",
  ],
  variants: {
    isSelected: {
      true: ["bg-zinc-600"],
    },
    isHovered: {
      true: ["bg-zinc-800"],
    },
    isFocusVisible: {
      true: ["outline-1 outline-offset-1 outline-lime-400"],
    },
  },
  compoundVariants: [
    {
      isSelected: true,
      isHovered: true,
      class: "cursor-default bg-zinc-600",
    },
  ],
});

export const LeaderBoards = () => {
  return (
    <main
      className={`min-h-dvh bg-gradient-radial from-lime-400 to-lime-300 lg:justify-center lg:items-center flex ${fredoka.className}`}
    >
      <div className="bg-zinc-950 text-gray-50 lg:rounded-3xl pt-4 overflow-hidden lg:shadow-2xl lg:max-w-sm w-full">
        <h1 className="text-2xl font-semibold text-center">Leaderboard</h1>
        <Tabs orientation="horizontal" className="mt-4">
          <TabList
            className="flex justify-around px-4 mb-4"
            aria-label="leaderboards"
          >
            <Tab className={tab} id="today">
              Today
            </Tab>
            <Tab className={tab} id="week">
              Week
            </Tab>
            <Tab className={tab} id="month">
              Month
            </Tab>
            <Tab className={tab} id="year">
              Year
            </Tab>
          </TabList>
          <TabPanel
            className="outline-none focus-visible:ring-2 ring-lime-400"
            id="today"
          >
            <LeaderBoard leaderboard={leaderboards[0]} />
          </TabPanel>
          <TabPanel
            className="outline-none focus-visible:ring-2 ring-lime-400"
            id="week"
          >
            <LeaderBoard leaderboard={leaderboards[1]} />
          </TabPanel>
          <TabPanel
            className="outline-none focus-visible:ring-2 ring-lime-400"
            id="month"
          >
            <LeaderBoard leaderboard={leaderboards[2]} />
          </TabPanel>
          <TabPanel
            className="outline-none focus-visible:ring-2 ring-lime-400"
            id="year"
          >
            <LeaderBoard leaderboard={leaderboards[3]} />
          </TabPanel>
        </Tabs>
      </div>
    </main>
  );
};

const LeaderBoard = ({ leaderboard }) => {
  const { rankings } = leaderboard;

  return (
    <div>
      <Podium topThree={rankings.slice(0, 3)} />
      <ol className="lg:max-h-56 no-scrollbar overflow-auto outline-none focus-visible:ring-2 ring-lime-400">
        {rankings.slice(3).map((user) => (
          <li
            key={user.name}
            className="flex gap-2 items-center odd:bg-zinc-700 even:bg-zinc-950 py-1 px-8 -mx-4"
          >
            <div className="flex flex-col items-center justify-center">
              {user.position}
              <PositionChange user={user} />
            </div>

            <Image
              width={40}
              height={40}
              alt=""
              src={`https://robohash.org/${user.name}`}
              className="rounded-full border size"
            />

            <span>{user.name}</span>
            <span className="ml-auto text-lime-400 font-medium">
              {user.score}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
};

const Podium = ({ topThree }) => {
  const firstPlace = topThree[0];
  const secondPlace = topThree[1];
  const thirdPlace = topThree[2];
  return (
    <div className="mb-10 overflow-hidden px-4 curved">
      <div className="grid grid-cols-3 justify-between gap-4">
        <div className="flex flex-col items-center justify-end">
          {secondPlace.position}
          <PositionChange user={secondPlace} />
          <PodiumImage size={80} user={secondPlace} />
          <PodiumBar user={secondPlace} height="7rem" />
        </div>

        <div className="flex flex-col items-center justify-end">
          <span className="text-2xl">👑</span>
          <PositionChange user={firstPlace} />
          <PodiumImage size={90} user={firstPlace} />
          <PodiumBar user={firstPlace} height="9rem" />
        </div>

        <div className="flex flex-col items-center justify-end">
          {thirdPlace.position}
          <PositionChange user={thirdPlace} />
          <PodiumImage size={70} user={thirdPlace} />
          <PodiumBar user={thirdPlace} height="6rem" />
        </div>
      </div>
    </div>
  );
};

const PodiumImage = ({ user, size }) => {
  return (
    <Image
      width={size}
      height={size}
      alt=""
      src={`https://robohash.org/${user.name}`}
      className="rounded-full border-2 border-lime-400 mt-2 shadow-[0px_0px_10px_2px_rgba(0,0,0,0.75)] shadow-lime-400"
    />
  );
};

const PodiumBar = ({ user, height }) => {
  return (
    <div
      style={{ height }}
      className="bg-lime-400 mt-4 text-gray-950 flex flex-col items-center self-stretch rounded-t-xl py-3 px-2"
    >
      <span className="font-medium">{user.name}</span>
      <span className="font-semibold">{user.score}</span>
    </div>
  );
};

const PositionChange = ({ user }) => {
  return user.change === "up" ? (
    <ArrowDropUpIcon className="text-lime-400 -mt-1" />
  ) : user.change === "down" ? (
    <ArrowDropDownIcon className="text-red-500  -mt-1" />
  ) : (
    <ArrowDropDownIcon className="text-zinc-200  -mt-1" />
  );
};

const leaderboards = [
  {
    time_period: "today",
    rankings: [
      { position: 1, name: "Cyber-ZX3", score: 8050, change: "up" },
      { position: 2, name: "Robo-MK5", score: 7890, change: "down" },
      { position: 3, name: "Android-77", score: 7750, change: "up" },
      { position: 4, name: "Nexus-Q8", score: 7620, change: "down" },
      { position: 5, name: "Mech-X4", score: 7540, change: undefined },
      { position: 6, name: "AI-V22", score: 7400, change: "up" },
      { position: 7, name: "Proto-11", score: 7300, change: "up" },
      { position: 8, name: "Droid-XP10", score: 7250, change: "down" },
      { position: 9, name: "Cybernet-X1", score: 7150, change: "down" },
      { position: 10, name: "Techron-66", score: 7050, change: undefined },
    ],
  },
  {
    time_period: "week",
    rankings: [
      { position: 1, name: "Cyber-ZX3", score: 36050, change: undefined },
      { position: 2, name: "Robo-MK5", score: 35890, change: undefined },
      { position: 3, name: "Nexus-Q8", score: 35620, change: "up" },
      { position: 4, name: "Mech-X4", score: 35400, change: undefined },
      { position: 5, name: "Android-77", score: 35200, change: "down" },
      { position: 6, name: "AI-V22", score: 34950, change: undefined },
      { position: 7, name: "Proto-11", score: 34750, change: "up" },
      { position: 8, name: "Droid-XP10", score: 34600, change: "down" },
      { position: 9, name: "Cybernet-X1", score: 34450, change: undefined },
      { position: 10, name: "Techron-66", score: 34200, change: "up" },
    ],
  },
  {
    time_period: "month",
    rankings: [
      { position: 1, name: "Cyber-ZX3", score: 132291, change: undefined },
      { position: 2, name: "Robo-MK5", score: 131032, change: "up" },
      { position: 3, name: "Nexus-Q8", score: 130011, change: "down" },
      { position: 4, name: "Mech-X4", score: 120004, change: "up" },
      { position: 5, name: "Android-77", score: 119921, change: undefined },
      { position: 6, name: "AI-V22", score: 119817, change: "down" },
      { position: 7, name: "Proto-11", score: 119754, change: "up" },
      { position: 8, name: "Droid-XP10", score: 119765, change: undefined },
      { position: 9, name: "Cybernet-X1", score: 116500, change: "down" },
      { position: 10, name: "Techron-66", score: 116000, change: undefined },
    ],
  },
  {
    time_period: "year",
    rankings: [
      { position: 1, name: "Cyber-ZX3", score: 502021, change: "up" },
      { position: 2, name: "Robo-MK5", score: 500015, change: "down" },
      { position: 3, name: "Nexus-Q8", score: 499980, change: "up" },
      { position: 4, name: "Mech-X4", score: 490950, change: undefined },
      { position: 5, name: "Android-77", score: 490900, change: "down" },
      { position: 6, name: "AI-V22", score: 489850, change: "up" },
      { position: 7, name: "Proto-11", score: 489800, change: "up" },
      { position: 8, name: "Droid-XP10", score: 489750, change: "down" },
      { position: 9, name: "Cybernet-X1", score: 485000, change: undefined },
      { position: 10, name: "Techron-66", score: 480000, change: undefined },
    ],
  },
];
