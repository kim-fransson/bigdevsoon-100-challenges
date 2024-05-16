"use client";

import { Button, Group, ListBox, ListBoxItem } from "react-aria-components";
import { tv } from "tailwind-variants";

import Image404 from "../../assets/404.webp";
import Image from "next/image";
import { fredoka } from "@/app/fonts";

const focusRing = tv({
  base: "outline outline-[#58a65f] outline-offset-1 outline-0 focus-visible:outline-2",
});

const buttonStyles = tv({
  extend: focusRing,
  base: ["transition-all pressed:scale-95"],
});

const linkItemsStyles = tv({
  extend: focusRing,
  base: ["font-medium cursor-pointer text-lg px-4 rounded-lg py-2"],
});

export const NotFound = () => {
  return (
    <main
      className={`flex flex-col w-full bg-[#f7f7f7] min-h-screen mx-auto ${fredoka.className}`}
    >
      <div className="bg-white shadow-sm border-neutral-100">
        <nav className="max-w-screen-xl items-center mx-auto flex flex-wrap lg:justify-between p-4">
          <span className="text-xl font-semibold">Cactus.io</span>

          <ListBox
            orientation="horizontal"
            aria-label="links"
            className="flex flex-wrap ml-auto lg:gap-12"
            items={[
              { id: 1, name: "Home" },
              { id: 2, name: "About Us" },
              { id: 3, name: "Our Teams" },
              { id: 4, name: "Blog" },
              { id: 5, name: "Support" },
            ]}
          >
            {(link) => (
              <ListBoxItem className={linkItemsStyles()}>
                {link.name}
              </ListBoxItem>
            )}
          </ListBox>

          <Group className="ml-auto flex items-center gap-4">
            <Button
              className={buttonStyles({
                class:
                  "px-4 py-2 rounded-lg underline-offset-4 underline decoration-2 font-medium tracking-wide",
              })}
            >
              Sign In
            </Button>
            <Button
              className={buttonStyles({
                class:
                  "bg-[#58a65f] text-white tracking-wide px-4 rounded-lg py-2",
              })}
            >
              Sign Up
            </Button>
          </Group>
        </nav>
      </div>
      <div className="flex-1 px-4 max-w-screen-xl mx-auto flex lg:flex-row flex-col items-center lg:justify-between justify-center">
        <div>
          <Image width={600} alt="" src={Image404} priority />
        </div>
        <div className="flex flex-col lg:items-start items-center gap-8 max-w-screen-sm">
          <h2 className="text-5xl font-semibold text-center lg:text-start">
            Oops! You&apos;ve Lost Your Way
          </h2>
          <p className="text-center lg:text-start">
            It seems you&apos;ve taken a wrong turn in the vast expanse of the
            internet. Don&apos;t worry, we&apos;ll help you get back on track!
          </p>

          <Group className="flex gap-4 items-center">
            <Button
              className={buttonStyles({
                class:
                  "bg-[#58a65f] text-white tracking-wide px-4 rounded-lg py-2",
              })}
            >
              Back to home
            </Button>
            <Button
              className={buttonStyles({
                class:
                  "bg-[#ffce55] text-neutral-800 tracking-wide px-4 rounded-lg py-2",
              })}
            >
              Visit Help Center
            </Button>
          </Group>
        </div>
      </div>
    </main>
  );
};
