"use client";

import Image from "next/image";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ForumIcon from "@mui/icons-material/Forum";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import QuizIcon from "@mui/icons-material/Quiz";
import SettingsIcon from "@mui/icons-material/Settings";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

import { Radio, RadioGroup } from "react-aria-components";

export const MobileNavigation = () => {
  return (
    <main className="flex justify-center items-center min-h-dvh bg-[#dae1df]">
      <div className="md:max-w-sm w-full bg-white md:rounded-3xl md:shadow-2xl min-h-dvh md:min-h-0 flex flex-col px-4 py-8 gap-6">
        <div className="flex gap-4">
          <Image
            width={50}
            height={50}
            src="/challenges/3/profile.png"
            alt=""
            className="rounded-lg w-[50px] h-[50px] object-cover"
          />
          <div className="grid items-center">
            <span className="font-semibold text-black">Kim Fransson</span>
            <span className="text-gray-800 font-medium">
              Fullstack developer
            </span>
          </div>
        </div>

        <hr />

        <RadioGroup>
          <div className="flex flex-col gap-4">
            <Item Icon={PeopleAltIcon} text="Personal Data" />
            <Item Icon={EmailIcon} text="Messages" />
            <Item Icon={NotificationsIcon} text="Notifications" />
            <Item Icon={LocationOnIcon} text="Location" />
            <Item Icon={ForumIcon} text="Community" />
          </div>

          <hr className="my-8" />

          <div className="flex flex-col gap-4">
            <Item Icon={QuizIcon} text="FAQs" />
            <Item Icon={SettingsIcon} text="Settings" />
          </div>
        </RadioGroup>

        <RadioGroup
          defaultValue="mail"
          className="flex gap-2 justify-between text-[#dce3e1] md:mt-16 mt-auto"
        >
          <RadioOption value="dashboard" Icon={DashboardIcon} />
          <RadioOption value="analytics" Icon={AutoGraphIcon} />
          <RadioOption value="mail" Icon={MailOutlineIcon} />
          <RadioOption value="profile" Icon={PersonOutlineIcon} />
        </RadioGroup>
      </div>
    </main>
  );
}

const Item = ({ Icon, text }) => {
  return (
    <Radio
      className="flex items-center gap-4 cursor-pointer focus-visible:ring-2 ring-yellow-400 outline-none text-gray-800"
      value="text"
    >
      <div className="rounded-lg inline-block bg-[#dce3e1] p-1.5">
        <Icon />
      </div>
      <span className="font-semibold">{text}</span>
      <ChevronRightIcon className="ml-auto text-gray-700" />
    </Radio>
  );
};

const RadioOption = ({ value, Icon }) => {
  return (
    <Radio
      className="selected:text-[#539a86] rounded-full p-1.5 selected:bg-[#e6f2ef] transition cursor-pointer hover:bg-[#e6f2ef] hover:text-gray-800
      focus-visible:ring-2 ring-yellow-400"
      value={value}
    >
      <Icon className="md:h-6 md:w-6 h-8 w-8" />
    </Radio>
  );
};
