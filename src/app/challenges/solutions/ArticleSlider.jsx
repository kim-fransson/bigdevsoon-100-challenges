"use client";

import Image from "next/image";
import {
  Button,
  OverlayArrow,
  Tooltip,
  TooltipTrigger,
} from "react-aria-components";

import ShareIcon from "@mui/icons-material/Share";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CircleIcon from "@mui/icons-material/Circle";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { fredoka } from "@/app/fonts";
import { useState } from "react";

export const ArticleSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <main
      className={`min-h-dvh items-center justify-center flex bg-amber-100 ${fredoka.className}`}
    >
      <div className="relative">
        <Button
          isDisabled={activeIndex === 0}
          onPress={() => setActiveIndex(curr => curr - 1)}
          className="bg-gray-300 outline-none disabled:opacity-50 flex items-center justify-center p-1 rounded-md
        focus-visible:ring-2 focus-visible:ring-blue-500 transition-all pressed:scale-90 hover:bg-gray-400
        top-1/2 -translate-y-1/2 absolute -translate-x-full -left-2 shadow-md"
        >
          <ArrowBackIosNewIcon />
        </Button>
        <Button
          isDisabled={activeIndex === (articles.length - 1)}
          onPress={() => setActiveIndex(curr => curr + 1)}
          className="bg-gray-300 outline-none disabled:opacity-50 flex items-center justify-center p-1 rounded-md
        focus-visible:ring-2 focus-visible:ring-blue-500 transition-all pressed:scale-90 hover:bg-gray-400
        top-1/2 -translate-y-1/2 absolute translate-x-full -right-2 shadow-md"
        >
          <ArrowForwardIosIcon />
        </Button>
        <Article article={articles[activeIndex]} />
        <PaginationIndicator
          activeIndex={activeIndex}
          totalItems={articles.length}
        />
      </div>
    </main>
  );
};

const PaginationIndicator = ({ activeIndex, totalItems }) => {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 translate-y-full -bottom-2 space-x-2">
      {Array.from({ length: totalItems }, (_, index) => (
        <CircleIcon
          key={index}
          className={activeIndex === index ? "text-blue-400" : "text-gray-300"}
          fontSize="inherit"
        />
      ))}
    </div>
  );
};

const Article = ({ article }) => {
  const { author } = article;
  return (
    <div className="md:flex md:flex-row md:max-w-5xl bg-white rounded-lg shadow-xl overflow-hidden">
      <Image width={385} height={330} src={article.image} alt="" />
      <div className="p-8 flex flex-col overflow-hidden justify-between gap-4">
        <h2 className="text-3xl font-semibold">{article.title}</h2>
        <p className="line-clamp-6 text-lg">{article.content}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image
              width={40}
              height={40}
              src={author.profileImage}
              className="rounded-full shadow-md"
              alt=""
            />
            <div className="grid">
              <span className="font-medium">{author.name}</span>
              <span className="text-sm text-gray-600">
                {article.publicationDate}
              </span>
            </div>
          </div>
          <TooltipTrigger delay={100} closeDelay={300}>
            <Button
              className="bg-gray-300 transition-all outline-none p-1 rounded-md flex items-center justify-center
            focus:bg-blue-200 focus:ring-2 focus:ring-blue-500 hover:ring-blue-500 hover:bg-blue-200 hover:ring-2"
            >
              <ShareIcon />
            </Button>
            <Tooltip
              offset={10}
              className="text-gray-50 bg-gray-950 rounded-md shadow-md py-2 px-4 
            flex items-center justify-center gap-4"
            >
              <OverlayArrow>
                <svg width={8} height={8} viewBox="0 0 8 8">
                  <path d="M0 0 L4 4 L8 0" />
                </svg>
              </OverlayArrow>
              <FacebookIcon />
              <XIcon />
              <LinkedInIcon />
            </Tooltip>
          </TooltipTrigger>
        </div>
      </div>
    </div>
  );
};

const articles = [
  {
    title: "Enchanted Elixirs: The Secret of the Sanguine Stout",
    content:
      "In an enchanted forest grove, Alechemist Alice combines nature's bounty with a touch of magic to create the 'Sanguine Stout', a red ale rich with the essence of adventure and laughter. Unlike traditional brewers, Alice's process involves a secret blend of herbs and starlight, making her stout a beacon of joy and community. As she unveils her creation, the forest and its inhabitants come alive, celebrating the magic that turns a simple drink into a potion of togetherness. Alice's grove is not just a place of brewing; it's a sanctuary where every sip weaves the fabric of unity tighter, proving once again that the greatest alchemy is the kind that brings hearts together.",
    author: {
      name: "Alexander Reed",
      profileImage: "/challenges/17/alexander_reed.png",
    },
    image: "/challenges/17/enchanted_elixirs.webp",
    publicationDate: "7 Mar. 2024",
  },
  {
    title: "Whispers of the Wind: Brews That Speak to the Soul",
    content:
      "Nestled on the edge of the mystical forest, where the wind carries tales of old, Master Brewer Eliot crafts ales that whisper to the soul. In his wind-kissed brewery, the elements themselves contribute to the brewing process, with gusts infusing the ales with the essence of freedom and whispers of the forest. His latest creation, the 'Zephyr Zest', is a light, refreshing brew that carries the laughter of the leaves and the serenity of the skies. Eliot’s approach to brewing is a blend of tradition and magic, where every batch tells a story and connects the drinker to the natural world in a sip of harmony.",
    author: {
      name: "Alexander Reed",
      profileImage: "/challenges/17/alexander_reed.png",
    },
    image: "/challenges/17/whispers_of_the_wind.webp",
    publicationDate: "12 Apr. 2024",
  },
  {
    title: "Shadows and Spirits: The Nocturnal Nectar of the Night",
    content:
      "Beneath the velvet cloak of night, in a secluded glen shrouded in mystery, there brews a potion unlike any other. This is the domain of Luna, the Night Brewer, whose mastery over the dark arts of fermentation conjures the 'Nocturnal Nectar', a brew that dances with shadows and whispers secrets of the moon. Luna’s brewery is a haven for those who seek the thrill of the unknown, where each sip of her midnight concoction promises visions of night skies scattered with stars and the serene silence of the nocturnal world. The 'Nocturnal Nectar' is not merely a beverage; it's a bridge to the mystical, a draught that connects the drinker to the deeper, hidden layers of the night. Luna's craft is a celebration of the dark, a testament to the beauty and mystery that thrives under the moon's watchful gaze.",
    author: {
      name: "Alexander Reed",
      profileImage: "/challenges/17/alexander_reed.png",
    },
    image: "/challenges/17/shadows_and_spritis.webp",
    publicationDate: "4 May. 2024",
  },
  {
    title: "Dawn's Dew: The Elixir of Sunrise",
    content:
      "As the first rays of dawn pierce the night, there's a place where the dew itself is said to hold the essence of the sunrise. Here, in a clearing kissed by the morning light, Dawn Brewer Delilah practices her craft. With the patience of the coming day and the freshness of a new dawn, she brews the 'Elixir of Sunrise,' a drink that captures the hope and renewal of morning. This golden brew sparkles with the promise of beginnings, its flavor infused with the first light and the cool touch of dawn's dew. Delilah's brewery is a testament to the magic of the morning, where every batch is a reflection of the day's potential. The 'Elixir of Sunrise' is more than a beverage; it's a ritual, a moment of reflection for those who greet the day with open hearts and minds, offering a taste of the day's boundless possibilities.",
    author: {
      name: "Alexander Reed",
      profileImage: "/challenges/17/alexander_reed.png",
    },
    image: "/challenges/17/dawn_of_elexir.webp",
    publicationDate: "6 Jun. 2024",
  },
  {
    title: "Twilight Tincture: The Evening's Embrace",
    content:
      "As the sky dons its evening hues and twilight blankets the land, there exists a secluded cove where the day's end is celebrated with a special brew. This is the sanctuary of Twilight Brewer Evelyn, whose mastery of the dusk creates the 'Twilight Tincture,' a beverage that embodies the tranquility and beauty of the evening. Evelyn's brew captures the essence of the setting sun, blending the calm of the approaching night with the remnants of the day's warmth. The 'Twilight Tincture' is a symphony of flavors that evokes the peace of the evening, offering a moment of reflection for those who savor its richness. In Evelyn's hands, the cove becomes a place where time slows, allowing the drinker to embrace the night's gentle arrival with a heart full of the day's memories. The 'Twilight Tincture' is not just a drink; it's an experience, a ritual that honors the passage from day to night, inviting all to find solace in the embrace of the evening.",
    author: {
      name: "Alexander Reed",
      profileImage: "/challenges/17/alexander_reed.png",
    },
    image: "/challenges/17/twilight_tincture.webp",
    publicationDate: "6 Jun. 2024",
  },
];
