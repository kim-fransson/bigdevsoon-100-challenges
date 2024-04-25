"use client";

import { fredoka } from "@/app/fonts";
import { Button, Link, ListBox, ListBoxItem } from "react-aria-components";

import { CameraAlt, Add, Logout } from "@mui/icons-material";
import Image from "next/image";
import { tv } from "tailwind-variants";

export const ManageAccounts = () => {
  const focusRing = tv({
    base: "outline outline-blue-500 outline-offset-1 outline-0 focus-visible:outline-2",
  });

  const buttonStyles = tv({
    extend: focusRing,
    base: ["flex items-center justify-center transition-all pressed:scale-95"],
  });

  const listBoxItemStyles = tv({
    extend: focusRing,
    base: [
      "bg-white py-2 px-5 flex items-center gap-2 rounded-lg cursor-pointer",
    ],
  });

  const initialStyles = tv({
    base: ["rounded-full size-9 font-semibold text-lg grid place-items-center"],
    variants: {
      color: {
        green: ["bg-green-500 text-neutral-50"],
        purple: ["bg-purple-500 text-neutral-50"],
      },
    },
  });

  return (
    <main
      className={`${fredoka.className} min-h-dvh flex items-center justify-center bg-[#96a6fe] text-neutral-800`}
    >
      <div className="w-full max-w-sm rounded-2xl shadow-2xl px-4 py-6 bg-[#f0f2ff] flex flex-col">
        <div
          className="relative size-28 rounded-full bg-blue-50 border-4 border-blue-500
        mx-auto"
        >
          <Image
            width={0}
            height={0}
            alt=""
            src={`https://robohash.org/steve-rogers?set=set5`}
            className="w-full h-full object-contain rounded-full border-2 border-neutral-50"
            priority
          />
          <Button
            className={buttonStyles({
              class:
                "absolute bottom-0 right-0  bg-[#f0f2ff] rounded-full p-1 grid place-items-center outline-offset-0",
            })}
          >
            <CameraAlt fontSize="small" />
          </Button>
        </div>

        <h2 className="font-semibold text-xl mx-auto">Steve Rogers</h2>

        <h3 className="text-sm mx-auto opacity-70">steve.rogers@gmail.com</h3>

        <Button
          className={buttonStyles({
            class: `mx-auto border-2 border-neutral-400 text-neutral-600 px-4 py-1 rounded-full hover:bg-neutral-600 hover:border-neutral-600
              hover:text-neutral-50 mt-4 w-full max-w-56`,
          })}
        >
          Manage Account
        </Button>

        <ListBox
          aria-label="actions"
          orientation="vertical"
          className="flex flex-col gap-2 mt-4"
        >
          <ListBoxItem className={listBoxItemStyles()}>
            <span className={initialStyles({ color: "green" })}>S</span>
            <div className="flex flex-col">
              steven.test
              <span className="text-sm opacity-75 -mt-1">
                steven.test@gmail.com
              </span>
            </div>
          </ListBoxItem>
          <ListBoxItem className={listBoxItemStyles()}>
            <span className={initialStyles({ color: "purple" })}>D</span>
            <div className="flex flex-col">
              dev.steven
              <span className="text-sm opacity-75 -mt-1">
                steven.dev@gmail.com
              </span>
            </div>
          </ListBoxItem>
          <ListBoxItem className={listBoxItemStyles()}>
            <span className="rounded-full bg-blue-50 text-blue-400 grid place-items-center size-9">
              <Add />
            </span>
            Add new account
          </ListBoxItem>
          <ListBoxItem className={listBoxItemStyles()}>
            <span className="rounded-full text-neutral-500 grid place-items-center size-9">
              <Logout />
            </span>
            Log out from all accounts
          </ListBoxItem>
        </ListBox>

        <footer className="flex mt-4 justify-center items-center gap-2 text-xs opacity-70">
          <Link className={focusRing()}>Privacy Policy</Link> ·
          <Link className={focusRing()}>Terms of Service</Link>
        </footer>
      </div>
    </main>
  );
};
