"use client";

import { poppins } from "@/app/fonts";
import Image from "next/image";
import { Button, Group, Input, TextField } from "react-aria-components";

export const SubscribeCard = () => {
  return (
    <main
      className={`${poppins.className} min-h-dvh bg-[#1d1918] flex items-center justify-center p-8`}
    >
      <div
        className="rounded-2xl bg-[#2f2929] w-full max-w-screen-md text-neutral-100 flex lg:flex-row 
        flex-col gap-8 px-8 py-6 shadow-[18px_18px_0px_0px] shadow-[#fab043]"
      >
        <div className="aspect-[0.75] max-w-40 object-cover rounded-2xl overflow-clip shadow-md">
          <Image
            src="/challenges/96/turtle.png"
            width={0}
            height={0}
            alt=""
            className="w-full h-full"
          />
        </div>
        <div className="flex flex-col justify-between gap-2">
          <h2 className="text-2xl font-semibold">
            Unlock the World: Your Passport to Endless Adventure!
          </h2>
          <p className="opacity-80">
            Join now for exclusive travel perks, insider tips, and unforgettable
            experiences. Let your wanderlust leadthe way!
          </p>
          <Group className="flex flex-wrap lg:gap-0 gap-2">
            <TextField>
              <Input
                placeholder="Enter your Email adress"
                className="bg-[#463d3e] placeholder:text-[#7f7978] p-3 rounded-l-lg
                outline-none focus:outline-2 focus:outline-offset-1 focus:outline-[#fab043]"
              />
            </TextField>
            <Button
              className="bg-[#fab043] text-[#463a26] py-3 px-8 rounded-lg font-semibold lg:-ml-1
            outline-none focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#fab043]
            pressed:scale-95 transition-all"
            >
              Subscribe
            </Button>
          </Group>
        </div>
      </div>
    </main>
  );
};
