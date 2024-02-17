"use client";
import { useEffect, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Button } from "react-aria-components";

const images = [
  "/challenges/6/1.png",
  "/challenges/6/2.png",
  "/challenges/6/3.png",
  "/challenges/6/4.png",
  "/challenges/6/5.png",
  "/challenges/6/6.png",
];

export default function ImageCarousel() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const nextImage = () => {
    setActiveImageIndex((curr) => (curr + 1) % images.length);
  };

  const previousImage = () => {
    setActiveImageIndex((curr) => (curr - 1 + images.length) % images.length);
  };
  return (
    <main className="grid items-center justify-center min-h-dvh bg-[#e7dac9]">
      <div className="grid items-center justify-center gap-16">
        <ActiveImage
          src={images[activeImageIndex]}
          nextImage={nextImage}
          previousImage={previousImage}
        />
        <ImageList activeImageIndex={activeImageIndex} />
      </div>
    </main>
  );
}

const ActiveImage = ({ src, nextImage, previousImage }) => {
  return (
    <div className="flex items-center gap-8">
      <Button onPress={previousImage} className="outline-none">
        <ArrowBackIcon fontSize="large" />
      </Button>
      <div>
        <img
          src={src}
          alt=""
          className="aspect-[7/3] w-[1200px] object-cover"
        />
      </div>
      <Button onPress={nextImage} className="outline-none">
        <ArrowForwardIcon fontSize="large" />
      </Button>
    </div>
  );
};

const ImageList = ({ activeImageIndex }) => {
  return (
    <div className="overflow-x-auto overflow-clip">
      <div className="flex gap-4">
        {images.map((img, index) => (
          <div key={img}>
            <img
              src={img}
              className={`aspect-square w-40 object-cover border-4  ${index  === activeImageIndex ? "border-[#3f1a11]" : "border-transparent"}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
