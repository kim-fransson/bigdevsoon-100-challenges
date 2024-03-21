"use client";

import { fredoka } from "@/app/fonts";
import { Button } from "react-aria-components";

import qrCode from "../../assets/qr-code.svg";
import Image from "next/image";

export const QRCodeScanner = () => {
  return (
    <main
      className={`flex items-center justify-center min-h-dvh bg-teal-200 text-gray-50 p-4 ${fredoka.className}`}
    >
      <div className="rounded-2xl shadow-xl pt-8 bg-gray-950 max-w-sm space-y-5 px-4">
        <h2 className="text-xl font-semibold text-center">Scan QR Code</h2>
        <p className="text-center font-medium">
          Position the QR code within the frame for fast scanning. Minimize
          shaking to expedite results.
        </p>
        <div className="bg-white rounded-2xl p-6 grid place-items-center gap-8 -mx-4">
          <div className="relative p-8">
            <div className="absolute top-0 left-0 size-12 border-l-8 border-t-8 border-teal-400 rounded-tl-2xl"></div>
            <div className="absolute top-0 right-0 size-12 border-r-8 border-t-8 border-teal-400 rounded-tr-2xl"></div>
            <div className="absolute bottom-0 left-0 size-12 border-l-8 border-b-8 border-teal-400 rounded-bl-2xl"></div>
            <div className="absolute bottom-0 right-0 size-12 border-r-8 border-b-8 border-teal-400 rounded-br-2xl"></div>
            <Image priority src={qrCode} alt="" className="" />
          </div>
          <Button
            className="outline-none transition-all pressed:scale-95 rounded-lg 
          bg-teal-400 text-gray-950 px-4 py-3 font-medium hover:bg-teal-500 w-full
          focus-visible:outline-2 focus-visible:outline-teal-400 focus-visible:outline-offset-2"
          >
            Scan QR Code
          </Button>
        </div>
      </div>
    </main>
  );
};
