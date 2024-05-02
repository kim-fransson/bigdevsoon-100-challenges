"use client";

import { fredoka } from "@/app/fonts";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { twMerge } from "tailwind-merge";

export const DeliveryDetails = () => {
  return (
    <main
      className={`${fredoka.className} min-h-dvh bg-yellow-200 p-4 flex justify-center items-center`}
    >
      <div className="rounded-2xl shadow-2xl bg-neutral-50 text-neutral-800 px-5 pt-10 py-8 max-w-screen-sm w-full">
        <h2 className="text-xl font-semibold">Delivery Details</h2>
        <pairlist className="bg-neutral-200/80 p-4 rounded-xl flex flex-col mt-4 gap-4">
          <pair className="flex justify-between gap-4">
            <key className="font-medium">Track number</key>
            <value>
              <div className="flex items-center gap-2">
                <span className="font-medium text-blue-500">HY2-03AQWES12</span>
                <OpenInNewIcon fontSize="inherit" />
              </div>
            </value>
          </pair>
          <pair className="flex justify-between gap-4">
            <key className="font-medium">Seller name</key>
            <value className="font-medium">SilkScape, Textiles Co.</value>
          </pair>
        </pairlist>

        <h3 className="text-lg font-semibold mt-8">Tracking History</h3>

        <div className="bg-neutral-200/80 p-4 rounded-xl mt-4 grid grid-cols-[auto_1fr_1fr]">
          <div className="flex flex-col gap-3 justify-between">
            {states.map((state) => (
              <div className="flex flex-col gap-1" key={state.state}>
                <span className="font-medium">{state.date}</span>
                <span className="text-sm text-neutral-500">
                  At {state.timestamp}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center justify-center">
            {states.map((state, index) => (
              <>
                <div
                  className={twMerge(
                    "size-6 shadow-md relative rounded-full after:content-[''] after:absolute after:size-3 after:rounded-full",
                    "after:-translate-x-1/2 after:left-1/2 after:top-1/2 after:-translate-y-1/2",
                    index === 0
                      ? "bg-neutral-100 after:bg-yellow-300"
                      : "bg-neutral-200 after:bg-neutral-800",
                  )}
                  key={state.state}
                ></div>
                {index !== states.length - 1 && (
                  <div className="h-10 w-[1px] bg-neutral-800"></div>
                )}
              </>
            ))}
          </div>

          <div className="flex flex-col gap-3 justify-between">
            {states.map((state) => (
              <div className="flex flex-col gap-1" key={state.state}>
                <span className="font-medium capitalize">{state.state}</span>
                <span className="text-sm text-neutral-500">
                  {state.location}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

const states = [
  {
    state: "order received",
    date: "27th April 2024",
    timestamp: "12:30 PM",
    location: "456 Elm Avenue, Smallville, CA",
  },
  {
    state: "order picked up",
    date: "28th April 2024",
    timestamp: "10:00 AM",
    location: "Smallville Warehouse, CA",
  },
  {
    state: "in transit",
    date: "29th April 2024",
    timestamp: "8:45 AM",
    location: "Transit Hub, Los Angeles, CA",
  },
  {
    state: "out for delivery",
    date: "30th April 2024",
    timestamp: "7:30 AM",
    location: "Smallville, CA",
  },
  {
    state: "delivered",
    date: "1st May 2024",
    timestamp: "1:15 PM",
    location: "456 Elm Avenue, Smallville, CA",
  },
].reverse();
