"use client";

import { fredoka } from "@/app/fonts";
import { Facebook, Instagram, Pinterest, YouTube } from "@mui/icons-material";
import { ListBox, ListBoxItem, Separator } from "react-aria-components";
import { tv } from "tailwind-variants";

const focusRing = tv({
  base: "outline outline-[#194921] outline-offset-1 outline-0 focus-visible:outline-2",
});

const linkStyles = tv({
  extend: focusRing,
  base: ["rounded cursor-pointer"],
});

export const Footer = () => {
  return (
    <main
      className={`min-h-dvh ${fredoka.className} bg-[#194921] flex flex-col`}
    >
      <footer className="bg-white mt-auto rounded-t-2xl py-8 px-4 text-neutral-800">
        <div className="max-w-screen-lg w-full mx-auto flex flex-col gap-12">
          <div className="flex gap-x-16 gap-y-4 lg:flex-row flex-col">
            <div className="flex flex-col gap-4 max-w-52">
              <h2 className="text-3xl font-semibold text-[#194921]">
                GrowGreen
              </h2>
              <p>
                Explore plants, get care tips, join our community. Grow your
                green passionwith our app!
              </p>
              <ListBox
                orientation="horizontal"
                aria-label="social media links"
                className="flex gap-2"
              >
                <ListBoxItem className={linkStyles()}>
                  <Facebook />
                </ListBoxItem>
                <ListBoxItem className={linkStyles()}>
                  <YouTube />
                </ListBoxItem>
                <ListBoxItem className={linkStyles()}>
                  <Instagram />
                </ListBoxItem>
                <ListBoxItem className={linkStyles()}>
                  <Pinterest />
                </ListBoxItem>
              </ListBox>
            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 flex-1">
              <div>
                <h3 className="font-medium text-lg text-[#174820] whitespace-nowrap">
                  About Plant App
                </h3>
                <ListBox
                  orientation="vertical"
                  aria-label="app links"
                  className="flex flex-col gap-4 mt-4"
                >
                  <ListBoxItem className={linkStyles()}>Our Story</ListBoxItem>
                  <ListBoxItem className={linkStyles()}>
                    Mission & Values
                  </ListBoxItem>
                  <ListBoxItem className={linkStyles()}>
                    Meet the Team
                  </ListBoxItem>
                </ListBox>
              </div>
              <div>
                <h3 className="font-medium text-lg text-[#174820] whitespace-nowrap">
                  Shop
                </h3>
                <ListBox
                  orientation="vertical"
                  aria-label="shop links"
                  className="flex flex-col gap-4 mt-4"
                >
                  <ListBoxItem className={linkStyles()}>
                    Plant Catalog
                  </ListBoxItem>
                  <ListBoxItem className={linkStyles()}>
                    Pots & Planters
                  </ListBoxItem>
                  <ListBoxItem className={linkStyles()}>
                    Soil & Fertilizer
                  </ListBoxItem>
                  <ListBoxItem className={linkStyles()}>
                    Gardening Tools
                  </ListBoxItem>
                </ListBox>
              </div>
              <div>
                <h3 className="font-medium text-lg text-[#174820] whitespace-nowrap">
                  Community
                </h3>
                <ListBox
                  orientation="vertical"
                  aria-label="community links"
                  className="flex flex-col gap-4 mt-4"
                >
                  <ListBoxItem className={linkStyles()}>
                    Plant Care Guides
                  </ListBoxItem>
                  <ListBoxItem className={linkStyles()}>
                    Plant Identification
                  </ListBoxItem>
                  <ListBoxItem className={linkStyles()}>
                    User Forums
                  </ListBoxItem>
                  <ListBoxItem className={linkStyles()}>
                    Events & Workshops
                  </ListBoxItem>
                </ListBox>
              </div>
              <div>
                <h3 className="font-medium text-lg text-[#174820] whitespace-nowrap">
                  Support
                </h3>
                <ListBox
                  orientation="vertical"
                  aria-label="support links"
                  className="flex flex-col gap-4 mt-4"
                >
                  <ListBoxItem className={linkStyles()}>FAQ</ListBoxItem>
                  <ListBoxItem className={linkStyles()}>Contact Us</ListBoxItem>
                  <ListBoxItem className={linkStyles()}>
                    Troubleshooting
                  </ListBoxItem>
                  <ListBoxItem className={linkStyles()}>
                    Feedback & Suggestions
                  </ListBoxItem>
                </ListBox>
              </div>
            </div>
          </div>
          <Separator
            orientation="horizontal"
            className="border border-neutral-200"
          />
          <div className="flex items-center">
            @ 2024 GrowGreen
            <ListBox
              orientation="horizontal"
              aria-label="policy links"
              className="ml-auto flex gap-4"
            >
              <ListBoxItem className={linkStyles()}>Terms</ListBoxItem>
              <ListBoxItem className={linkStyles()}>Privacy</ListBoxItem>
              <ListBoxItem className={linkStyles()}>Cookies</ListBoxItem>
            </ListBox>
          </div>
        </div>
      </footer>
    </main>
  );
};
