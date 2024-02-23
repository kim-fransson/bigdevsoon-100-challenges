"use client";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import CircleIcon from "@mui/icons-material/Circle";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Image from "next/image";
import {
  Button,
  ToggleButton,
} from "react-aria-components";

import Image1 from "../../../../public/challenges/12/image-1.png";
import Image2 from "../../../../public/challenges/12/image-2.png";
import Image3 from "../../../../public/challenges/12/image-3.png";
import Image4 from "../../../../public/challenges/12/image-4.png";
import Image5 from "../../../../public/challenges/12/image-5.png";

import { twMerge } from "tailwind-merge";
import { ebGaramond } from "@/app/fonts";
import { useState } from "react";

const images = [Image1, Image2, Image3, Image4, Image5];

export const RestaurantReservation = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <main
      className={`min-h-dvh flex items-center justify-center bg-[#edc895] ${ebGaramond.className}`}
    >
      <div className="max-w-md md:min-h-0 min-h-dvh md:rounded-2xl md:shadow-2xl grid overflow-hidden  bg-gray-50">
        <div className="relative">
          <div
            className="flex transition-all duration-1000"
            style={{ translate: `${(-100 * activeIndex)}%` }}
          >
            {images.map((img) => (
              <Image
                key={img}
                src={img}
                width={800}
                height={460}
                alt=""
                className="object-cover"
                draggable={false}
              />
            ))}
          </div>

          <div
            className="flex items-center justify-center gap-3 absolute left-0 right-0 bottom-0 text-gray-50 p-4
          bg-gradient-to-b from-transparent from-10% to-black"
          >
            {images.map((img, index) => (
              <SlideShowButton
                key={img}
                active={activeIndex === index}
                onPress={() => {
                  setActiveIndex(index);
                }}
              />
            ))}
          </div>
        </div>
        <div className="px-4 py-8 grid gap-8">
          <div className="flex justify-between items-center">
            <div className="grid gap-1">
              <h2 className="text-2xl font-semibold">
                The Shamrock&apos;s Whisper
              </h2>
              <span className="font-medium">Quay Street, Galway</span>
              <div className="flex items-center mt-1 gap-1 text-[#fe881a]">
                <StarIcon fontSize="small" />
                <StarIcon fontSize="small" />
                <StarIcon fontSize="small" />
                <StarIcon fontSize="small" />
                <StarBorderIcon fontSize="small" />
                <span className="text-sm text-gray-950">(231 reviews)</span>
              </div>
            </div>
            <ToggleButton className="mb-4 outline-none hover:animate-wiggle hover:animate-infinite hover:animate-duration-[400ms]">
              {({ isSelected }) => (
                <>
                  {isSelected ? (
                    <FavoriteIcon className={twMerge("text-red-600")} />
                  ) : (
                    <FavoriteBorderIcon />
                  )}
                </>
              )}
            </ToggleButton>
          </div>
          <p className="text-medium text-lg">
            The Shamrock&apos;s Whisper, a venerable Irish pub, sits tucked away
            on Quay Street in Galway. With its walls echoing centuries of
            laughter and music, it serves as a cozy retreat for those seeking
            the warmth of traditional Irish hospitality. Here, every pint and
            story shared under its low, beam-lined ceiling feels like a journey
            back in time.
          </p>
        </div>
        <Button className="bg-gray-950 text-gray-50 font-bold py-5 mt-4 text-xl outline-none">
          Make a reservation
        </Button>
      </div>
    </main>
  );
};

const SlideShowButton = ({ active, onPress }) => (
  <Button
    className={twMerge(
      `flex items-center justify-center cursor-pointer 
    focus-visible:outline-2 focus-visible:outline-yellow-400 rounded-full outline-none`,
      active ? "selected:text-gray-50" : "text-gray-50/50 ",
    )}
    onPress={onPress}
  >
    <CircleIcon fontSize="small" />
  </Button>
);
