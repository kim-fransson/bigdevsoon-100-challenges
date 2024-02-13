"use client"

import Image from "next/image";
import { Lora } from "next/font/google";

import { useState } from "react";
import { Button, RadioGroup, Label, Radio } from "react-aria-components";

const images = ["/challenges/2/image-1.png", "/challenges/2/image-2.png", "/challenges/2/image-3.png"]

const lora = Lora({ subsets: ["latin"], weight: ["variable"] });


export default function AddToBag() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  return (
    <main className={`min-h-dvh bg-white flex justify-center items-center ${lora.className}`}>
      <article className="md:max-w-4xl w-full flex md:flex-row flex-col gap-4">
          <RadioGroup className="md:order-1 order-3" value={selectedImageIndex} onChange={setSelectedImageIndex} aria-label="select image">
            <div className="flex md:flex-col flex-row gap-4 items-center md:p-0 p-4">
              <Radio className="cursor-pointer ring-2 ring-transparent selected:ring-[#2c80fe] focus-visible:ring-yellow-400 rounded-md overflow-clip" value={0}>
                <Image width={50} height={65} src={images[0]} alt="" />
              </Radio>
              <Radio className="cursor-pointer ring-2 ring-transparent selected:ring-[#2c80fe] focus-visible:ring-yellow-400 rounded-md overflow-clip" value={1}>
                <Image width={50} height={65} src={images[1]} alt="" />
              </Radio>
              <Radio className="cursor-pointer ring-2 ring-transparent selected:ring-[#2c80fe] focus-visible:ring-yellow-400 rounded-md overflow-clip" value={2}>
                <Image width={50} height={65} src={images[2]} alt="" />
              </Radio>
            </div>
          </RadioGroup>

        <div className="overflow-clip md:rounded-md order-2">
          <Image width={325} height={400} src={images[selectedImageIndex]} alt="" className="md:w-auto md:h-auto w-full h-[400px] object-cover" />
        </div>

        <div className="flex-1 flex flex-col justify-start md:gap-6 md:py-3 p-4 gap-4 md:ml-4 md:order-3 order-1">
          <h2 className="text-sm font-semibold text-[#2c80fe]">POLO RALPH</h2>
          <h3 className="text-4xl font-semibold">Custom Fit Polo Bear Oxford Shirt</h3>
          <p className="text-gray-600">Blue polo with a classic cut. Made of smooth and soft cotton.</p>

          <div>
            <div className="flex items-center gap-4">
              <span className="text-3xl font-semibold">$99.00</span>
              <div className="rounded-md bg-[#abccff] text-[#2f81fd] text-sm font-medium px-1 py-0.5">-25%</div>
            </div>
            <span className="text-sm text-gray-400 line-through block mt-1">$132.00</span>
          </div>

          <RadioGroup defaultValue={"m"}>
            <Label className="text-sm font-semibold">CHOOSE SIZE</Label>
            <div className="flex gap-2 items-center mt-2">
              <Radio className="w-8 h-8 font-semibold cursor-pointer focus-visible:ring-yellow-400 focus-visible:ring-2 text-sm flex items-center justify-center text-black selected:bg-black selected:text-white" value="s">S</Radio>
              <Radio className="w-8 h-8 font-semibold cursor-pointer focus-visible:ring-yellow-400 focus-visible:ring-2 text-sm flex items-center justify-center text-black selected:bg-black selected:text-white" value="m">M</Radio>
              <Radio className="w-8 h-8 font-semibold cursor-pointer focus-visible:ring-yellow-400 focus-visible:ring-2 text-sm flex items-center justify-center text-black selected:bg-black selected:text-white" value="l">L</Radio>
              <Radio className="w-8 h-8 font-semibold cursor-pointer focus-visible:ring-yellow-400 focus-visible:ring-2 text-sm flex items-center justify-center text-black selected:bg-black selected:text-white" value="xl">XL</Radio>
              <Radio className="w-8 h-8 font-semibold cursor-pointer focus-visible:ring-yellow-400 focus-visible:ring-2 text-sm flex items-center justify-center text-black selected:bg-black selected:text-white" value="xxl">XXL</Radio>
            </div>
          </RadioGroup>

          <Button className="bg-[#1a76ff] mt-auto outline-none text-white text-sm py-2.5 rounded-md focus-visible:ring-2 focus-visible:ring-yellow-400">
            ADD TO BAG
          </Button>
        </div>
      </article>
    </main>
  );
}
