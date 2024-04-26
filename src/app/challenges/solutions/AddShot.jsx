"use client";

import { fredoka } from "@/app/fonts";
import { useFocusRing } from "react-aria";
import {
  Button,
  Input,
  ListBox,
  ListBoxItem,
  SearchField,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";

import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { tv } from "tailwind-variants";
import Image from "next/image";

const focusRing = tv({
  base: "outline outline-purple-600 outline-offset-2 outline-0 focus-visible:outline-2",
});

const buttonStyles = tv({
  extend: focusRing,
  base: ["flex rounded-md p-2 transition-all pressed:scale-95 font-medium"],
});

export const AddShot = () => {
  const { focusProps, isFocused } = useFocusRing();

  return (
    <main
      className={`${fredoka.className} min-h-dvh flex items-center justify-center p-4 bg-purple-600`}
    >
      <div className="rounded-3xl shadow-2xl bg-white text-neutral-800 flex px-4 py-8 flex-col relative max-w-screen-sm w-full">
        <h2 className="text-2xl font-semibold">
          Add this Shot to a collection
        </h2>

        <SearchField
          aria-label="filter collections"
          className={twMerge(
            `mt-4 p-2 rounded-md text-sm border-2 border-neutral-300 transition-all`,
            isFocused && "border-purple-600",
          )}
        >
          <Input
            {...focusProps}
            placeholder="Filter collections"
            className="outline-none bg-transparent min-w-0 w-full"
          />
        </SearchField>

        <ListBox
          aria-label="collections"
          selectionMode="single"
          className="flex flex-col gap-4 mt-4"
          items={collections}
        >
          {(item) => (
            <ListBoxItem
              className={twMerge(
                "pt-4 pb-2 px-2 border-2 rounded-md border-neutral-300 cursor-pointer",
                focusRing(),
              )}
            >
              {({ isSelected }) => (
                <div className="flex items-center gap-6">
                  <div className="aspect-[4/3] w-full max-w-36 relative">
                    <Image
                      width={0}
                      height={0}
                      className="absolute w-full h-full scale-90 left-3 -top-3 object-cover rounded-md"
                      src={item.shots[0]}
                      alt=""
                    />
                    <Image
                      width={0}
                      height={0}
                      className="absolute w-full h-full scale-95 left-1.5 -top-1.5 object-cover rounded-md"
                      src={item.shots[1]}
                      alt=""
                    />
                    <Image
                      width={0}
                      height={0}
                      className="absolute h-full w-full object-cover rounded-md"
                      src={item.shots[2]}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col text-sm mb-4">
                    <h2 className="text-base font-semibold">{item.name}</h2>
                    <span>{item.shots.length} shots</span>
                    <span className="opacity-70">
                      last updated {item.lastUpdated}
                    </span>
                  </div>
                  {isSelected && (
                    <span className="ml-auto size-6 rounded grid place-items-center bg-purple-200">
                      <CheckIcon className="text-purple-600" />
                    </span>
                  )}
                </div>
              )}
            </ListBoxItem>
          )}
        </ListBox>

        <div className="flex gap-4 justify-between items-center mt-16">
          <Button
            className={buttonStyles({
              class: "border-2 border-neutral-300 hover:bg-neutral-300",
            })}
          >
            Create a new collection
          </Button>
          <Button
            className={buttonStyles({
              class: "bg-purple-400 text-neutral-50 px-8 hover:bg-purple-600",
            })}
          >
            Done
          </Button>
        </div>

        <Button
          className={buttonStyles({
            class:
              "absolute top-3 right-3 rounded-full hover:bg-neutral-200 text-neutral-600 p-0.5",
          })}
        >
          <CloseIcon />
        </Button>
      </div>
    </main>
  );
};

const collections = [
  {
    id: 1,
    name: "Illustrations",
    lastUpdated: "one month ago",
    shots: [
      "/challenges/75/illustrations/illu1.png",
      "/challenges/75/illustrations/illu2.png",
      "/challenges/75/illustrations/illu3.png",
    ],
  },
  {
    id: 2,
    name: "3D Art",
    lastUpdated: "one week ago",
    shots: [
      "/challenges/75/illustrations/illu3.png",
      "/challenges/75/illustrations/illu1.png",
      "/challenges/75/illustrations/illu2.png",
    ],
  },
];
