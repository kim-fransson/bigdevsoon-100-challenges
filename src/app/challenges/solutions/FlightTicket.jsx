import { roboto } from "@/app/fonts";

import FlightIcon from "@mui/icons-material/Flight";
import { twMerge } from "tailwind-merge";

import notSupported from "@/app/assets/not-supported.svg";
import Image from "next/image";

export const FlightTicket = () => {
  return (
    <main
      className={`min-h-dvh flex justify-center items-center p-4 bg-sky-300 ${roboto.className}`}
    >
      <div className="bg-white lg:flex hidden p-8 gap-5 items-center min-h-80 max-w-screen-md w-full rounded-2xl">
        <div className="flex flex-col items-center gap-4 flex-1">
          <FlightDuration />
          <div className="bg-sky-200/70 flex justify-around py-5 px-4 rounded-2xl w-full">
            <div className="flex flex-col items-center">
              <span className="uppercase text-xs opacity-60 font-medium">
                full name
              </span>
              <span className="text-lg font-medium">John Doe</span>
            </div>

            <div className="flex flex-col items-center">
              <span className="uppercase text-xs opacity-60 font-medium">
                seat number
              </span>
              <span className="text-lg font-medium">43C</span>
            </div>

            <div className="flex flex-col items-center">
              <span className="uppercase text-xs opacity-60 font-medium">
                terminal
              </span>
              <span className="text-lg font-medium">3</span>
            </div>

            <div className="flex flex-col items-center">
              <span className="uppercase text-xs opacity-60 font-medium">
                class
              </span>
              <span className="text-lg font-medium">Business</span>
            </div>
          </div>
        </div>
        <div className="self-stretch relative border-dashed border-l border-gray-950">
          <div className="bg-sky-300 size-8 -top-8 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full absolute"></div>
          <div className="bg-sky-300 size-8 left-1/2 -translate-x-1/2 translate-y-1/2 -bottom-8 rounded-full absolute"></div>
        </div>
        <div className="flex">
          <div className="flex flex-col -rotate-90">
            <FlightDuration className="scale-75" />
            <div className="flex justify-around w-full">
              <div className="flex flex-col items-center">
                <span className="uppercase text-xs opacity-60 font-medium">
                  departure
                </span>
                <span className="font-medium text-sky-500 text-sm">
                  12:30AM
                </span>
              </div>

              <div className="flex flex-col items-center">
                <span className="uppercase text-xs opacity-60 font-medium">
                  arrival
                </span>
                <span className="font-medium text-sky-500 text-sm">2:40PM</span>
              </div>

              <div className="flex flex-col items-center">
                <span className="uppercase text-xs opacity-60 font-medium">
                  seat number
                </span>
                <span className="font-medium text-sky-500 text-sm">43C</span>
              </div>

              <div className="flex flex-col items-center">
                <span className="uppercase text-xs opacity-60 font-medium">
                  ticket no.
                </span>
                <span className="font-medium text-sky-500 text-sm">
                  FFAED43
                </span>
              </div>
            </div>
            <div className="w-full mt-8 bg-black h-20"></div>
          </div>
        </div>
      </div>
      <div className="lg:hidden flex flex-col items-center">
        <Image src={notSupported} width={270} height={420} alt="" />
        <h3 className="text-2xl font-semibold -mt-8 text-center">Lazy...</h3>
      </div>
    </main>
  );
};

const FlightDuration = ({ className }) => {
  return (
    <div className={twMerge("flex gap-12 items-end", className)}>
      <div className="flex flex-col items-center">
        <span className="text-sky-500 font-medium text-3xl">NYC</span>
        <span className="text-sm opacity-70">12.30AM</span>
      </div>

      <div className="flex flex-col items-center gap-2 relative pb-6">
        <FlightIcon className="rotate-90 text-sky-500" />
        <div
          className="w-28 flight-path h-12 border-t-2 border-dashed border-gray-950 absolute top-7
          after:content-[''] after:size-1.5 after:rounded-full after:bg-sky-500 after:block after:absolute after:top-3.5 after:-left-1
          before:content-[''] before:size-1.5 before:rounded-full before:bg-sky-500 before:block before:absolute before:top-3.5 before:-right-1"
        ></div>
        <span className="text-sm opacity-70 mt-4">8hr 10min</span>
      </div>

      <div className="flex flex-col items-center">
        <span className="text-sky-500 font-medium text-3xl">ROM</span>
        <span className="text-sm opacity-70">2.40PM</span>
      </div>
    </div>
  );
};
