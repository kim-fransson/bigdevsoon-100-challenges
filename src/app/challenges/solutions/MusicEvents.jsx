"use client";

import { Button } from "react-aria-components";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import NearMeIcon from "@mui/icons-material/NearMe";
import EventNoteIcon from "@mui/icons-material/EventNote";
import { fredoka } from "@/app/fonts";

const events = [
  {
    performer: "Jason Derülo",
    venue: "Royal Arena",
    date: "February 25",
    genres: ["Pop", "Soft Rock"],
    thumbnail: "/challenges/8/1.png",
    isSoldOut: false,
  },
  {
    performer: "John Mayer",
    venue: "Royal Arena",
    date: "March 16",
    genres: ["Pop", "Soft Rock"],
    thumbnail: "/challenges/8/2.png",
    isSoldOut: false,
  },
  {
    performer: "Tenacious D",
    venue: "Royal Arena",
    date: "May 01",
    genres: ["Heavy Metal", "Hard Rock"],
    thumbnail: "/challenges/8/3.png",
    isSoldOut: true,
  },
  {
    performer: "30 Seconds to mars",
    venue: "Forum Black Box",
    date: "May 04",
    genres: ["Alternative Rock", "Indie"],
    thumbnail: "/challenges/8/4.png",
    isSoldOut: false,
  },
  {
    performer: "Metallica",
    venue: "Parken",
    date: "June 14",
    genres: ["Hard Rock", "Heavy Metal"],
    thumbnail: "/challenges/8/5.png",
    isSoldOut: false,
  },
];

export const MusicEvents = () => {
  return (
    <main
      className={`min-h-dvh grid items-center justify-center bg-[#eaf2ff] lg:p-8 p-4 ${fredoka.className}`}
    >
      <div className="grid">
        <h2 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ae81f6] via-[#40a1f7] to-[#c4fa3c]">
          Music events
        </h2>
        <h3 className="text-xl mt-1 font-medium">in Copenhagen, Denmark</h3>
        <div className="md:mt-16 mt-8 grid lg:grid-cols-2 gap-4">
          {events.map((event) => (
            <MusicEvent key={event.performer} event={event} />
          ))}
        </div>
      </div>
    </main>
  );
};

const MusicEvent = ({ event }) => {
  return (
    <div
      className={`px-6 py-4 rounded-2xl shadow-2xl bg-white grid lg:grid-cols-[max-content_1fr_max-content] grid-cols-[max-content_1fr] gap-4`}
    >
      <img
        src={event.thumbnail}
        className="aspect-square md:w-32 w-24 rounded-lg border-4 border-[#e1d3f7] shadow-md max-w-full self-start"
      />
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-medium">{event.performer}</h2>
        <div className="flex item-center flex-wrap md:gap-x-3 gap-x-2 gap-y-2">
          <Pill className="bg-[#f7dad4]">
            <NearMeIcon fontSize="small" />
            {event.venue}
          </Pill>
          <Pill className="bg-[#edf7d4]">
            <EventNoteIcon fontSize="small" />
            {event.date}
          </Pill>
          {event.genres.map((genre) => (
            <Pill key={genre} className="bg-[#d3e6f7]">
              {genre}
            </Pill>
          ))}
        </div>
      </div>
      {event.isSoldOut ? (
        <span className="font-medium self-center ml-auto lg:col-start-3 col-start-2">
          Sold out!
        </span>
      ) : (
        <Button
          className="flex items-center justify-center bg-gray-950 text-gray-50 rounded-xl shadow-xl md:py-3 md:px-3.5 py-2 px-2.5 ml-auto focus-visible:ring-2 ring-yellow-400
        gap-2 self-center lg:col-start-3 col-start-2 outline-none group pressed:scale-95 transition-all md:text-base text-sm"
        >
          <ConfirmationNumberIcon
            className="group-hover:animate-wiggle group-hover:animate-infinite group-hover:animate-duration-700 
          group-hover:animate-ease-linear group-hover:text-green-400"
          />
          Buy a Ticket
        </Button>
      )}
    </div>
  );
};

const Pill = ({ children, className }) => {
  return (
    <div
      className={`px-2 py-1 md:text-base text-sm rounded-xl flex items-center justify-center gap-2 font-medium shadow-md ${className}`}
    >
      {children}
    </div>
  );
};
