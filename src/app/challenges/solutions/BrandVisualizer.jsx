"use client";
import { Input, Separator } from "react-aria-components";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { fredoka } from "@/app/fonts";
import { useState } from "react";

export const BrandVisualizer = () => {
  const [brandColor, setBrandColor] = useState("#7e22ce");
  return (
    <main
      className={`flex justify-center items-center min-h-dvh p-4 bg-gray-900 ${fredoka.className}`}
    >
      <div className="rounded-2xl shadow-2xl overflow-hidden px-6 py-4 bg-white">
        <h2 className="text-2xl font-semibold">Brand Colors</h2>
        <Separator className="-mx-6 my-4" />
        <p>
          Choose a brand color to unify and distinguish your brand&apos;s
          presence everywhere.
        </p>
        <div className="my-4 flex gap-4 items-center">
          <label className="font-semibold" htmlFor="brandColor">
            Brand color:
          </label>
          <Input
            id="brandColor"
            type="color"
            value={brandColor}
            onChange={(e) => setBrandColor(e.target.value)}
            className="size-10 cursor-pointer bg-transparent"
          />
        </div>
        <div className="px-6 py-8 -mb-4 -mx-6 gap-8 bg-gray-200 grid md:grid-cols-2">
          <div className="bg-white rounded-lg p-4 text-gray-600 flex flex-col min-h-96">
            <div className="flex items-center gap-4 border-b pb-4 -mx-4 px-4">
              <div className="size-8 rounded-full border"></div>
              <div className="h-4 w-24 bg-gray-800 rounded"></div>
              <CloseIcon className="ml-auto" fontSize="small" />
            </div>
            <div className="p-4 flex items-center justify-center h-full">
              <div className="w-full border p-2 rounded-2xl grid gap-2">
                <div className="w-3/4 h-4 bg-gray-300 rounded-full"></div>

                <Separator className="-mx-2" />

                <div className="w-2/5 h-4 bg-gray-800 rounded-full"></div>

                <div
                  style={{ borderColor: brandColor }}
                  className="w-full border h-5 rounded px-2 py-1"
                >
                  <div className="h-full w-0.5 bg-gray-800 rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="border-t -mx-4 px-4 pt-4 flex mt-auto">
              <div
                style={{ background: brandColor }}
                className="rounded h-8 w-full"
              ></div>
            </div>
          </div>
          <div className="bg-white flex flex-col rounded-lg p-4 text-gray-600">
            <div className="flex items-center gap-4 border-b pb-4 -mx-4 px-4">
              <div className="size-8 rounded-full border"></div>
              <div className="h-4 w-24 bg-gray-800 rounded"></div>
              <CloseIcon className="ml-auto" fontSize="small" />
            </div>
            <div className="flex items-center justify-center p-4 h-full">
              <div className="flex flex-col gap-2 items-center">
                <div className="border rounded-full p-1 flex items-center justify-center">
                  <CheckCircleIcon
                    fontSize="large"
                    style={{ color: brandColor }}
                  />
                </div>
                <div className="h-3 w-20 bg-gray-800 rounded"></div>
                <div className="h-3 w-36 bg-gray-300 rounded"></div>
              </div>
            </div>
            <div className="border-t -mx-4 px-4 pt-4 flex gap-4 mt-auto">
              <div className="rounded h-8 bg-gray-300 w-full"></div>
              <div
                style={{ background: brandColor }}
                className="rounded h-8 w-full"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
