"use client";

import { poppins } from "@/app/fonts";
import { Link as AriaLink, Button as AriaButton } from "react-aria-components";
import { twMerge } from "tailwind-merge";
import SouthIcon from "@mui/icons-material/South";
import Image from "next/image";

export const MusicFestival = () => {
  return (
    <main
      className={`min-h-dvh bg-[url('/challenges/38/dj-background.png')] 
    bg-cover bg-no-repeat text-gray-50 bg-indigo-700 bg-blend-hard-light ${poppins.className}`}
    >
      <nav className="backdrop-blur-md px-12 py-4 flex items-center gap-x-2 gap-y-3 backdrop-brightness-75 flex-wrap">
        <span className="font-extrabold tracking-widest text-2xl">
          ELECTROFESTIVAL
        </span>
        <div className="flex items-center gap-2">
          <Badge>3-6 JULY</Badge>
          <Badge>BARCELONA, SPAIN</Badge>
        </div>
        <ul className="ml-auto flex items-center gap-x-4 gap-y-2 flex-wrap">
          <Link isDisabled isCurrent>
            Tickets
          </Link>
          <Link isDisabled>Lineup</Link>
          <Link isDisabled>News</Link>
          <Link isDisabled>Artists</Link>
          <Link isDisabled>Explore</Link>
        </ul>
      </nav>
      <h1 className="md:text-7xl text-5xl font-bold inline-grid gap-3 absolute md:right-16 right-8 md:top-32 top-56 justify-items-end">
        <span>2024</span>
        <span className="text-[#81ff5c]">ELECTRO</span>
        <span>MUSIC</span>
        <span className="text-[#81ff5c]">FESTIVAL</span>
      </h1>
      <Button
        className="inline-flex flex-col gap-10 items-center absolute left-4 bottom-16 text-sm text-gray-200
      animate-bounce animate-duration-[2000ms]"
      >
        <span className="-rotate-90">Scroll down</span>
        <SouthIcon fontSize="small" />
      </Button>
      <div
        className="hidden lg:flex absolute gap-3 flex-col left-56 bottom-24 
      w-full max-w-sm px-2.5 py-2 backdrop-brightness-50 border-gray-500 border rounded-2xl backdrop-blur-md"
      >
        <h2 className="font-semibold">What is ELECTRO MUSIC FESTIVAL?</h2>
        <p className="text-gray-400 text-xs">
          Immerse in the rhythm of ELECTROFESTIVAL, the pulse of
          Barcelona&apos;s electrifying three-day house music odyssey.
        </p>
        <div className="overflow-hidden relative pt-[56.25%] rounded-2xl shadow-2xl">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/4a-WM6ab8Tk"
          ></iframe>
        </div>
        <span className="text-gray-400 text-xs">
          2023 Official Trailer (not really)
        </span>
      </div>
    </main>
  );
};

const Button = (props) => {
  return (
    <AriaButton
      {...props}
      className={twMerge(
        "outline-none focus-visible:outline-2 focus-visible:outline-[#81ff5c] outline-offset-1 transition-all pressed:scale-95",
        props.className,
      )}
    >
      {props.children}
    </AriaButton>
  );
};

const Link = (props) => {
  return (
    <AriaLink
      href="/challenges/38"
      {...props}
      className={twMerge(
        "font-medium py-1.5 px-3 rounded-full focus-visible:outline-2 focus-visible:outline-[#81ff5c] outline-offset-1 outline-none",
        props.isCurrent ? "bg-[#81ff5c] text-gray-950" : "",
      )}
    >
      {props.children}
    </AriaLink>
  );
};

const Badge = (props) => {
  return (
    <span className="border-2 rounded-full px-2 font-medium border-[#81ff5c] text-[#81ff5c]">
      {props.children}
    </span>
  );
};
