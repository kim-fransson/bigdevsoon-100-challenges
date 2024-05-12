"use client";

import { roboto } from "@/app/fonts";
import { Button, Group } from "react-aria-components";
import { tv } from "tailwind-variants";

import VolumeUpOutlinedIcon from "@mui/icons-material/VolumeUpOutlined";
import MicOffOutlinedIcon from "@mui/icons-material/MicOffOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import DialpadOutlinedIcon from "@mui/icons-material/DialpadOutlined";

import CallEndIcon from "@mui/icons-material/CallEnd";

const focusRing = tv({
  base: "outline outline-green-600 outline-offset-1 outline-0 focus-visible:outline-2",
});

const buttonStyles = tv({
  extend: focusRing,
  base: [
    "flex items-center justify-center p-2 transition-all pressed:scale-95 rounded-full bg-black/30 text-neutral-200",
  ],
});

export const VoiceCall = () => {
  return (
    <main
      className={`${roboto.className} min-h-dvh bg-[#b8c6e1] flex items-center justify-center`}
    >
      <div className="relative lg:rounded-3xl lg:shadow-lg lg:min-h-[600px] min-h-dvh w-full lg:max-w-sm overflow-hidden text-neutral-50">
        <div className="bg-[url('/challenges/89/salesman.jpg')] inset-0 bg-cover absolute" />
        <div className="absolute inset-0 backdrop-blur-sm bg-black/50" />
        <div className="absolute inset-0 z-10 flex flex-col items-center py-10 px-4 gap-1">
          <p className="text-green-400 text-lg">In call with</p>
          <p className="text-2xl font-semibold">Jamie Olson</p>
          <p className="text-neutral-300">04:03</p>

          <div className="bg-[url('/challenges/89/salesman.jpg')] size-32 rounded-full bg-cover mt-2" />

          <Group className="flex items-center gap-4 mt-8">
            <Button className={buttonStyles()}>
              <VolumeUpOutlinedIcon />
            </Button>
            <Button className={buttonStyles()}>
              <MicOffOutlinedIcon />
            </Button>
            <Button className={buttonStyles()}>
              <VideocamOutlinedIcon />
            </Button>
            <Button className={buttonStyles()}>
              <DialpadOutlinedIcon />
            </Button>
          </Group>

          <div
            className="w-full bg-black/30 border-neutral-100/30 border rounded-full text-neutral-300 flex justify-end py-2 px-4 relative max-w-64
          mt-auto"
          >
            <div
              className="bg-red-500 size-11 rounded-full absolute -translate-y-1/2 top-1/2 -left-[1px] grid place-items-center
            text-3xl text-neutral-50 tracking-wide"
            >
              <CallEndIcon fontSize="inherit" />
            </div>
            Slide to decline
          </div>
        </div>
      </div>
    </main>
  );
};
