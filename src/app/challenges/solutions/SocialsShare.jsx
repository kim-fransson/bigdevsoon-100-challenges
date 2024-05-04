"use client";

import { fredoka } from "@/app/fonts";

import ShareIcon from "@mui/icons-material/Share";
import LinkIcon from "@mui/icons-material/Link";

import {
  Dialog,
  Popover as AriaPopover,
  DialogTrigger,
  Button,
  ListBox,
  ListBoxItem,
  TextField,
  Input,
} from "react-aria-components";

import {
  FaFacebook,
  FaGithub,
  FaGooglePlusG,
  FaLinkedin,
  FaPinterest,
} from "react-icons/fa";
import { twMerge } from "tailwind-merge";

import { tv } from "tailwind-variants";

const focusRing = tv({
  base: "outline outline-blue-600 outline-offset-1 outline-0 focus-visible:outline-2",
});

const buttonStyles = tv({
  extend: focusRing,
  base: ["flex items-center justify-center transition-all pressed:scale-95"],
});

const listboxItemStyles = tv({
  extend: focusRing,
  base: ["py-2 px-4 focus-visible:-outline-offset-8"],
});

export const SocialsShare = () => {
  return (
    <main
      className={`${fredoka.className} min-h-dvh bg-[#f0f2ff] p-4 flex items-center justify-center`}
    >
      <div className="flex flex-col md:flex-row gap-24">
        <SocialShareTrigger defaultOpen>
          <CopyLink />
        </SocialShareTrigger>
        <SocialShareTrigger>
          <ListBox orientation="vertical" className="flex flex-col gap-3">
            <ListBoxItem
              className={listboxItemStyles({
                class:
                  "p-0 flex items-center text-sm gap-2 focus-visible:outline-offset-1",
              })}
            >
              <FaGooglePlusG className="text-2xl text-[#cb2411]" />
              GOOGLE+
            </ListBoxItem>
            <ListBoxItem
              className={listboxItemStyles({
                class:
                  "p-0 flex items-center text-sm gap-2 focus-visible:outline-offset-1",
              })}
            >
              <FaGithub className="text-2xl text-[#010409]" />
              GITHUB
            </ListBoxItem>
            <ListBoxItem
              className={listboxItemStyles({
                class:
                  "p-0 flex items-center text-sm gap-2 focus-visible:outline-offset-1",
              })}
            >
              <FaFacebook className="text-2xl text-[#1775ef]" />
              FACEBOOK
            </ListBoxItem>
            <ListBoxItem
              className={listboxItemStyles({
                class:
                  "p-0 flex items-center text-sm gap-2 focus-visible:outline-offset-1",
              })}
            >
              <FaPinterest className="text-2xl text-[#c7161f]" />
              PINTEREST
            </ListBoxItem>
            <ListBoxItem
              className={listboxItemStyles({
                class:
                  "p-0 flex items-center text-sm gap-2 focus-visible:outline-offset-1",
              })}
            >
              <FaLinkedin className="text-2xl text-[#0074b0]" />
              LINKEDIN
            </ListBoxItem>
            <ListBoxItem
              className={listboxItemStyles({
                class:
                  "p-0 flex items-center text-sm gap-2 focus-visible:outline-offset-1",
              })}
            >
              <span className="-rotate-[32deg] block text-2xl">
                <LinkIcon fontSize="inherit" className="" />
              </span>
              GET LINK
            </ListBoxItem>
          </ListBox>
        </SocialShareTrigger>
        <SocialShareTrigger placement="right">
          <CopyLink />
        </SocialShareTrigger>
      </div>
    </main>
  );
};

const CopyLink = () => {
  return (
    <>
      <ListBox
        orientation="horizontal"
        className="flex divide-x-2 divide-[#d0d0d0] -mx-4 -my-2 min-w-[350px]"
      >
        <ListBoxItem className={listboxItemStyles()}>
          <FaGooglePlusG className="text-2xl text-[#cb2411]" />
        </ListBoxItem>
        <ListBoxItem className={listboxItemStyles()}>
          <FaGithub className="text-2xl text-[#010409]" />
        </ListBoxItem>
        <ListBoxItem className={listboxItemStyles()}>
          <FaFacebook className="text-2xl text-[#1775ef]" />
        </ListBoxItem>
        <ListBoxItem className={listboxItemStyles()}>
          <FaPinterest className="text-2xl text-[#c7161f]" />
        </ListBoxItem>
        <ListBoxItem className={listboxItemStyles()}>
          <FaLinkedin className="text-2xl text-[#0074b0]" />
        </ListBoxItem>
      </ListBox>
      <span className="block mt-4 text-sm">or copy this link</span>
      <TextField
        className="flex mt-2 gap-4 justify-between border-2 border-[#d0d0d0] rounded-lg p-2"
        isReadOnly
        value="https://app.bigdevsoon.me/challenges"
      >
        <Input className={twMerge("w-full text-sm", focusRing())} />
        <Button className={buttonStyles({ class: "text-[#5918fe]" })}>
          Copy
        </Button>
      </TextField>
    </>
  );
};

const SocialShareTrigger = ({
  children,
  placement = "bottom",
  defaultOpen = false,
}) => {
  return (
    <DialogTrigger defaultOpen={defaultOpen}>
      <Button
        className={buttonStyles({
          class: [
            "bg-[#fefefe] hover:bg-[#9ba1be] hover:text-[#fefefe]",
            "pressed:text-[#fefefe] pressed:bg-[#9ba1be] text-[#9ba1be] rounded-full p-1.5 text-2xl",
          ],
        })}
        aria-label="share"
      >
        <ShareIcon fontSize="inherit" />
      </Button>
      <Popover offset={20} placement={placement}>
        {children}
      </Popover>
    </DialogTrigger>
  );
};

const Popover = ({ children, ...props }) => {
  return (
    <AriaPopover
      {...props}
      className={`text-neutral-600 bg-white p-5 rounded-3xl shadow-xl  entering:animate-in entering:fade-in exiting:animate-out exiting:fade-out ${fredoka.className}`}
    >
      <Dialog className="outline-none">{children}</Dialog>
    </AriaPopover>
  );
};
