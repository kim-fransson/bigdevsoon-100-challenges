"use client";

import Image from "next/image";
import { useState } from "react";
import Logo from "../../assets/logo.svg";

import {
  Button,
  Collection,
  ListBox,
  ListBoxItem,
  Section,
  ToggleButton,
} from "react-aria-components";

import MenuOpenRoundedIcon from "@mui/icons-material/MenuOpenRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import BookmarkAddRoundedIcon from "@mui/icons-material/BookmarkAddRounded";
import TextSnippetRoundedIcon from "@mui/icons-material/TextSnippetRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import BookmarksRoundedIcon from "@mui/icons-material/BookmarksRounded";
import LibraryBooksRoundedIcon from "@mui/icons-material/LibraryBooksRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";

import { motion } from "framer-motion";
import { roboto } from "@/app/fonts";

export const AppNavigation = () => {
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(false);
  let options = [
    {
      id: "main",
      children: [
        { name: "Dashboard", id: 1, icon: DashboardRoundedIcon },
        { name: "Tag List", id: 2, icon: BookmarksRoundedIcon },
        { name: "Define Subject", id: 3, icon: TextSnippetRoundedIcon },
        { name: "Members", id: 4, icon: PeopleRoundedIcon },
        { name: "Tags Assignment", id: 5, icon: BookmarkAddRoundedIcon },
        { name: "Library", id: 6, icon: LibraryBooksRoundedIcon },
        { name: "Emails", id: 7, icon: MailRoundedIcon },
      ],
    },
    {
      id: "user",
      children: [
        { name: "Roboto Sensei", id: 8, showImage: true },
        { name: "Notifications", id: 9, icon: NotificationsRoundedIcon },
      ],
    },
  ];

  const MotionImage = motion(Image);

  return (
    <main
      className={`min-h-dvh lg:flex lg:items-center lg:justify-center bg-violet-800 ${roboto.className}`}
    >
      <motion.div
        initial={{ width: "320px" }}
        animate={{ width: isMenuCollapsed ? "150px" : "320px" }}
        transition={{
          duration: 0.3,
          type: "easeInOut",
        }}
        className="lg:h-[700px] h-screen bg-gray-950 text-gray-50 p-4 flex flex-col gap-4 lg:rounded-md
        @container"
      >
        <header className="flex items-center @[150px]:justify-start justify-center gap-2.5 text-lg font-medium relative">
          <MotionImage
            layoutId="logo"
            width={40}
            height={40}
            alt=""
            src={Logo}
          />
          <motion.span layoutId="logo-name" className="@[150px]:block hidden">
            Wrappi
          </motion.span>
          <ToggleButton
            onChange={setIsMenuCollapsed}
            className="transition-all pressed:scale-95 bg-gray-950 rounded-full
          focus-visible:outline-2 focus-visible:outline-indigo-400 outline-none grid place-content-center
          absolute -right-4 top-1/2 -translate-y-1/2 translate-x-1/2"
          >
            {({ isSelected }) =>
              isSelected ? <MenuOpenRoundedIcon /> : <MenuRoundedIcon />
            }
          </ToggleButton>
        </header>
        <ListBox
          aria-label="Menu options"
          items={options}
          selectionMode="single"
          className="grid gap-4"
        >
          {(section) => (
            <Section className="grid gap-3 last:pt-3 last:border-t border-gray-500">
              <Collection items={section.children}>
                {(item) => (
                  <ListBoxItem
                    className="focus:bg-indigo-400 hover:bg-indigo-400 cursor-pointer outline-none px-2 py-1 rounded-md
                  flex items-center @[150px]:justify-start justify-center gap-3"
                  >
                    {item.icon ? (
                      <motion.span layoutId={`${item.name}-icon`}>
                        <item.icon />
                      </motion.span>
                    ) : item.showImage ? (
                      <MotionImage
                        width={24}
                        height={24}
                        alt=""
                        src={`https://robohash.org/${item.name}`}
                        className="rounded-full bg-white"
                        layoutId={`${item.name}-image`}
                      />
                    ) : null}
                    <motion.span
                      layoutId={item.name}
                      className="@[150px]:block hidden whitespace-nowrap"
                    >
                      {item.name}
                    </motion.span>
                  </ListBoxItem>
                )}
              </Collection>
            </Section>
          )}
        </ListBox>
        <Button
          className="flex flex-col justify-center outline-none transition-all pressed:scale-95
        bg-yellow-400 text-gray-950 py-1 px-3 rounded-md focus-visible:outline-2 focus-visible:outline-offset-2
        focus-visible:outline-indigo-400"
        >
          <span className="font-medium">90 days left</span>
          <span className="text-sm font-medium opacity-70">Select a plan</span>
        </Button>
      </motion.div>
    </main>
  );
};
