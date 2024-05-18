"use client";

import { fredoka } from "@/app/fonts";
import { ExpandMore, Favorite, Visibility } from "@mui/icons-material";
import {
  Button,
  GridList,
  GridListItem,
  Group,
  Input,
  ListBox,
  ListBoxItem,
  Popover,
  Radio,
  RadioGroup,
  Select,
  SelectValue,
  TextField,
} from "react-aria-components";
import { tv } from "tailwind-variants";

import { FaSketch } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { SiAdobexd } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeaftereffects } from "react-icons/si";
import { twMerge } from "tailwind-merge";

const focusRing = tv({
  base: "outline outline-[#dcdbfb] outline-offset-1 outline-0 focus-visible:outline-2",
});

const buttonStyles = tv({
  extend: focusRing,
  base: ["transition-all pressed:scale-95"],
});

const radioStyles = tv({
  extend: focusRing,
  variants: {
    isRounded: {
      true: ["p-2 grid place-items-center text-xl"],
      false: ["px-3 py-1"],
    },
  },
  base: [
    "selected:bg-[#ededf9] selected:shadow-md rounded-full  cursor-pointer",
  ],
});

const linkItemsStyles = tv({
  extend: focusRing,
  base: [
    "cursor-pointer font-medium opacity-60 selected:opacity-100 text-lg px-4 rounded-full py-1 selected:bg-[#dbdaf9]",
  ],
});

const assetItemsStyles = tv({
  extend: focusRing,
  base: ["cursor-pointer flex-1"],
});

const inputStyles = tv({
  base: [
    "px-2 py-2 w-full rounded-r-lg border-l-2 bg-white focus:ring-[#dbdaf9] focus:ring-2 outline-none",
  ],
});

const selectTriggerStyles = tv({
  extend: focusRing,
  base: [
    "px-2 py-2 bg-white rounded-l-lg justify-between flex items-center gap-2",
  ],
});

const selectOptionStyles = tv({
  base: ["rounded focus:bg-[#dbdaf9] cursor-pointer outline-none p-1"],
});

export const DesignAssets = () => {
  return (
    <main
      className={`flex flex-col w-full bg-[#f7f7f7] min-h-screen mx-auto ${fredoka.className}`}
    >
      <div className="bg-white border-b border-[#cacaf7] shadow-sm">
        <nav className="max-w-screen-xl items-center mx-auto flex gap-3 flex-wrap lg:justify-between p-4">
          <div className="bg-[#191a2f] text-neutral-50 rotate-45 rounded size-6 grid place-items-center">
            <span className="block -rotate-45 text-sm font-semibold">UI</span>
          </div>
          <span className="text-xl font-semibold">InterfaceCraft</span>

          <ListBox
            orientation="horizontal"
            selectionMode="single"
            disallowEmptySelection
            disabledKeys={[2, 3]}
            defaultSelectedKeys={[1]}
            aria-label="links"
            className="flex flex-wrap ml-auto lg:gap-12"
            items={[
              { id: 1, name: "Browse" },
              { id: 2, name: "All Access" },
              { id: 3, name: "Become an Author" },
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
                  "px-4 py-2 rounded-lg underline-offset-4 font-medium tracking-wide",
              })}
            >
              Log In
            </Button>
            <Button
              className={buttonStyles({
                class:
                  "bg-[#191a2f] text-white tracking-wide px-4 rounded-full py-2",
              })}
            >
              Sign Up
            </Button>
          </Group>
        </nav>
      </div>
      <div className="flex-1 w-full px-4 max-w-screen-xl mx-auto flex flex-col items-center justify-center gap-12">
        <div className="max-w-3xl text-center flex flex-col gap-8">
          <h1 className="text-5xl font-semibold">
            Elevate Your Creations: Premium Design Assets for Innovators
          </h1>

          <h2 className="text-lg opacity-90">
            Discover a curated collection of high-quality design resources to
            transform your projects and inspire your creativity.
          </h2>

          <Group className="flex max-w-lg mx-auto w-full">
            <Select defaultSelectedKey="1">
              <Button
                className={selectTriggerStyles({ class: "min-w-36 shadow-md" })}
              >
                <SelectValue />
                <ExpandMore />
              </Button>
              <Popover
                className={`w-[--trigger-width] p-2 rounded-md bg-white shadow-md entering:animate-in entering:fade-in exiting:animate-out exiting:fade-out ${fredoka.className}`}
              >
                <ListBox className="outline-none">
                  <ListBoxItem id="1" className={selectOptionStyles()}>
                    All products
                  </ListBoxItem>
                  <ListBoxItem className={selectOptionStyles()}>
                    Web
                  </ListBoxItem>
                  <ListBoxItem className={selectOptionStyles()}>
                    Mobile
                  </ListBoxItem>
                  <ListBoxItem className={selectOptionStyles()}>
                    UI Kits
                  </ListBoxItem>
                </ListBox>
              </Popover>
            </Select>
            <TextField className="flex-1">
              <Input
                placeholder="Search"
                className={inputStyles({ class: "shadow-md" })}
              />
            </TextField>
          </Group>
        </div>

        <div className="bg-white rounded-xl p-6 w-full">
          <header className="flex flex-wrap gap-2 items-center justify-between w-full">
            <RadioGroup
              defaultValue={"All"}
              className="flex gap-5 items-center"
            >
              <Radio className={radioStyles()} key={1} value="All">
                All
              </Radio>
              <Radio className={radioStyles()} value="Web">
                Web
              </Radio>
              <Radio className={radioStyles()} value="Mobile">
                Mobile
              </Radio>
              <Radio className={radioStyles()} value="Ui Kits">
                Ui Kits
              </Radio>
            </RadioGroup>

            <RadioGroup
              defaultValue={"Sketch"}
              className="flex gap-5 items-center"
            >
              <Radio
                className={radioStyles({ isRounded: true })}
                key={1}
                value="Sketch"
              >
                <FaSketch className="text-[#fdad00]" />
              </Radio>
              <Radio className={radioStyles({ isRounded: true })} value="Figma">
                <FaFigma className="text-[#09ce83]" />
              </Radio>
              <Radio className={radioStyles({ isRounded: true })} value="Xd">
                <SiAdobexd className="text-[#ee58e5]" />
              </Radio>
              <Radio className={radioStyles({ isRounded: true })} value="ps">
                <SiAdobephotoshop className="text-[#2993e1]" />
              </Radio>
              <Radio className={radioStyles({ isRounded: true })} value="ae">
                <SiAdobeaftereffects className="text-[#7e7de2]" />
              </Radio>
            </RadioGroup>
          </header>
          <GridList
            aria-label="assets examples"
            className="flex flex-wrap w-full mt-4 gap-4"
            selectionMode="single"
            items={[
              {
                id: 1,
                imgUrl: "",
                name: "Video Player",
                price: 21,
                bg: "#141420",
              },
              {
                id: 2,
                imgUrl: "",
                name: "Friend Request",
                price: 9,
                bg: "#c6ddaf",
              },
              {
                id: 3,
                imgUrl: "",
                name: "Article Slider",
                price: 12,
                bg: "#b3c7d2",
              },
            ]}
          >
            {(item) => (
              <GridListItem className={assetItemsStyles({ class: "" })}>
                {({ isSelected }) => (
                  <>
                    <div
                      style={{ background: item.bg }}
                      className={twMerge(
                        "rounded-2xl h-52 w-full relative overflow-clip",
                      )}
                    >
                      {isSelected && (
                        <div className="flex items-center justify-center absolute inset-0 bg-black/50 text-neutral-50 z-50 border gap-4 ">
                          <Button
                            className={buttonStyles({
                              class:
                                "border-2 rounded-full p-1 aspect-square grid place-items-center opacity-70 hover:opacity-100 focus-visible:opacity-100",
                            })}
                          >
                            <Visibility />
                          </Button>

                          <Button
                            className={buttonStyles({
                              class:
                                "border-2 rounded-full p-1 aspect-square grid place-items-center opacity-70 hover:opacity-100 focus-visible:opacity-100",
                            })}
                          >
                            <Favorite />
                          </Button>
                        </div>
                      )}
                      <span className="bg-[#ededf9] rounded-full absolute top-2 left-2 text-xl p-2">
                        <FaFigma className="text-[#09ce83]" />
                      </span>
                    </div>
                    <footer className="flex justify-between items-center font-medium px-4 mt-1">
                      <span>{item.name}</span>
                      <span>${item.price}</span>
                    </footer>
                  </>
                )}
              </GridListItem>
            )}
          </GridList>
        </div>
      </div>
    </main>
  );
};
