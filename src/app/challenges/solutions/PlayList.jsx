"use client";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FastForwardIcon from "@mui/icons-material/FastForward";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import PauseIcon from "@mui/icons-material/Pause";

import { fredoka } from "@/app/fonts";
import {
  Button,
  Label,
  ListBox,
  ListBoxItem,
  Slider,
  SliderThumb,
  SliderTrack,
  ToggleButton,
} from "react-aria-components";
import { tv } from "tailwind-variants";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSound } from "@/app/hooks";
import { usePress } from "react-aria";
import { twMerge } from "tailwind-merge";

const styles = tv({
  slots: {
    songList: [
      "mt-4 max-h-[500px] overflow-y-auto overflow-x-hidden no-scrollbar",
    ],
    songListItem: [
      "flex gap-4 items-center outline-none last:mb-24 px-4 py-2 cursor-pointer hover:bg-indigo-900 transition-all",
    ],
    activeSongItem: [
      "flex gap-4 p-3 cursor-pointer rounded-3xl absolute left-0 right-0 bottom-0 items-center bg-white text-gray-950",
    ],
    button: [
      "outline-none transition-all rounded-full p-1 aspect-square items-center justify-center flex hover:bg-indigo-900",
    ],
  },
  variants: {
    isExpanded: {
      true: {
        activeSongItem: ["flex-col items-start p-8"],
      },
    },
    isFocusVisible: {
      true: {
        songList: "",
        songListItem: ["ring-yellow-400 ring-1"],
        button: ["outline-2 outline-yellow-400"],
      },
    },
    isHovered: {
      true: {
        songListItem: ["bg-indigo-900"],
      },
    },
    isSelected: {
      true: {
        songListItem: ["bg-indigo-900"],
      },
    },
    isPressed: {
      true: {
        songListItem: "",
        button: ["scale-90"],
      },
    },
  },
});

const { button, songList, songListItem, activeSongItem } = styles();

export const PlayList = () => {
  const [activeSong, setActiveSong] = useState(songData[0]);

  return (
    <main
      className={`min-h-dvh bg-gradient-radial from-indigo-200 to-indigo-100 lg:justify-center lg:items-center flex ${fredoka.className}`}
    >
      <div
        className="bg-indigo-950 overflow-hidden text-gray-50 lg:rounded-3xl lg:shadow-2xl lg:max-w-sm w-full
      pt-6 grid relative"
      >
        <PlayListInfo />
        <Songs activeSong={activeSong} setActiveSong={setActiveSong} />
        <CurrentSong activeSong={activeSong} setActiveSong={setActiveSong} />
      </div>
    </main>
  );
};

const PlayListInfo = () => {
  return (
    <div className="grid gap-4 px-4">
      <Image
        width={128}
        height={128}
        src="/challenges/28/images/playlist.png"
        alt=""
        className="justify-self-center rounded-2xl shadow-lg"
      />
      <div className="flex justify-between gap-4 items-start">
        <div>
          <h2 className="text-lg font-medium">Beach Breeze & Animal Ease</h2>
          <span className="text-sm opacity-80">
            100 321 likes ·{" "}
            {formatTime(
              songData.reduce(
                (totalPlayListTime, song) =>
                  totalPlayListTime + song.songLength,
                0,
              ),
              false,
            )}
          </span>
        </div>
        <div className="flex gap-1 items-center">
          <ToggleButton className={(states) => button({ ...states })}>
            {({ isSelected }) => (
              <>
                {isSelected ? (
                  <FavoriteIcon className="text-indigo-400" />
                ) : (
                  <FavoriteBorderIcon />
                )}
              </>
            )}
          </ToggleButton>
          <Button className={(states) => button(states)}>
            <MoreVertIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

const Songs = ({ activeSong, setActiveSong }) => {
  return (
    <ListBox
      items={songData}
      selectionMode="single"
      disallowEmptySelection
      orientation="vertical"
      selectedKeys={[activeSong.title]}
      onSelectionChange={(v) => {
        setActiveSong(songData.find((song) => song.title === Array.from(v)[0]));
      }}
      className={(states) => songList(states)}
    >
      {(song) => (
        <ListBoxItem
          id={song.title}
          className={(states) => songListItem(states)}
        >
          <Image
            width={64}
            height={64}
            src={`/challenges/28/images/${song.image}`}
            alt=""
            className="rounded-2xl shadow-md"
          />
          <div>
            <h2 className="font-medium">{song.title}</h2>
            <span className="text-sm opacity-80">{song.artist}</span>
          </div>
          <span className="ml-auto opacity-80 text-sm">
            {formatTime(song.songLength)}
          </span>
        </ListBoxItem>
      )}
    </ListBox>
  );
};

const CurrentSong = ({ activeSong, setActiveSong }) => {
  const {
    toggleSound,
    replay,
    toggleLoop,
    isPlaying,
    duration,
    currentTime,
    updateCurrentTime,
    updateSound,
  } = useSound(`/challenges/28/audio/${activeSong.audio}`);

  const [isExpanded, setIsExpanded] = useState(false);

  const { pressProps } = usePress({
    onPress: () => setIsExpanded((curr) => !curr),
  });

  useEffect(() => {
    updateSound(`/challenges/28/audio/${activeSong.audio}`);
  }, [activeSong]);

  const nextSong = () => {
    setActiveSong((curr) => {
      const index = songData.findIndex((song) => song.title === curr.title);
      const nextIndex = (index + 1) % songData.length;
      return songData[nextIndex];
    });
  };

  const previousSong = () => {
    setActiveSong((curr) => {
      const index = songData.findIndex((song) => song.title === curr.title);
      const prevIndex = (index - 1 + songData.length) % songData.length;
      return songData[prevIndex];
    });
  };

  return (
    <>
      <div
        className={twMerge(
          "absolute ",
          isExpanded ? "inset-0 backdrop-blur-sm bg-indigo-950/50" : "hidden",
        )}
      />
      <div {...pressProps} className={activeSongItem({ isExpanded })}>
        <Image
          width={64}
          height={64}
          src={`/challenges/28/images/${activeSong.image}`}
          alt=""
          className={`rounded-2xl shadow-md w-full ${isExpanded ? "max-w-none" : "max-w-16"}`}
        />
        <div className="flex items-center gap-4 w-full">
          <div>
            <h2 className="font-medium truncate">{activeSong.title}</h2>
            <span className="text-sm opacity-80 truncate">
              {activeSong.artist}
            </span>
          </div>
          <ToggleButton
            className={(states) =>
              button({
                ...states,
                class: `ml-auto text-indigo-700 hover:bg-indigo-100 ${isExpanded ? "block" : "hidden"}`,
              })
            }
          >
            {({ isSelected }) => (
              <>{isSelected ? <FavoriteIcon /> : <FavoriteBorderIcon />}</>
            )}
          </ToggleButton>
        </div>

        <div className={`w-full ${isExpanded ? "block" : "hidden"}`}>
          <Progress
            progress={currentTime}
            duration={duration}
            onChange={updateCurrentTime}
          />
        </div>

        <div className="flex items-center justify-center gap-4 w-full">
          <Button
            onPress={previousSong}
            className={(states) =>
              button({
                ...states,
                class: `text-indigo-300 hover:bg-indigo-100 hover:text-indigo-700 ${isExpanded ? "block" : "hidden"}`,
              })
            }
          >
            <FastRewindIcon fontSize="large" />
          </Button>

          <ToggleButton
            isSelected={isPlaying}
            onChange={toggleSound}
            className={(states) =>
              button({
                ...states,
                class: `text-indigo-700 hover:bg-indigo-100 ${isExpanded ? "ml-0" : "ml-auto"}`,
              })
            }
          >
            {({ isSelected }) => (
              <>
                {isSelected ? (
                  <PauseIcon fontSize="large" />
                ) : (
                  <PlayArrowIcon fontSize="large" />
                )}
              </>
            )}
          </ToggleButton>

          <Button
            onPress={nextSong}
            className={(states) =>
              button({
                ...states,
                class: `text-indigo-300 hover:bg-indigo-100 hover:text-indigo-700 ${isExpanded ? "block" : "hidden"}`,
              })
            }
          >
            <FastForwardIcon fontSize="large" />
          </Button>
        </div>
      </div>
    </>
  );
};

const Progress = ({ progress, duration, onChange }) => {
  return (
    <Slider
      maxValue={Math.floor(duration)}
      value={Math.floor(progress)}
      onChange={onChange}
      className="text-sm text-gray-950/80 relative items-center justify-center flex flex-col w-full"
    >
      <SliderTrack className="relative w-full group h-7">
        {({ state }) => (
          <>
            {/* track */}
            <div className="absolute h-2 top-[50%] translate-y-[-50%] w-full rounded-full bg-indigo-300" />
            {/* fill */}
            <SliderThumb
              className="h-5 w-5 top-[50%] rounded-full bg-indigo-700 outline-none transition peer z-50
            focus-visible:opacity-100 focus-visible:outline-2 outline-offset-2 focus-visible:outline-yellow-400 opacity-0 dragging:opacity-100 group-hover:opacity-100"
            />
            <div
              style={{ width: state.getThumbPercent(0) * 100 + "%" }}
              className="absolute h-2 top-[50%] translate-y-[-50%] rounded-full bg-indigo-700 
              peer-focus-visible:bg-indigo-700 peer-dragging:bg-indigo-700 group-hover:bg-indigo-700
              transition"
            />
          </>
        )}
      </SliderTrack>
      <div className="flex items-center justify-between -mt-1 w-full">
        <span>{formatTime(progress, false)}</span>
        <Label>{formatTime(duration, false)}</Label>
      </div>
    </Slider>
  );
};

const songData = [
  {
    title: "Better Day",
    artist: "penguinmusic",
    songLength: 90,
    image: "better-day.png",
    audio: "better-day.mp3",
  },
  {
    title: "Ethereal Vistas",
    artist: "Starjam",
    songLength: 241,
    image: "ethereal-vistas.png",
    audio: "ethereal-vistas.mp3",
  },
  {
    title: "Once In Paris",
    artist: "Pumpupthemind",
    songLength: 132,
    image: "once-in-paris.png",
    audio: "once-in-paris.mp3",
  },
  {
    title: "Good Night",
    artist: "FASSounds",
    songLength: 147,
    image: "good-night.png",
    audio: "good-night.mp3",
  },
  {
    title: "LoFi Chill",
    artist: "BoDleasons",
    songLength: 67,
    image: "lofi-chill.png",
    audio: "lofi-chill.mp3",
  },
  {
    title: "Smoke",
    artist: "SoulProdMusic",
    songLength: 118,
    image: "smoke.png",
    audio: "smoke.mp3",
  },
  {
    title: "Abstract Fashion Pop",
    artist: "QubeSounds",
    songLength: 92,
    image: "abstract-fashion-pop.png",
    audio: "abstract-fashion-pop.mp3",
  },
  {
    title: "Relaxed Vlog",
    artist: "Ashot-Danielyan-Composer",
    songLength: 140,
    image: "relaxed-vlog.png",
    audio: "relaxed-vlog.mp3",
  },
];

const formatTime = (duration, useShortFormat = false) => {
  const minutes = Math.floor(duration / 60);
  const seconds = Math.floor(duration % 60);
  if (useShortFormat) {
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  } else {
    return `${minutes}m ${seconds}s`;
  }
};
