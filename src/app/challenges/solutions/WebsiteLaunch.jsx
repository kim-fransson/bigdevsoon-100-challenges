"use client";

import { josefinSans } from "@/app/fonts";
import Head from "next/head";

export const WebsiteLaunch = () => {
  return (
    <>
      <Head>
        <link rel="preload" as="image" href="/challenges/44/background.png" />
      </Head>
      <main
        className={`min-h-dvh flex items-center justify-center bg-white p-4 
      bg-[url('/challenges/44/background.png')] bg-cover bg-no-repeat ${josefinSans.className}`}
      >
        <div className="grid max-w-screen-lg w-full gap-8 mb-48">
          <h1 className="text-4xl font-bold uppercase text-center tracking-widest">
            We&apos;re launching soon
          </h1>
          <div
            className="flex flex-wrap items-center gap-x-16 justify-around py-8 px-8 backdrop-blur-md
        border backdrop-brightness-95 rounded-3xl shadow-2xl"
          >
            <TimeDisplay label="days" value={9} />
            <TimeDisplay label="hours" value={17} />
            <TimeDisplay label="minutes" value={32} />
            <TimeDisplay label="seconds" value={54} />
          </div>
        </div>
      </main>
    </>
  );
};

const TimeDisplay = (props) => {
  return (
    <div className="relative mt-2">
      <span className="text-7xl text-gray-950 font-semibold">
        {props.value < 10 ? `0${props.value}` : props.value}
      </span>
      <span className="absolute-center text-gray-50 font-bold text-xl tracking-[0.3em] uppercase">
        {props.label}
      </span>
    </div>
  );
};
