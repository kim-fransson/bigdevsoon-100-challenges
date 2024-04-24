"use client";

import { fredoka } from "@/app/fonts";
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";
import { Button, Group } from "react-aria-components";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import { tv } from "tailwind-variants";

export const PushNotifications = () => {
  const focusRing = tv({
    base: "outline outline-[#6b46c1] outline-offset-2 outline-0 focus-visible:outline-2",
  });

  const buttonStyles = tv({
    extend: focusRing,
    base: ["flex items-center justify-center transition-all pressed:scale-95"],
  });
  return (
    <main
      className={`${fredoka.className} min-h-dvh flex items-center justify-center p-6 bg-[#171923]`}
    >
      <div
        className="bg-[#292b34] text-neutral-100 shadow-[15px_15px_0px_0px] shadow-[#6b46c1] max-w-sm w-full
      relative flex flex-col gap-4 px-4 pt-8 pb-4 rounded-2xl"
      >
        <h2 className="text-2xl font-semibold tracking-wider">
          Show notifications for
        </h2>
        <div className="flex gap-3 items-center">
          <NotificationsActiveRoundedIcon className="text-[#6b46c1] bg-neutral-50 rounded-full p-0.5" />
          <span className="mb-0.5">www.bigdevsoon.com</span>
        </div>
        <Group className="inline-flex ml-auto gap-2">
          <Button
            className={buttonStyles({
              class:
                "border-2 border-red-400 text-red-400 px-3 py-0.5 rounded-md hover:bg-red-400 hover:text-neutral-50",
            })}
          >
            Block
          </Button>
          <Button
            className={buttonStyles({
              class:
                "border-2 border-green-400 text-green-400 px-3 py-0.5 rounded-md hover:bg-green-400 hover:text-neutral-50",
            })}
          >
            Allow
          </Button>
        </Group>

        <Button className={buttonStyles({ class: "absolute top-3 right-3" })}>
          <ClearRoundedIcon />
        </Button>
      </div>
    </main>
  );
};
