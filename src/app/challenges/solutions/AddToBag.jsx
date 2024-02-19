"use client";

import Image from "next/image";
import { Lora } from "next/font/google";

import { useState } from "react";
import { Button, RadioGroup, Label, Radio } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const images = [
  "/challenges/2/image-1.png",
  "/challenges/2/image-2.png",
  "/challenges/2/image-3.png",
];
const sizes = ["s", "m", "l", "xl", "xxl"];

const lora = Lora({ subsets: ["latin"], weight: ["variable"] });

export const AddToBag = () => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <main
      className={`min-h-dvh bg-white flex justify-center items-center ${lora.className}`}
    >
      <article className="md:max-w-4xl w-full flex md:flex-row flex-col gap-4">
        <RadioGroup
          orientation="vertical"
          className="md:order-1 order-3"
          value={selectedImage}
          onChange={setSelectedImage}
          aria-label="select image"
        >
          <div className="flex md:flex-col flex-row gap-4 items-center md:p-0 p-4">
            {images.map((src) => (
              <ImageRadio key={src} value={src} />
            ))}
          </div>
        </RadioGroup>

        <div className="overflow-clip md:rounded-md order-2 w-full md:w-[375px] h-[500px]">
          <Image
            width={375}
            height={500}
            src={selectedImage}
            alt=""
            className="w-full h-auto block"
          />
        </div>

        <div className="flex-1 flex flex-col justify-start md:gap-6 md:py-3 p-4 gap-4 md:ml-4 md:order-3 order-1">
          <h2 className="font-semibold text-[#2c80fe]">POLO RALPH</h2>
          <h3 className="text-4xl font-semibold text-gray-950">
            Custom Fit Polo Bear Oxford Shirt
          </h3>
          <p className="text-gray-700">
            Blue polo with a classic cut. Made of smooth and soft cotton.
          </p>

          <div>
            <div className="flex items-center gap-4">
              <span className="text-3xl font-semibold">$99.00</span>
              <div className="rounded-md bg-[#abccff] text-[#1a76ff] text-sm font-medium px-1 py-0.5">
                -25%
              </div>
            </div>
            <span className="text-sm text-gray-400 line-through block mt-1">
              $132.00
            </span>
          </div>

          <RadioGroup defaultValue={"m"}>
            <Label className="font-semibold">CHOOSE SIZE</Label>
            <div className="flex gap-2 items-center mt-2">
              {sizes.map((size) => (
                <SizeRadio key={size} value={size} />
              ))}
            </div>
          </RadioGroup>

          <Button
            className="bg-[#1a76ff] mt-auto outline-none text-white font-medium hover:bg-[#1a57ff] py-2.5 rounded-md 
            focus-visible:ring-2 focus-visible:ring-yellow-400 transition pressed:scale-95"
          >
            ADD TO BAG
          </Button>
        </div>
      </article>
    </main>
  );
}

const ImageRadio = ({ value }) => {
  return (
    <Radio
      className={twMerge(
        "cursor-pointer opacity-50 selected:opacity-100 transition-opacity ring-yellow-400 focus-visible:ring-2 rounded-md overflow-clip",
      )}
      value={value}
    >
      <Image width={80} height={100} src={value} alt="" />
    </Radio>
  );
};

const SizeRadio = ({ value }) => {
  return (
    <Radio
      className="w-8 h-8 uppercase font-semibold cursor-pointer focus-visible:ring-yellow-400 rounded transition hover:bg-black/20
      focus-visible:ring-2 text-sm flex items-center justify-center text-black selected:bg-black selected:text-white"
      value={value}
    >
      {value}
    </Radio>
  );
};
