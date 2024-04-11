"use client";

import { roboto } from "@/app/fonts";
import Image from "next/image";
import logo from "../../assets/logo2.svg";
import {
  Button,
  Group,
  Input,
  NumberField as AriaNumberField,
  Separator,
} from "react-aria-components";
import { tv } from "tailwind-variants";
import { FocusScope, useFocusManager } from "react-aria";

const buttonStyles = tv({
  base: [
    "transition-all outline-none grid place-items-center",
    "pressed:scale-95 focus-visible:outline-2 focus-visible:outline-[#ff4f40] focus-visible:outline-offset-2",
  ],
  variants: {
    variant: {
      cancel: [
        "px-4 py-2 font-medium border-2 border-gray-300 hover:border-gray-800 hover:bg-gray-800 hover:text-gray-50 rounded-lg",
      ],
      verify: [
        "px-4 py-2 bg-[#ff4f40] bg-opacity-85 hover:bg-opacity-100 text-gray-50 font-medium rounded-lg",
      ],
      resend: [
        "p-0.5 hover:text-[#ff4f40] underline underline-offset-2 font-medium focus-visible:-outline-offset-1",
      ],
    },
  },
});

export const CodeVerification = () => {
  return (
    <main
      className={`${roboto.className} min-h-dvh p-4 flex justify-center items-center bg-[#fcb7b1] text-gray-800/90`}
    >
      <div className="rounded-2xl shadow-xl bg-white p-2 max-w-md w-full flex flex-col px-8 py-12 gap-5">
        <Image
          width={40}
          height={40}
          alt=""
          src={logo}
          className="mx-auto"
          priority
        />
        <div className="text-center">
          <h2 className="font-medium text-xl">Enter verification code</h2>
          <h3>
            We&apos;ve sent you a code on{" "}
            <bold className="font-semibold">your@email.com</bold>
          </h3>
        </div>

        <FocusScope>
          <Group className="grid grid-cols-4 justify-items-center gap-8">
            <NumberField maxValue={9} minValue={0} aria-label="digit 1" />
            <NumberField maxValue={9} minValue={0} aria-label="digit 2" />
            <NumberField maxValue={9} minValue={0} aria-label="digit 3" />
            <NumberField maxValue={9} minValue={0} aria-label="digit 4" />
          </Group>
        </FocusScope>

        <div className="flex items-center gap-1 mx-auto">
          <p>Didn&apos;t get a code?</p>
          <Button className={buttonStyles({ variant: "resend" })}>
            Click to resend
          </Button>
        </div>

        <Separator orientation="horizontal" className="border-gray-300 -mx-6" />

        <Group className="grid grid-cols-2 w-full gap-4">
          <Button className={buttonStyles({ variant: "cancel" })}>
            Cancel
          </Button>
          <Button className={buttonStyles({ variant: "verify" })}>
            Verify
          </Button>
        </Group>
      </div>
    </main>
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
        className="min-w-0 w-16 h-14 selection:bg-red-100  flex-grow-0 text-center text-3xl font-medium outline-none transition-all
      focus:outline-2 focus:outline-[#ff4f40] focus:outline-offset-2 rounded-lg border-2 border-gray-300"
      />
    </AriaNumberField>
  );
};
