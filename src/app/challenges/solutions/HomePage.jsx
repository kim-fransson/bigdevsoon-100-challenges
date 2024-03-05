"use client";

import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarIcon from "@mui/icons-material/Star";

import { Button, Link } from "react-aria-components";
import Image from "next/image";
import { fredoka } from "@/app/fonts";

export const HomePage = () => {
  return (
    <div
      className={`bg-gray-950 min-h-dvh text-gray-50 grid gap-8 pb-8 ${fredoka.className}`}
    >
      <nav className="flex flex-wrap gap-4 items-center justify-between py-4 lg:px-12 px-8 border-b border-[#fc9d10]/50">
        <h2 className={`text-[#fc9d10] font-bold text-3xl`}>
          Patty Whack Shack
        </h2>
        <div className="lg:space-x-16 space-x-8 text-xl text-gray-300 *:outline-none *:cursor-pointer font-medium">
          <Link
            className={
              "text-[#fc9d10] underline underline-offset-8 decoration-2"
            }
            href=""
            target="_blank"
          >
            Home
          </Link>
          <Link href="" target="_blank">
            Burgers
          </Link>
          <Link href="" target="_blank">
            Blog
          </Link>
          <Link href="" target="_blank">
            Contact
          </Link>
        </div>
        <div className="space-x-4 text-gray-300 *:outline-none">
          <Button className="hover:text-[#fc9d10] transition-all">
            <SearchIcon />
          </Button>
          <Button className="hover:text-[#fc9d10] transition-all">
            <PersonIcon />
          </Button>
          <Button className="hover:text-[#fc9d10] transition-all">
            <LunchDiningIcon />
          </Button>
        </div>
      </nav>
      <main className="grid gap-12 md:grid-cols-2 lg:items-center justify-center lg:px-12 px-8 justify-items-center">
        <div className="max-w-md">
          <img
            src="/challenges/23/desktop-hero.png"
            className="border-4 border-gray-300 rounded-2xl"
            alt=""
          />
        </div>
        <div className="grid gap-12">
          <h1 className="lg:text-5xl text-3xl font-medium text-[#fc9d10]">
            Patty Whack Wonderland: Burger Bliss Extravaganza!
          </h1>
          <p className="text-gray-300">
            Welcome to Patty Whack Wonderland, where burgers reign supreme and
            laughter is the secret ingredient! Join us in the whimsical world of
            the Whacky Patty, where each bite is a ticket to a flavor-filled
            journey. Unleash your taste buds, share a chuckle, and embark on a
            burger adventure like no other - it&apos;s time to get pattified at
            the Patty Whack Shack!
          </p>

          <div className="grid items-stretch md:grid-cols-2 gap-8">
            <img
              src="/challenges/23/burger-1.png"
              className="border-4 rounded-2xl border-gray-300"
            />
            <img
              src="/challenges/23/burger-2.png"
              className="border-4 rounded-2xl border-gray-300"
            />
          </div>
        </div>
        <div className="lg:absolute bottom-10 left-10 rounded-2xl border-4 border-gray-300 max-w-sm p-4 bg-gray-950/50 backdrop-blur-sm">
          <div className="flex gap-4">
            <Image
              width={75}
              height={75}
              src="/challenges/23/susan.png"
              className="rounded-2xl"
            />
            <div className="grid">
              <span className="font-semibold">Susan Savory</span>
              <div className="text-sm flex items-center gap-2">
                4.5
                <StarIcon className="text-amber-400" />
                <StarIcon className="text-amber-400" />
                <StarIcon className="text-amber-400" />
                <StarIcon className="text-amber-400" />
                <StarHalfIcon className="text-amber-400" />
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm">
            &quot;Delightfully delicious! Every bite at Patty Whack Shack is a
            rollercoaster of flavors, and the laughter is the cherry on
            top&quot;
          </p>
        </div>
      </main>
    </div>
  );
};
