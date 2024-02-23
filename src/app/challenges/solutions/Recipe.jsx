"use client";

import Image from "next/image";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { Checkbox, CheckboxGroup, Label } from "react-aria-components";
import { fredoka } from "@/app/fonts";
import IcedCoffeImg from "../../../../public/challenges/5/iced-coffee.png"

export const Recipe = () => {
  return (
    <main
      className={`min-h-dvh grid items-center justify-center bg-[#f2f3ed] ${fredoka.className}`}
    >
      <div className="grid lg:grid-cols-2 max-w-6xl lg:rounded-xl lg:shadow-lg bg-white overflow-clip relative">
        <div className="relative lg:h-[750px] h-[500px] overflow-clip">
          <Image
            src={IcedCoffeImg}
            alt="iced coffee"
            className="max-w-full object-cover"
          />
          <div className="uppercase text-gray-50 p-2.5 font-medium absolute bottom-4 left-0 bg-gray-900 max-w-[210px] text-sm rounded-r">
            sweet iced coffee with coconut milk
          </div>
        </div>

        <div className="grid text-[#636363] p-8 items-end">
          <div>
            <ProductRatingAndTitle className="lg:max-w-[350px] lg:absolute lg:top-8 lg:-translate-x-[60%] lg:p-4 lg:rounded" />
            <BannerIconsGroup className="mt-4" />
            <Description className="mt-4" />
            <Ingredients className="mt-4" />
            <Instructions className="mt-4" />
          </div>
        </div>
      </div>
    </main>
  );
};

const BannerIcon = ({ Icon, title, value }) => {
  return (
    <div className="flex items-center gap-2">
      <Icon className="w-5 h-5" />
      <div className="grid">
        <span className="uppercase text-xs font-medium">{title}</span>
        <span className="text-[#febb57] text-xs font-medium">{value}</span>
      </div>
    </div>
  );
};

const IngredientsCheckbox = ({ value }) => {
  return (
    <Checkbox
      value={value}
      className="cursor-pointer focus-visible:ring-2 ring-yellow-400"
    >
      {({ isSelected }) => (
        <div>
          {isSelected ? (
            <CheckBoxIcon fontSize="small" className="text-[#fea620]" />
          ) : (
            <CheckBoxOutlineBlankIcon fontSize="small" />
          )}
          <span className="inline-block ml-1 text-sm">{value}</span>
        </div>
      )}
    </Checkbox>
  );
};

const InstructionsItem = ({ step, text }) => {
  return (
    <div className="flex items-start gap-1 text-sm">
      <span>{`${step}.`}</span>
      {text}
    </div>
  );
};

const Instructions = ({ className }) => {
  const instructionSteps = [
    { step: 1, text: "Boil some water and let sit for 1-2 minutes." },
    {
      step: 2,
      text: "Put the coffee grounds into a Cafetière and pour in the water.",
    },
    {
      step: 3,
      text: "Let the coffee steep for 5 minutes then slowly press down the plunger on your Cafetière.",
    },
    {
      step: 4,
      text: "Pour the coffee into a jug, allow to cool then chill for several hours.",
    },
    {
      step: 5,
      text: "Whisk in the coconut milk and condensed milk and serve over plenty of ice.",
    },
    {
      step: 6,
      text: "This coffee can be stored in the fridge for up to 5 days. Shake or stir again before serving.",
    },
  ];

  return (
    <div className={`grid gap-3 ${className}`}>
      <Label className="font-bold text-gray-800">INSTRUCTIONS</Label>
      {instructionSteps.map((instruction) => (
        <InstructionsItem
          key={instruction.step}
          step={instruction.step}
          text={instruction.text}
        />
      ))}
    </div>
  );
};

const Ingredients = ({ className }) => {
  const ingredients = [
    "3 tablespoon Espresso coffee powder",
    "1 cup off the boil water",
    "1 cup Coconut milk",
    "3 tablespoon condensed milk",
  ];

  return (
    <CheckboxGroup className={`grid gap-1 ${className}`}>
      <Label className="font-bold text-gray-800">INGREDIENTS</Label>
      {ingredients.map((ingredient, index) => (
        <IngredientsCheckbox key={index} value={ingredient} />
      ))}
    </CheckboxGroup>
  );
};

const BannerIconsGroup = ({ className }) => {
  const bannerIcons = [
    { Icon: AvTimerIcon, title: "total time", value: "10 minutes" },
    { Icon: WorkspacePremiumIcon, title: "level", value: "1" },
    { Icon: SavingsOutlinedIcon, title: "budget", value: "Under $2" },
  ];

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {bannerIcons.map((icon, index) => (
        <BannerIcon
          key={index}
          Icon={icon.Icon}
          title={icon.title}
          value={icon.value}
        />
      ))}
    </div>
  );
};

const ProductRatingAndTitle = ({ className }) => {
  return (
    <div className={`bg-white text-gray-900 grid gap-2 ${className}`}>
      <div className="flex items-center gap-2">
        <div className="text-[#fea319] flex items-center gap-1">
          <StarIcon fontSize="small" />
          <StarIcon fontSize="small" />
          <StarIcon fontSize="small" />
          <StarIcon fontSize="small" />
          <StarBorderIcon fontSize="small" />
        </div>
        <span className="text-xs font-medium">(189)</span>
      </div>
      <h2 className="text-3xl font-semibold">
        Sweet Iced Coffee with Coconut Milk
      </h2>
    </div>
  );
};

const Description = ({ className }) => {
  return (
    <p className={`italic text-gray-700 ${className}`}>
      Sweet Iced Coffe with coconut milk is easy to make and stores well in the
      fridge. Make a large batch and save yourself a few trips to the coffee
      shop
    </p>
  );
};
