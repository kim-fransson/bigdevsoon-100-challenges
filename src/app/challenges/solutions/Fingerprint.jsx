"use client";

import { roboto } from "@/app/fonts";
import {
  Button,
  Link,
  NumberField as AriaNumberField,
  Input,
  Group,
} from "react-aria-components";

import FingerprintIcon from "@mui/icons-material/Fingerprint";
import BackspaceIcon from "@mui/icons-material/Backspace";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { useClickAway, useList } from "@uidotdev/usehooks";
import { FocusScope, useFocusManager } from "react-aria";

export const Fingerprint = () => {
  const [isOpen, setIsOpen] = useState(true);

  const [list, { push, removeAt, clear }] = useList([]);

  const ref = useClickAway(() => {
    setIsOpen(false);
    clear();
  });
  return (
    <main
      className={`${roboto.className} min-h-dvh bg-[#040c1f] flex items-center justify-center`}
    >
      <div
        className="lg:rounded-2xl lg:shadow-2xl lg:max-w-sm overflow-clip w-full bg-[#373d49] 
      text-neutral-50  relative"
      >
        <div
          className={twMerge(
            "justify-evenly flex flex-col items-center lg:min-h-[600px] min-h-dvh",
            isOpen ? "blur-sm" : "",
          )}
        >
          <div className="flex mb-auto flex-col gap-1 items-center w-full bg-green-600 p-6 rounded-b-3xl">
            <h2 className="font-semibold text-3xl tracking-wide">
              Welcome Back
            </h2>
            <p className="text-neutral-100">Scan your fingerprint to login</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <Button
              aria-label="scan fingerprint"
              className="transition-all pressed:scale-95 outline-none text-[92px] aspect-square flex 
            items-center justify-center p-2 rounded-3xl bg-neutral-50 text-green-700
            hover:shadow-lg hover:shadow-green-700 pressed:shadow-lg 
            pressed:shadow-green-600 
            focus-visible:shadow-lg focus-visible:shadow-green-600"
            >
              <FingerprintIcon fontSize="inherit" />
            </Button>
            <span className="tracking-wider">Touch the fingerprint reader</span>
          </div>
          <Button
            onPress={() => setIsOpen(true)}
            aria-label="use pincode"
            className="transition-all mt-auto mb-20 pressed:scale-95 outline-none border-2 border-neutral-400 px-16 text-sm py-1.5 rounded-full
          hover:border-green-600 hover:bg-green-600 pressed:border-green-600 pressed:bg-green-600 
          focus-visible:border-green-600 focus-visible:bg-green-600"
          >
            Use pin this time
          </Button>
        </div>
        <div
          ref={ref}
          className={twMerge(
            "h-3/4 bg-neutral-50 rounded-t-3xl flex flex-col items-center p-8 absolute bottom-0 left-0 right-0 text-neutral-800 transition-transform duration-300",
            isOpen ? "translate-y-0" : "translate-y-full",
          )}
        >
          <h2 className="text-lg font-medium">Log in via PIN</h2>
          <FocusScope>
            <Group className="flex gap-4 justify-center mt-4">
              <NumberField
                value={list[0]}
                maxValue={9}
                minValue={0}
                aria-label="digit 1"
              />
              <NumberField
                value={list[1]}
                maxValue={9}
                minValue={0}
                aria-label="digit 2"
              />
              <NumberField
                value={list[2]}
                maxValue={9}
                minValue={0}
                aria-label="digit 3"
              />
              <NumberField
                value={list[3]}
                maxValue={9}
                minValue={0}
                aria-label="digit 4"
              />
            </Group>
          </FocusScope>
          <Link
            className="underline-offset-2 underline text-neutral-400 cursor-pointer mt-2
          outline-none focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-green-600"
          >
            Can&apos;t login
          </Link>

          <Group className="grid grid-cols-3 w-full h-full mt-4 items-center justify-items-center">
            <DigitButton onPress={() => push(1)}>1</DigitButton>
            <DigitButton onPress={() => push(2)}>2</DigitButton>
            <DigitButton onPress={() => push(3)}>3</DigitButton>

            <DigitButton onPress={() => push(4)}>4</DigitButton>
            <DigitButton onPress={() => push(5)}>5</DigitButton>
            <DigitButton onPress={() => push(6)}>6</DigitButton>

            <DigitButton onPress={() => push(7)}>7</DigitButton>
            <DigitButton onPress={() => push(8)}>8</DigitButton>
            <DigitButton onPress={() => push(9)}>9</DigitButton>

            <DigitButton
              onPress={() => {
                setIsOpen(false);
                clear();
              }}
            >
              <FingerprintIcon />
            </DigitButton>
            <DigitButton onPress={() => push(0)}>0</DigitButton>
            <DigitButton onPress={() => removeAt(list.length - 1)}>
              <BackspaceIcon />
            </DigitButton>
          </Group>
        </div>
      </div>
    </main>
  );
};

const DigitButton = (props) => {
  return (
    <Button
      {...props}
      className="outline-none focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-green-600
      hover:bg-neutral-200/60 rounded-full aspect-square size-10 text-xl font-bold text-green-600 flex items-center justify-center
      transition-all pressed:bg-neutral-200/60 pressed:scale-95 pressed:shadow-md pressed:shadow-green-800"
    >
      {props.children}
    </Button>
  );
};

const NumberField = (props) => {
  let focusManager = useFocusManager();
  return (
    <AriaNumberField
      {...props}
      onInput={(v) => {
        if (v.target.value) {
          focusManager.focusNext();
        }
      }}
    >
      <Input
        className="min-w-0 size-10 selection:bg-green-100 flex-grow-0 text-center text-lg font-medium outline-none transition-all
      focus:outline-2 focus:outline-green-600 focus:outline-offset-1 rounded-lg border-2 border-neutral-400 text-neutral-600"
      />
    </AriaNumberField>
  );
};
