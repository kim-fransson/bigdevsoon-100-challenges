"use client";

import { poppins } from "@/app/fonts";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useFocusRing } from "react-aria";
import {
  Button,
  Checkbox,
  Input,
  Label,
  Separator,
  TextField,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";

export const ProfileSettings = () => {
  useEffect(() => {
    const prefersDarkMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    const userPreferredTheme = prefersDarkMode ? "dark" : "light";
    document.body.className = userPreferredTheme;
  }, []);

  return (
    <main
      className={`flex items-center justify-center min-h-dvh bg-[#efeefe] p-4 ${poppins.className}`}
    >
      <div
        className="rounded-xl shadow-xl px-4 py-8 grid grid-cols-12 auto-rows-min max-w-screen-sm
      bg-neutral-50 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-50"
      >
        <h2 className="font-semibold text-xl">Profile</h2>

        <Separator className="col-span-full my-4 border-neutral-500 border rounded-full" />

        <h3 className="font-medium text-lg col-span-full">User details</h3>
        <p className="opacity-70 col-span-full">
          Share your profile information with others
        </p>

        <div className="col-span-full flex items-center gap-4 my-4">
          <div>
            <Image
              width={112}
              height={112}
              alt=""
              src={`https://robohash.org/kim-fransson?set=set5`}
              className="rounded-full bg-violet-100"
              priority
            />
          </div>
          <div className="grid gap-2">
            <Button
              className="transition-all pressed:scale-95 outline-none focus-visible:ring-2 focus-visible:ring-blue-600
          dark:focus-visible:ring-indigo-300
          focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-900 focus-visible:ring-offset-neutral-50
        bg-blue-500 hover:bg-blue-600 dark:hover:bg-indigo-400 text-neutral-100 dark:bg-indigo-300 font-medium text-sm tracking-wider px-3 py-2 rounded-md"
            >
              Change picture
            </Button>

            <Button
              className="transition-all pressed:scale-95 outline-none focus-visible:ring-2 focus-visible:ring-blue-600
          dark:focus-visible:ring-indigo-300
          focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-900 focus-visible:ring-offset-neutral-50
        border-2 border-neutral-500 text-neutral-600 dark:text-neutral-400 hover:border-red-400 hover:bg-red-400 hover:text-neutral-50 font-medium text-sm tracking-wider px-3 py-2 rounded-md
        focus-visible:bg-red-400 focus-visible:border-red-400 focus-visible:text-neutral-50"
            >
              Delete picture
            </Button>
          </div>
        </div>

        <form className="col-span-full grid grid-cols-subgrid gap-x-4 gap-y-6 my-4">
          <CustomTextField
            className="md:col-span-6 col-span-full"
            label="First Name"
          />
          <CustomTextField
            className="md:col-span-6 col-span-full"
            label="Last Name"
          />
          <CustomTextField className="col-span-full" label="Email" />

          <Checkbox
            defaultSelected
            className="cursor-pointer col-span-full -mt-4 focus-visible:ring-2 ring-blue-600 dark:ring-indigo"
          >
            {({ isSelected }) => (
              <div>
                {isSelected ? (
                  <CheckBoxIcon
                    fontSize="small"
                    className="text-blue-500 dark:text-indigo-300"
                  />
                ) : (
                  <CheckBoxOutlineBlankIcon fontSize="small" />
                )}
                <span className="inline-block ml-1 text-sm">
                  Set as private
                </span>
              </div>
            )}
          </Checkbox>

          <CustomTextField className="col-span-full min-h-32" label="Bio" />
        </form>

        <Separator className="col-span-full my-4 border-neutral-500 border rounded-full" />

        <Button
          className="transition-all pressed:scale-95 outline-none focus-visible:ring-2 focus-visible:ring-blue-600
          dark:focus-visible:ring-indigo-300 md:col-start-8 md:col-span-2 col-start-7 col-span-3 mr-2
          focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-900 focus-visible:ring-offset-neutral-50
        bg-neutral-400 text-neutral-200 hover:bg-neutral-500 rounded-md"
        >
          Cancel
        </Button>

        <Button
          className="transition-all pressed:scale-95 outline-none focus-visible:ring-2 focus-visible:ring-blue-600
          dark:focus-visible:ring-indigo-300 col-start-10 col-span-3
          focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-900 focus-visible:ring-offset-neutral-50
        bg-blue-500 hover:bg-blue-600 dark:hover:bg-indigo-400 dark:bg-indigo-300 text-neutral-100 font-medium text-sm tracking-wider px-3 py-2 rounded-md"
        >
          Save
        </Button>
      </div>
    </main>
  );
};

const CustomTextField = ({ label, className }) => {
  let { focusProps, isFocused } = useFocusRing();
  let [value, setValue] = useState("");

  return (
    <TextField
      onChange={setValue}
      className={twMerge(
        "border-2 border-neutral-500 transition-all p-2 rounded-md relative ",
        isFocused ? "border-blue-600 dark:border-indigo-300" : "",
        className,
      )}
    >
      <Label
        className={twMerge(
          "capitalize text-neutral-500 absolute top-5 left-2 transition-all z-50",
          isFocused || value
            ? "top-2 text-sm  -translate-y-full px-1 bg-neutral-50 dark:bg-neutral-900"
            : "-translate-y-1/2",
          isFocused ? "text-blue-500 dark:text-indigo-300" : "",
        )}
      >
        {label}
      </Label>
      <Input
        {...focusProps}
        className="outline-none bg-transparent w-full pr-8"
      />
    </TextField>
  );
};
