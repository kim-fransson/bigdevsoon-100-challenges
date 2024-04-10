"use client";

import { fredoka } from "@/app/fonts";

import {
  Button,
  TextField as AriaTextField,
  Input,
  Label,
  RadioGroup,
  Radio as AriaRadio,
  NumberField,
  Group,
  Separator,
} from "react-aria-components";

import { useFocusRing } from "react-aria";
import { twMerge } from "tailwind-merge";
import { useObjectState } from "@uidotdev/usehooks";

import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const initialState = {
  billTotal: 0,
  tip: 15,
  splitBy: 4,
};

export const CalculateTip = () => {
  const [state, setState] = useObjectState(initialState);

  const bill = state.billTotal || 0;
  const tip = bill * (state.tip / 100);
  const total = bill + tip;
  const perPerson = total / state.splitBy;

  const reset = () => {
    setState(initialState);
  };

  return (
    <main
      className={`${fredoka.className} min-h-dvh p-4 flex justify-center items-center bg-green-200`}
    >
      <div className="rounded-xl shadow-xl p-5 grid md:grid-cols-2 max-w-screen-md w-full gap-5 bg-white">
        <div className="text-gray-950 grid gap-6">
          <h2 className="font-semibold text-xl">Calculate Tip</h2>
          <CustomNumberField
            label="Bill total"
            value={state.billTotal}
            onChange={(v) =>
              setState(() => ({
                billTotal: v,
              }))
            }
          />

          <RadioGroup
            value={state.tip}
            onChange={(v) =>
              setState(() => ({
                tip: v,
              }))
            }
            className="grid gap-2"
            orientation="horizontal"
          >
            <Label className="font-semibold text-lg">Choose a tip</Label>
            <Group className="flex gap-3">
              <Radio value={10}>10%</Radio>
              <Radio value={15}>15%</Radio>
              <Radio value={20}>20%</Radio>
              <Radio value={25}>25%</Radio>
            </Group>
          </RadioGroup>

          <NumberField
            className="grid gap-2"
            value={state.splitBy}
            onChange={(v) =>
              setState(() => ({
                splitBy: v,
              }))
            }
            minValue={1}
          >
            <Label className="text-lg font-semibold">Split by</Label>
            <Group
              className="border-2 border-gray-300 transition-all p-2 rounded-lg
            flex justify-between gap-2 focus-within:border-green-700/80"
            >
              <Input className="bg-transparent flex-1 outline-none" />
              <Group className="grid">
                <Button
                  className="grid place-items-center disabled:opacity-50 border-l-2 border-b -mr-2 -mt-2"
                  slot="increment"
                >
                  <ArrowDropUpIcon fontSize="small" />
                </Button>
                <Button
                  className="grid place-items-center disabled:opacity-50 border-l-2 border-t -mr-2 -mb-2"
                  slot="decrement"
                >
                  <ArrowDropDownIcon fontSize="small" />
                </Button>
              </Group>
            </Group>
          </NumberField>
        </div>
        <div className="bg-green-700/80 text-gray-50 rounded-xl p-4 grid gap-4">
          <div className="flex justify-between">
            <span>Base</span>
            <span className="text-xl font-semibold">
              ${(state.billTotal || 0).toFixed(2)}
            </span>
          </div>

          <div className="flex justify-between">
            <span>Tip</span>
            <span className="text-xl font-semibold">${tip.toFixed(2)}</span>
          </div>

          <div className="flex justify-between">
            <span>Per person</span>
            <span className="text-xl font-semibold">
              ${perPerson.toFixed(2)}
            </span>
          </div>

          <Separator className="border-gray-50" />

          <div className="flex justify-between">
            <span>Total</span>
            <span className="text-xl font-semibold">${total.toFixed(2)}</span>
          </div>

          <Button
            onPress={reset}
            className="transition-all pressed:scale-95 bg-green-900/50 hover:bg-green-900 self-end px-4 py-2.5
          rounded-lg text-gray-300 text-sm outline-none 
          focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-white hover:text-gray-50"
          >
            RESET
          </Button>
        </div>
      </div>
    </main>
  );
};

const Radio = (props) => {
  return (
    <AriaRadio
      className="border-gray-200 border-2 rounded-2xl px-2 py-0.5 text-gray-300
      selected:text-gray-50 selected:bg-green-700/80 selected:border-green-800/0
      cursor-pointer transition-all focus-visible:ring-2 focus-visible:ring-offset-1
      focus-visible:ring-green-700/80"
      {...props}
    >
      {props.children}
    </AriaRadio>
  );
};

const CustomNumberField = ({ label, value, onChange }) => {
  let { focusProps, isFocused } = useFocusRing();

  return (
    <NumberField
      onChange={onChange}
      value={value === 0 ? null : value}
      className={twMerge(
        "border-2 border-gray-300 transition-all p-2 rounded-lg relative",
        isFocused ? "border-green-700/80" : "",
      )}
    >
      <Label
        className={twMerge(
          "capitalize text-gray-300 absolute top-1/2 left-2 transition-all z-50",
          isFocused || value
            ? "top-2 text-sm  -translate-y-full px-1 bg-white"
            : "-translate-y-1/2",
          isFocused ? "text-green-700/80" : "",
        )}
      >
        {label}
      </Label>
      <Input
        {...focusProps}
        className="outline-none bg-transparent w-full pr-8"
      />
    </NumberField>
  );
};
