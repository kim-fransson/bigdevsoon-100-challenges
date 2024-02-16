"use client";

import Image from "next/image";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { Checkbox, CheckboxGroup, Label } from "react-aria-components";

import { Fredoka } from "next/font/google";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Recipe() {
  return (
    <main className={`min-h-dvh grid items-center justify-center bg-[#f2f3ed] ${fredoka.className}`}>
      <div className="grid lg:grid-cols-2 max-w-5xl lg:rounded-xl lg:shadow-lg bg-white overflow-clip relative">
        <div className="grid text-[#636363] px-8 lg:pt-24 lg:pb-0 py-8 order-2 items-center">
          <div className="bg-white text-gray-900 grid gap-2 py-3 lg:pl-8 px-4 absolute top-12 lg:right-72 lg:left-auto left-0 lg:max-w-sm">
            <div className="flex items-center gap-2">
              <div className="text-[#fea319] flex items-center gap-1">
                <StarIcon className="w-4 h-4" />
                <StarIcon className="w-4 h-4" />
                <StarIcon className="w-4 h-4" />
                <StarIcon className="w-4 h-4" />
                <StarBorderIcon className="w-4 h-4" />
              </div>
              <span className="text-[0.6rem] font-medium">(189)</span>
            </div>
            <h2 className="text-3xl font-semibold">Sweet iced Coffee with Coconut Milk</h2>
          </div>
          <div>
            <div className="flex items-center gap-4">
              <BannerIcon
                Icon={AvTimerIcon}
                title="total time"
                value="10 minutes"
              />
              <BannerIcon
                Icon={AutoAwesomeOutlinedIcon}
                title="level"
                value="1"
              />
              <BannerIcon
                Icon={SavingsOutlinedIcon}
                title="budget"
                value="Under $2"
              />
            </div>

            <p className="italic text-gray-700 text-xs mt-4">
              Sweet Iced Coffe with coconut milk is easy to make and stores well
              in the fridge. Make a large batch and save yourself a few trips to
              the coffee shop
            </p>

            <CheckboxGroup className="grid gap-1 mt-8">
              <Label className="text-xs font-bold text-gray-800">
                INGREDIENTS
              </Label>
              <IngredientsCheckbox value="3 tablespoon Espresso coffee powder" />
              <IngredientsCheckbox value="1 cup off the boil water" />
              <IngredientsCheckbox value="1 cup Coconut milk" />
              <IngredientsCheckbox value="3 tablespoon condensed milk" />
            </CheckboxGroup>

            <div className="grid gap-3">
              <Label className="text-xs font-bold text-gray-800 mt-8">
                INSTRUCTIONS
              </Label>

              <InstructionsItem
                step={1}
                text="Boil some water and let sit for 1-2 minutes."
              />
              <InstructionsItem
                step={2}
                text="Put the coffee grounds into a Cafetière  and pour in the water."
              />
              <InstructionsItem
                step={3}
                text="Let the coffee steep for 5 minutes then slowly press down the plunger on your Cafetière."
              />
              <InstructionsItem
                step={4}
                text="Pour the coffee into a jug, allow to cool then chill for several hours."
              />
              <InstructionsItem
                step={5}
                text="Whisk in the coconut milk and condensed milk and serve over plenty of ice."
              />
              <InstructionsItem
                step={6}
                text="This coffee can be stored in the fridge for up to 5 days. Shake or stir again before serving."
              />
            </div>
          </div>
        </div>
        <div className="relative order-1">
          <Image
            width={1200}
            height={800}
            src="/challenges/5/iced-coffee.png"
            alt="iced coffee"
            className="max-w-full lg:h-full h-[500px] object-cover"
          />
          <div className="uppercase text-gray-50 p-2.5 font-medium absolute bottom-4 left-0 bg-gray-900 max-w-[210px] text-sm rounded-r">
            sweet iced coffee with coconut milk
          </div>
        </div>
      </div>
    </main>
  );
}

const BannerIcon = ({ Icon, title, value }) => {
  return (
    <div className="flex items-center gap-2">
      <Icon className="w-5 h-5" />
      <div className="grid">
        <span className="uppercase text-[0.6rem] font-medium">{title}</span>
        <span className="text-[#febb57] text-[0.6rem] font-medium">{value}</span>
      </div>
    </div>
  );
};

const IngredientsCheckbox = ({ value }) => {
  return (
    <Checkbox value={value} className="cursor-pointer focus-visible:ring-2 ring-yellow-400">
      {({ isSelected }) => (
        <div>
          {isSelected ? (
            <CheckBoxIcon className="w-4 h-4 text-[#fea620]" />
          ) : (
            <CheckBoxOutlineBlankIcon className="w-4 h-4" />
          )}
          <span className="inline-block ml-1 text-xs">{value}</span>
        </div>
      )}
    </Checkbox>
  );
};

const InstructionsItem = ({ step, text }) => {
  return (
    <div className="flex items-start gap-1 text-xs">
      <span>{`${step}.`}</span>
      {text}
    </div>
  );
};
