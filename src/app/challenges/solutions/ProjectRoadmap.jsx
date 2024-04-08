"use client";

import { fredoka } from "@/app/fonts";
import Image from "next/image";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { twMerge } from "tailwind-merge";

export const ProjectRoadmap = () => {
  return (
    <main
      className={`min-h-dvh grid place-items-center p-4 ${fredoka.className} bg-white`}
    >
      <div className="grid max-w-screen-lg w-full gap-4">
        <h2 className="text-3xl font-semibold">Project Task</h2>
        <div className="bg-gray-100 rounded-t-lg shadow-lg min-w-[700px] overflow-auto">
          <header className="flex gap-8 font-medium text-sm p-2 border-b border-gray-400">
            <div className="inline-flex rounded-lg items-center gap-2 px-2 py-1 bg-gray-200">
              Team
              <div className="flex items-center">
                {["Anders", "Bob", "Cedric"].map((user) => (
                  <Image
                    key={user}
                    width={24}
                    height={24}
                    alt=""
                    src={`https://robohash.org/${user}?set=set5`}
                    className="rounded-full border border-gray-400 first:ml-0 -ml-3 bg-gray-300"
                  />
                ))}
                <div className="size-6 text-xs border border-gray-400 -ml-3 rounded-full text-gray-50 bg-gray-600 grid place-items-center">
                  +3
                </div>
              </div>
            </div>
            <div className="inline-flex rounded-lg items-center gap-2 px-2 py-1 bg-gray-200">
              <ChevronLeftIcon />
              December 2023
              <ChevronRightIcon />
            </div>
          </header>

          <div className="grid grid-cols-14 grid-rows-14">
            {[
              { dayOfWeek: "Mon", date: 8, isCurrent: false },
              { dayOfWeek: "Tue", date: 9, isCurrent: false },
              { dayOfWeek: "Wed", date: 10, isCurrent: true },
              { dayOfWeek: "Thu", date: 11, isCurrent: false },
              { dayOfWeek: "Fri", date: 12, isCurrent: false },
              { dayOfWeek: "Sat", date: 13, isCurrent: false },
              { dayOfWeek: "Sun", date: 14, isCurrent: false },
            ].map(({ dayOfWeek, date, isCurrent }) => (
              <div
                className={
                  "col-span-2 grid place-items-center p-2 border-b border-gray-400"
                }
                key={dayOfWeek}
              >
                <div
                  className={twMerge(
                    "inline-flex items-center gap-1 px-2 py-1 rounded-lg text-sm",
                    isCurrent ? "bg-blue-600 text-gray-50" : "",
                  )}
                >
                  {dayOfWeek}
                  <span className={twMerge(isCurrent ? "" : "opacity-60")}>
                    {date}
                  </span>
                </div>
              </div>
            ))}

            <div className="col-span-2 col-start-1 row-start-2 row-span-full border-r border-gray-400"></div>
            <div className="col-span-2 col-start-3 row-start-2 row-span-full border-r border-gray-400"></div>
            <div className="col-span-2 col-start-5 row-start-2 row-span-full border-r border-gray-400"></div>
            <div className="col-span-2 col-start-7 row-start-2 row-span-full border-r border-gray-400"></div>
            <div className="col-span-2 col-start-9 row-start-2 row-span-full border-r border-gray-400"></div>
            <div className="col-span-2 col-start-11 row-start-2 row-span-full border-r border-gray-400 bg-gray-200"></div>
            <div className="col-span-2 col-start-13 row-start-2 row-span-full bg-gray-200"></div>

            <div className="row-start-2 row-span-full col-start-6 w-0.5 bg-blue-600"></div>

            {[
              {
                name: "Research and Planning",
                user: "Anders",
                row: 3,
                col: 1,
                length: 4,
                bg: "#2d87ff",
              },
              {
                name: "Create wireframes/mockups",
                user: "Bob",
                row: 5,
                col: 3,
                length: 4,
                bg: "#11cd5c",
              },
              {
                name: "Develop test cases",
                user: "Daniel",
                row: 7,
                col: 9,
                length: 4,
                bg: "#ff9e2d",
              },
              {
                name: "Designuser interface",
                user: "Cedric",
                row: 9,
                col: 6,
                length: 3,
                bg: "#11cd5c",
              },
              {
                name: "Conduct integration testing",
                user: "Elenore",
                row: 11,
                col: 7,
                length: 4,
                bg: "#ff9e2d",
              },
              {
                name: "Define project scope",
                user: "France",
                row: 13,
                col: 1,
                length: 4,
                bg: "#2d87ff",
              },
            ].map(({ name, user, length, bg, row, col }) => (
              <div
                key={name}
                className="flex items-center self-center gap-2 p-2 text-sm rounded-full text-gray-50 font-medium"
                style={{
                  gridColumn: `span ${length} / span ${length}`,
                  gridRowStart: row,
                  gridColumnStart: col,
                  background: bg,
                }}
              >
                <Image
                  key={user}
                  width={32}
                  height={32}
                  alt=""
                  src={`https://robohash.org/${user}?set=set5`}
                  className="rounded-full bg-gray-300"
                />
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
