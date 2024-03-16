import {
  Button,
  Menu,
  MenuItem as AriaMenuItem,
  MenuTrigger,
  Popover,
  Separator,
  Group,
  Text,
} from "react-aria-components";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import TuneIcon from "@mui/icons-material/Tune";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import LogoutIcon from "@mui/icons-material/Logout";
import Image from "next/image";
import { fredoka } from "@/app/fonts";

export const UserProfile = () => {
  return (
    <main
      className={`${fredoka.className} min-h-dvh text-gray-800 flex items-center justify-center bg-gradient-radial from-gray-100 to-gray-50`}
    >
      <MenuTrigger defaultOpen>
        <Button
          aria-label="Menu"
          className="rounded-t-2xl mb-56 px-4 py-3 bg-white shadow-lg max-w-xs w-full outline-none focus-visible:ring-2 ring-indigo-700 transition-all"
        >
          <Group className="flex items-center gap-3">
            <Image
              width={48}
              height={48}
              alt=""
              src={`https://robohash.org/kim`}
              className="rounded-full overflow-hidden bg-indigo-200 border border-indigo-700"
            />
            <span className="font-semibold text-lg">Kim</span>
            <span className="rounded-lg text-sm px-1 py-0.5 bg-indigo-200 border border-indigo-700 text-indigo-700 font-semibold">
              BIG
            </span>
            <MoreHorizIcon className="ml-auto" />
          </Group>
        </Button>
        <Popover className="w-[--trigger-width] entering:animate-in entering:fade-in exiting:animate-out exiting:fade-out outline-none">
          <Menu className="bg-white shadow-lg px-2 py-3 rounded-b-2xl outline-none">
            <MenuItem id="profile_settings">
              <TuneIcon />
              Profile Settings
            </MenuItem>
            <MenuItem id="help_center">
              <ContactSupportIcon />
              Help Center
            </MenuItem>
            <MenuItem id="billings">
              <AccountBalanceWalletIcon />
              Billings
            </MenuItem>
            <MenuItem id="upgrade_plan">
              <UpgradeIcon />
              Upgrade Plan
            </MenuItem>
            <Separator className="bg-gray-200 h-[1px] my-3" />
            <MenuItem id="sign_out">
              <LogoutIcon />
              Sign Out
            </MenuItem>
          </Menu>
        </Popover>
      </MenuTrigger>
    </main>
  );
};

const MenuItem = (props) => {
  return (
    <AriaMenuItem
      {...props}
      className="px-2 py-3 outline-none focus-visible:ring-2 focus-visible:ring-indigo-700 last:rounded-b-2xl
      cursor-pointer hover:bg-gray-100 rounded-2xl transition-all flex items-center gap-2 font-medium"
    >
      {props.children}
    </AriaMenuItem>
  );
};
