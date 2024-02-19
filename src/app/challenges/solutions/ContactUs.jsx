"use client";

import {
  Input,
  TextField as AriaTextField,
  FieldError,
  RadioGroup,
  Radio,
  Label,
  TextArea,
  Button,
} from "react-aria-components";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const ContactUs = () => {
  return (
    <main
      className={`min-h-dvh overflow-clip grid items-center justify-center bg-gradient-to-t from-[#470028] via-[#451480] to-[#4628d6] ${montserrat.className}`}
    >
      <div className="grid lg:grid-cols-2 lg:p-10 lg:gap-20 p-4 gap-10 max-w-6xl">
        <div className="flex flex-col gap-4 relative">
          <div
            className="absolute top-1/5 left-1/2 
          -translate-x-1/2 lg:block hidden opacity-gradient-bottom-top text-[#a56b8b]"
          >
            <MapPattern className="w-[1000px]" />
          </div>
          <div className="flex flex-col gap-4 relative z-50">
            <h1 className="text-5xl font-semibold text-gray-50">Contact Us</h1>
            <p className="text-gray-300">
              Get in touch with us! Whether you have questions, feedback, or
              just want to say hello, we&apos;re here for you.
            </p>
          </div>

          <div className="lg:flex hidden flex-col gap-8 items-center z-50 mt-20">
            <div
              className="bg-[#ff007a] p-3 rounded-xl text-white max-w-sm flex flex-col gap-1 relative mt-4
          animate-bounce animate-infinite animate-duration-[2000ms] animate-ease-in-out"
            >
              <h2 className="font-semibold">Windler, Lockman and McClure</h2>
              <p className="text-gray-100 text-xs font-medium">
                3629 N Cole Rd, Boise, Illinois
              </p>
              <PlayArrowIcon className="text-[#ff007a] absolute left-1/2 -translate-x-1/2 -bottom-0.5 translate-y-1/2 rotate-90" />
            </div>

            <div className="relative">
              <div className="bg-[#fd007a] w-9 h-9 opacity-25 rounded-full absolute-center" />
              <div className="bg-[#fd007a] w-6 h-6 opacity-50 rounded-full absolute-center" />
              <div className="bg-[#fd007a] w-3 h-3 opacity-100 rounded-full absolute-center" />
            </div>
          </div>
        </div>

        <div className="grid relative z-50">
          <div className="bg-white shadow-2xl rounded-2xl p-6 grid lg:max-w-md w-full mx-auto">
            <h2 className="font-medium text-lg">Send us a Message</h2>
            <form className="grid gap-4 mt-5">
              <TextField name="name" placeholder="Name" aria-label="name" />
              <TextField name="email" placeholder="Email" type="email" />
              <TextField name="phone" placeholder="Phone" type="phone" />

              <RadioGroup className="grid gap-3" orientation="horizontal">
                <Label className="text-sm text-gray-600">
                  Preferred contact method of communication
                </Label>
                <div className="flex gap-8">
                  <PreferredContactRadio value="email" />
                  <PreferredContactRadio value="phone" />
                </div>
              </RadioGroup>

              <TextField
                placeholder="Message"
                name="message"
                aria-label="message"
                textarea
              />

              <Button
                className="mt-12 font-medium outline-none rounded-full text-gray-50 bg-[#ff007a] py-2 px-3 pressed:scale-95 transition-all 
              hover:bg-[#4a2cdb] focus-visible:ring-2 ring-[#4a2cdb]"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

const TextField = ({
  description,
  errorMessage,
  placeholder,
  type = "text",
  textarea = false,
  ...props
}) => {
  return (
    <AriaTextField {...props} className="text-sm">
      {textarea ? (
        <TextArea
          placeholder={placeholder}
          className="min-h-28 outline-none focus:border-[#4a2cdb] resize-none border-2 border-gray-300 rounded-2xl px-3 py-2 w-full placeholder:text-gray-400"
        />
      ) : (
        <Input
          className="outline-none focus:border-[#4a2cdb] border-2 border-gray-300 rounded-2xl px-3 py-2 w-full placeholder:text-gray-400"
          placeholder={placeholder}
          type={type}
        />
      )}
      <FieldError>{errorMessage}</FieldError>
    </AriaTextField>
  );
};

const PreferredContactRadio = ({ value }) => {
  return (
    <Radio
      className="text-sm flex items-center gap-1 capitalize cursor-pointer focus-visible:ring-2 ring-[#ff007a]
        before:content-[''] before:block before:w-4 before:h-4 before:box-border before:border 
      before:border-gray-400 before:rounded-full before:transition-all selected:before:border-4 selected:before:border-[#4a2cdb]"
      value={value}
    >
      {value}
    </Radio>
  );
};

const MapPattern = ({ className }) => {
  return (
    <svg
      viewBox="0 0 2408 1569"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M230.5 8L533.5 1336.5M771 8L1195.5 1571.5M11 1483L2392.5 788.5"
        stroke="currentcolor"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M0.5 972.5L427.5 879L741 892.701M1011 904.5L1357 364M1011 904.5L1708.25 582.5M1011 904.5L741 892.701M2405.5 260.5L1708.25 582.5M0.5 333.5L334 487.5L556.5 387.584M1357 364L839.5 260.5L698 324.042M1357 364L1599.5 10.5M352 1384.5L381 1478M410 1571.5L381 1478M703 1283.5L741 1417L672.5 1493L381 1478M1599.5 1020.5L1650 1187.5L1561.5 1258M1561.5 1258L1135 1364M1561.5 1258L1727.75 1384.5M1973.5 1571.5L1806.5 1444.43M1727.75 1384.5L1829.5 1283.5M1727.75 1384.5L1806.5 1444.43M1806.5 1444.43L1662.5 1543.5M1708.25 582.5L1753.5 785.5L1650 879L1276.5 972.5L1316.5 1096.5M556.5 387.584L604.5 568.5L511 692.5L367 629M556.5 387.584L698 324.042M698 324.042L753.5 573.5M753.5 573.5L910 533M753.5 573.5L703 710L741 892.701"
        stroke="currentcolor"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M516 690L700.5 712.5"
        stroke="currentcolor"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M135.168 397L106.211 541.378L164.608 638.496L362 624.993L230.245 746H1"
        stroke="currentcolor"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M602 5L415 101L624.5 356.5"
        stroke="currentcolor"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1473.5 205L1675.5 366.5M1675.5 366.5L1905 177L2072 407M1675.5 366.5L1539 558.5L1263.5 520.5M1675.5 366.5C2174.7 726.1 1938.83 792.333 1758.5 780.5M1372.5 740.5C1339.67 768.167 1339.5 907 1430.5 866.5C1538.13 818.597 1572 798.5 1572 740.5V649.5"
        stroke="currentcolor"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M626.022 889C608.273 931.674 575.761 981.723 643.439 1009.96C695.448 1031.67 734.34 996.628 744.458 993.49L839.506 1083.86L1051 1036.32M246.328 1210L173.674 938.891L0 1107.39"
        stroke="currentcolor"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M245.5 1212.5L154.75 1269.5M64 1326.5L154.75 1269.5M154.75 1269.5L99 1170"
        stroke="currentcolor"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
