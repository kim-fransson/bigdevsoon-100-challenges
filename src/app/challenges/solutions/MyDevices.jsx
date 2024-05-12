"use client";

import { poppins } from "@/app/fonts";
import {
  Button,
  GridList,
  GridListItem,
  Menu,
  MenuTrigger,
  Popover,
  MenuItem as AriaMenuItem,
} from "react-aria-components";

import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import LayersIcon from "@mui/icons-material/Layers";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import { tv } from "tailwind-variants";

import Battery80Icon from "@mui/icons-material/Battery80";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SettingsIcon from "@mui/icons-material/Settings";
import SecurityUpdateGoodIcon from "@mui/icons-material/SecurityUpdateGood";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const focusRing = tv({
  base: "outline outline-[#c9b1ff] outline-offset-1 outline-0 focus-visible:outline-2",
});

const buttonStyles = tv({
  extend: focusRing,
  base: ["transition-all pressed:scale-95"],
});

const gridListItemStyles = tv({
  extend: focusRing,
  base: [
    "border-2 rounded-xl p-2 border-neutral-300 flex items-center flex-wrap gap-4 cursor-pointer",
  ],
});

export const MyDevices = () => {
  const [selectedDevice, setSelectedDevice] = useState();
  return (
    <main
      className={`${poppins.className} min-h-dvh flex items-center justify-center bg-[#d3b8e3] p-4`}
    >
      <div className="min-h-[600px] bg-neutral-50 rounded-2xl shadow-2xl px-6 py-4 max-w-md w-full flex flex-col gap-6">
        {!selectedDevice ? (
          <Devices setSelectedDevice={setSelectedDevice} />
        ) : (
          <SelectedDevice
            device={selectedDevice}
            onBack={() => setSelectedDevice(null)}
          />
        )}
      </div>
    </main>
  );
};

const SelectedDevice = ({ device, onBack }) => {
  return (
    <>
      <header className="font-semibold text-xl flex items-center justify-between gap-2">
        <Button
          onPress={onBack}
          className={buttonStyles({
            class:
              "hover:bg-neutral-200 p-1 rounded-full grid place-items-center",
          })}
        >
          <ArrowBackIcon />
        </Button>
        {device.name}

        <MenuTrigger>
          <Button
            className={buttonStyles({
              class:
                "hover:bg-neutral-200 p-1 rounded-full grid place-items-center",
            })}
          >
            <SettingsIcon />
          </Button>
          <Popover className="entering:animate-in entering:fade-in exiting:animate-out exiting:fade-out">
            <Menu className="shadow-2xl rounded-2xl p-2 bg-white outline-none flex flex-col gap-1">
              <MenuItem id="forget">
                <DeleteIcon fontSize="small" />
                Forget this device
              </MenuItem>
              <MenuItem id="disconnect">
                <CloseIcon fontSize="small" />
                Disconnect
              </MenuItem>
            </Menu>
          </Popover>
        </MenuTrigger>
      </header>
      <span className="text-[6rem] block mx-auto">{device.emoji}</span>
      {!device.isConnected ? (
        <span className="text-sm opacity-60 mx-auto -mt-4">Not connected</span>
      ) : (
        <span className="text-sm opacity-60 mx-auto -mt-4 flex items-center gap-1">
          Connected
          <span>-</span>
          <span className="text-base rotate-90 block">
            <Battery80Icon fontSize="inherit" className="text-green-500" />
          </span>
          80%
        </span>
      )}
      <div className="grid md:grid-cols-2 gap-4">
        {device.meta.map((meta) => (
          <div
            key={meta.name}
            className="rounded-xl p-4 bg-[#f3ebff] text-sm flex flex-col gap-1"
          >
            <meta.icon className="text-[#ae89fe]" fontSize="small" />
            <span className="font-medium">{meta.name}</span>
            <span className="opacity-70">{meta.value}</span>
          </div>
        ))}
      </div>
    </>
  );
};

const MenuItem = (props) => {
  return (
    <AriaMenuItem
      {...props}
      className={({ isFocused }) =>
        twMerge(
          "rounded-md px-2 py-1 flex items-center gap-2 outline-none cursor-pointer",
          isFocused && "bg-[#f1ecfe]",
        )
      }
    />
  );
};

const Devices = ({ setSelectedDevice }) => {
  return (
    <>
      <h2 className="font-semibold text-xl">My devices</h2>
      <GridList
        orientation="vertical"
        items={devices}
        aria-label="your devices"
        className="flex flex-col gap-6"
        selectionMode="single"
        onSelectionChange={(set) => {
          setSelectedDevice(devices[Array.from(set)[0]]);
        }}
      >
        {(item) => (
          <GridListItem className={gridListItemStyles()}>
            <span className="text-5xl">{item.emoji}</span>
            <div className="flex flex-col gap-1">
              <span className="font-semibold">{item.name}</span>
              <span className="opacity-70">{item.number}</span>
              {!item.isConnected ? (
                <span className="text-sm opacity-60">Not connected</span>
              ) : (
                <span className="text-sm opacity-60 flex items-center gap-1">
                  Connected
                  <span>-</span>
                  <span className="text-base rotate-90 block">
                    <Battery80Icon
                      fontSize="inherit"
                      className="text-green-500"
                    />
                  </span>
                  80%
                </span>
              )}
            </div>

            {!item.isConnected ? (
              <Button
                className={buttonStyles({
                  class:
                    "hover:bg-[#ab83fe] ml-auto hover:border-[#ab83fe] hover:text-neutral-100 border-2 border-neutral-300 text-neutral-700 text-sm font-medium rounded-lg py-1 px-4",
                })}
              >
                Connect
              </Button>
            ) : (
              <Button
                isDisabled
                className={buttonStyles({
                  class:
                    "bg-neutral-700 ml-auto border-2 border-neutral-700 text-neutral-100 text-sm font-medium rounded-lg py-1 px-4",
                })}
              >
                Connected
              </Button>
            )}
          </GridListItem>
        )}
      </GridList>
      <Button
        className={buttonStyles({
          class:
            "bg-[#c9b1ff] hover:bg-[#ab83fe] w-full text-neutral-100 font-medium rounded-lg py-1 px-4 flex items-center justify-center gap-2",
        })}
      >
        <AddIcon fontSize="small" />
        Add new device
      </Button>
    </>
  );
};

const devices = [
  {
    id: 0,
    emoji: "🎧",
    name: "Headphones",
    number: "MQw84532",
    isConnected: false,
    meta: [
      {
        name: "Name",
        value: "Headphones",
        icon: TextSnippetIcon,
      },
      {
        name: "Device Type",
        value: "Headphones",
        icon: HeadphonesIcon,
      },
      {
        name: "Version",
        value: "1.2",
        icon: LayersIcon,
      },
      {
        name: "Updates",
        value: "Up to date",
        icon: SecurityUpdateGoodIcon,
      },
    ],
  },
  {
    id: 1,
    emoji: "🎙️",
    name: "Microphone",
    number: "QMw53284",
    isConnected: true,
    meta: [
      {
        name: "Name",
        value: "Microphone",
        icon: TextSnippetIcon,
      },
      {
        name: "Device Type",
        value: "Microphone",
        icon: KeyboardVoiceIcon,
      },
      {
        name: "Version",
        value: "1.2",
        icon: LayersIcon,
      },
      {
        name: "Updates",
        value: "Up to date",
        icon: SecurityUpdateGoodIcon,
      },
    ],
  },
];
