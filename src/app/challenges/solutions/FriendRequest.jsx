"use client";

import { fredoka } from "@/app/fonts";
import Image from "next/image";
import {
  Button,
  Dialog,
  DialogTrigger,
  GridList,
  GridListItem,
  ListBox,
  ListBoxItem,
  Popover,
} from "react-aria-components";

import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";

export const FriendRequest = () => {
  return (
    <main
      className={`${fredoka.className} min-h-dvh p-4 flex items-center justify-center bg-[#c6ddaf]`}
    >
      <div
        className="rounded-2xl bg-white text-gray-950 flex flex-col px-4 py-8 max-w-lg w-full
      border-2 border-gray-950 shadow-[8px_8px_0px_0px] shadow-gray-950"
      >
        <h2 className="font-semibold text-2xl">Pending Invitation</h2>
        <h3 className="font-medium mt-1 opacity-70">
          {requests.length} friend user request
        </h3>

        <GridList
          aria-label="Friends requests"
          selectionMode="none"
          className="flex flex-col gap-4 mt-8"
          items={requests}
        >
          {(requester) => (
            <GridListItem
              id={requester.name}
              textValue={requester.name}
              className="flex gap-2 flex-wrap items-center border-2 border-gray-300 rounded-2xl p-2 focus-visible:border-lime-600 outline-none"
            >
              <Image
                width={54}
                height={54}
                alt=""
                src={`https://robohash.org/${requester.name}`}
                className="border-2 rounded-full border-gray-300 "
              />
              <div className="flex flex-col items-start gap-0.5">
                <span className="font-medium">{requester.name}</span>
                <DialogTrigger>
                  <Button
                    className="text-xs focus-visible:outline-2 
                  focus-visible:outline-lime-600 outline-none focus-visible:outline-offset-1 rounded"
                  >
                    {requester.friends.length} mutual friends
                  </Button>
                  <Popover
                    className={`border-2 py-1.5 px-2 shadow-xl text-xs flex flex-col gap-2 w-32 bg-white border-gray-950 
                  rounded-lg entering:animate-in entering:fade-in exiting:animate-out exiting:fade-out ${fredoka.className}`}
                  >
                    {requester.friends.map((friend) => (
                      <span key={friend.name}>{friend.name}</span>
                    ))}
                  </Popover>
                </DialogTrigger>
              </div>
              <div className="ml-auto flex gap-2">
                <Button
                  className="px-3 py-1.5 transition-all pressed:scale-95 flex gap-3 items-center justify-center
                rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600 outline-none
                hover:bg-red-200 hover:text-red-600 text-gray-950/70"
                >
                  <CloseIcon fontSize="small" />
                  Decline
                </Button>

                <Button
                  className="px-3 py-1.5 transition-all pressed:scale-95 flex gap-3 items-center justify-center
                rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600 outline-none
                hover:bg-lime-300 bg-lime-200"
                >
                  <CheckIcon fontSize="small" />
                  Accept
                </Button>
              </div>
            </GridListItem>
          )}
        </GridList>
      </div>
    </main>
  );
};

const requests = [
  {
    name: "RoboTron 3000",
    friends: [{ name: "GearHead Gary" }, { name: "Circuit Sally" }],
  },
  {
    name: "CyberSteve Mark II",
    friends: [
      { name: "Android Andy" },
      { name: "Turing Tina" },
      { name: "Widget Wendy" },
      { name: "Servo Sam" },
    ],
  },
  {
    name: "DroidBot Delta",
    friends: [{ name: "Mech Mike" }],
  },
];
