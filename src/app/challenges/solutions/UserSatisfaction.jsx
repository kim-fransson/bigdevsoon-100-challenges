"use client";

import { poppins } from "@/app/fonts";
import {
  Button,
  Label,
  Radio,
  RadioGroup,
  TextArea,
  TextField,
} from "react-aria-components";

export const UserSatisfaction = () => {
  return (
    <main
      className={`${poppins.className} min-h-dvh grid place-items-center p-4 bg-neutral-300`}
    >
      <div
        className="rounded-2xl shadow-2xl bg-neutral-900 text-neutral-200 grid grid-cols-2 auto-rows-min max-w-lg w-full
        p-8 gap-6"
      >
        <h2 className="font-semibold text-2xl col-span-2">
          How satisfied are you with our customer service?
        </h2>
        <RadioGroup
          aria-label="your satisfaction level"
          className="col-span-2 flex justify-between gap-4 mb-6"
        >
          <Radio value="1" className="group relative">
            <div
              className="bg-[#ed4870] size-14 grid place-items-center rounded-xl text-xl font-bold
            group-focus-visible:ring-2 group-focus-visible:ring-blue-500
          group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-neutral-900 cursor-pointer"
            >
              1
            </div>
            <span className="text-neutral-400 text-xs absolute whitespace-nowrap -bottom-6">
              Very dissatisfied
            </span>
          </Radio>
          <Radio className="group" value="2">
            <div
              className="bg-[#ec9939] size-14 grid place-items-center rounded-xl text-xl font-bold
            group-focus-visible:ring-2 group-focus-visible:ring-blue-500
          group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-neutral-900 cursor-pointer"
            >
              2
            </div>
          </Radio>
          <Radio className="group" value="3">
            <div
              className="bg-[#efc138] size-14 grid place-items-center rounded-xl text-xl font-bold
            group-focus-visible:ring-2 group-focus-visible:ring-blue-500
          group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-neutral-900 cursor-pointer"
            >
              3
            </div>
          </Radio>
          <Radio className="group" value="4">
            <div
              className="bg-[#9cbd48] size-14 grid place-items-center rounded-xl text-xl font-bold
            group-focus-visible:ring-2 group-focus-visible:ring-blue-500
          group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-neutral-900 cursor-pointer"
            >
              4
            </div>
          </Radio>
          <Radio value="5" className="group relative">
            <div
              className="bg-[#30b8a0] size-14 grid place-items-center rounded-xl text-xl font-bold
            group-focus-visible:ring-2 group-focus-visible:ring-blue-500
          group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-neutral-900 cursor-pointer"
            >
              5
            </div>
            <span className="text-neutral-400 text-xs absolute whitespace-nowrap -bottom-6 -left-6">
              Very satisfied
            </span>
          </Radio>
        </RadioGroup>
        <TextField className="col-span-2 grid gap-2">
          <Label className="font-medium">
            Do you have any thought to you&lsquo;d like to share
          </Label>
          <TextArea
            placeholder="Your opinion..."
            className="bg-transparent text-sm border rounded-xl p-2 resize-none placeholder:text-neutral-500
            border-neutral-500 min-h-32 outline-none focus:border-blue-500"
          />
        </TextField>
        <Button
          className="transition-all pressed:scale-95 outline-none focus-visible:ring-2 focus-visible:ring-blue-500
          focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900
        bg-neutral-500 hover:bg-red-500 font-semibold tracking-wider px-4 py-3 rounded-md"
        >
          CANCEL
        </Button>
        <Button
          className="transition-all pressed:scale-95 outline-none focus-visible:ring-2 focus-visible:ring-blue-500
          focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900
        bg-blue-500 hover:bg-blue-600 font-semibold tracking-wider px-4 py-3 rounded-md"
        >
          SEND
        </Button>
      </div>
    </main>
  );
};
