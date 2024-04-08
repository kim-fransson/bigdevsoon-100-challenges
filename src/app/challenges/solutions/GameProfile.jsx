"use client";

import { fredoka } from "@/app/fonts";
import Image from "next/image";

import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import GppBadIcon from "@mui/icons-material/GppBad";
import {
  Button,
  Group,
  ListBox,
  ListBoxItem,
  ProgressBar,
} from "react-aria-components";

export const GameProfile = () => {
  return (
    <main
      className={`${fredoka.className} min-h-dvh bg-lime-500 flex justify-center items-center p-4`}
    >
      <div
        className="bg-gray-950 text-gray-50 rounded-3xl shadow-2xl p-4
      flex flex-col gap-6 max-w-sm w-full"
      >
        <header className="text-center">
          <h2 className="text-2xl font-semibold">Your profile</h2>
        </header>
        <div className="grid gap-2 place-items-center size">
          <Image
            width={80}
            height={80}
            alt=""
            src={`https://robohash.org/blake?set=set5`}
            className="rounded-full bg-lime-300"
            priority
          />
          <span className="opacity-75 text-sm">Blake</span>
          <span className="font-semibold leading-3">13 291 pts</span>
        </div>

        <div className="flex flex-wrap gap-4 w-full">
          {[
            {
              icon: (
                <AutoAwesomeIcon fontSize="small" className="text-[#fdb658]" />
              ),
              name: "Streak",
              amount: 20,
            },
            {
              icon: (
                <EmojiEventsIcon fontSize="small" className="text-[#fdb658]" />
              ),
              name: "Wins",
              amount: 1023,
            },
            {
              icon: <GppBadIcon fontSize="small" className="text-[#d45d5e]" />,
              name: "Losses",
              amount: 15,
            },
          ].map((stats) => (
            <div
              key={stats.name}
              className="border border-gray-700 gap-1 flex-1 rounded-lg px-2 py-3 text-center grid place-content-center"
            >
              <div className="flex items-center justify-center gap-1">
                {stats.icon}
                <span className="opacity-60 text-sm">{stats.name}</span>
              </div>
              <span className="font-semibold block text-sm">
                {stats.amount}
              </span>
            </div>
          ))}
        </div>

        <Group>
          <header className="flex gap-2 justify-between">
            <h2 className="text-xl">Badges</h2>
            <Button className="text-gray-500 px-2 outline-none focus-visible:ring-2 focus-visible:ring-yellow-400">
              View all
            </Button>
          </header>
          <ListBox
            aria-label="badges"
            selectionMode="none"
            orientation="horizontal"
            className="flex gap-4 text-4xl overflow-auto py-4 *:outline-none"
          >
            <ListBoxItem className="focus-visible:outline-2 focus-visible:outline-yellow-400 focus-visible:-outline-offset-1">
              🏆
            </ListBoxItem>
            <ListBoxItem className="focus-visible:outline-2 focus-visible:outline-yellow-400 focus-visible:-outline-offset-1">
              🎖️
            </ListBoxItem>
            <ListBoxItem className="focus-visible:outline-2 focus-visible:outline-yellow-400 focus-visible:-outline-offset-1">
              🥇
            </ListBoxItem>
            <ListBoxItem className="focus-visible:outline-2 focus-visible:outline-yellow-400 focus-visible:-outline-offset-1">
              🎯
            </ListBoxItem>
            <ListBoxItem className="focus-visible:outline-2 focus-visible:outline-yellow-400 focus-visible:-outline-offset-1">
              🎲
            </ListBoxItem>
            <ListBoxItem className="focus-visible:outline-2 focus-visible:outline-yellow-400 focus-visible:-outline-offset-1">
              🛡️
            </ListBoxItem>
            <ListBoxItem className="focus-visible:outline-2 focus-visible:outline-yellow-400 focus-visible:-outline-offset-1">
              🔥
            </ListBoxItem>
            <ListBoxItem className="focus-visible:outline-2 focus-visible:outline-yellow-400 focus-visible:-outline-offset-1">
              ⚔️
            </ListBoxItem>
            <ListBoxItem className="focus-visible:outline-2 focus-visible:outline-yellow-400 focus-visible:-outline-offset-1">
              🌟
            </ListBoxItem>
            <ListBoxItem className="focus-visible:outline-2 focus-visible:outline-yellow-400 focus-visible:-outline-offset-1">
              🚀
            </ListBoxItem>
          </ListBox>
        </Group>

        <Group className="space-y-4">
          <header className="-mt-4 flex gap-2 justify-between">
            <h2 className="text-xl">Achievements</h2>
          </header>
          <ListBox
            aria-label="achievements"
            selectionMode="none"
            orientation="vertical"
            className="grid gap-4 max-h-72 overflow-auto -mx-4 px-4"
            items={[
              {
                emoji: "🎮",
                name: "Level Up!",
                description:
                  "Advance to the next level or rank in a video game, demonstrating improved skills and progression.",
                progress: "25/30",
              },
              {
                emoji: "👾",
                name: "Boss Slayer",
                description:
                  "Defeat a certain number of powerful bosses in a game, showcasing mastery of game mechanics and strategy.",
                progress: "10/15",
              },
              {
                emoji: "🏅",
                name: "Completionist",
                description:
                  "Achieve 100% completion in a video game, collecting all items, completing all quests, and unlocking all achievements.",
                progress: "50/60",
              },
              {
                emoji: "🕹️",
                name: "Retro Gamer",
                description:
                  "Complete a classic video game from start to finish, reliving the nostalgia of old-school gaming.",
                progress: "5/10",
              },
              {
                emoji: "🚀",
                name: "Speedrunner",
                description:
                  "Finish a game in record time, mastering glitches, shortcuts, and optimized routes to achieve the fastest completion.",
                progress: "3/5",
              },
            ]}
          >
            {(item) => (
              <ListBoxItem
                className="focus-visible:outline-2 focus-visible:outline-yellow-400 focus-visible:-outline-offset-2 outline-none
                border border-gray-700 p-2 rounded-lg flex items-center gap-3"
                id={item.name}
              >
                <span className="text-3xl">{item.emoji}</span>
                <div className="grid gap-0.5">
                  <span className="text-sm font-medium">{item.name}</span>
                  <span className="text-xs opacity-60">{item.description}</span>

                  <ProgressBar
                    className="w-full"
                    value={completionPercentage(item)}
                  >
                    {({ percentage }) => (
                      <div className="flex items-center gap-2">
                        <div className="flex-1 will-change-transform transition-transform overflow-hidden rounded-full h-2 bg-gray-500">
                          <div
                            className="h-full bg-lime-400 rounded-r-full"
                            style={{ width: percentage + "%" }}
                          />
                        </div>
                        <span>{item.progress}</span>
                      </div>
                    )}
                  </ProgressBar>
                </div>
              </ListBoxItem>
            )}
          </ListBox>
        </Group>
      </div>
    </main>
  );
};

const completionPercentage = (item) => {
  const [numerator, denominator] = item.progress.split("/").map(Number);
  return (numerator / denominator) * 100;
};
