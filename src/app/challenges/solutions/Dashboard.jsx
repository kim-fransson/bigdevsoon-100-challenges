"use client";

import { fredoka } from "@/app/fonts";
import { twMerge } from "tailwind-merge";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";
import FilterListIcon from "@mui/icons-material/FilterList";
import MovingIcon from "@mui/icons-material/Moving";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import DownloadingIcon from "@mui/icons-material/Downloading";
import DashboardIcon from "@mui/icons-material/Dashboard";
import KimTech from "../../assets/kimtech.svg";
import SummarizeIcon from "@mui/icons-material/Summarize";
import { Separator } from "react-aria-components";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import TuneIcon from "@mui/icons-material/Tune";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import StorageIcon from "@mui/icons-material/Storage";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export const Dashboard = () => {
  return (
    <main
      className={`flex items-center justify-center min-h-dvh bg-slate-800 text-gray-100 p-4 ${fredoka.className}`}
    >
      <div className="flex md:flex-row flex-col max-w-7xl w-full gap-8">
        <Card className="min-w-80 row-span-2">
          <div className="grid gap-8">
            <div className="items-center flex text-xl font-semibold gap-1">
              <Image width={44} height={44} alt="" src={KimTech} />
              KimTech
            </div>
            <div className="grid gap-2">
              <div className="px-4 py-2 bg-pink-700 font-medium rounded-lg flex items-center gap-1">
                <DashboardIcon />
                Dashboard
              </div>
              <div className="px-4 py-2 bg-slate-800  font-medium rounded-lg flex items-center gap-1">
                <SummarizeIcon />
                Reports
              </div>
              <div className="px-4 py-2 font-medium rounded-lg flex items-center gap-1">
                <StorageIcon />
                Data sources
              </div>

              <>
                <div className="px-4 py-2 font-medium rounded-lg flex items-center gap-1">
                  <MonetizationOnIcon />
                  Monetize
                  <ExpandLessIcon />
                </div>

                <div className="pl-8 grid gap-2">
                  <div className="px-4 py-2 font-medium rounded-lg flex items-center gap-2">
                    Adds
                    <OpenInNewIcon fontSize="small" />
                  </div>

                  <div className="px-4 py-2 font-medium rounded-lg flex items-center gap-2">
                    Subscription
                    <span className="bg-red-700 px-2 py-0.5 rounded-lg text-xs">
                      2
                    </span>
                  </div>

                  <div className="px-4 py-2 font-medium rounded-lg flex items-center gap-2">
                    Partner Program
                    <OpenInNewIcon fontSize="small" />
                  </div>
                </div>
              </>
              <div className="px-4 py-2 font-medium rounded-lg flex items-center gap-1">
                <TuneIcon />
                Filters
              </div>
              <div className="px-4 py-2 font-medium rounded-lg flex items-center gap-1">
                <SettingsIcon />
                Settings
              </div>

              <Separator className="border-none my-8" />

              <div className="px-4 py-2 font-medium rounded-lg flex items-center gap-1">
                <LogoutIcon />
                Log out
              </div>
            </div>
          </div>
        </Card>
        <div className="flex flex-col gap-8 flex-1">
          <Card className="gap-2 flex items-center justify-end">
            <h2 className="mr-auto text-xl font-semibold">Dashboard</h2>
            <span className="rounded-full bg-slate-800 p-1">
              <NotificationsNoneIcon />
            </span>
            <Image
              width={52}
              height={52}
              alt=""
              src={`https://robohash.org/kim`}
              className="rounded-full bg-slate-800"
            />
          </Card>
          <Card className="grid gap-8">
            <h2 className="text-5xl font-semibold">Welcome Kim</h2>
            <div className="flex flex-wrap gap-4">
              <span className="capitalize rounded-lg bg-slate-800 py-1 px-2 inline-block">
                overview
              </span>
              <span className="capitalize py-1 px-2 inline-block">
                partner network
              </span>
              <span className="md:ml-auto flex gap-2 items-center capitalize rounded-lg bg-slate-800 py-1 px-2">
                Feb 20 - Feb 27 <ExpandMoreIcon />
              </span>
              <span className="flex gap-2 items-center capitalize rounded-lg bg-slate-800 py-1 px-2">
                <FilterListIcon /> Filters
              </span>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-slate-800 flex flex-col gap-4">
                <Card className="bg-slate-700 flex flex-col items-center justify-center gap-2">
                  <div className="flex items-center gap-2">
                    <p className="text-5xl self-center">764</p>
                    <span className="bg-green-700  text-gray-50 p-1 rounded-full">
                      <MovingIcon />
                    </span>
                  </div>
                  <span className="bg-green-700 block px-2 py-1 text-gray-50 p-1 rounded-full">
                    +12%
                  </span>
                </Card>
                <Card className="bg-slate-700 flex gap-4 items-center">
                  <span className="bg-pink-700 rounded-full p-1">
                    <Diversity3Icon />
                  </span>
                  <div className="grid">
                    <span className="font-medium">Referall traffic</span>
                    <span className="opacity-70">Last updated on 23 feb</span>
                  </div>
                </Card>
              </Card>
              <Card className="bg-slate-800 flex flex-col gap-4">
                <Card className="bg-slate-700 flex flex-col items-center justify-center gap-2">
                  <div className="flex items-center gap-2">
                    <p className="text-5xl self-center">320</p>
                    <span className="bg-red-700  text-gray-50 p-1 rounded-full">
                      <MovingIcon />
                    </span>
                  </div>
                  <span className="bg-red-700 block px-2 py-1 text-gray-50 p-1 rounded-full">
                    -4%
                  </span>
                </Card>
                <Card className="bg-slate-700 flex gap-4 items-center">
                  <span className="bg-pink-700 rounded-full p-1">
                    <DownloadingIcon />
                  </span>
                  <div className="grid">
                    <span className="font-medium">Pending</span>
                    <span className="opacity-70">Last updated on 23 feb</span>
                  </div>
                </Card>
              </Card>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
};

const Card = ({ children, className }) => {
  return (
    <div
      className={twMerge("bg-slate-900 p-4 rounded-2xl shadow-lg", className)}
    >
      {children}
    </div>
  );
};
