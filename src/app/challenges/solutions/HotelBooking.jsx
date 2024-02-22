"use client";

import {
  Button,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  SelectValue,
  Select as AriaSelect,
  DateRangePicker as AriaDateRangePicker,
  Group,
  DateInput,
  DateSegment,
  Dialog,
  RangeCalendar,
  Heading,
  CalendarGrid,
  CalendarCell,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell,
} from "react-aria-components";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { tv } from "tailwind-variants";
import { today, getLocalTimeZone } from '@internationalized/date';
import { Fredoka } from "next/font/google";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useState } from "react";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cell = tv({
  base: 'w-full h-full flex items-center justify-center rounded-lg font-medium forced-color-adjust-none',
  variants: {
    selectionState: {
      'none': 'group-hover:bg-[#ff8a00]/50 ',
      'middle': [
        'group-hover:bg-[#ff8a00]/50 forced-colors:group-hover:bg-[Highlight]',
        'group-pressed:bg-[#ff8a00] forced-colors:group-pressed:bg-[Highlight] forced-colors:text-[HighlightText]',
      ],
      'cap': 'bg-[#ff8a00] forced-colors:bg-[Highlight] text-gray-50 forced-colors:text-[HighlightText]'
    },
  }
});

export const HotelBooking = () => {
  return (
    <main className={`min-h-dvh flex justify-center items-center bg-[#e8b389] text-gray-950 ${fredoka.className}`}>
      <div className="bg-[#f2f2f2] md:rounded-2xl md:min-h-0 min-h-dvh max-w-5xl shadow-2xl px-4 py-6 gap-4 grid md:grid-cols-[0.5fr_1fr]
      ">
        <BookingForm className="md:order-1 order-2" />
        <ImageGallery className="md:order-2 order-1" />
      </div>
    </main>
  );
};

const BookingForm = ({ className }) => {
  const now = today(getLocalTimeZone());

  const [numberOfChildren, setNumberOfChildren] = useState("0");
  const [numberOfAdults, setNumberOfAdults] = useState("1");

  return (
    <form className={`grid items-start ${className}`}>
      <div className="grid grid-cols-2 gap-4">
        <DateRangePicker className="col-span-full" shouldCloseOnSelect={false} defaultOpen={true} defaultValue={{
          start: now,
          end: now.add({ days: 7 })
        }} />

        <Select
          label="Adults"
          items={[
            { name: '1' },
            { name: '2' },
            { name: '3' },
            { name: '4' },
          ]}
          selectedKey={numberOfAdults}
          onSelectionChange={selected => setNumberOfAdults(selected)}>
          {item => <Option id={item.name}>{item.name}</Option>}
        </Select>

        <Select
          label="Children"
          items={[
            { name: '0' },
            { name: '1' },
            { name: '2' },
            { name: '3' },
            { name: '4' },
          ]}
          selectedKey={numberOfChildren}
          defaultOpen
          onSelectionChange={selected => setNumberOfChildren(selected)}>
          {item => <Option id={item.name}>{item.name}</Option>}
        </Select>
      </div>

      <Button
        className="bg-[#ff8a00] mt-auto col-span-full shadow-md text-gray-50 font-medium rounded-full py-2 px-3 outline-none
            focus-visible:outline-2 focus-visible:outline-[#ff8a00] outline-offset-2 transition-all pressed:scale-95
            hover:ring-2 hover:ring-[#ff8a00] hover:bg-transparent hover:text-[#ff8a00]"
      >
        Book a room
      </Button>
    </form>
  );
};

const ImageGallery = ({ className }) => {
  return (
    <div className={`grid grid-cols-3 gap-x-4 gap-y-6 ${className}`}>
      <div className="relative col-span-full rounded-sm overflow-clip shadow-md">
        <img width={650} height={430} className="h-auto max-w-full" src="/challenges/11/main.png" />
        <div className="grid gap-1 text-gray-50 absolute bottom-0 left-0 p-4 bg-black/35">
          <p className="font-semibold">Naupaka Bay Retreat</p>
          <div className="flex items-center gap-2">
            <FmdGoodIcon fontSize="small" />
            <p>Kauai, Hawaii</p>
          </div>
        </div>
      </div>
      <img
        width={200}
        height={200}
        className="col-span-1 aspect-square rounded-sm shadow-md"
        src="/challenges/11/thumbnail-1.png"
      />
      <img
        width={200}
        height={200}
        className="col-span-1 aspect-square rounded-sm shadow-md"
        src="/challenges/11/thumbnail-2.png"
      />
      <img
        width={200}
        height={200}
        className="col-span-1 aspect-square rounded-sm shadow-md"
        src="/challenges/11/thumbnail-3.png"
      />
    </div>
  );
};

const Select = ({ label, children, items, ...props }) => {
  return (
    <AriaSelect className="inline-grid gap-2 w-full max-w-sm" {...props} disabledKeys={[2]}>
      {({ isOpen }) => (
        <>
          <Label className="capitalize font-semibold cursor-pointer">
            {label}
          </Label>
          <Button className="bg-[#e4e4e4] shadow-md flex items-center justify-between p-2 rounded-lg outline-none focus-visible:outline-2 focus-visible:outline-[#ff8a00] outline-offset-2">
            <SelectValue
              className={({ isPlaceholder }) =>
                `${isPlaceholder ? "text-gray-[#949397]" : ""}`
              }
            />
            <ArrowDropDownIcon
              className={`transition-all ${isOpen ? "-rotate-180" : ""}`}
            />
          </Button>
          <Popover className="w-[--trigger-width] entering:animate-in entering:fade-in exiting:animate-out exiting:fade-out">
            <ListBox
              className="outline-none focus-visible:outline-2 focus-visible:outline-[#ff8a00] outline-offset-2
        bg-[#f2f2f2] rounded-lg shadow-md grid gap-1"
              items={items}
            >
              {children}
            </ListBox>
          </Popover>
        </>
      )}
    </AriaSelect>
  );
};

const Option = (props) => {
  return (
    <ListBoxItem
      {...props}
      className={({ isFocused, isSelected }) =>
        `cursor-pointer rounded-md px-2 py-1 ${isFocused ? "outline-none ring-2 ring-[#ff8a00]" : ""} ${isSelected ? "bg-[#ff8a00] text-gray-50" : ""}`
      }
    />
  );
};

const DateRangePicker = ({ ...props }) => {
  const isMediumDevice = useMediaQuery(
    "only screen and (min-width : 768px)"
  );
  return (
    <AriaDateRangePicker
      {...props} minValue={today(getLocalTimeZone())}>
      <Group className="grid gap-4">
        <div className="grid gap-1">
          <p className="capitalize font-semibold cursor-pointer">Check In</p>
          <div className="bg-[#e4e4e4] shadow-md flex justify-between  p-2 rounded-lg outline-none focus-visible:outline-2 focus-visible:outline-[#ff8a00] outline-offset-2">
            <DateInput slot="start" className="flex">
              {(segment) => <DateSegment className="focus:bg-[#ff8a00] px-0.5 focus:text-white rounded-sm outline-none" segment={segment} />}
            </DateInput>
            <Button className="outline-none group focus-visible:outline-2 focus-visible:outline-[#ff8a00] rounded-full">
              <CalendarMonthIcon className={`group-hover:animate-jump group-hover:animate-once group-hover:animate-duration-[400ms] 
                  group-hover:animate-ease-linear group-hover:text-[#ff8a00]`} />
            </Button>
          </div>
        </div>

        <div className="grid gap-1">
          <p className="capitalize font-semibold cursor-pointer">Check Out</p>
          <div className="bg-[#e4e4e4] flex shadow-md justify-between  p-2 rounded-lg outline-none focus-visible:outline-2 focus-visible:outline-[#ff8a00] outline-offset-2">
            <DateInput slot="end" className="flex">
              {(segment) => <DateSegment segment={segment} className="focus:bg-[#ff8a00] px-0.5 focus:text-white rounded-sm outline-none" />}
            </DateInput>
            <Button className="outline-none group focus-visible:outline-2 focus-visible:outline-[#ff8a00] rounded-full">
              <CalendarMonthIcon className={`group-hover:animate-jump group-hover:animate-once group-hover:animate-duration-[400ms] 
                  group-hover:animate-ease-linear group-hover:text-[#ff8a00]`} />
            </Button>
          </div>

        </div>
      </Group>
      <Popover placement={isMediumDevice ? "right top" : "bottom"} className="entering:animate-in entering:fade-in exiting:animate-out exiting:fade-out">
        <Dialog>
          <RangeCalendar className="bg-[#f2f2f2]/90 backdrop-blur-sm outline-none p-4 shadow-md rounded-lg max-w-full w-fit select-none">
            <header className="flex items-center gap-4 mb-4">
              <Button slot="previous" className="disabled:text-gray-400 disabled:cursor-default outline-none focus-visible:outline-2 focus-visible:outline-[#ff8a00] rounded-full hover:bg-[#ff8a00]/20 transition-all">
                <ArrowDropDownIcon className="rotate-90" />
              </Button>
              <Heading className="font-medium flex-1 text-center" />
              <Button slot="next" className="outline-none focus-visible:outline-2 focus-visible:outline-[#ff8a00] rounded-full hover:bg-[#ff8a00]/20 transition-all">
                <ArrowDropDownIcon className="-rotate-90" />
              </Button>
            </header>
            <CalendarGrid className="[&_td]:px-0">
              <CalendarGridHeader>
                {(day) => (
                  <CalendarHeaderCell className="text-sm text-gray-800 font-semibold">
                    {day}
                  </CalendarHeaderCell>
                )}
              </CalendarGridHeader>
              <CalendarGridBody>
                {(date) => <CalendarCell date={date} className="group cursor-pointer w-8 h-8 text-sm outline outline-0 outside-month:hidden 
                    focus-visible:outline-[#ff8a00] disabled:cursor-default focus-visible:outline-2 outline-offset-1 selected:bg-[#ff8a00]/20 
                    forced-colors:selected:bg-[Highlight] [td:first-child_&]:rounded-s-lg selection-start:rounded-s-lg [td:last-child_&]:rounded-e-lg 
                    selection-end:rounded-e-lg focus-visible:rounded-lg disabled:text-gray-400">
                  {({ formattedDate, isSelected, isSelectionStart, isSelectionEnd, isFocusVisible, isDisabled }) =>
                    <span
                      className={cell({
                        selectionState: isSelected && (isSelectionStart || isSelectionEnd) ? 'cap' : isSelected ? 'middle' : 'none',
                        isDisabled,
                        isFocusVisible
                      })}>
                      {formattedDate}
                    </span>
                  }
                </CalendarCell>}
              </CalendarGridBody>
            </CalendarGrid>
          </RangeCalendar>
        </Dialog>
      </Popover>
    </AriaDateRangePicker>
  );
};