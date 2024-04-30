"use client";

import { poppins } from "@/app/fonts";
import {
  Button,
  Input,
  Label,
  NumberField,
  Separator,
  Switch,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

const focusRing = tv({
  base: "outline outline-green-500 outline-offset-2 outline-0 focus-visible:outline-2",
});

const recuringPaymentSwitch = tv({
  slots: {
    base: [
      "w-10 h-5 bg-white rounded-full transition-all duration-200 flex items-center",
      "before:contents-[''] before:block before:m-[0.175rem] before:size-4  before:bg-green-500 before:rounded-full",
      "before:transition-all before:duration-200 border border-green-500",
    ],
    textLeft: "font-semibold text-neutral-800 font-medium text-sm",
    textRight: "text-neutral-400 font-medium text-sm",
  },
  compoundVariants: [
    {
      isSelected: true,
      class: {
        base: ["before:translate-x-full bg-green-500 before:bg-white"],
        textLeft: ["text-neutral-400"],
        textRight: ["text-neutral-800"],
      },
    },
    {
      isFocusVisible: true,
      class: {
        base: ["outline-2 outline outline-green-500 outline-offset-2"],
      },
    },
  ],
});
const { base, textLeft, textRight } = recuringPaymentSwitch();

const buttonStyles = tv({
  extend: focusRing,
  base: [
    "text-center rounded-full px-4 py-1.5 transition-all text-sm pressed:scale-95 font-medium",
  ],
  variants: {
    intent: {
      primary: "bg-green-500 hover:bg-green-600 text-neutral-50",
      secondary:
        "border-2 border-neutral-400 hover:border-green-600 hover:text-neutral-50 hover:bg-green-600",
    },
  },
});

export const PaymentPlan = () => {
  return (
    <main
      className={`${poppins.className} min-h-dvh flex items-center justify-center bg-[#2c7447] p-4`}
    >
      <div className="text-neutral-800 bg-neutral-50 rounded-3xl max-w-screen-md w-full p-5 grid auto-rows-min grid-cols-3 gap-x-4 gap-y-6">
        <div className="bg-white col-span-full rounded-2xl shadow-lg p-4 flex items-center gap-4 justify-between">
          <div className="inline-flex flex-col gap-2">
            <h2 className="font-medium text-xl">Subscription Term</h2>
            <Switch className={"flex items-center gap-2 cursor-pointer"}>
              {({ isSelected, isFocusVisible }) => (
                <>
                  <span className={textLeft({ isSelected })}>Monthly</span>
                  <div
                    className={base({
                      isSelected,
                      isFocusVisible,
                    })}
                  />
                  <span className={textRight({ isSelected })}>Annualy</span>
                </>
              )}
            </Switch>
            <span className="p-1 rounded bg-green-500 text-neutral-50 text-xs text-center font-medium">
              Save price with annually
            </span>
          </div>
          <NumberField
            className="ml-auto items-center justify-center inline-flex flex-col gap-2"
            defaultValue={1}
            minValue={1}
          >
            <Label className="text-sm text-center font-medium">
              Number of agents
            </Label>
            <Input
              className={twMerge(
                "size-8 text-center font-semibold bg-neutral-200 border-b-2 border-neutral-800 min-w-0 selection:bg-green-100",
                focusRing(),
              )}
            />
          </NumberField>
        </div>
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="flex bg-white flex-col items-center gap-2 p-4 shadow-lg lg:col-span-1 col-span-full rounded-2xl"
          >
            <h2 className="text-xl font-semibold text-center">{plan.name}</h2>
            <h3 className="text-2xl font-bold">{plan.price}</h3>
            <span className="opacity-80 text-sm">per agent / per month</span>
            <Button
              className={buttonStyles({
                intent: plan.buttonIntent,
                class: "mt-auto",
              })}
            >
              Select a plan
            </Button>
          </div>
        ))}
        <div className="col-span-full bg-white shadow-lg rounded-2xl p-4 grid grid-cols-12">
          <div className="lg:col-span-4 col-span-full flex flex-col gap-4">
            <h2 className="font-medium">
              Streamlined processfocused on your priorities
            </h2>
            <p className="opacity-70 text-sm">
              Talk to us for a comprehensive solution that meets all your
              enterprise needs.
            </p>
            <Button
              className={buttonStyles({
                intent: "primary",
                class: "mt-auto",
              })}
            >
              Talk to sales
            </Button>
          </div>
          <Separator
            className="w-[2px] h-full bg-neutral-600 rounded-full self-center justify-self-center"
            orientation="vertical"
          />
          <div className="lg:col-span-7 col-span-full py-2 flex flex-col gap-2">
            <h2 className="text-sm">
              Engage with us for a holistic solution that addresses all your
              enterprise requirements.
            </h2>
            <ul className="text-xs opacity-70 px-4 list-disc space-y-2">
              <li>
                Enhance support and refine change management with our most
                resilient sandbox.
              </li>
              <li>Expand your business with our maximum API rate limits.</li>
              <li>
                Secure your operations with advanced disaster recovery measures.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

const plans = [
  {
    id: 1,
    name: "Suite Team",
    price: "20$",
    buttonIntent: "secondary",
  },
  {
    id: 2,
    name: "Suite Growth",
    price: "32$",
    buttonIntent: "primary",
  },
  {
    id: 3,
    name: "Suite Professional",
    price: "40$",
    buttonIntent: "secondary",
  },
];
