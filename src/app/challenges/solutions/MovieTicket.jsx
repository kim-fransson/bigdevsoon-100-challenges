"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Button,
  Label,
  ListBox,
  ListBoxItem,
  Radio,
  RadioGroup,
} from "react-aria-components";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { fredoka } from "@/app/fonts";

export const MovieTicket = () => {
  const [showTickets, setShowTickets] = useState(false);
  return (
    <main
      className={`min-h-dvh flex lg:items-center lg:justify-center bg-gradient-to-r from-[#f1f8f9] from-30% to-[#314256] ${fredoka.className}`}
    >
      {showTickets ? (
        <Tickets onReturn={() => setShowTickets(false)} />
      ) : (
        <MovieInfo onBuyTickets={() => setShowTickets(true)} />
      )}
    </main>
  );
};

const MovieInfo = ({ onBuyTickets }) => {
  return (
    <div className="flex flex-col lg:overflow-clip lg:rounded-[2rem] lg:shadow-2xl lg:min-h-0 min-h-dvh text-[#071232] max-w-md">
      <Image width={1080} height={708} alt="" src="/challenges/24/poster.png" />
      <div className="rounded-t-[2rem] bg-white -mt-8 flex-1 flex flex-col gap-5 p-4">
        <h2 className="text-2xl font-semibold">
          The Lord of the Rings: The Fellowship of the Ring
        </h2>
        <div className="flex items-center justify-between gap-4 text-[#263a4a] font-medium text-sm tracking-widest">
          <p>Action / Adventure / Drama</p>
          <span>2h 58m</span>
        </div>

        <p className="text-[#263a4a] line-clamp-6">
          &quot;The Fellowship of the Ring&quot; is the first installment in
          J.R.R. Tolkien&apos;s epic fantasy trilogy, &quot;The Lord of the
          Rings.&quot; The story follows Frodo Baggins, a young hobbit, who
          inherits a powerful and dangerous ring from his uncle, Bilbo. As it is
          revealed that this ring holds the key to the dark lord Sauron&apos;s
          return to power, Frodo embarks on a perilous journey to destroy the
          ring and prevent the impending doom of Middle-earth. Alongside a
          diverse group of companions, including humans, elves, dwarves, and
          other hobbits, Frodo faces numerous challenges, battles, and the
          corruption of the ring&apos;s influence. The fellowship&apos;s quest
          unfolds against the backdrop of a richly detailed and immersive
          fantasy world, showcasing themes of friendship, courage, and the
          enduring struggle between good and evil.
        </p>

        <h3 className="text-xl font-semibold">Cast</h3>
        <div className="flex items-center gap-4">
          <Image
            className="size-16 rounded-lg object-cover"
            src="/challenges/24/wood.png"
            alt=""
            width={64}
            height={64}
          />
          <Image
            className="size-16 rounded-lg object-cover"
            src="/challenges/24/mckellen.png"
            alt=""
            width={64}
            height={64}
          />
          <Image
            className="size-16 rounded-lg object-cover"
            src="/challenges/24/orlando.png"
            alt=""
            width={64}
            height={64}
          />
        </div>

        <Button
          onPress={onBuyTickets}
          className="outline-none mt-auto px-5 py-4 transition-all pressed:scale-95
        rounded-lg bg-[#263a4a] text-gray-50 font-semibold tracking-wider
        hover:bg-white hover:ring-2 ring-[#263a4a] hover:text-gray-800
        focus-visible:ring-2 focus-visible:ring-offset-2"
        >
          Buy Tickets
        </Button>
      </div>
    </div>
  );
};

const Tickets = ({ onReturn }) => {
  return (
    <div className="flex w-full flex-col lg:overflow-clip lg:rounded-[2rem] lg:shadow-2xl lg:min-h-0 min-h-dvh text-[#071232] max-w-md">
      <div className="text-gray-50 bg-[#314256] flex flex-col gap-8 p-4 pb-20">
        <div className="flex gap-4 items-center">
          <Button
            onPress={onReturn}
            className="outline-none focus-visible:ring-2 "
          >
            <ArrowBackIosNewIcon fontSize="small" />
          </Button>
          <h2 className="text-2xl font-semibold">Buy tickets</h2>
        </div>

        <div
          className="challenge-24-clip w-full rounded-t-[50%] border-t-[6px] bg-gradient-to-b from-[#6181a5] to-[#314256]
        flex flex-col gap-6 items-center"
        >
          <ListBox
            aria-label="seats"
            layout="grid"
            items={seats}
            selectionMode="multiple"
            className="grid grid-cols-8 gap-3 mt-12"
            disabledKeys={[1, 8, 9, 16, 29, 30, 31, 34, 35, 44, 45]}
          >
            {(item) =>
              item.id === 1 ||
              item.id === 8 ||
              item.id === 9 ||
              item.id === 16 ? (
                <ListBoxItem className="" />
              ) : (
                <ListBoxItem
                  className="size-5 border rounded-[0.2rem] selected:bg-orange-600 selected:border-orange-600 
      outline-none focus-visible:border-orange-600 hover:bg-orange-600/70 cursor-pointer transition-all
      disabled:bg-gray-300 disabled:border-gray-300 disabled:cursor-not-allowed"
                />
              )
            }
          </ListBox>

          <div className="flex items-center justify-around text-sm w-full">
            <div className="flex items-center gap-2">
              <div className="size-3 rounded-sm bg-orange-600" />
              <span>Selected</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-3 rounded-sm bg-gray-300" />
              <span>Reserved</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-3 rounded-sm border" />
              <span>Available</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-t-[2rem] p-4 -mt-8 flex-1 flex flex-col gap-8">
        <RadioGroup
          className="grid gap-2"
          orientation="horizontal"
          defaultValue="22 Feb"
        >
          <Label className="text-lg font-semibold">Date</Label>
          <div className="grid grid-cols-4 text-center items-center justify-between gap-3">
            <Radio
              className="border-2 border-[#314256] cursor-pointer selected:border-orange-600 selected:text-orange-600 focus-visible:ring-2 ring-orange-600 ring-offset-2 outline-none rounded-md px-3 py-2"
              value="21 Feb"
            >
              21 Feb
            </Radio>
            <Radio
              className="border-2 border-[#314256] cursor-pointer selected:border-orange-600 selected:text-orange-600 focus-visible:ring-2 ring-orange-600 ring-offset-2 outline-none rounded-md px-3 py-2"
              value="22 Feb"
            >
              22 Feb
            </Radio>
            <Radio
              className="border-2 border-[#314256] cursor-pointer selected:border-orange-600 selected:text-orange-600 focus-visible:ring-2 ring-orange-600 ring-offset-2 outline-none rounded-md px-3 py-2"
              value="23 Feb"
            >
              23 Feb
            </Radio>
            <Radio
              className="border-2 border-[#314256] cursor-pointer selected:border-orange-600 selected:text-orange-600 focus-visible:ring-2 ring-orange-600 ring-offset-2 outline-none rounded-md px-3 py-2"
              value="24 Feb"
            >
              24 Feb
            </Radio>
          </div>
        </RadioGroup>

        <RadioGroup
          defaultValue="20:35"
          className="grid gap-2"
          orientation="horizontal"
        >
          <Label className="text-lg font-semibold">Time</Label>
          <div className="grid grid-cols-4 items-center justify-between gap-3 text-center">
            <Radio
              className="border-2 border-[#314256] cursor-pointer selected:border-orange-600 selected:text-orange-600 focus-visible:ring-2 ring-orange-600 ring-offset-2 outline-none rounded-md px-3 py-2"
              value="15:15"
            >
              15:15
            </Radio>
            <Radio
              className="border-2 border-[#314256] cursor-pointer selected:border-orange-600 selected:text-orange-600 focus-visible:ring-2 ring-orange-600 ring-offset-2 outline-none rounded-md px-3 py-2"
              value="17:45"
            >
              17:45
            </Radio>
            <Radio
              className="border-2 border-[#314256] cursor-pointer selected:border-orange-600 selected:text-orange-600 focus-visible:ring-2 ring-orange-600 ring-offset-2 outline-none rounded-md px-3 py-2"
              value="20:35"
            >
              20:35
            </Radio>
            <Radio
              className="border-2 border-[#314256] cursor-pointer selected:border-orange-600 selected:text-orange-600 focus-visible:ring-2 ring-orange-600 ring-offset-2 outline-none rounded-md px-3 py-2"
              value="22:15"
            >
              22:15
            </Radio>
          </div>
        </RadioGroup>

        <Button
          onPress={onReturn}
          className="outline-none mt-auto px-5 py-4 transition-all pressed:scale-95
        rounded-lg bg-[#314256] text-gray-50 font-semibold tracking-wider
        hover:bg-white hover:ring-2 ring-[#314256] hover:text-[#314256]
        focus-visible:ring-2 focus-visible:ring-offset-2"
        >
          Pay
        </Button>
      </div>
    </div>
  );
};

const seats = Array.from({ length: 48 }, (_, index) => ({
  id: index + 1,
}));
