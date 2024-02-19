"use client";

import { Roboto } from "next/font/google";
import Image from "next/image";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import PetsIcon from "@mui/icons-material/Pets";
import { Button as AriaButton } from "react-aria-components";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const ProfileCard = () => {
  return (
    <main
      className={`bg-[#eff3c0] flex h-dvh flex-col justify-center items-center text-gray-900 ${roboto.className}`}
    >
      <div className="bg-white md:rounded-[4rem] md:max-w-lg w-full md:h-[672px] h-full shadow-2xl overflow-hidden flex flex-col">
        <div className="relative h-1/4 bg-[#98314f] flex items-center justify-center">
          <div className="rounded-full overflow-clip flex">
            <Image
              width={128}
              height={128}
              src="/challenges/1/profile.webp"
              alt="cartoon cat looking to the right"
            />
          </div>
          <svg
            className="absolute bottom-1 -translate-x-[15%] translate-y-full -scale-x-100"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#e03f8d"
              fillOpacity="1"
              d="M0,64L48,101.3C96,139,192,213,288,218.7C384,224,480,160,576,117.3C672,75,768,53,864,74.7C960,96,1056,160,1152,154.7C1248,149,1344,75,1392,37.3L1440,0L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
          <svg
            className="absolute bottom-1 translate-x-[15%] translate-y-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#b24b69"
              fillOpacity="1"
              d="M0,64L48,101.3C96,139,192,213,288,218.7C384,224,480,160,576,117.3C672,75,768,53,864,74.7C960,96,1056,160,1152,154.7C1248,149,1344,75,1392,37.3L1440,0L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
          <svg
            className="absolute bottom-4 -right-2 translate-y-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#98314f"
              fillOpacity="1"
              d="M0,64L48,101.3C96,139,192,213,288,218.7C384,224,480,160,576,117.3C672,75,768,53,864,74.7C960,96,1056,160,1152,154.7C1248,149,1344,75,1392,37.3L1440,0L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
        </div>

        <div className="flex-1 pt-28 pb-8 px-12 flex flex-col items-center">
          <h2 className="md:text-4xl text-center text-3xl">
            Luna Whiskerfield
          </h2>
          <TextLink href="/challenges/1">@LunaWhiskerfield</TextLink>

          <div className="flex items-center justify-center gap-8 mt-8">
            <IconLink href="/challenges/1" Icon={FacebookRoundedIcon} />
            <IconLink href="/challenges/1" Icon={LinkedInIcon} />
            <IconLink href="/challenges/1" Icon={XIcon} />
            <IconLink href="/challenges/1" Icon={InstagramIcon} />
            <IconLink href="/challenges/1" Icon={PetsIcon} />
          </div>

          <p className="text-center mt-8 font-medium">
            Hey, it&apos;s Luna Whiskerfield here 🌟. Silver-grey fur, emerald
            eyes, and a spirit wild as the wind. I leap, explore, and reign from
            the highest perches. Dive into my adventures and the art of feline
            finesse.
            <span className="text-[#98314f]"> #EleganceInMotion</span>
            <span className="text-[#98314f]"> #AdventureCat</span>
          </p>

          <div className="mt-auto flex gap-8 w-full">
            <Button className="text-white bg-[#e03f8d]">Follow</Button>
            <Button className="text-gray-400 border-2 border-gray-400">
              Message
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

const TextLink = ({ href, children }) => {
  return (
    <a
      href={href}
      className="outline-none text-gray-400 font-medium cursor-pointer mt-1 hover:scale-105 
    hover:text-[#98314f] focus-visible:text-[#98314f] focus-visible:scale-105 transition-all"
    >
      {children}
    </a>
  );
};

const IconLink = ({ href, Icon }) => {
  return (
    <a
      href={href}
      className="w-7 h-7 cursor-pointer group outline-none 
    hover:scale-125 transition-all focus-visible:scale-125 
    focus-visible:text-[#98314f] hover:text-[#98314f]"
    >
      <Icon />
    </a>
  );
};

const Button = ({ className, children }) => {
  return (
    <AriaButton
      className={`outline-none text-lg w-full px-3 py-2 rounded-full pressed:scale-95 transition-all focus-visible:scale-105 hover:scale-105 ${className}`}
    >
      {children}
    </AriaButton>
  );
};
