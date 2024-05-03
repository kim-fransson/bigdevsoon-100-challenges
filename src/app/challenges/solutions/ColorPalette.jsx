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

const generateColorPalette = (baseColor) => {
  // Function to convert hex to RGB
  const hexToRgb = (hex) => {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, (m, r, g, b) => {
      return r + r + g + g + b + b;
    });
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  };

  // Function to convert RGB to hex
  const rgbToHex = (rgb) => {
    return (
      "#" +
      ((1 << 24) + (rgb.r << 16) + (rgb.g << 8) + rgb.b).toString(16).slice(1)
    );
  };

  const baseRgb = hexToRgb(baseColor);

  // Check if the base color is valid
  if (!baseRgb) {
    return [];
  }

  // Generate color palette based on the base color
  const palette = [];
  palette.push(baseColor);

  // Generate four additional colors based on the base color
  const increments = [20, 40, 60, 80];
  for (let i = 0; i < increments.length; i++) {
    const newRgb = {
      r: Math.max(0, Math.min(255, baseRgb.r + increments[i])),
      g: Math.max(0, Math.min(255, baseRgb.g + increments[i])),
      b: Math.max(0, Math.min(255, baseRgb.b + increments[i])),
    };
    const newHex = rgbToHex(newRgb);
    if (!palette.includes(newHex)) {
      palette.push(newHex);
    }
  }

  // Ensure palette has exactly 5 colors
  while (palette.length < 5) {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    if (!palette.includes(randomColor)) {
      palette.push(randomColor);
    }
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
