"use client";

import { fredoka } from "@/app/fonts";
import { Button, Radio, RadioGroup } from "react-aria-components";

export const RateUs = () => {
  return (
    <main
      className={`flex items-center justify-center min-h-dvh bg-sky-100 p-4 ${fredoka}`}
    >
      <div className="max-w-xl w-full rounded-2xl shadow-2xl bg-white p-8 grid gap-6 justify-items-center">
        <h2 className="font-semibold text-3xl">Rate Us!</h2>
        <h3 className="font-medium text-black/60">
          Tell us about your experience
        </h3>

        <RadioGroup
          defaultValue="Good"
          orientation="horizontal"
          className="flex flex-wrap gap-4 justify-around w-full items-center"
        >
          <EmojiRadio value="Terrible">😵</EmojiRadio>
          <EmojiRadio value="Bad">😟</EmojiRadio>
          <EmojiRadio value="Okey">🙂</EmojiRadio>
          <EmojiRadio value="Good">☺️</EmojiRadio>
          <EmojiRadio value="Great">😄</EmojiRadio>
        </RadioGroup>

        <Button className="text-orange-700 outline-none p-1 focus-visible:ring-2 ring-orange-700 rounded font-semibold justify-self-center decoration-2 hover:underline hover:underline-offset-4 transition-all">
          Skip
        </Button>
      </div>
    </main>
  );
};

const EmojiRadio = (props) => {
  return (
    <Radio
      {...props}
      className="text-7xl outline-none opacity-50 hover:opacity-80 selected:opacity-100 transition-all cursor-pointer
    group"
    >
      <div className="grid justify-items-center">
        <div className="group-focus-visible:ring-4 group-focus-visible:ring-yellow-400 rounded-full group-hover:animate-wiggle-more group-hover:animate-infinite group-hover:animate-duration-[1500ms]">
          {props.children}
        </div>
        <span className="text-lg font-medium">{props.value}</span>
      </div>
    </Radio>
  );
};
