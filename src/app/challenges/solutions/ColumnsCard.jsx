"use client";

import { fredoka } from "@/app/fonts";

import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import SettingsIcon from "@mui/icons-material/Settings";
import HandshakeIcon from "@mui/icons-material/Handshake";
import { Button } from "react-aria-components";

export const ColumnsCard = () => {
  return (
    <main
      className={`${fredoka.className} min-h-dvh flex items-center justify-center bg-white p-4`}
    >
      <div className="max-w-screen-lg w-full rounded-2xl overflow-clip shadow-2xl grid lg:grid-cols-3 md:grid-cols-2">
        {content.map((c) => (
          <div
            style={{ color: c.color, background: c.background }}
            key={c.title}
            className="px-4 py-6 flex flex-col gap-4"
          >
            {
              <c.icon
                className="brightness-[60%]"
                fontSize="large"
                style={{ color: c.background }}
              />
            }
            <h2 className="font-semibold text-2xl">{c.title}</h2>
            <p className="opacity-80">{c.text}</p>
            <Button
              className="transition-all pressed:scale-95 focus-visible:bg-neutral-800 focus-visible:outline-2
            focus-visible:outline-offset-1 rounded-lg bg-neutral-800 text-neutral-50 mr-auto px-3 py-1.5
            mt-auto"
            >
              Learn more
            </Button>
          </div>
        ))}
      </div>
    </main>
  );
};

const content = [
  {
    icon: TipsAndUpdatesIcon,
    background: "#606c38",
    color: "#fafafa",
    title: "Inspiring Design Assets",
    text: "Explore a curated collection of high-quality design assets that will spark your creativity and elevate your projects. From stunning graphics to versatile templates, find the perfect resources to enhance your visual storytelling. Whether you're working on a new branding project, designing a website, or creating marketing materials, these assets will provide you with the inspiration and tools needed to achieve professional results.",
  },
  {
    icon: SettingsIcon,
    background: "#fefae0",
    color: "#262626",
    title: "Efficiency-Boosting Tools",
    text: "Discover powerful tools designed to streamline your workflow and maximize productivity. These tools offer intuitive features and automation capabilities to help you complete tasks faster and more efficiently, freeing up time for innovation. From project management software to time-tracking apps, each tool is crafted to support you in optimizing your work processes and achieving your goals with greater ease and precision.",
  },
  {
    icon: HandshakeIcon,
    background: "#dda15e",
    color: "#262626",
    title: "Community Collaboration",
    text: "Join a vibrant community of like-minded professionals and collaborate on exciting projects. Share ideas, get feedback, and grow together in an environment that fosters creativity, support, and mutual growth. Engage in meaningful discussions, participate in collaborative ventures, and benefit from the collective knowledge and experience of the community. This collaborative spirit not only enhances individual projects but also builds lasting professional relationships.",
  },
];
