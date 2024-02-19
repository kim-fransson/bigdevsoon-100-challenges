"use client";
import { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Button, ListBox, ListBoxItem } from "react-aria-components";

const images = [
  "/challenges/6/1.png",
  "/challenges/6/2.png",
  "/challenges/6/3.png",
  "/challenges/6/4.png",
  "/challenges/6/5.png",
  "/challenges/6/6.png",
  "/challenges/6/7.png",
  "/challenges/6/8.png",
  "/challenges/6/9.png",
  "/challenges/6/10.png",
  "/challenges/6/11.png",
  "/challenges/6/12.png",
  "/challenges/6/13.png",
  "/challenges/6/14.png",
];

export const ImageCarousel = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const nextImage = () => {
    setActiveImageIndex((curr) => (curr + 1) % images.length);
  };

  const previousImage = () => {
    setActiveImageIndex((curr) => (curr - 1 + images.length) % images.length);
  };

  return (
    <main className="bg-[#e7dac9] min-h-dvh flex flex-col lg:items-center justify-center lg:gap-16 gap-4">
      <ActiveImage
        src={images[activeImageIndex]}
        nextImage={nextImage}
        previousImage={previousImage}
      />
      <div className="overflow-x-auto focus-visible:outline outline-blue-600">
        <ImageListBox
          key={activeImageIndex}
          activeImageIndex={activeImageIndex}
          setActiveImageIndex={setActiveImageIndex}
        />
      </div>
    </main>
  );
};

const ActiveImage = ({ src, nextImage, previousImage }) => {
  return (
    <div className="flex items-center lg:gap-8 relative">
      <Button
        onPress={previousImage}
        className="outline-none rounded-full p-2 hover:bg-black/20 transition-all focus-visible:ring-2 ring-blue-600
        absolute lg:static lg:text-black text-white"
      >
        <ArrowBackIcon fontSize="large" />
      </Button>
      <img
        key={src}
        src={src}
        alt=""
        className="lg:aspect-[7/3] lg:w-[1200px] object-cover w-full h-[500px]"
      />
      <Button
        onPress={nextImage}
        className="outline-none rounded-full p-2 hover:bg-black/20 transition-all focus-visible:ring-2 ring-blue-600
        absolute lg:static right-0 lg:text-black text-white"
      >
        <ArrowForwardIcon fontSize="large" />
      </Button>
    </div>
  );
};

const ImageListBox = ({ activeImageIndex, setActiveImageIndex }) => {
  return (
    <ListBox
      aria-label="select pug image"
      selectionMode="single"
      defaultSelectedKeys={[activeImageIndex]}
      onSelectionChange={(set) => setActiveImageIndex(Array.from(set)[0])}
      className="flex gap-4"
      disallowEmptySelection
      orientation="horizontal"
    >
      {images.map((img, index) => (
        <ListBoxItem
          key={img}
          id={index}
          className="outline-none border-4 selected:opacity-100 hover:opacity-100 opacity-50 border-transparent
        cursor-pointer transition-all focus-visible:border-blue-600 focus-visible:opacity-100 flex-shrink-0"
        >
          <img src={img} className="aspect-square w-40 object-cover" />
        </ListBoxItem>
      ))}
    </ListBox>
  );
};
