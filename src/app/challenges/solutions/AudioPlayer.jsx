"use client";

import { fredoka } from "@/app/fonts";
import {
  Button,
  Label,
  Slider,
  SliderThumb,
  SliderTrack,
  ToggleButton,
} from "react-aria-components";

import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import { tv } from "tailwind-variants";
import { useSound } from "@/app/hooks";
import { usePrevious } from "@uidotdev/usehooks";

const focusRing = tv({
  base: "outline outline-violet-500 outline-offset-1 outline-0 focus-visible:outline-2",
});

const buttonStyles = tv({
  extend: focusRing,
  base: ["flex items-center justify-center transition-all pressed:scale-95"],
});

export const AudioPlayer = () => {
  // const {
  //   toggleSound,
  //   isPlaying,
  //   duration,
  //   currentTime,
  //   updateCurrentTime,
  //   volume,
  //   updateVolume,
  // } = useSound(`/challenges/78/song.mp3`);

  // const previousVolume = usePrevious(volume);

  const toggleMute = () => {
    if (volume === 0) {
      updateVolume(previousVolume < 3 ? 100 : previousVolume);
    } else {
      updateVolume(0);
    }
  };

  return (
    <main
      className={`${fredoka.className} min-h-dvh p-4 bg-orange-200 flex items-center justify-center`}
    >
      <div className="rounded-3xl w-full shadow-2xl px-4 py-6 max-w-screen-sm bg-white text-neutral-800 flex flex-col gap-4">
        <div className="text-[6rem] bg-violet-300 flex items-center justify-center px-4 py-12 rounded-2xl">
          <span className="block -rotate-3">📻</span>
        </div>
        <div className="text-center">
          <h2 className="font-semibold text-xl tracking-wider">
            Retro and Groovy Fun
          </h2>
          <h3 className="text-neutral-800/70 tracking-wide">Musictown</h3>
        </div>

        <div className="bg-violet-100 flex items-center gap-4 rounded-full pl-2.5 pr-8 py-2">
          <ToggleButton
            isSelected={true}
            // onChange={toggleSound}
            className={buttonStyles({
              class: "p-1 rounded-full bg-violet-400 text-neutral-50",
            })}
          >
            {({ isSelected }) => (
              <>{isSelected ? <PauseIcon /> : <PlayArrowIcon />}</>
            )}
          </ToggleButton>

          <Progress
            progress={30}
            duration={120}
            // onChange={updateCurrentTime}
          />

          <ToggleButton
            isSelected={true}
            // onChange={toggleMute}
            className={buttonStyles({
              class:
                "p-1 rounded-full hover:bg-violet-400 hover:text-neutral-50 text-neutral-800/70",
            })}
          >
            {({ isSelected }) => (
              <>
                {isSelected ? (
                  <VolumeUpIcon fontSize="small" />
                ) : (
                  <VolumeOffIcon fontSize="small" />
                )}
              </>
            )}
          </ToggleButton>
        </div>
      </div>
    </main>
  );
};

const Progress = ({ progress, duration, onChange }) => {
  return (
    <Slider
      maxValue={Math.floor(duration)}
      value={Math.floor(progress)}
      onChange={onChange}
      className="text-xs w-full flex items-center gap-1"
    >
      <SliderTrack className="relative group w-full">
        {({ state }) => (
          <>
            {/* track */}
            <div className="absolute h-3 top-[50%] translate-y-[-50%] w-full rounded-full bg-neutral-50" />
            {/* fill */}
            <SliderThumb
              className="h-5 w-5 top-[50%] rounded-full bg-violet-300 outline-none transition peer z-50
            focus-visible:opacity-100 focus-visible:outline-2 outline-offset-2 focus-visible:outline-violet-500 opacity-0 dragging:opacity-100 group-hover:opacity-100"
            />
            <div
              style={{ width: state.getThumbPercent(0) * 100 + "%" }}
              className="absolute h-3 top-[50%] translate-y-[-50%] rounded-full bg-violet-400 
              peer-focus-visible:bg-violet-400 peer-dragging:bg-violet-400 group-hover:bg-violet-400
              transition"
            />
          </>
        )}
      </SliderTrack>
      <div className="flex items-center justify-center w-20">
        <span>{formatTime(progress, false)}</span>
        {"/"}
        <Label>{formatTime(duration, false)}</Label>
      </div>
    </Slider>
  );
};

const formatTime = (duration) => {
  const minutes = Math.floor(duration / 60);
  const seconds = Math.floor(duration % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};
