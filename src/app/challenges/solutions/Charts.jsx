"use client";

import { fredoka } from "@/app/fonts";
import { ArrowBack, ArrowUpward, MoreVert } from "@mui/icons-material";
import { Button, ProgressBar } from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

const focusRing = tv({
  base: "outline outline-blue-600 outline-offset-1 outline-0 focus-visible:outline-2",
});

const buttonStyles = tv({
  extend: focusRing,
  base: ["transition-all pressed:scale-95"],
  variants: {
    intent: {
      ghost: [
        "rounded-full hover:bg-[#f2f2f2] p-1 text-[#0d0d0d] grid place-items-center",
      ],
    },
  },
});

export const Charts = () => {
  return (
    <main
      className={`${fredoka.className} flex flex-wrap items-center justify-center gap-8 min-h-dvh p-4 bg-[#315eb9]`}
    >
      <Card>
        <StorageChart />
      </Card>
      <Card>
        <StackedColumnChart />
      </Card>
      <Card>
        <VerticalBar />
      </Card>
      <Card>
        <VerticalBar2 />
      </Card>
    </main>
  );
};

const VerticalBar2 = () => {
  const Bar = ({ height, bottomOffset, gradientPercentage }) => {
    return (
      <div className="relative w-[2px] h-28 bg-neutral-200">
        <div
          className="w-5 absolute left-1/2 -translate-x-1/2 h-[100%] bg-red-300 rounded-t-full rounded-b-full"
          style={{
            height: `${height}%`,
            bottom: `${bottomOffset}%`,
            background: `linear-gradient(to bottom, #274afe calc(${gradientPercentage}%), #ff3a99 calc(${gradientPercentage}%))`,
          }}
        />
      </div>
    );
  };

  return (
    <>
      <header className="flex gap-4 items-start justify-between">
        <div>
          <h2 className="text-2xl font-semibold">Verticalbar</h2>
          <h3 className="opacity-60">Statistics of the month</h3>
        </div>
        <Button className={buttonStyles({ intent: "ghost" })}>
          <MoreVert />
        </Button>
      </header>
      <div className="flex gap-2 text-sm mt-8">
        <div className="flex items-center gap-2">
          <div className="bg-[#2749fe] w-6 h-3 rounded-full" />
          Data one
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-[#ff3a99] w-6 h-3 rounded-full" />
          Data two
        </div>
      </div>

      <div className="flex gap-4 justify-evenly mt-8 border-b-2 border-neutral-200">
        <Bar height={100} bottomOffset={-15} gradientPercentage={85} />
        <Bar height={50} bottomOffset={-30} gradientPercentage={40} />
        <Bar height={90} bottomOffset={-18} gradientPercentage={80} />
        <Bar height={70} bottomOffset={-27} gradientPercentage={60} />
        <Bar height={90} bottomOffset={-49} gradientPercentage={45} />
        <Bar height={90} bottomOffset={-40} gradientPercentage={55} />
        <Bar height={90} bottomOffset={-31} gradientPercentage={65} />
      </div>
    </>
  );
};

const VerticalBar = () => {
  const Bar = ({ percentage }) => {
    return (
      <div
        className="w-4 h-full rounded-t-full rounded-b-full"
        style={{
          background: `linear-gradient(to bottom, #e9edf8 calc(${percentage}%), #61960a calc(${percentage}%))`,
        }}
      />
    );
  };
  return (
    <>
      <header className="flex items-center gap-4">
        <h2 className="text-2xl font-semibold">854</h2>
        <h3 className="text-[#61960a] flex items-center gap-1">
          <ArrowUpward fontSize="small" />
          25 upward
        </h3>

        <Button className={buttonStyles({ intent: "ghost", class: "ml-auto" })}>
          <MoreVert />
        </Button>
      </header>
      <div className="flex justify-evenly h-36 mt-8">
        <Bar percentage={40} />
        <Bar percentage={75} />
        <Bar percentage={20} />
        <Bar percentage={40} />
        <Bar percentage={30} />
        <Bar percentage={20} />
        <Bar percentage={60} />
      </div>

      <h2 className="text-2xl font-semibold mt-auto">Verticalbar</h2>

      <p className="opacity-70 mt-2">
        Everybody at the bar gettin&apos; tipsy, at the bar gettin&apos;
        tipsy...
      </p>
    </>
  );
};

const StackedColumnChart = () => {
  return (
    <>
      <h2 className="text-xl font-semibold">Stacked column chart</h2>
      <div className="flex gap-2 mx-auto mt-4">
        {["Nov", "Dec", "Jan", "Feb", "Mar", "Apr"].map((month) => (
          <span
            key={month}
            className={twMerge(
              "text-sm rounded px-2 py-0.5",
              month === "Dec" && "bg-[#f1f1f1]",
            )}
          >
            {month}
          </span>
        ))}
      </div>

      <div className="my-5 flex gap-4 justify-evenly items-end">
        <div className="flex">
          <div className="bg-[#b739ff] w-5 h-32"></div>
          <div className="bg-[#fec52e] w-5 h-32"></div>
        </div>

        <div className="flex">
          <div className="bg-[#b739ff] w-5 h-24"></div>
          <div className="bg-[#fec52e] w-5 h-24"></div>
        </div>

        <div className="flex">
          <div className="bg-[#b739ff] w-5 h-16"></div>
          <div className="bg-[#fec52e] w-5 h-16"></div>
        </div>

        <div className="flex">
          <div className="bg-[#b739ff] w-5 h-28"></div>
          <div className="bg-[#fec52e] w-5 h-28"></div>
        </div>

        <div className="flex">
          <div className="bg-[#b739ff] w-5 h-10"></div>
          <div className="bg-[#fec52e] w-5 h-10"></div>
        </div>
      </div>

      <div className="flex gap-2 text-sm">
        <div className="flex items-center gap-2">
          <div className="bg-[#fec52e] w-6 h-3 rounded-full" />
          Apple
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-[#b739ff] w-6 h-3 rounded-full" />
          Banana
        </div>
      </div>

      <p className="opacity-70 mt-auto">
        Give that wolf a banana, give that wolf And before that wolf eats my
        grandma.
      </p>
    </>
  );
};

const StorageChart = () => {
  return (
    <>
      <header className="flex items-center gap-4 justify-between">
        <Button className={buttonStyles({ intent: "ghost" })}>
          <ArrowBack />
        </Button>

        <Button className={buttonStyles({ intent: "ghost" })}>
          <MoreVert />
        </Button>
      </header>

      <ProgressBar
        className="mt-8 flex justify-center"
        value={70}
        maxValue={100}
      >
        {({ percentage }) => (
          <div className="inline-flex relative justify-center items-center rounded-full p-2 bg-[#f9f9f9]">
            <div
              className={`size-28 rounded-full grid place-items-center 
                  after:size-20 after:bg-[#f9f9f9] after:rounded-full 
                  after:grid after:place-items-center rotate-90`}
              style={{
                background: `conic-gradient(#b137fd 0%, #3246fd ${percentage}%, #eeeeee ${percentage}%, #eeeeee 100%)`,
              }}
            />
            <span className="text-xl font-medium absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%]">
              {percentage}%
            </span>
          </div>
        )}
      </ProgressBar>

      <h2 className="text-2xl font-semibold mx-auto mt-4">My Storage</h2>

      <footer className="flex items-center gap-4 justify-between mt-auto">
        <div className="text-sm flex flex-col gap-2">
          <div className="flex items-center gap-1">
            <div className="size-4 rounded bg-[#3246fd]" />
            Used
          </div>
          <div className="flex items-center gap-1">
            <div className="size-4 rounded bg-[#eeeeee]" />
            Total space
          </div>
        </div>

        <Button
          className={buttonStyles({
            class:
              "rounded bg-[#3246fd] py-2 px-3 text-neutral-100 text-xs font-medium",
          })}
        >
          BUY MORE
        </Button>
      </footer>
    </>
  );
};

const Card = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        "rounded-2xl shadow-2xl h-[360px] max-w-xs w-full bg-white text-neutral-800 p-4 flex flex-col",
        className,
      )}
    >
      {children}
    </div>
  );
};
