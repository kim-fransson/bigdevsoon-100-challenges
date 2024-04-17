"use client";

import Image from "next/image";
import KimTech from "../../assets/kimtech.svg";
import { poppins } from "@/app/fonts";
import {
  Button,
  Group,
  Link,
  Menu,
  MenuItem,
  MenuTrigger,
  Popover,
  Text,
} from "react-aria-components";

import { ExpandMoreRounded } from "@mui/icons-material";
import WebIcon from "@mui/icons-material/Web";
import CloudDoneIcon from "@mui/icons-material/CloudDone";
import AppShortcutIcon from "@mui/icons-material/AppShortcut";
import SecurityIcon from "@mui/icons-material/Security";
import ApiIcon from "@mui/icons-material/Api";
import PieChartIcon from "@mui/icons-material/PieChart";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const NavigationUI = () => {
  const items = [
    {
      id: 1,
      name: "Web Development",
      description: "Building dynamic webistes for your success",
      icon: <WebIcon className="text-green-600" />,
      color: "#dcfce7",
    },
    {
      id: 2,
      name: "Cloud Solutions",
      description: "Unlocking cloud potential for business",
      icon: <CloudDoneIcon className="text-blue-600" />,
      color: "#dbeafe",
    },

    {
      id: 3,
      name: "Mobile App Development",
      description: "Crafting impactful mobile solutions",
      icon: <AppShortcutIcon className="text-amber-600" />,
      color: "#fef3c7",
    },
    {
      id: 4,
      name: "Cybersecurity Services",
      description: "Protecting your digital realm",
      icon: <SecurityIcon className="text-lime-600" />,
      color: "#ecfccb",
    },
    {
      id: 5,
      name: "Software Development",
      description: "Creating tailored software solutions",
      icon: <ApiIcon className="text-pink-600" />,
      color: "#fce7f3",
    },
    {
      id: 6,
      name: "Data Analytics",
      description: "Unleashing insights from your data",
      icon: <PieChartIcon className="rotate-45 text-fuchsia-600" />,
      color: "#fae8ff",
    },
  ];
  return (
    <main
      className={`min-h-dvh bg-pink-600 ${poppins.className} lg:p-4 text-gray-800`}
    >
      <nav className="w-full lg:shadow-2xl lg:rounded-3xl max-w-screen-lg px-12 py-4 gap-4 bg-white flex flex-wrap items-center justify-between mx-auto">
        <div className="flex gap-1 items-center">
          <Image width={36} height={36} alt="" src={KimTech} />
          <span className="font-semibold text-lg">KimTech</span>
        </div>

        <div className="flex flex-wrap items-center lg:gap-8 gap-4">
          <Link className="outline-none focus-visible:outline-2 focus-visible:outline-pink-600 focus-visible:outline-offset-1">
            Product
          </Link>
          <MenuTrigger defaultOpen>
            <Button
              aria-label="Menu"
              className="outline-none flex items-center gap-0.5 focus-visible:outline-2 focus-visible:outline-pink-600 focus-visible:outline-offset-1"
            >
              Services
              <span>
                <ExpandMoreRounded />
              </span>
            </Button>
            <Popover
              offset={40}
              className="entering:animate-in entering:fade-in exiting:animate-out exiting:fade-out"
            >
              <Menu
                selectionMode="single"
                items={items}
                className={`grid outline-none gap-2 md:grid-cols-2 p-2 rounded-3xl bg-white ${poppins.className} shadow-2xl`}
              >
                {(item) => (
                  <MenuItem
                    style={{ color: item.color }}
                    className="group cursor-pointer grid bg-transparent hover:bg-current selected:bg-current grid-cols-[min-content_1fr_24px] gap-2 p-2 items-center
                  rounded-2xl outline-none focus-visible:outline-2 focus-visible:outline-pink-600 focus-visible:-outline-offset-1"
                  >
                    <span className="p-1">{item.icon}</span>
                    <div className="grid text-gray-800">
                      <Text className="font-medium" slot="label">
                        {item.name}
                      </Text>
                      <Text className="text-sm opacity-70" slot="description">
                        {item.description}
                      </Text>
                    </div>
                    <span className="hidden group-hover:block text-gray-800">
                      <ArrowForwardIcon fontSize="small" />
                    </span>
                  </MenuItem>
                )}
              </Menu>
            </Popover>
          </MenuTrigger>
          <Link className="outline-none focus-visible:outline-2 focus-visible:outline-pink-600 focus-visible:outline-offset-1">
            Blog
          </Link>
          <Link className="outline-none focus-visible:outline-2 focus-visible:outline-pink-600 focus-visible:outline-offset-1">
            Careers
          </Link>
          <Link className="outline-none focus-visible:outline-2 focus-visible:outline-pink-600 focus-visible:outline-offset-1">
            Contact Us
          </Link>
        </div>

        <Group className="flex gap-4">
          <Button
            className="transition-all pressed:scale-95 px-3 py-2 hover:text-pink-600 rounded-lg
          outline-none focus-visible:outline-2 focus-visible:outline-pink-600 focus-visible:outline-offset-1"
          >
            Sign In
          </Button>
          <Button
            className="transition-all pressed:scale-95 px-3 py-2 bg-pink-600 hover:bg-pink-700 text-gray-50 rounded-lg
          outline-none focus-visible:outline-2 focus-visible:outline-pink-600 focus-visible:outline-offset-1"
          >
            Sign Up
          </Button>
        </Group>
      </nav>
    </main>
  );
};
