"use client";

import { roboto } from "@/app/fonts";
import { Search } from "@mui/icons-material";
import { useState } from "react";
import { useFocusRing } from "react-aria";
import {
  Checkbox,
  GridList,
  GridListItem,
  Input,
  Radio,
  RadioGroup,
  SearchField,
  Switch,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

import { BsStripe } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import {
  SiGoogleads,
  SiGooglecalendar,
  SiNotion,
  SiZendesk,
} from "react-icons/si";
import {
  FaDropbox,
  FaFacebook,
  FaMailchimp,
  FaPaypal,
  FaShopify,
  FaSlack,
} from "react-icons/fa";

const focusRing = tv({
  base: "outline outline-indigo-600 outline-offset-1 outline-0 focus-visible:outline-2",
});

const radioStyles = tv({
  extend: focusRing,
  base: [
    "bg-neutral-100 text-neutral-600 shadow-md rounded-lg px-2 py-1 selected:bg-indigo-600 selected:text-neutral-50",
    "cursor-pointer",
  ],
});

export const AppIntegrations = () => {
  const { focusProps, isFocused } = useFocusRing();
  const [activeFilter, setActiveFilter] = useState("all apps");

  return (
    <main
      className={`${roboto.className} min-h-dvh bg-neutral-50 flex items-center justify-center p-4`}
    >
      <div
        className="max-w-screen-lg w-full rounded-2xl shadow-2xl bg-white text-neutral-800
      border-2 border-neutral-300 px-4 py-6"
      >
        <header className="flex flex-wrap items-center gap-4 justify-between">
          <div className="flex flex-col tracking-wider">
            <h2 className="font-semibold text-xl">Integrations</h2>
            <h3 className="font-medium text-sm text-neutral-800/60">
              Connect all your tools for best results
            </h3>
          </div>

          <SearchField
            aria-label="search"
            className={twMerge(
              `px-2 py-1.5 flex-1 max-w-64 rounded-lg placeholder:text-neutral-800/70 
              text-sm flex placeholder:tracking-wider items-center gap-2 border-2 border-neutral-300 shadow-lg`,
              isFocused && "border-indigo-600",
            )}
          >
            <Search
              className={twMerge(
                isFocused ? "text-indigo-600" : "text-neutral-800/70",
              )}
              fontSize="small"
            />
            <Input
              {...focusProps}
              placeholder="Search"
              className="outline-none bg-transparent min-w-32 w-full selection:bg-indigo-100"
            />
          </SearchField>
        </header>

        <RadioGroup
          value={activeFilter}
          onChange={setActiveFilter}
          aria-label="filters"
          className="flex flex-wrap gap-x-4 gap-y-2 mt-4"
        >
          <Radio className={radioStyles()} value="all apps">
            All Apps
          </Radio>
          <Radio className={radioStyles()} value="mails">
            Mails
          </Radio>
          <Radio className={radioStyles()} value="communication">
            Communication
          </Radio>
          <Radio className={radioStyles()} value="productivity">
            Productivity
          </Radio>
          <Radio className={radioStyles()} value="finance">
            Finance
          </Radio>
          <Radio className={radioStyles()} value="file management">
            File Management
          </Radio>
        </RadioGroup>

        <GridList
          items={apps}
          selectionMode="multiple"
          defaultSelectedKeys={[1]}
          aria-label="Favorite pokemon"
          className="grid gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mt-8"
        >
          {(item) => (
            <GridListItem
              textValue={item.name}
              className={twMerge(
                "cursor-pointer border-2 p-2 rounded-lg border-neutral-300 shadow-md selected:bg-gradient-to-br from-indigo-100 to-75% to-white",
                "selected:border-indigo-100 transition-all",
                focusRing(),
              )}
            >
              {({ isSelected }) => (
                <div className="flex flex-col gap-2">
                  <header className="flex gap-2 items-center justify-between">
                    <span
                      className={twMerge(
                        "p-1.5 rounded bg-neutral-200 text-3xl",
                        isSelected ? "bg-white" : "bg-neutral-200",
                      )}
                    >
                      {item.icon}
                    </span>
                    <CustomCheckbox slot="selection" aria-label="selected" />
                  </header>
                  <h2 className="font-semibold text-neutral-800/90">
                    {item.name}
                  </h2>
                  <p className="text-xs text-neutral-800/70">
                    {item.description}
                  </p>
                </div>
              )}
            </GridListItem>
          )}
        </GridList>
      </div>
    </main>
  );
};

const apps = [
  {
    id: 1,
    name: "Stripe",
    icon: <BsStripe className="text-[#635bff]" />,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit vel esse reiciendis minus commodi nesciunt tempora?",
  },
  {
    id: 2,
    name: "Gmail",
    icon: <BiLogoGmail className="text-[#e94234]" />,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit vel esse reiciendis minus commodi nesciunt tempora?",
  },
  {
    id: 3,
    name: "Google Ads",
    icon: <SiGoogleads className="text-[#fabc03]" />,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit vel esse reiciendis minus commodi nesciunt tempora?",
  },
  {
    id: 4,
    name: "Dropbox",
    icon: <FaDropbox className="text-[#0061fe]" />,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit vel esse reiciendis minus commodi nesciunt tempora?",
  },
  {
    id: 5,
    name: "Mailchimp",
    icon: <FaMailchimp className="text-[#212121]" />,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit vel esse reiciendis minus commodi nesciunt tempora?",
  },
  {
    id: 6,
    name: "Slack",
    icon: <FaSlack className="text-[#34c5ef]" />,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit vel esse reiciendis minus commodi nesciunt tempora?",
  },
  {
    id: 7,
    name: "Google Calendar",
    icon: <SiGooglecalendar className="text-[#33a752]" />,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit vel esse reiciendis minus commodi nesciunt tempora?",
  },
  {
    id: 8,
    name: "Notion",
    icon: <SiNotion className="text-[#121212]" />,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit vel esse reiciendis minus commodi nesciunt tempora?",
  },
  {
    id: 9,
    name: "Shopify",
    icon: <FaShopify className="text-[#95bf46]" />,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit vel esse reiciendis minus commodi nesciunt tempora?",
  },
  {
    id: 10,
    name: "Facebook",
    icon: <FaFacebook className="text-[#0866ff]" />,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit vel esse reiciendis minus commodi nesciunt tempora?",
  },
  {
    id: 11,
    name: "Zendesk",
    icon: <SiZendesk className="text-[#212121]" />,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit vel esse reiciendis minus commodi nesciunt tempora?",
  },
  {
    id: 12,
    name: "PayPal",
    icon: <FaPaypal className="text-[#268fc2]" />,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit vel esse reiciendis minus commodi nesciunt tempora?",
  },
];

const CustomCheckbox = ({ children, ...props }) => {
  return (
    <Checkbox
      {...props}
      className="flex items-center gap-4 cursor-pointer justify-between font-medium text-lg"
    >
      {({ isSelected, isFocusVisible }) => (
        <>
          {children}
          <div
            className={twMerge(
              `w-10 h-5 bg-neutral-300 rounded-[1.143rem] transition-all duration-200
                before:contents-[''] before:block before:my-[0.143rem] before:w-4 before:aspect-square before:bg-white before:rounded-[16px]
                before:transition-all before:duration-200`,
              isSelected
                ? `before:bg-white before:translate-x-full bg-indigo-600 before:ml-1.5`
                : "before:ml-0.5",
              isFocusVisible
                ? `outline-2 outline outline-indigo-600 outline-offset-1`
                : "",
            )}
          />
        </>
      )}
    </Checkbox>
  );
};
