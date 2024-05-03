"use client";

import { fredoka } from "@/app/fonts";
import {
  Button,
  Group,
  Input,
  ListBox,
  ListBoxItem,
  TextField,
} from "react-aria-components";

import PaletteIcon from "@mui/icons-material/Palette";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export const ColorPalette = () => {
  const [baseColor, setBaseColor] = useState(generateRandomHexColor());
  const [colorPalette, setColorPalette] = useState(
    generateColorPalette(baseColor),
  );

  console.log({
    baseColor,
    colorPalette,
  });

  return (
    <main
      className={`${fredoka.className} min-h-dvh flex items-center justify-center bg-neutral-200 p-4 text-neutral-800`}
    >
      <div className="max-w-screen-lg w-full flex flex-col lg:gap-16 gap-4">
        <h1 className="text-5xl font-medium tracking-wider text-center mx-auto">
          Generate Color Palette
        </h1>
        <Group className="flex gap-4 items-center mx-auto">
          <TextField
            value={baseColor}
            onChange={setBaseColor}
            aria-label="start color"
            className="border-2 w-28"
          >
            <Input
              style={{ background: baseColor ? baseColor : "rgb(38 38 38)" }}
              className={twMerge(
                "min-w-0 w-full px-4 py-2 rounded-lg outline-none focus:outline-2 focus:outline-offset-1 focus:outline-blue-600",
                isColorDark(baseColor) ? "text-neutral-50" : "text-neutral-800",
              )}
            />
          </TextField>
          <Button
            isDisabled={!isValidHexColor(baseColor)}
            className="px-4 disabled:cursor-not-allowed disabled:opacity-50 py-2 rounded-lg transition-all pressed:scale-95 bg-neutral-800 outline-none text-neutral-50 font-medium text-sm
            flex flex-1 items-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-blue-600"
            onPress={() => setColorPalette(generateColorPalette(baseColor))}
          >
            <PaletteIcon fontSize="small" /> Generate Palette
          </Button>
        </Group>

        <ListBox
          className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-4"
          orientation="horizontal"
          items={colorPalette.map((color) => ({ id: color }))}
        >
          {(item) => (
            <ListBoxItem
              className="aspect-[3/4] bg-neutral-50 p-4 rounded-lg shadow-lg
             focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-blue-600 focus:-translate-y-8
             transition-transform duration-300 cursor-pointer"
            >
              <div
                style={{ background: item.id }}
                className="aspect-[3/4] rounded-md"
              ></div>
              <h2 className="text-center mt-2 font-medium">{item.id}</h2>
            </ListBoxItem>
          )}
        </ListBox>
      </div>
    </main>
  );
};

const isValidHexColor = (color) => {
  // Regular expression to match a valid hexadecimal color
  const hexRegex = /^#?([0-9A-F]{6}){1,2}$/i;
  // Check if the color string matches the regex pattern
  return hexRegex.test(color);
};

const generateColorPalette = (inputHex) => {
  const hexToRgb = (hex) => {
    const bigint = parseInt(hex.replace(/^#/, ""), 16);
    const red = (bigint >> 16) & 255;
    const green = (bigint >> 8) & 255;
    const blue = bigint & 255;
    return { red, green, blue };
  };

  const rgbToHex = (rgb) => {
    return (
      "#" +
      ((1 << 24) + (rgb.red << 16) + (rgb.green << 8) + rgb.blue)
        .toString(16)
        .slice(1)
    );
  };

  const generateRandomColor = (mix) => {
    const random = () => Math.floor(Math.random() * 256);
    let red = random();
    let green = random();
    let blue = random();

    // mix the color
    if (mix !== null && typeof mix === "object") {
      red = Math.floor((red + mix.red) / 2); // Round down to integer
      green = Math.floor((green + mix.green) / 2); // Round down to integer
      blue = Math.floor((blue + mix.blue) / 2); // Round down to integer
    }

    const color = { red, green, blue };
    return color;
  };

  const inputRgb = hexToRgb(inputHex);
  const palette = [inputHex];

  for (let i = 1; i < 5; i++) {
    const color = generateRandomColor(inputRgb);
    palette.push(rgbToHex(color));
  }

  return palette;
};

const generateRandomHexColor = () => {
  // Generate random R, G, and B values
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  // Convert RGB to hex format
  const hexR = r.toString(16).padStart(2, "0");
  const hexG = g.toString(16).padStart(2, "0");
  const hexB = b.toString(16).padStart(2, "0");

  // Concatenate the hex values
  const hexColor = `#${hexR}${hexG}${hexB}`;

  return hexColor;
};

const isColorDark = (hexColor) => {
  if (!hexColor) return true;
  // Convert hex to RGB
  const hexToRgb = (hex) => {
    hex = hex.replace(/^#/, "");
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return [r, g, b];
  };

  const [r, g, b] = hexToRgb(hexColor);

  // Calculate luminance using the formula for relative luminance
  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;

  // Decide if the color is dark or bright based on luminance
  return luminance < 0.5;
};
