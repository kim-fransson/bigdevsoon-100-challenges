"use client";

import VerifiedIcon from "@mui/icons-material/Verified";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import Image from "next/image";
import { tv } from "tailwind-variants";
import { Button, ListBox, ListBoxItem, Separator } from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { poppins } from "@/app/fonts";

const button = tv({
  base: [
    "transition-all pressed:scale-95 flex items-center justify-center outline-none",
    "focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-blue-500",
  ],
  variants: {
    variant: {
      photo: [
        "bg-white rounded-full p-1 text-blue-500 hover:bg-blue-500 hover:text-gray-50",
      ],
      edit: ["bg-gray-200 rounded-full p-1 text-gray-500 hover:bg-gray-300"],
      link: ["text-gray-700 rounded-full p-0.5 hover:text-blue-500"],
    },
  },
});

const badge = tv({
  base: ["text-sm font-medium px-1.5 uppercase rounded-full"],
  variants: {
    variant: {
      blue: ["text-blue-500 bg-blue-200"],
      green: ["text-green-700 bg-green-200"],
    },
  },
});

export const PlayerProfile = () => {
  const playerInfo = {
    College: "Texas Tech University",
    Position: "Quarterback",
    "HT / WT": "1.88m / 104kg",
    Birthplace: "Tyler, Texas",
    Status: "active",
  };
  return (
    <main
      className={`min-h-dvh p-4 flex justify-center items-center bg-blue-100 ${poppins.className}`}
    >
      <div className="flex flex-col max-w-lg w-full rounded-xl shadow-xl bg-white overflow-hidden">
        <div className="relative">
          <Image
            src="/challenges/43/patrick-mahomes-background.png"
            width={900}
            height={501}
            alt=""
            className="max-h-52 object-cover"
          />
          <div className="absolute left-6 bottom-0 translate-y-1/3">
            <Image
              src="/challenges/43/patrick-mahomes-profile.png"
              width={418}
              height={418}
              alt=""
              className="rounded-full size-32"
            />
            <span className="absolute bottom-0 right-0 text-blue-500 bg-white rounded-full">
              <VerifiedIcon fontSize="large" />
            </span>
          </div>
          <Button
            className={button({
              variant: "photo",
              class: "absolute top-4 right-4",
            })}
          >
            <CameraAltIcon />
          </Button>
        </div>
        <div className="px-4 pt-2 pb-4 space-y-4">
          <Button
            className={button({
              variant: "edit",
              class: "ml-auto",
            })}
          >
            <EditOutlinedIcon />
          </Button>
          <div>
            <div className="flex gap-1 items-center">
              <h2 className="capitalize text-2xl font-semibold">
                patrick mahomes
              </h2>
              <Button
                className={button({
                  variant: "link",
                  class: "ml-auto",
                })}
              >
                <XIcon />
              </Button>
              <Button
                className={button({
                  variant: "link",
                })}
              >
                <InstagramIcon />
              </Button>
            </div>
            <div className="flex gap-2 items-center mt-1">
              <span className={badge({ variant: "blue" })}>football</span>
              <span className={badge({ variant: "blue" })}>qb</span>
              <span className={badge({ variant: "blue" })}>
                3 super bowls wins
              </span>
            </div>
            <div className="flex items-center gap-2 font-medium mt-4">
              <Image
                width={36}
                height={36}
                src="/challenges/43/kansas-city-chiefs-logo.svg"
                alt=""
              />
              <span>Kansas City Chiefs</span>
              <span>·</span>
              <span>#15</span>
            </div>
          </div>
          <ListBox
            className="grid gap-4 transition-all pt-4"
            aria-label="stats"
            selectionMode="multiple"
          >
            <AccordionItem title="INFO">
              <div className="grid gap-2">
                {Object.keys(playerInfo).map((key) => (
                  <div
                    key={key}
                    className="flex gap-4 justify-between items-center"
                  >
                    <span className="opacity-70">{key}</span>
                    {key === "Status" ? (
                      <span className={badge({ variant: "green" })}>
                        {playerInfo[key]}
                      </span>
                    ) : (
                      <span className="font-medium">{playerInfo[key]}</span>
                    )}
                  </div>
                ))}
              </div>
            </AccordionItem>
            <AccordionItem title="CAREER HISTORY">
              <div className="flex gap-4">
                <Image
                  width={44}
                  height={44}
                  src="/challenges/43/kansas-city-chiefs-logo.svg"
                  alt=""
                />
                <div className="grid">
                  <span className="font-medium">Kansas City Chiefs</span>
                  <span className="text-sm opacity-70">2017 - current</span>
                </div>
              </div>
            </AccordionItem>
          </ListBox>

          <h2 className="font-medium text-blue-500">LIKED ARTICLES</h2>

          <Article
            headline="Kansas City Chiefs Unveil New Strategy: Patrick Mahomes to Throw Footballs From a Helicopter for More 'Airtime'"
            published="April 16, 2024"
            image="/challenges/43/article-1.png"
          />

          <Separator className="border-gray-400" />

          <Article
            headline="Patrick Mahomes Breaks Record for Longest Hail Mary by Throwing a Football Across Three States, Claims 'I Was Just Looking for the Restroom'"
            published="May 29, 2024"
            image="/challenges/43/article-2.png"
          />
        </div>
      </div>
    </main>
  );
};

const Article = (props) => {
  return (
    <div className="flex items-center gap-4">
      <div>
        <span className="opacity-50 text-sm font-medium">
          {props.published}
        </span>
        <h3 className="font-medium">{props.headline}</h3>
      </div>
      <Image
        width={80}
        height={80}
        alt=""
        src={props.image}
        className="ml-auto rounded-lg size"
      />
    </div>
  );
};

const AccordionItem = (props) => {
  return (
    <ListBoxItem
      {...props}
      className="outline-none cursor-pointer space-y-2 rounded-lg
      focus-visible:outline-2 selected:outline-offset-2 outline-offset-2 focus-visible:outline-blue-500"
    >
      {({ isSelected }) => (
        <>
          <div className="flex items-center gap-4 justify-between">
            <h2 className="font-medium text-blue-500">{props.title}</h2>
            <span
              className={twMerge(
                "transition-transform duration-500",
                isSelected ? "rotate-180" : "rotate-0",
              )}
            >
              <ExpandMoreOutlinedIcon />
            </span>
          </div>
          <div
            className={twMerge(
              "grid transition-[grid-template-rows] duration-500",
              isSelected ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
            )}
          >
            <div className="overflow-hidden">{props.children}</div>
          </div>
        </>
      )}
    </ListBoxItem>
  );
};
