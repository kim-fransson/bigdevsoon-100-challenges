"use client";

import { fredoka } from "@/app/fonts";
import { useRef, useState } from "react";
import {
  DialogTrigger,
  Popover as AriaPopover,
  Button,
  Dialog,
  OverlayArrow,
  Group,
  TextField,
  Input,
} from "react-aria-components";
import { tv } from "tailwind-variants";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import InsertEmoticonOutlinedIcon from "@mui/icons-material/InsertEmoticonOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import SendIcon from "@mui/icons-material/Send";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { twMerge } from "tailwind-merge";

const focusRing = tv({
  base: "outline outline-blue-600 outline-offset-1 outline-0 focus-visible:outline-2",
});

const buttonStyles = tv({
  extend: focusRing,
  base: ["transition-all pressed:scale-95"],
});

export const ChatBot = () => {
  const [isChatting, setIsChatting] = useState(false);
  const triggerRef = useRef(null);
  return (
    <main
      className={`${fredoka.className} min-h-dvh p-4 flex justify-end items-end bg-[#e77f80]`}
    >
      <span ref={triggerRef}>
        <DialogTrigger onOpenChange={setIsChatting}>
          <Button
            className={buttonStyles({
              class: [
                "text-4xl grid place-items-center bg-white rounded-lg px-2.5 py-2 shadow-xl relative",
              ],
            })}
            aria-label="chat with ai"
          >
            🤖
            <div
              className={twMerge(
                `size-6 absolute aspect-square place-items-center text-sm rounded-full bg-red-500 text-neutral-200
        right-0 top-0 translate-x-1/2 -translate-y-1/3`,
                isChatting ? "hidden" : "grid",
              )}
            >
              2
            </div>
          </Button>
          <Popover placement="top right">
            <div className="min-w-[340px]">
              <header className="bg-[#163689] text-neutral-100 px-4 py-2 flex items-center gap-2">
                <span className="bg-white size-7 text-xl grid place-items-center rounded-full">
                  🤖
                </span>
                <h2 className="font-medium">ChatBot</h2>
                <Button
                  className={buttonStyles({
                    class: "ml-auto rounded-full grid place-items-center",
                  })}
                >
                  <ExpandMoreIcon />
                </Button>
                <Button
                  className={buttonStyles({
                    class: "rounded-full grid place-items-center",
                  })}
                >
                  <MoreVertIcon />
                </Button>
              </header>
              <div className="min-h-[500px] overflow-auto w-full flex flex-col px-2 gap-3">
                <span className="opacity-70 text-sm block mx-auto mt-4">
                  Thursday, 5 may
                </span>
                <Message
                  text="Hey there I am an A.I. chatbot, let&lsquo;s talk"
                  time="10:53 AM"
                />
                <Message
                  text="I prepared a special 20% offer promo code for you. Would you like to get more information about it?"
                  time="10:54 AM"
                />
                <div className="ml-auto flex gap-2">
                  <Button
                    className={buttonStyles({
                      class:
                        "bg-[#163689] text-neutral-200 rounded-full px-3 py-1.5",
                    })}
                  >
                    Yes, sure!
                  </Button>
                  <Button
                    className={buttonStyles({
                      class:
                        "border-[#163689] border-2 text-[#163689] rounded-full px-3 py-1.5",
                    })}
                  >
                    No, thanks!
                  </Button>
                </div>
              </div>
              <footer className="flex gap-2 items-center py-3 px-4 border-t-2 border-[#c4d2f7] text-neutral-400">
                <TextField className="flex-1">
                  <Input
                    className={
                      "text-neutral-700 p-1 w-full rounded focus:outline-2 focus:outline-offset-1 focus:outline-blue-600"
                    }
                    placeholder="Enter your message..."
                  />
                </TextField>
                <Button
                  className={buttonStyles({
                    class: "ml-auto grid place-items-center rounded-full",
                  })}
                >
                  <InsertEmoticonOutlinedIcon fontSize="small" />
                </Button>
                <Button
                  className={buttonStyles({
                    class: "grid place-items-center rounded-full",
                  })}
                >
                  <AttachFileOutlinedIcon fontSize="small" />
                </Button>
                <Button
                  className={buttonStyles({
                    class:
                      "grid place-items-center bg-[#163689] text-neutral-200 rounded-full p-1.5",
                  })}
                >
                  <SendIcon fontSize="small" />
                </Button>
              </footer>
            </div>
          </Popover>
        </DialogTrigger>
      </span>
      <Popover
        triggerRef={triggerRef}
        defaultOpen
        isNonModal={true}
        placement="left"
        offset={10}
      >
        <div className="max-w-44 w-full text-sm px-4 py-2">
          Hey there I am an A.I. chatbot, lets talk.
        </div>
      </Popover>
    </main>
  );
};

const Popover = ({ children, ...props }) => {
  return (
    <AriaPopover
      {...props}
      className={`text-neutral-800 overflow-hidden bg-white rounded-lg shadow-2xl entering:animate-in entering:fade-in exiting:animate-out exiting:fade-out ${fredoka.className}`}
    >
      <Dialog className="outline-none">{children}</Dialog>
    </AriaPopover>
  );
};

const Message = ({ text, time }) => {
  return (
    <div className="flex gap-2 items-start">
      <span className="border-2 size-7 grid place-items-center border-[#8baafa] rounded-full">
        🤖
      </span>
      <div className="flex flex-col gap-1">
        <p className="p-2 shadow-lg rounded-lg border border-neutral-100 max-w-60">
          {text}
        </p>
        <span className="text-xs opacity-70">{time}</span>
      </div>
    </div>
  );
};
