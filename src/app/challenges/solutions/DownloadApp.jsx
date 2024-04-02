"use client";

import Image from "next/image";

import phone from "../../assets/phone.svg";
import womanRunning from "../../assets/woman-running.svg";
import { fredoka } from "@/app/fonts";
import { Button } from "react-aria-components";

export const DownloadApp = () => {
  return (
    <main
      className={`min-h-dvh bg-gray-50 flex items-center justify-center p-4 ${fredoka.className}`}
    >
      <div className="max-w-screen-xl w-full gap-8 flex flex-col md:flex-row justify-between">
        <div className="relative">
          <div className="max-w-xl w-full aspect-[3/2] absolute-center flex">
            <div className="bg-gradient-to-b from-[#f9aa22] via-[#d57543] to-[#ac396a] flex-1 flex rounded-[3rem]">
              <div className="bg-white flex-1 m-1 rounded-[2.75rem] flex">
                <div className="bg-gradient-to-b from-[#f9aa22] via-[#d57543] to-[#ac396a] flex flex-1 m-3 rounded-[3rem]">
                  <div className="bg-white flex-1 m-1 rounded-[2.75rem] flex">
                    <div className="bg-gradient-to-b from-[#f9aa22] via-[#d57543] to-[#ac396a] flex-1 flex rounded-[3rem] m-3"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-b from-[#c45c53] via-[#9e2476] to-[#911084] flex-1 flex rounded-[3rem]">
              <div className="bg-white flex-1 m-1 rounded-[2.75rem] flex">
                <div className="bg-gradient-to-b from-[#c45c53] via-[#9e2476] to-[#911084] flex flex-1 m-3 rounded-[3rem]">
                  <div className="bg-white flex-1 m-1 rounded-[2.75rem] flex">
                    <div className="bg-gradient-to-b from-[#c45c53] via-[#9e2476] to-[#911084] flex-1 flex rounded-[3rem] m-3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Image width={700} alt="" src={phone} className="relative" />
          <Image
            width={500}
            alt=""
            src={womanRunning}
            className="absolute-center"
          />
        </div>

        <div className="flex flex-col max-w-lg items-center justify-center gap-3">
          <h2 className="text-7xl font-semibold">Download</h2>
          <h3 className="text-3xl font-medium">Our New App</h3>
          <p className="text-center">
            Track your progress, customize workouts, get nutrition guidance, and
            stay motivated, all in one place. Whether you&apos;re hitting the
            gym, running outdoors, or working out at home, we&apos;ve got you
            covered.
          </p>
          <div className="flex flex-wrap gap-4 w-full items-center justify-center mt-4">
            <Button
              className="bg-gray-950 text-gray-50 flex gap-2 px-1 pr-16 py-1 rounded-lg pressed:scale-95 transition-all
            focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600 outline-none items-center"
            >
              <AppleLogo />
              <div className="flex flex-col items-start text-nowrap">
                <span className="text-sm opacity-90">Get it on</span>
                <span>App Store</span>
              </div>
            </Button>
            <Button
              className="bg-gray-950 text-gray-50 flex gap-2 px-1 pr-16 py-1 rounded-lg pressed:scale-95 transition-all
            focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600 outline-none items-center"
            >
              <GooglePlayLogo />
              <div className="flex flex-col items-start">
                <span className="text-sm opacity-90">Get it on</span>
                <span>Google Play</span>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

const GooglePlayLogo = () => {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="size-10"
    >
      <mask
        id="mask0_87_8320"
        maskUnits="userSpaceOnUse"
        x="7"
        y="3"
        width="24"
        height="26"
      >
        <path
          d="M30.0484 14.4004C31.3172 15.0986 31.3172 16.9014 30.0484 17.5996L9.75627 28.7659C8.52052 29.4459 7 28.5634 7 27.1663L7 4.83374C7 3.43657 8.52052 2.55415 9.75627 3.23415L30.0484 14.4004Z"
          fill="#C4C4C4"
        />
      </mask>
      <g mask="url(#mask0_87_8320)">
        <path
          d="M7.63473 28.5466L20.2923 15.8179L7.84319 3.29883C7.34653 3.61721 7 4.1669 7 4.8339V27.1664C7 27.7355 7.25223 28.2191 7.63473 28.5466Z"
          fill="url(#paint0_linear_87_8320)"
        />
        <path
          d="M30.048 14.4003C31.3169 15.0985 31.3169 16.9012 30.048 17.5994L24.9287 20.4165L20.292 15.8175L24.6923 11.4531L30.048 14.4003Z"
          fill="url(#paint1_linear_87_8320)"
        />
        <path
          d="M24.9292 20.4168L20.2924 15.8179L7.63477 28.5466C8.19139 29.0232 9.02389 29.1691 9.75635 28.766L24.9292 20.4168Z"
          fill="url(#paint2_linear_87_8320)"
        />
        <path
          d="M7.84277 3.29865L20.2919 15.8177L24.6922 11.4533L9.75583 3.23415C9.11003 2.87878 8.38646 2.95013 7.84277 3.29865Z"
          fill="url(#paint3_linear_87_8320)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_87_8320"
          x1="15.6769"
          y1="10.874"
          x2="7.07106"
          y2="19.5506"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#00C3FF" />
          <stop offset="1" stop-color="#1BE2FA" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_87_8320"
          x1="20.292"
          y1="15.8176"
          x2="31.7381"
          y2="15.8176"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFCE00" />
          <stop offset="1" stop-color="#FFEA00" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_87_8320"
          x1="7.36932"
          y1="30.1004"
          x2="22.595"
          y2="17.8937"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#DE2453" />
          <stop offset="1" stop-color="#FE3944" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_87_8320"
          x1="8.10725"
          y1="1.90137"
          x2="22.5971"
          y2="13.7365"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#11D574" />
          <stop offset="1" stop-color="#01F176" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const AppleLogo = () => {
  return (
    <svg
      viewBox="-1.5 0 20 20"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 size-9"
    >
      <defs></defs>
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Dribbble-Light-Preview"
          transform="translate(-102.000000, -7439.000000)"
          fill="#fff"
        >
          <g id="icons" transform="translate(56.000000, 160.000000)">
            <path
              d="M57.5708873,7282.19296 C58.2999598,7281.34797 58.7914012,7280.17098 58.6569121,7279 C57.6062792,7279.04 56.3352055,7279.67099 55.5818643,7280.51498 C54.905374,7281.26397 54.3148354,7282.46095 54.4735932,7283.60894 C55.6455696,7283.69593 56.8418148,7283.03894 57.5708873,7282.19296 M60.1989864,7289.62485 C60.2283111,7292.65181 62.9696641,7293.65879 63,7293.67179 C62.9777537,7293.74279 62.562152,7295.10677 61.5560117,7296.51675 C60.6853718,7297.73474 59.7823735,7298.94772 58.3596204,7298.97372 C56.9621472,7298.99872 56.5121648,7298.17973 54.9134635,7298.17973 C53.3157735,7298.17973 52.8162425,7298.94772 51.4935978,7298.99872 C50.1203933,7299.04772 49.0738052,7297.68074 48.197098,7296.46676 C46.4032359,7293.98379 45.0330649,7289.44985 46.8734421,7286.3899 C47.7875635,7284.87092 49.4206455,7283.90793 51.1942837,7283.88393 C52.5422083,7283.85893 53.8153044,7284.75292 54.6394294,7284.75292 C55.4635543,7284.75292 57.0106846,7283.67793 58.6366882,7283.83593 C59.3172232,7283.86293 61.2283842,7284.09893 62.4549652,7285.8199 C62.355868,7285.8789 60.1747177,7287.09489 60.1989864,7289.62485"
              id="apple-[#173]"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
};
