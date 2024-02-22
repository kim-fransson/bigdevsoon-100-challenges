"use client";

import {
  Button,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  SelectValue,
  Select as AriaSelect,
  DatePicker as AriaDatePicker,
  Group,
  DateInput,
  DateSegment,
  Dialog,
  RangeCalendar,
  Heading,
  CalendarGrid,
  CalendarCell,
  Calendar,
} from "react-aria-components";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export const HotelBooking = () => {
  return (
    <main className="min-h-dvh flex justify-center items-center bg-[#e8b389] text-gray-950">
      <div className="bg-[#f2f2f2] rounded-2xl shadow-2xl px-4 py-6 gap-4 flex">
        <BookingForm />
        <ImageGallery />
      </div>
    </main>
  );
};

const BookingForm = () => {
  return (
    <form className="max-w-md grid grid-cols-2 gap-4 items-start">
      <DatePicker className="col-span-full" />

      <Select label="Adults">
        <Option>1</Option>
        <Option>2</Option>
        <Option>3</Option>
        <Option>4</Option>
      </Select>

      <Select label="Children">
        <Option>0</Option>
        <Option>1</Option>
        <Option>2</Option>
        <Option>3</Option>
        <Option>4</Option>
      </Select>

      <Button
        className="bg-[#ff8a00] col-span-full shadow-md mt-auto text-gray-50 font-medium rounded-full py-2 px-3 outline-none
            focus-visible:outline-2 focus-visible:outline-[#ff8a00] outline-offset-2 transition-all pressed:scale-95
            hover:ring-2 hover:ring-[#ff8a00] hover:bg-transparent hover:text-[#ff8a00]"
      >
        Book a room
      </Button>
    </form>
  );
};

const ImageGallery = () => {
  return (
    <div className="grid grid-cols-3 max-w-xl gap-x-4 gap-y-6">
      <div className="relative col-span-full ">
        <img className="h-auto max-w-full" src="/challenges/11/main.png" />
        <div className="grid gap-1 text-gray-50 absolute bottom-0 left-0 p-4 bg-black/35">
          <p className="font-semibold">Naupaka Bay Retreat</p>
          <div className="flex items-center gap-2">
            <FmdGoodIcon fontSize="small" />
            <p>Kauai, Hawaii</p>
          </div>
        </div>
      </div>
      <img
        className="col-span-1 aspect-square"
        src="/challenges/11/thumbnail-1.png"
      />
      <img
        className="col-span-1 aspect-square"
        src="/challenges/11/thumbnail-2.png"
      />
      <img
        className="col-span-1 aspect-square"
        src="/challenges/11/thumbnail-3.png"
      />
    </div>
  );
};

const Select = ({ label, children, items, ...props }) => {
  return (
    <AriaSelect className="inline-grid gap-2" {...props}>
      {({ isOpen }) => (
        <>
          <Label className="capitalize font-semibold cursor-pointer">
            {label}
          </Label>
          <Button className="bg-[#e4e4e4] flex items-center justify-between p-2 rounded-lg outline-none focus-visible:outline-2 focus-visible:outline-[#ff8a00] outline-offset-2">
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

const Option = ({ ...props }) => {
  return (
    <ListBoxItem
      {...props}
      className={({ isFocused, isSelected }) =>
        `cursor-pointer rounded-md px-2 py-1 ${isFocused ? "outline-none ring-2 ring-[#ff8a00]" : ""} ${isSelected ? "bg-[#ff8a00] text-gray-50" : ""}`
      }
    />
  );
};

const DatePicker = ({ label, ...props }) => {
  return (
    <AriaDatePicker {...props}>
      {({ isOpen }) => (
        <>
          <Label>{label}</Label>
          <Group className="bg-[#e4e4e4] justify-between flex items-center p-2 rounded-lg outline-none focus-visible:outline-2 focus-visible:outline-[#ff8a00] outline-offset-2">
            <DateInput className="flex">
              {(segment) => <DateSegment segment={segment} />}
            </DateInput>
            <Button className="outline-none focus-visible:outline-2 focus-visible:outline-[#ff8a00] rounded-full">
              <ArrowDropDownIcon
                className={`transition-all ${isOpen ? "-rotate-180" : ""}`}
              />
            </Button>
          </Group>
          <Popover placement="right top" className="entering:animate-in entering:fade-in exiting:animate-out exiting:fade-out">
            <Dialog>
              <Calendar className="bg-[#f2f2f2] outline-none p-4 shadow-md">
                <header>
                  <Button slot="previous">
                    <ArrowDropDownIcon className="rotate-90" />
                  </Button>
                  <Heading />
                  <Button slot="next">
                    <ArrowDropDownIcon className="-rotate-90" />
                  </Button>
                </header>
                <CalendarGrid>
                  {(date) => <CalendarCell date={date} />}
                </CalendarGrid>
              </Calendar>
            </Dialog>
          </Popover>
        </>
      )}
    </AriaDatePicker>
  );
};
