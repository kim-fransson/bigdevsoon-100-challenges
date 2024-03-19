"use client";

import FlightIcon from "@mui/icons-material/Flight";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import HotelIcon from "@mui/icons-material/Hotel";
import CarRentalIcon from "@mui/icons-material/CarRental";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import DateRangeIcon from "@mui/icons-material/DateRange";
import CloseIcon from "@mui/icons-material/Close";
import {
  TabList,
  Tabs,
  Tab as AriaTab,
  TabPanel as AriaTabPanel,
  RadioGroup,
  Radio as AriaRadio,
  Group,
  TextField as AriaTextField,
  Input,
  DateField,
  DateInput,
  DateSegment,
  Button as AriaButton,
  Label,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { today, getLocalTimeZone } from "@internationalized/date";
import { fredoka } from "@/app/fonts";

export const ExploreFlights = () => {
  return (
    <main
      className={`min-h-dvh bg-sky-100
    flex items-center justify-center ${fredoka.className}`}
    >
      <Tabs
        className="max-w-screen-lg w-full"
        disabledKeys={["hotel", "rentACar"]}
      >
        <TabList className="flex" aria-label="bookings">
          <Tab id="flight">
            <FlightIcon className="rotate-45" fontSize="small" />
            Flight
          </Tab>
          <Tab id="hotel">
            <HotelIcon fontSize="small" />
            Hotel
          </Tab>
          <Tab id="rentACar">
            <CarRentalIcon fontSize="small" />
            Rent a Car
          </Tab>
        </TabList>
        <TabPanel id="flight">
          <h2 className="text-lg font-semibold">
            Discover your next dream destination
          </h2>

          <RadioGroup
            aria-label="direction"
            className="flex gap-8"
            orientation="horizontal"
            defaultValue="Round trip"
          >
            <Radio value="Round trip" />
            <Radio value="One way" />
            <Radio value="Multi-city" />
          </RadioGroup>

          <Group className="bg-gray-300 rounded-md flex items-center gap-1 p-2">
            <TextField
              aria-label="where from?"
              icon={<FlightTakeoffIcon />}
              placeholder="Where from?"
            />
            <div className="rounded-full bg-white text-gray-600 p-1 grid place-content-center shadow-md">
              <SwapHorizIcon fontSize="small" />
            </div>
            <TextField
              aria-label="where to?"
              icon={<FlightLandIcon />}
              placeholder="Where to?"
            />

            <DateField
              defaultValue={today(getLocalTimeZone())}
              className="flex w-full bg-white px-3 py-2 rounded-md font-medium items-center gap-2 shadow-md"
            >
              <DateInput className="flex order-2 peer">
                {(segment) => (
                  <DateSegment
                    className="outline-none focus:ring-2 focus:ring-sky-400 px-0.5 rounded-md selection:bg-sky-200"
                    segment={segment}
                  />
                )}
              </DateInput>
              <Label className="order-1 peer-focus-within:text-sky-400">
                <DateRangeIcon />
              </Label>
            </DateField>

            <Button className="bg-white rounded-md self-stretch aspect-square shrink-0 shadow-md">
              <CloseIcon fontSize="small" />
            </Button>
          </Group>

          <Group className="flex items-center justify-between">
            <Button className="hover:underline underline-offset-4 text-sky-500 decoration-2">
              Add a flight
            </Button>
            <Button className="px-6 py-3 bg-sky-500 text-gray-50 flex items-center gap-2 rounded-md hover:bg-sky-600">
              <FlightIcon fontSize="small" className="rotate-45" />
              Search
            </Button>
          </Group>
        </TabPanel>
        <TabPanel id="hotel">...</TabPanel>
        <TabPanel id="rentACar">...</TabPanel>
      </Tabs>
    </main>
  );
};

const Button = (props) => {
  return (
    <AriaButton
      className={twMerge(
        "transition-all outline-none pressed:scale-95 grid place-content-center focus-visible:ring-2 focus-visible:ring-yellow-400",
        props.className,
      )}
    >
      {props.children}
    </AriaButton>
  );
};

const TextField = (props) => {
  return (
    <AriaTextField className="flex items-center gap-2 bg-white px-3 py-2 rounded-md placeholder:text-gray-500 font-medium shadow-md">
      <Input
        placeholder={props.placeholder}
        className="bg-transparent outline-none peer order-2 selection:bg-sky-200"
      />
      <Label className="peer-focus:text-sky-400 order-1">{props.icon}</Label>
    </AriaTextField>
  );
};

const Tab = (props) => {
  return (
    <AriaTab
      {...props}
      className="flex gap-2 items-center bg-white px-8 py-3
    outline-none selected:bg-sky-500 selected:text-gray-50 first:rounded-tl-2xl cursor-pointer transition-all 
    focus-visible:outline-2 focus-visible:outline-yellow-400 focus-visible:-outline-offset-2
    font-semibold disabled:cursor-not-allowed"
    >
      {props.children}
    </AriaTab>
  );
};

const TabPanel = (props) => {
  return (
    <AriaTabPanel
      {...props}
      className="bg-white rounded-b-2xl rounded-tr-2xl shadow-xl p-8 grid gap-6"
    >
      {props.children}
    </AriaTabPanel>
  );
};

const Radio = ({ value }) => {
  return (
    <AriaRadio
      className="text-sm flex items-center gap-1 capitalize cursor-pointer focus-visible:before:ring-2 focus-visible:before:ring-yellow-400
        before:content-[''] before:block before:w-4 before:h-4 before:box-border before:border 
      before:border-gray-400 before:rounded-full before:transition-all selected:before:border-4 selected:before:border-sky-400
      font-medium"
      value={value}
    >
      {value}
    </AriaRadio>
  );
};
