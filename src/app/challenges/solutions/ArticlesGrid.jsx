"use client";

import { roboto } from "@/app/fonts";
import { Button, GridList, GridListItem } from "react-aria-components";
import { tv } from "tailwind-variants";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const focusRing = tv({
  base: "outline outline-blue-500 outline-offset-2 outline-0 focus-visible:outline-2",
});

const buttonStyles = tv({
  extend: focusRing,
  base: [
    "rounded-lg flex items-center justify-center gap-2 bg-blue-600 transition-all pressed:scale-95 font-medium",
    "w-full hover:bg-blue-700 text-neutral-50 py-1 px-2 text-sm",
  ],
});

export const ArticlesGrid = () => {
  return (
    <main
      className={`min-h-dvh bg-neutral-100 flex items-center justify-center p-4 ${roboto.className}`}
    >
      <GridList
        className="sm:grid flex flex-col grid-cols-4 grid-rows-4 gap-6 max-w-screen-lg w-full aspect-[1.4]"
        items={articles}
        aria-label="articles"
      >
        {(item) => (
          <GridListItem
            className={twMerge(
              "rounded-md overflow-hidden shadow-lg",
              focusRing(),
            )}
            style={{
              gridColumn: `span ${item.colsize} / span ${item.colsize}`,
              gridRow: `span ${item.rowsize} / span ${item.rowsize}`,
            }}
          >
            <Article article={item} />
          </GridListItem>
        )}
      </GridList>
    </main>
  );
};

const Article = ({ article }) => {
  return (
    <div className="relative flex bg-black flex-col h-full items-center group justify-center text-neutral-50 @container">
      <div className="max-w-80 relative z-10 p-4 gap-1 @sm:gap-3 group-hover:opacity-100 flex flex-col opacity-0 transition-opacity duration-300">
        <span className="text-xs text-neutral-200 @sm:mx-auto">
          {article.date}
        </span>
        <h2 className="line-clamp-1 @sm:text-center text-lg @sm:text-3xl @sm:line-clamp-none font-medium">
          {article.title}
        </h2>
        <p className="line-clamp-2 text-neutral-200 text-xs @sm:text-base @sm:line-clamp-none @sm:text-center">
          {article.summary}
        </p>
        <Button
          className={buttonStyles({ class: "mt-2 @sm:py-2 @sm:text-base" })}
        >
          Read more <ArrowForwardIcon fontSize="small" />
        </Button>
      </div>
      <Image
        width={0}
        height={0}
        className="w-full h-full absolute object-cover group-hover:opacity-50 transition-opacity duration-300"
        src={`/challenges/80/${article.image}`}
        alt=""
      />
    </div>
  );
};

const articles = [
  {
    id: 1,
    title: "The Rise of Hyperloop Technology",
    image: "hyperloop.png",
    date: "1 May 2024",
    colsize: 1,
    rowsize: 1,
    summary:
      "Exploring the game-changing potential of Hyperloop technology in revolutionizing transportation.",
  },
  {
    id: 2,
    title: "Cultivating Sustainable Alternatives",
    colsize: 1,
    image: "sustainable.png",
    rowsize: 1,
    date: "2 May 2024",
    summary:
      "Delving into innovative approaches to cultivating sustainable food sources for a growing population.",
  },
  {
    id: 3,
    title: "Transforming Patient Care",
    date: "3 May 2024",
    image: "patient.png",
    colsize: 2,
    rowsize: 3,
    summary:
      "Examining the impact of artificial intelligence on improving patient care and healthcare outcomes.",
  },
  {
    id: 4,
    title: "The Final Frontier for Travelers",
    date: "4 May 2024",
    colsize: 2,
    image: "travelers.png",
    rowsize: 3,
    summary:
      "Embarking on an adventure to explore the burgeoning industry of space tourism and its future prospects.",
  },
  {
    id: 5,
    title: "Transforming Entertainment",
    date: "5 May 2024",
    colsize: 1,
    image: "tech.png",
    rowsize: 1,
    summary:
      "Diving into the immersive world of virtual reality and its influence on entertainment experiences.",
  },
  {
    id: 6,
    title: "Embracing Remote Collaboration",
    date: "6 May 2024",
    colsize: 1,
    image: "remote.png",
    rowsize: 1,
    summary:
      "Navigating the shift towards remote work and exploring the tools and strategies for effective collaboration.",
  },
];
