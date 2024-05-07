"use client";

import { poppins } from "@/app/fonts";
import { Edit } from "@mui/icons-material";
import StarIcon from "@mui/icons-material/Star";
import Image from "next/image";
import {
  Separator,
  ProgressBar as AriaProgressBar,
  Meter,
  Label,
  Button,
} from "react-aria-components";

export const CustomerReviews = () => {
  return (
    <main
      className={`${poppins.className} bg-[#bec0d9] min-h-dvh flex justify-center items-center px-4`}
    >
      <div
        className="rounded-3xl shadow-2xl p-4 bg-white text-neutral-800 max-w-screen-sm w-full
      flex flex-col gap-2"
      >
        <h2 className="font-bold text-xl tracking-wide">
          Whisk & Ladle Bistro
        </h2>
        <div className="flex items-center gap-1 text-sm font-medium">
          <span>4</span>
          <StarIcon fontSize="small" className="text-[#ffcd1e]" />
          <StarIcon fontSize="small" className="text-[#ffcd1e]" />
          <StarIcon fontSize="small" className="text-[#ffcd1e]" />
          <StarIcon fontSize="small" className="text-[#ffcd1e]" />
          <StarIcon fontSize="small" className="text-[#ffe898]" />
          <span className="text-neutral-600">(231 reviews)</span>
        </div>

        <div className="grid mt-2 grid-cols-3 grid-rows-2 aspect-[4/2] gap-4">
          <div className="col-span-2 row-span-2 overflow-hidden rounded-lg">
            <Image
              width={0}
              height={0}
              className="h-full w-full object-cover"
              src="/challenges/85/food-2.jpg"
              alt=""
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <Image
              width={0}
              height={0}
              className="h-full w-full object-cover"
              src="/challenges/85/bread.jpg"
              alt=""
            />
          </div>
          <div className="bg-red-100 rounded-lg overflow-hidden object-cover">
            <Image
              width={0}
              height={0}
              className="h-full w-full"
              src="/challenges/85/food-1.jpg"
              alt=""
            />
          </div>
        </div>

        <Separator
          orientation="horizontal"
          className="border rounded-full mt-2 border-neutral-300"
        />
        <h3 className="text-lg font-semibold text-center">Customer review</h3>

        <div className="rounded-full p-3 bg-[#f6f6fe] flex items-center justify-center gap-4">
          <div className="space-x-1 text-3xl">
            <StarIcon fontSize="inherit" className="text-[#ffcd1e]" />
            <StarIcon fontSize="inherit" className="text-[#ffcd1e]" />
            <StarIcon fontSize="inherit" className="text-[#ffcd1e]" />
            <StarIcon fontSize="inherit" className="text-[#ffcd1e]" />
            <StarIcon fontSize="inherit" className="text-[#ffe898]" />
          </div>
          <span className="text-neutral-600 text-sm mt-1 font-medium">
            4 out of 5
          </span>
        </div>

        <div className="flex flex-col gap-2 mt-2">
          <ReviewMeter label={5} value={600} />
          <ReviewMeter label={4} value={800} />
          <ReviewMeter label={3} value={650} />
          <ReviewMeter label={2} value={150} />
          <ReviewMeter label={1} value={50} />
        </div>

        <Button
          className="flex items-center gap-2 px-12 py-2 text-sm border-neutral-300 border-2 mx-auto
        rounded-full transition-all pressed:scale-95 pressed:bg-[#ffcd1e] pressed:border-[#ffcd1e]
        hover:bg-[#ffcd1e] hover:border-[#ffcd1e] pressed:text-neutral-50 hover:text-neutral-50 font-medium
        outline-none focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#ffcd1e]
        mt-6"
        >
          <Edit fontSize="small" /> Write Opinion
        </Button>
      </div>
    </main>
  );
};

const ReviewMeter = ({ value, label }) => {
  return (
    <Meter value={value} maxValue={1000}>
      {({ percentage }) => (
        <div className="grid grid-cols-[14px_1fr] text-xs items-center">
          <Label className="font-medium">{label}</Label>
          <div className="h-2.5 w-full rounded-full bg-[#f2f5fe]">
            <div
              className="bg-[#ffcd1e] h-full rounded-full"
              style={{ width: percentage + "%" }}
            />
          </div>
        </div>
      )}
    </Meter>
  );
};
