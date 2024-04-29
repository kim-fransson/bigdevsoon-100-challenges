"use client";

import { fredoka, roboto } from "@/app/fonts";
import {
  Button,
  Group,
  Link,
  ListBox,
  ListBoxItem,
} from "react-aria-components";
import { tv } from "tailwind-variants";

const focusRing = tv({
  base: "outline outline-pink-500 outline-offset-2 outline-0 focus-visible:outline-2",
});

const linkStyles = tv({
  extend: focusRing,
  base: "font-medium cursor-pointer",
});

const bookStyles = tv({
  extend: focusRing,
  base: "cursor-pointer aspect-[5/6] bg-red-100 flex flex-col rounded",
});

const buttonStyles = tv({
  extend: focusRing,
  base: [
    "flex rounded-full py-1.5 px-4 transition-all pressed:scale-95 font-medium",
  ],
  variants: {
    intent: {
      primary: "bg-pink-400 hover:bg-pink-500 text-neutral-50",
      secondary: "bg-pink-200 hover:bg-pink-300",
    },
  },
});

export const EBookStore = () => {
  return (
    <main
      className={`bg-white flex items-center text-neutral-800 justify-center ${roboto.className}`}
    >
      <div className="max-w-screen-lg w-full bg-white min-h-dvh">
        <nav className="flex items-center justify-between py-4">
          <span className={`${fredoka.className} font-medium text-2xl`}>
            BookBeat
          </span>
          <ListBox
            className="flex items-center gap-8"
            orientation="horizontal"
            items={[
              { name: "E-books" },
              { name: "Audiobooks" },
              { name: "Apps & Readers" },
              { name: "Contact" },
            ]}
          >
            {(link) => (
              <ListBoxItem className={linkStyles()} id={link.name}>
                {link.name}
              </ListBoxItem>
            )}
          </ListBox>

          <Group className="flex gap-4">
            <Button className={buttonStyles({ intent: "secondary" })}>
              Sign in
            </Button>
            <Button className={buttonStyles({ intent: "primary" })}>
              Try for free
            </Button>
          </Group>
        </nav>
        <section className="mt-8">
          <div className="bg-pink-200 overflow-clip relative p-12 rounded-lg grid grid-cols-2 items-center justify-items-center gap-4 text-neutral-800/85">
            <div className="flex flex-col gap-6">
              <h2 className="text-4xl">
                Listen to audio books for{" "}
                <span className="font-bold text-neutral-800">
                  14 days for free
                </span>
              </h2>
              <p>
                Enjoy over{" "}
                <span className="text-neutral-800 font-medium">900,000</span>{" "}
                audiobooks and e-books on BookBeat. During the trial period, you
                get access to{" "}
                <span className="text-neutral-800 font-medium">20 hours</span>{" "}
                of listening and reading. After the trial period, BookBeat costs{" "}
                <span className="text-neutral-800 font-medium">
                  $7.99/month. You can cancel the subscription at any time
                </span>
              </p>

              <Group className="flex gap-4">
                <Button
                  className={buttonStyles({
                    intent: "primary",
                    class: "flex-1 flex items-center justify-center",
                  })}
                >
                  Try for free
                </Button>
                <Button
                  className={buttonStyles({
                    intent: "secondary",
                    class:
                      "bg-white hover:bg-pink-100 flex-1 flex items-center justify-center",
                  })}
                >
                  View Categories
                </Button>
              </Group>
            </div>
            <span className="text-[12rem] z-10 text-white">📚</span>
            <div className="rounded-full size-96 bg-[#5a67a7] absolute top-0 -translate-y-1/3 translate-x-1/3 right-0"></div>
            <div className="rounded-full size-52 bg-[#77b860] absolute bottom-0 translate-y-1/2 right-[20%]"></div>
            <div className="rounded-full size-52 bg-[#bd261b] absolute bottom-0 translate-y-1/2 right-0 translate-x-1/2"></div>
          </div>

          <div className="mt-8">
            <div className="flex items-center gap-4 justify-between">
              <h3 className="text-xl font-semibold">Today&lsquo;s hits</h3>
              <Button
                className={buttonStyles({
                  intent: "secondary",
                })}
              >
                View all
              </Button>
            </div>
            <ListBox
              items={books}
              orientation="horizontal"
              className="grid grid-cols-5 mt-4 gap-4"
            >
              {(item) => (
                <ListBoxItem
                  style={{ background: item.color }}
                  className={bookStyles()}
                  id={item.author}
                >
                  <div className="flex flex-col bg-neutral-900 p-1 mt-auto">
                    <span className="text-neutral-50 font-medium">
                      {item.title}
                    </span>
                    <span className="text-neutral-300 text-sm">
                      {item.author}
                    </span>
                  </div>
                </ListBoxItem>
              )}
            </ListBox>
          </div>
        </section>
      </div>
    </main>
  );
};

const books = [
  {
    title: "The Night Circus",
    author: "Erin Morgenstern",
    color: "#5a67a7",
  },
  {
    title: "History of Humankind",
    author: "Yuval Noah Harari",
    color: "#77b860",
  },
  {
    title: "1984",
    author: "George Orwell",
    color: "#bd261b",
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    color: "#5a67a7",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    color: "#77b860",
  },
];
