"use client";

import { roboto } from "@/app/fonts";
import { Bathtub, Bed, ExpandMore, FitScreen } from "@mui/icons-material";
import Image from "next/image";
import {
  Button,
  Checkbox,
  CheckboxGroup,
  Group,
  Input,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  Select,
  SelectValue,
  Slider,
  SliderOutput,
  SliderThumb,
  SliderTrack,
  Switch,
  TextField,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

const focusRing = tv({
  base: "outline outline-[#40c045] outline-offset-1 outline-0 focus-visible:outline-2",
});

const labelStyles = tv({
  base: "font-semibold",
});

const checkboxstyles = tv({
  extend: focusRing,
  base: [
    "selected:bg-[#40c045] selected:text-neutral-50 transition-all px-2 py-1.5 rounded-md",
    "bg-[#fefefe] text-neutral-700 cursor-pointer",
  ],
});

const inputStyles = tv({
  base: [
    "px-2 py-1.5 w-full rounded-l-md border-r-2 bg-white placeholder:text-neutral-600 border-neutral-400 focus:border-[#40c045] outline-none",
  ],
});

const selectTriggerStyles = tv({
  extend: focusRing,
  base: [
    "px-2 py-1.5 bg-white rounded-r-md text-neutral-600 flex items-center gap-2",
  ],
});

const selectOptionStyles = tv({
  base: ["rounded focus:bg-[#40c045] focus:text-neutral-50 outline-none p-1"],
});

const buttonStyles = tv({
  extend: focusRing,
  base: ["transition-all pressed:scale-95"],
});

export const SearchFilters = () => {
  return (
    <main
      className={`${roboto.className} min-h-dvh bg-[#cbc5b9] p-4 flex flex-wrap gap-8 items-center justify-center text-neutral-800`}
    >
      <div className="rounded-xl shadow-md p-4 bg-[#f2f2f2] max-w-sm w-full flex flex-col gap-8">
        <header className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Filters</h2>
          <Button
            className={buttonStyles({ class: "opacity-70 rounded-lg px-2" })}
          >
            Clear all
          </Button>
        </header>

        <Switch
          className={twMerge(
            "bg-white p-1 rounded-md flex justify-between cursor-pointer",
            focusRing(),
          )}
        >
          {({ isSelected }) => (
            <>
              <div
                className={twMerge(
                  "flex-1 rounded-md text-center py-1",
                  isSelected
                    ? "bg-[#40c045] text-neutral-50"
                    : "bg-transparent",
                )}
              >
                Rent
              </div>
              <div
                className={twMerge(
                  "flex-1 rounded-md text-center py-1",
                  isSelected
                    ? "bg-transparent"
                    : "bg-[#40c045] text-neutral-50",
                )}
              >
                Sale
              </div>
            </>
          )}
        </Switch>

        <Group className="flex">
          <TextField className="flex-1">
            <Input
              placeholder="Enter a search location"
              className={inputStyles()}
            />
          </TextField>
          <Select defaultSelectedKey="1">
            <Button className={selectTriggerStyles()}>
              <SelectValue />
              <ExpandMore />
            </Button>
            <Popover
              className={`w-[--trigger-width] p-2 rounded-md text-neutral-700 bg-white shadow-md entering:animate-in entering:fade-in exiting:animate-out exiting:fade-out ${roboto.className}`}
            >
              <ListBox className="outline-none">
                <ListBoxItem id="1" className={selectOptionStyles()}>
                  + 0 miles
                </ListBoxItem>
                <ListBoxItem className={selectOptionStyles()}>
                  + 5 miles
                </ListBoxItem>
                <ListBoxItem className={selectOptionStyles()}>
                  + 10 miles
                </ListBoxItem>
                <ListBoxItem className={selectOptionStyles()}>
                  + 15 miles
                </ListBoxItem>
                <ListBoxItem className={selectOptionStyles()}>
                  + 20 miles
                </ListBoxItem>
              </ListBox>
            </Popover>
          </Select>
        </Group>

        <MySlider
          label="Price"
          orientation="horizontal"
          step={10000}
          maxValue={200000}
          defaultValue={[20000, 130000]}
          thumbLabels={["start", "end"]}
          prefix="$"
        />

        <CheckboxGroup>
          <Label className={labelStyles()}>Property Type</Label>
          <Group className="flex flex-wrap gap-2 mt-2">
            <Checkbox className={checkboxstyles()} value="House">
              House
            </Checkbox>
            <Checkbox className={checkboxstyles()} value="Penthouse">
              Penthouse
            </Checkbox>
            <Checkbox className={checkboxstyles()} value="Townhouses">
              Townhouses
            </Checkbox>
            <Checkbox className={checkboxstyles()} value="Apartment">
              Apartment
            </Checkbox>
            <Checkbox className={checkboxstyles()} value="Vila">
              Vila
            </Checkbox>
            <Checkbox className={checkboxstyles()} value="Condominiums">
              Condominiums
            </Checkbox>
          </Group>
        </CheckboxGroup>

        <MySlider
          label="Property Size"
          defaultValue={[20, 100]}
          step={5}
          maxValue={500}
          thumbLabels={["start", "end"]}
          postfix="m²"
        />

        <Button
          className={buttonStyles({
            class: "text-neutral-50 bg-[#40c045] py-1.5 rounded-md mt-8",
          })}
        >
          Show Results
        </Button>
      </div>
      <div className="rounded-xl shadow-md p-4 bg-[#f2f2f2] max-w-sm w-full flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Search Results</h2>
        {[
          {
            image_src: "/challenges/92/house.jpg",
            price: "350.000",
            number_of_beds: 3,
            number_of_baths: 2,
            square_meters: 120,
            address: "123 Fjord Street, Oslo, Norway",
          },
          {
            image_src: "/challenges/92/penthouse.jpg",
            price: "450.000",
            number_of_beds: 4,
            number_of_baths: 3,
            square_meters: 180,
            address: "456 Oak Avenue, Springfield, IL",
          },
        ].map((res) => (
          <div
            className="p-2 rounded-lg shadow-md flex flex-col gap-2 bg-white"
            key={res.image_src}
          >
            <Image
              src={res.image_src}
              width={1080}
              height={711}
              alt=""
              className="rounded-md max-h-36 object-cover"
            />
            <span className="text-lg font-semibold">${res.price}</span>
            <div className="flex items-center gap-4">
              <div className="flex gap-1 items-center text-sm">
                <Bed fontSize="inherit" />
                {res.number_of_beds} Beds
              </div>
              <div className="flex gap-1 items-center text-sm">
                <Bathtub fontSize="inherit" />
                {res.number_of_baths} Baths
              </div>
              <div className="flex gap-1 items-center text-sm">
                <FitScreen fontSize="inherit" />
                {res.square_meters} m²
              </div>
            </div>
            <span className="text-sm opacity-70">{res.address}</span>
          </div>
        ))}
      </div>
    </main>
  );
};

const MySlider = ({
  label,
  thumbLabels,
  prefix = "",
  postfix = "",
  ...props
}) => {
  return (
    <Slider {...props} className="flex flex-col justify-between gap-4">
      <div className="flex justify-between items-center">
        <Label className={labelStyles()}>{label}</Label>
        <SliderOutput className="text-sm">
          {({ state }) =>
            [
              ...new Set(
                state.values.map(
                  (_, i) => `${prefix}${state.getThumbValueLabel(i)}${postfix}`,
                ),
              ),
            ].join(" – ")
          }
        </SliderOutput>
      </div>
      <SliderTrack className="h-1 bg-white relative rounded-full">
        {({ state }) => (
          <>
            {state.values.map((_, i) => (
              <SliderThumb
                className="bg-[#55f25b] size-3 rounded-full top-1/2 -translate-y-1/2
                focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#55f25b]"
                key={i}
                index={i}
                aria-label={thumbLabels?.[i]}
              />
            ))}
            <div
              style={{
                left: state.getThumbPercent(0) * 100 + "%",
                width:
                  (state.getThumbPercent(1) - state.getThumbPercent(0)) * 100 +
                  "%",
              }}
              className="absolute h-1 top-1/2 -translate-y-1/2 rounded-full bg-[#55f25b]"
            />
          </>
        )}
      </SliderTrack>
    </Slider>
  );
};
