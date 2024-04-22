"use client";

import { fredoka } from "@/app/fonts";
import { Button, Group, Switch } from "react-aria-components";
import { tv } from "tailwind-variants";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { twMerge } from "tailwind-merge";
import { useState } from "react";

const focusRing = tv({
  base: "outline outline-orange-400 outline-offset-2 outline-0 focus-visible:outline-2",
});

const buttonStyles = tv({
  extend: focusRing,
  base: [
    "flex flex-1 items-center font-medium justify-center transition-all pressed:scale-95 rounded-md",
  ],
  variants: {
    variant: {
      border:
        "border-gray-400 border-2 text-gray-500 hover:bg-gray-400 hover:text-gray-50 px-4 py-2",
      primary: "bg-orange-400 text-white hover:bg-orange-500 px-4 py-2",
      ghost:
        "rounded-full hover:text-orange-400 hover:bg-orange-100 flex-grow-0 aspect-square p-2",
    },
  },
});

export const CookiesBanner = () => {
  const [showSettings, setShowSettings] = useState(false);
  return (
    <main
      className={`${fredoka.className} min-h-dvh flex items-center justify-center p-4 bg-orange-50`}
    >
      <div className="max-w-lg w-full bg-white items-center flex flex-col gap-6 rounded-2xl shadow-2xl relative px-4 pt-12 pb-8">
        <span className="text-7xl absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2">
          🍪
        </span>
        {showSettings ? (
          <CustomizeYourPreferences onBack={() => setShowSettings(false)} />
        ) : (
          <CanWeUsCookies onCustomize={() => setShowSettings(true)} />
        )}
      </div>
    </main>
  );
};

const CanWeUsCookies = ({ onCustomize }) => {
  return (
    <>
      <h2 className="font-semibold text-3xl">Can we use cookies?</h2>
      <p className="text-center">
        We use cookies to enhance your browsing experience and analyze site
        traffic. By clicking{" "}
        <span className="px-2 py-0.5 bg-orange-400 font-medium text-white rounded-md">
          Accept all
        </span>{" "}
        you consent to the use of cookies in accordance with our Cookie Policy.
        For more information, please read our Privacy Policy. You can manage
        your cookie preferences by clicking{" "}
        <span className="border-2 px-2 py-0.5 font-medium border-gray-400 text-gray-500 rounded-md">
          Customize
        </span>{" "}
        . Thank you for visiting!
      </p>
      <Group className="flex gap-4 w-full">
        <Button
          onPress={onCustomize}
          className={buttonStyles({ variant: "border" })}
        >
          Customize
        </Button>
        <Button className={buttonStyles({ variant: "primary" })}>
          Accept all
        </Button>
      </Group>
    </>
  );
};

const CustomizeYourPreferences = ({ onBack }) => {
  return (
    <>
      <header className="flex gap-2 items-center justify-between w-full relative">
        <Button
          onPress={onBack}
          className={buttonStyles({
            variant: "ghost",
            class: "text-xl",
          })}
        >
          <ArrowBackIcon fontSize="inherit" />
        </Button>
        <h2 className="font-semibold text-3xl mx-auto">
          Customize your preferences
        </h2>
      </header>
      <Group className="flex flex-col w-full gap-8">
        <CustomSwitch defaultSelected>Necessary</CustomSwitch>
        <CustomSwitch>Analytics and performance</CustomSwitch>
        <CustomSwitch>Marketing</CustomSwitch>
      </Group>
      <Group className="flex gap-4 w-full">
        <Button className={buttonStyles({ variant: "border" })}>
          Expand details
        </Button>
        <Button
          onPress={onBack}
          className={buttonStyles({ variant: "primary" })}
        >
          Save preferences
        </Button>
      </Group>
    </>
  );
};

const CustomSwitch = ({ children, ...props }) => {
  return (
    <Switch
      {...props}
      className="flex items-center gap-4 cursor-pointer justify-between font-medium text-lg"
    >
      {({ isSelected, isFocusVisible }) => (
        <>
          {children}
          <div
            className={twMerge(
              `w-10 h-6 bg-gray-300 rounded-[1.143rem] transition-all duration-200
                before:contents-[''] before:block before:my-[0.143rem] before:w-5 before:aspect-square before:bg-white before:rounded-[16px]
                before:transition-all before:duration-200`,
              isSelected
                ? `before:bg-white before:translate-x-full bg-orange-400 before:-ml-0.5`
                : "before:ml-0.5",
              isFocusVisible
                ? `outline-2 outline outline-orange-400 outline-offset-2`
                : "",
            )}
          />
        </>
      )}
    </Switch>
  );
};
