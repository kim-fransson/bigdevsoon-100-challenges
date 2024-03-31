"use client";

import {
  RadioGroup,
  Separator,
  Radio as AriaRadio,
  Label as AriaLabel,
  Slider as AriaSlider,
  SliderOutput,
  SliderTrack,
  SliderThumb,
  Select,
  Button,
  SelectValue,
  Text,
  Popover,
  ListBox,
  ListBoxItem,
  DialogTrigger,
  ProgressBar,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Image from "next/image";
import { useEffect, useState } from "react";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import PlayCircleRoundedIcon from "@mui/icons-material/PlayCircleRounded";

export const ExportFile = () => {
  const [isExporting, setIsExporting] = useState(false);
  const [isExportingPaused, setIsExportingPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;

    const updateProgress = () => {
      const duration = 3000;
      const intervalDuration = 30;
      const increment = (100 * intervalDuration) / duration;

      interval = setInterval(() => {
        setProgress((prevProgress) => {
          const updatedProgress = prevProgress + increment;
          if (updatedProgress >= 100) {
            setTimeout(() => {
              setIsExporting(false);
            }, 2000);
            clearInterval(interval);
            return 100;
          }
          return updatedProgress;
        });
      }, intervalDuration);
    };

    if (isExporting && !isExportingPaused) {
      updateProgress();
    } else {
      clearInterval(interval);
      if (!isExporting) {
        setProgress(0);
      }
    }

    return () => clearInterval(interval);
  }, [isExporting, isExportingPaused]);

  return (
    <main
      className={`min-h-dvh flex justify-center items-center bg-gray-400 p-4`}
    >
      <div className="flex sm:flex-row flex-col justify-center sm:items-start items-center gap-8 w-full">
        <div>
          <Image
            src="/challenges/47/coconut.webp"
            width={600}
            height={600}
            alt=""
            className="rounded-lg"
          />
        </div>
        <div
          className="rounded-lg shadow-lg bg-gray-800 flex flex-col gap-4
            p-4 text-gray-50 sm:max-w-xs w-full"
        >
          <h2 className="text-xl font-semibold">Export file</h2>

          <Divider />

          <RadioGroup
            className="flex flex-col gap-5"
            orientation="vertical"
            defaultValue="PNG"
          >
            <Label>Format</Label>
            <Radio value="JPG" />
            <Radio value="PNG" />
            <Radio value="TIFF" />
            <Radio value="GIF" />
          </RadioGroup>

          <Divider />

          <Slider />

          <Select
            defaultSelectedKey="1x"
            className="flex gap-2 justify-between items-center"
          >
            {({ isOpen }) => (
              <>
                <Label>Size</Label>
                <Button
                  className="rounded-lg px-1.5 py-0.5 text-sm flex items-center justify-between focus-visible:outline-2 focus-visible:outline-yellow-400
              focus-visible:outline-offset-2 outline-none bg-gray-500"
                >
                  <SelectValue />
                  <span
                    aria-hidden="true"
                    className={twMerge(
                      "transition-all",
                      isOpen ? "-rotate-180" : "rotate-0",
                    )}
                  >
                    <ArrowDropDownIcon fontSize="small" />
                  </span>
                </Button>
                <Popover
                  placement="bottom end"
                  className="entering:animate-in entering:fade-in exiting:animate-out exiting:fade-out"
                >
                  <ListBox className="bg-gray-500 shadow-lg rounded-lg p-1 outline-none min-w-16 text-gray-50">
                    <Option id="1x">1x</Option>
                    <Option id="2x">2x</Option>
                    <Option id="3x">3x</Option>
                    <Option id="4x">4x</Option>
                  </ListBox>
                </Popover>
              </>
            )}
          </Select>

          <DialogTrigger isOpen={isExporting}>
            <Button
              onPress={() => setIsExporting(true)}
              isDisabled={isExporting}
              className="transition-all outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 
            focus-visible:ring-offset-gray-800 pressed:scale-95 bg-yellow-400 hover:bg-yellow-500 text-gray-950 py-2 px-4
            rounded-lg font-medium mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isExporting ? "Exporting..." : "Export file"}
            </Button>
            <Popover
              offset={28}
              className="entering:animate-in entering:fade-in exiting:animate-out exiting:fade-out max-w-xs w-full"
            >
              <div className="bg-gray-800 p-4 rounded-lg shadow-lg w-full text-gray-50 grid gap-4 border-2 border-gray-500">
                <header className="flex items-center gap-2">
                  <h2 className="font-medium text-sm">
                    {progress === 100
                      ? "Done"
                      : isExportingPaused
                        ? "Paused"
                        : "Exporting..."}
                  </h2>
                  <Button
                    onPress={() => setIsExportingPaused((curr) => !curr)}
                    className="text-gray-500 outline-none rounded-full focus-visible:outline-yellow-400 focus-visible:outline-offset-2 
                    transition-all pressed:scale-95 hover:text-gray-300 ml-auto flex items-center justify-center"
                  >
                    {isExportingPaused ? (
                      <PlayCircleRoundedIcon />
                    ) : (
                      <PauseCircleIcon />
                    )}
                  </Button>

                  <Button
                    onPress={() => setIsExporting(false)}
                    className="text-gray-500 outline-none rounded-full focus-visible:outline-yellow-400 focus-visible:outline-offset-2 
                    transition-all pressed:scale-95 hover:text-gray-300 flex items-center justify-center"
                  >
                    <CancelRoundedIcon />
                  </Button>
                </header>
                <ProgressBar aria-label="progress" value={progress}>
                  {({ percentage, valueText }) => (
                    <div className="grid gap-1">
                      <span className="text-sm">{valueText}</span>
                      <div className="will-change-transform transition-transform overflow-hidden rounded-full h-2 bg-gray-500">
                        <div
                          className="h-full bg-yellow-400"
                          style={{ width: percentage + "%" }}
                        />
                      </div>
                    </div>
                  )}
                </ProgressBar>
              </div>
            </Popover>
          </DialogTrigger>
        </div>
      </div>
    </main>
  );
};

const Divider = () => {
  return (
    <Separator
      orientation="horizontal"
      className="border-gray-500 rounded-full"
    />
  );
};

const Label = (props) => {
  return (
    <AriaLabel className="font-medium select-none cursor-default" {...props}>
      {props.children}
    </AriaLabel>
  );
};

const Radio = ({ value }) => {
  return (
    <AriaRadio
      className="text-sm flex items-center justify-between gap-2 capitalize cursor-pointer 
      focus-visible:after:ring-2 focus-visible:after:ring-offset-1 focus-visible:after:ring-offset-gray-800 focus-visible:after:ring-yellow-400
      after:content-[''] after:block after:w-4 after:h-4 after:box-border after:border 
      after:border-gray-500 after:rounded-full after:transition-all selected:after:border-4 selected:after:border-yellow-400
      font-medium"
      value={value}
    >
      <span className="bg-gray-500 text-sm px-1.5 py-0.5 rounded-lg">
        {value}
      </span>
    </AriaRadio>
  );
};

const Slider = () => {
  return (
    <AriaSlider maxValue={100} minValue={0} defaultValue={80}>
      <div className="flex justify-between mb-2">
        <Label>Photo Quality</Label>
        <SliderOutput className="bg-gray-500 text-sm px-1.5 py-0.5 rounded-lg after:content-['%']" />
      </div>
      <div className="relative">
        <SliderTrack className="relative w-full group h-7">
          {({ state }) => (
            <div>
              {/* track */}
              <div className="absolute h-1.5 top-[50%] translate-y-[-50%] w-full rounded-full bg-gray-500" />
              {/* fill */}
              <SliderThumb
                className={twMerge(
                  "w-4 aspect-square top-[50%] rounded-full bg-white outline-none transition peer z-50",
                  "focus-visible:outline outline-2 focus-visible:outline-yellow-400 outline-offset-2",
                )}
              />
              <div
                style={{ width: state.getThumbPercent(0) * 100 + "%" }}
                className="absolute h-1.5 top-[50%] translate-y-[-50%] rounded-full bg-yellow-400"
              />
            </div>
          )}
        </SliderTrack>
      </div>
    </AriaSlider>
  );
};

const Option = (props) => {
  return (
    <ListBoxItem
      {...props}
      className={({ isFocused, isSelected }) =>
        twMerge(
          "p-0.5 first:rounded-t-md last:rounded-b-md outline-none cursor-pointer text-sm",
          isFocused && "bg-yellow-400 text-gray-950",
        )
      }
    />
  );
};
