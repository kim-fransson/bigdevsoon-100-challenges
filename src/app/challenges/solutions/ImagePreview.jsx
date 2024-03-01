"use client";

import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ListIcon from "@mui/icons-material/List";
import ViewComfyIcon from "@mui/icons-material/ViewComfy";
import { Radio, RadioGroup } from "react-aria-components";
import { tv } from "tailwind-variants";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const radio = tv({
  base: [
    "text-[#797979] outline-none p-0.5 inline-flex items-center justify-center transition-all",
    "rounded-md cursor-pointer",
  ],
  variants: {
    isFocusVisible: {
      true: ["ring-2 ring-yellow-400"],
    },
    isSelected: {
      true: ["bg-[#4e4e4c] text-[#dfdfdf]"],
    },
  },
});

const layout = tv({
  base: ["bg-[#202020] h-full"],
  variants: {
    variant: {
      grid: ["grid lg:grid-cols-3 sm:grid-cols-2 p-4 gap-4"],
      bento: ["grid grid-cols-12 p-4 gap-4"],
      list: ["grid max-h-[500px] overflow-auto no-scrollbar"],
    },
  },
});

const imageWrapper = tv({
  base: [""],
  variants: {
    isList: {
      true: ["py-4 px-8 even:bg-[#323232] flex items-center gap-4"],
    },
    span6: {
      true: ["col-span-6"],
    },
    span4: {
      true: ["col-span-4"],
    },
    span3: {
      true: ["col-span-3"],
    },
  },
});

const image = tv({
  base: ["rounded-lg"],
  variants: {
    isListItem: {
      true: ["w-52"],
    },
  },
});

const images = [
  { name: "duck", title: "Duck Nebula Oil Painting" },
  { name: "tiger", title: "Tiger Nebula Oil Painting" },
  { name: "elephant", title: "Elephant Nebula Oil Painting" },
  { name: "lion", title: "Lion Nebula Oil Painting" },
  { name: "pug", title: "Pug Nebula Oil Painting" },
  { name: "llama", title: "Llama Nebula Oil Painting" },
  { name: "cat", title: "Cat Nebula Oil Painting" },
  { name: "bear", title: "Bear Nebula Oil Painting" },
  { name: "donkey", title: "Donkey Nebula Oil Painting" },
];

export const ImagePreview = () => {
  const [activeLayout, setActiveLayout] = useState("grid");
  const AnimatedImage = motion(Image);
  return (
    <main className={`min-h-dvh flex justify-center items-center bg-[#c5c5c5]`}>
      <div className="max-w-4xl w-full rounded-lg overflow-hidden">
        <div className="flex px-4 py-2 items-center justify-between bg-[#333331]">
          <h2 className="text-2xl text-[#dfdfdf]">Images</h2>
          <RadioGroup
            className="flex items-center gap-2"
            defaultValue="grid"
            aria-label="view settings"
            onChange={setActiveLayout}
          >
            <Radio className={(states) => radio(states)} value="grid">
              <ViewModuleIcon />
            </Radio>
            <div className="w-[2px] bg-[#525250] self-stretch rounded-full" />
            <Radio className={(states) => radio(states)} value="list">
              <ListIcon />
            </Radio>
            <div className="w-[2px] bg-[#525250] self-stretch rounded-full" />
            <Radio className={(states) => radio({...states, class: "md:inline-flex hidden"})} value="bento">
              <ViewComfyIcon />
            </Radio>
          </RadioGroup>
        </div>
        <div className={layout({ variant: activeLayout })}>
          {images.map(({ name, title }, index) => (
            <div
              key={title}
              className={imageWrapper({
                span6: activeLayout === "bento" && (index === 0 || index === 1),
                span3: activeLayout === "bento" && index >= 2 && index <= 5,
                span4: activeLayout === "bento" && index >= 6 && index <= 8,
                isList: activeLayout === "list",
              })}
            >
              <AnimatedImage
                width={1200}
                height={685}
                src={`/challenges/18/${name}.png`}
                alt={title}
                className={image({ isListItem: activeLayout === "list" })}
                layoutId={name}
              />
              {activeLayout === "list" && <h2 className="text-[#b8b8b7] font-semibold text-lg">{title}</h2>}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
