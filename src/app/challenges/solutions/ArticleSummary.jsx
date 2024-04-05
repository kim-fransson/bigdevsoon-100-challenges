"use client";

import { roboto } from "@/app/fonts";
import Image from "next/image";
import { Button } from "react-aria-components";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

export const ArticleSummary = () => {
  return (
    <main
      className={`${roboto.className} min-h-dvh grid place-content-center bg-indigo-100 p-4`}
    >
      <div className="bg-slate-950 rounded-lg shadow-lg max-w-md overflow-hidden text-gray-50">
        <div className="h-48 overflow-clip">
          <Image
            width={1080}
            height={618}
            alt=""
            priority
            src="/challenges/54/background.png"
          />
        </div>

        <div className="p-6 grid gap-4">
          <div className="flex items-center gap-2">
            <Image
              width={42}
              height={42}
              alt=""
              priority
              src="/challenges/54/profile.png"
              className="rounded-full border border-gray-400 overflow-hidden aspect-square"
            />
            <div className="grid">
              <span className="font-medium">Dr. Elara Mendoza</span>
              <span className="opacity-60 text-sm">24 Feb. 2024</span>
            </div>
          </div>

          <h2 className="text-2xl font-semibold">
            <span className="text-indigo-400">
              Breakthrough in Quantum Computing:
            </span>{" "}
            Entanglement Achieved at Room Temperature
          </h2>

          <ul className="flex flex-wrap gap-2">
            {[
              "#QuantumBreakthrough",
              "#FutureTech",
              "#RoomTempQuantum",
              "#InnovationUnleashed",
            ].map((tag) => (
              <li
                key={tag}
                className="py-0.5 px-1.5 text-gray-300 bg-gray-700 rounded-full text-xs"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-slate-900 p-6">
          <ul className="flex flex-wrap items-center justify-around gap-4">
            {[
              {
                title: "Love Impression",
                number: "25k+",
                Icon: FavoriteIcon,
                iconStyle: "text-[#fa1b56]",
              },
              {
                title: "Comments",
                number: "1000+",
                Icon: CommentIcon,
                iconStyle: "text-[#f3f3f3]",
              },
              {
                title: "International Award",
                number: "40+",
                Icon: EmojiEventsIcon,
                iconStyle: "text-[#f7cd5c]",
              },
            ].map((item) => (
              <div key={item.title} className="grid justify-items-center">
                <item.Icon fontSize="large" className={item.iconStyle} />
                <span className="text-2xl font-semibold">{item.number}</span>
                <span className="text-sm opacity-60">{item.title}</span>
              </div>
            ))}
          </ul>
        </div>

        <div className="p-6">
          <Button
            className="transition-all pressed:scale-95 bg-indigo-500 grid place-content-center px-4 py-3
        outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 font-medium
        rounded-lg w-full hover:bg-indigo-600"
          >
            Read Article
          </Button>
        </div>
      </div>
    </main>
  );
};
