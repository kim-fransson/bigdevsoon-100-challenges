"use client";

import { fredoka } from "@/app/fonts";
import {
  Button,
  ProgressBar,
  Tag,
  TagGroup,
  TagList,
} from "react-aria-components";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { useState } from "react";

export const Interests = () => {
  const MIN_INTEREST = 4;
  const [selectedInterests, setSelectedInterests] = useState(new Set());

  return (
    <main
      className={`${fredoka.className} min-h-dvh p-4 bg-blue-600 text-gray-800 flex items-center justify-center`}
    >
      <div className="bg-white rounded-xl shadow-xl px-4 py-6 grid auto-rows-min gap-8 w-full max-w-sm">
        <div className="flex items-center gap-4 justify-center">
          <ProgressBar
            aria-label="minimum selection requirement"
            maxValue={MIN_INTEREST}
            minValue={0}
            value={selectedInterests.size}
          >
            {({ percentage, valueText }) => (
              <div
                className={`size-20 rounded-full grid place-items-center after:size-16 after:bg-white after:rounded-full
            after:grid after:place-items-center relative`}
                style={{
                  background: `conic-gradient(#1e40af 0%, #1e40af ${percentage}%, #d1d5db ${percentage}%, #d1d5db 100%)`,
                }}
              >
                <span className="absolute">
                  {selectedInterests.size} of {MIN_INTEREST}
                </span>
              </div>
            )}
          </ProgressBar>
          <div>
            <h2 className="text-2xl font-semibold">What is your interests?</h2>
            <span className="opacity-60">
              Choose at least {MIN_INTEREST} interest
            </span>
          </div>
        </div>

        <TagGroup
          onSelectionChange={(val) => setSelectedInterests(val)}
          aria-label="interests"
          selectionMode="multiple"
        >
          <TagList items={interests} className="flex flex-wrap gap-x-3 gap-y-2">
            {(item) => (
              <Tag
                className="border-2 bg-gray-50 cursor-pointer border-gray-400 px-2 py-0.5 inline-flex items-center 
                justify-center text-lg text-gray-800/90 gap-1 rounded-full outline-none 
                selected:bg-blue-800 selected:text-gray-50 selected:border-blue-800
                focus-visible:outline-2 focus-visible:outline-blue-800 focus-visible:outline-offset-1"
                id={item.interest}
              >
                {({ isSelected }) => (
                  <>
                    <>
                      {isSelected ? (
                        <CheckCircleRoundedIcon
                          className="text-blue-200"
                          fontSize="inherit"
                        />
                      ) : (
                        <span>{item.emoji}</span>
                      )}
                      {item.interest}
                    </>
                  </>
                )}
              </Tag>
            )}
          </TagList>
        </TagGroup>

        <Button
          isDisabled={selectedInterests.size < MIN_INTEREST}
          className="transition-all pressed:scale-95 bg-blue-600 text-gray-50 hover:bg-blue-800
        outline-none px-4 py-3 font-medium rounded-lg disabled:opacity-50 disabled:cursor-not-allowed
        focus-visible:outline-2 focus-visible:outline-blue-800 focus-visible:outline-offset-1"
        >
          Save
        </Button>
      </div>
    </main>
  );
};

const interests = [
  { interest: "Reading", emoji: "📚" },
  { interest: "Traveling", emoji: "✈️" },
  { interest: "Cooking", emoji: "🍳" },
  { interest: "Photography", emoji: "📷" },
  { interest: "Hiking", emoji: "🥾" },
  { interest: "Painting", emoji: "🎨" },
  { interest: "Gaming", emoji: "🎮" },
  { interest: "Music", emoji: "🎵" },
  { interest: "Dancing", emoji: "💃" },
  { interest: "Coding", emoji: "💻" },
  { interest: "Yoga", emoji: "🧘" },
  { interest: "Soccer", emoji: "⚽" },
  { interest: "Swimming", emoji: "🏊" },
  { interest: "Cycling", emoji: "🚴" },
  { interest: "Writing", emoji: "✍️" },
  { interest: "Volunteering", emoji: "🤝" },
  { interest: "Fashion", emoji: "👗" },
  { interest: "Gardening", emoji: "🌱" },
  { interest: "Skiing", emoji: "⛷️" },
  { interest: "Film", emoji: "🎥" },
];
