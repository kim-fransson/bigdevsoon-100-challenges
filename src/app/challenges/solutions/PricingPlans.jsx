"use client";

import { fredoka } from "@/app/fonts";
import { useState } from "react";
import { Button, Switch } from "react-aria-components";
import { tv } from "tailwind-variants";

const recuringPaymentSwitch = tv({
  slots: {
    base: [
      "w-10 h-5 bg-white rounded-full transition-all duration-200 flex items-center",
      "before:contents-[''] before:block before:m-[0.175rem] before:size-4  before:bg-indigo-600 before:rounded-full",
      "before:transition-all before:duration-200 border border-indigo-600",
    ],
    textLeft: "font-semibold text-gray-950",
    textRight: "text-gray-400 font-semibold",
  },
  compoundVariants: [
    {
      isSelected: true,
      class: {
        base: ["before:translate-x-full bg-indigo-600 before:bg-white"],
        textLeft: ["text-gray-400"],
        textRight: ["text-gray-950"],
      },
    },
    {
      isFocusVisible: true,
      class: {
        base: ["outline-2 outline outline-indigo-600 outline-offset-2"],
      },
    },
  ],
});

const ball = tv({
  base: ["absolute size-[30rem] rounded-full"],
  variants: {
    color: {
      indigo: ["bg-gradient-radial from-indigo-700 from-30% to-transparent"],
      amber: ["bg-gradient-radial from-amber-300 from-30% to-transparent"],
    },
  },
});

const bouncingBall = tv({
  base: ["absolute size-16 rounded-full"],
  variants: {
    color: {
      indigo: ["bg-indigo-200"],
      amber: ["bg-amber-200"],
      pink: ["bg-pink-200"],
    },
    size: {
      small: "size-8",
      medium: "size-16",
    },
  },
});

const pricingPlan = tv({
  slots: {
    card: [
      "bg-white relative rounded-2xl shadow-xl drop-shadow-2xl p-8 text-gray-950 grid gap-10",
      "min-w-72 overflow-clip",
    ],
    button: [
      "rounded-lg text-center p-4 transition-all pressed:scale-95 font-semibold outline-none",
    ],
    name: [""],
  },
  compoundVariants: [
    {
      plan: "Professional",
      class: {
        card: ["bg-indigo-700 text-gray-50"],
        button: [
          "bg-gray-200 text-gray-900 ring-gray-900 hover:ring-2 hover:bg-white hover:text-gray-900",
        ],
      },
    },
    {
      plan: "Standard",
      class: {
        button: [
          "bg-amber-300 text-gray-900 ring-amber-300 hover:ring-2 hover:bg-white hover:text-amber-500",
        ],
      },
    },
    {
      plan: "Ultimate",
      class: {
        button: [
          "bg-indigo-700 text-gray-50 ring-indigo-700 hover:ring-2 hover:bg-white hover:text-indigo-700",
        ],
      },
    },
    {
      isFocusVisible: true,
      class: {
        button: ["ring-2 ring-offset-2"],
      },
    },
  ],
});

const { base, textLeft, textRight } = recuringPaymentSwitch();

export const PricingPlans = () => {
  const [isBilledMonthly, setIsBilledMonthly] = useState(false);
  return (
    <main
      className={`bg-pink-50 min-h-dvh flex items-center justify-center relative ${fredoka.className}`}
    >
      <Overlay />
      <div className="rounded-xl relative bg-white py-12 px-16 gap-6 grid justify-items-center shadow-xl">
        <h2 className="font-semibold text-lg text-gray-700">Find ideal plan</h2>
        <p className="text-5xl font-semibold">
          Unlock <span>Your Best-Fit</span> Plan Today
        </p>
        <Switch
          isSelected={isBilledMonthly}
          onChange={setIsBilledMonthly}
          className={
            "flex items-center gap-4 col-span-full cursor-pointer mt-4"
          }
        >
          {({ isSelected, isFocusVisible }) => (
            <>
              <span className={textLeft({ isSelected })}>Billed yearly</span>
              <div
                className={base({
                  isSelected,
                  isFocusVisible,
                })}
              />
              <span className={textRight({ isSelected })}>Billed monthly</span>
            </>
          )}
        </Switch>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-self-stretch mt-4">
          {pricingPlans.map((pricingPlan) => (
            <PricingPlan
              key={pricingPlan.name}
              plan={pricingPlan}
              isBilledMonthly={isBilledMonthly}
            />
          ))}
        </div>
        <div
          className={bouncingBall({
            color: "pink",
            size: "medium",
            class:
              "-top-4 right-16 animate-bounce animate-infinite animate-duration-[1500ms] animate-ease-in-out",
          })}
        />
        <div
          className={bouncingBall({
            color: "indigo",
            size: "medium",
            class:
              "bottom-8 -right-8 animate-bounce animate-infinite animate-duration-[1500ms] animate-ease-in-out",
          })}
        />
        <div
          className={bouncingBall({
            color: "amber",
            size: "small",
            class:
              "top-32 left-12 animate-bounce animate-infinite animate-duration-[1200ms] animate-ease-in-out",
          })}
        />
      </div>
    </main>
  );
};

const PricingPlan = ({ plan, isBilledMonthly }) => {
  const { card, button } = pricingPlan({ plan: plan.name });
  return (
    <div className={card()}>
      {plan.name === "Professional" && (
        <div
          className="bg-amber-300 text-gray-800 rotate-45 text-center font-semibold absolute
        -right-14 top-6 w-52 py-1.5 text-sm"
        >
          Best value
        </div>
      )}
      <div className="grid gap-1">
        <span className="font-semibold text-sm opacity-80">
          {plan.description}
        </span>
        <span className="text-3xl font-bold">{plan.name}</span>
        <p className="font-semibold text-lg">
          {`$${isBilledMonthly ? plan.price_per_month : 12 * plan.price_per_month} `}
          <span className="text-sm opacity-60 font-normal">
            {isBilledMonthly ? "/month" : "/year"}
          </span>
        </p>
      </div>

      <ul className="list-disc list-inside space-y-2">
        {plan.features.map((feature) => (
          <li key={feature}>
            <span className="opacity-80">{feature}</span>
          </li>
        ))}
      </ul>

      <Button className={(states) => button({ ...states, class: "self-end" })}>
        {`Try free for ${plan.trial_period_days} days`}
      </Button>
    </div>
  );
};

const Overlay = () => {
  return (
    <div className="inset-0 fixed blur-3xl">
      <div
        className={ball({
          color: "amber",
          class: "top-0 left-0 -translate-x-1/3 -translate-y-1/3",
        })}
      />
      <div
        className={ball({
          color: "amber",
          class: "bottom-0 right-0 translate-x-1/3 translate-y-1/3",
        })}
      />
      <div
        className={ball({
          color: "indigo",
          class: "top-0 right-0 translate-x-1/3 -translate-y-1/3",
        })}
      />
      <div
        className={ball({
          color: "indigo",
          class: "bottom-0 left-0 -translate-x-1/3 translate-y-1/3",
        })}
      />
    </div>
  );
};

const pricingPlans = [
  {
    name: "Professional",
    price_per_month: 39.99,
    description: "All in one",
    features: [
      "All core features",
      "Priority support",
      "Quarterly reviews",
      "Custom branding",
      "10GB storage",
    ],
    trial_period_days: 30,
    highlight: "Best value",
  },
  {
    name: "Standard",
    price_per_month: 29.99,
    description: "Basic",
    features: [
      "Most core features",
      "Email support",
      "Annual reviews",
      "Limited branding",
      "5GB storage",
    ],
    trial_period_days: 30,
    highlight: null,
  },
  {
    name: "Ultimate",
    price_per_month: 49.99,
    description: "Better results",
    features: [
      "All features, including premium",
      "24/7 priority support",
      "Dedicated account manager",
      "Fully customizable branding",
      "Unlimited storage",
    ],
    trial_period_days: 30,
    highlight: null,
  },
];
