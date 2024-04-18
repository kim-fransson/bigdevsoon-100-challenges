"use client";

import Image from "next/image";
import { Button, GridList, GridListItem, Group } from "react-aria-components";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { fredoka } from "@/app/fonts";
import { twMerge } from "tailwind-merge";

export const SelectAccount = () => {
  return (
    <main
      className={`bg-neutral-800 flex items-center justify-center p-4 min-h-dvh text-neutral-100 ${fredoka.className}`}
    >
      <div className="grid place-items-center w-full gap-8">
        <h1 className="font-medium text-4xl">Who&apos;s watching?</h1>
        <GridList
          className="flex gap-6 flex-wrap justify-center"
          items={[
            { name: "Sanja", id: 1, color: "#cdb4db" },
            { name: "Kim", id: 2, color: "#ffafcc" },
            { name: "Add Profile", id: "add-profile-btn", color: "#484848" },
          ]}
        >
          {(item) => (
            <GridListItem className="outline-none ">
              {({ isFocusVisible }) => (
                <div className="group grid place-items-center gap-3 cursor-pointer">
                  <div
                    className={twMerge(
                      "relative rounded",
                      isFocusVisible &&
                        "ring-2 ring-offset-2 ring-offset-neutral-800 ring-lime-300",
                    )}
                    style={{ background: item.color }}
                  >
                    {item.id === "add-profile-btn" ? (
                      <div className="size-44 grid place-items-center">
                        <Button
                          className="outline-none text-neutral-200 grid place-items-center rounded-full font-medium
        transition-all pressed:scale-95 hover:text-lime-400 
         focus-visible:text-lime-400 text-7xl"
                        >
                          <AddCircleIcon fontSize="inherit" />
                        </Button>
                      </div>
                    ) : (
                      <>
                        <Image
                          width={176}
                          height={176}
                          src={`https://robohash.org/${item.name}?set=set5`}
                          alt=""
                        />
                        <Group
                          className={twMerge(
                            "gap-2 absolute top-3 right-3 items-center flex",
                          )}
                        >
                          <Button
                            className="outline-none bg-neutral-600 text-neutral-200 grid place-items-center p-1 rounded font-medium
        transition-all pressed:scale-95 hover:bg-lime-400 hover:text-neutral-900
         focus-visible:bg-lime-400 focus-visible:text-neutral-900"
                          >
                            <EditIcon fontSize="inherit" />
                          </Button>

                          <Button
                            className="outline-none bg-neutral-600 text-neutral-200 grid place-items-center p-1 rounded font-medium
        transition-all pressed:scale-95 hover:bg-red-400 hover:text-neutral-100
         focus-visible:bg-red-400 focus-visible:text-neutral-100"
                          >
                            <DeleteIcon fontSize="inherit" />
                          </Button>
                        </Group>
                      </>
                    )}
                  </div>
                  {item.name}
                </div>
              )}
            </GridListItem>
          )}
        </GridList>

        <Button
          className="outline-none border-2 border-neutral-600 text-neutral-400 px-4 py-3 rounded-md font-medium
        transition-all pressed:scale-95 hover:border-lime-400 hover:bg-lime-400 hover:text-neutral-900
        focus-visible:border-lime-400 focus-visible:bg-lime-400 focus-visible:text-neutral-900"
        >
          MANAGE PROFILES
        </Button>
      </div>
    </main>
  );
};
