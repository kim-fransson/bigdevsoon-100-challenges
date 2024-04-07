"use client";

import { fredoka } from "@/app/fonts";
import {
  ProgressBar as AriaProgressBar,
  Button,
  OverlayArrow,
  Tooltip,
  TooltipTrigger,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";
import CheckIcon from "@mui/icons-material/Check";
import { progress } from "framer-motion";
import { Fragment } from "react";

export const ProgressBars = () => {
  const progressBars = [
    BasicProgressIndicator,
    ZigzagProgressBar,
    MilestoneTracker,
    TabbedProgressionSteps,
    NumericPercentageBar,
    SliderPercentageIndicator,
    TimedProgressAlert,
    CircularStepCounter,
  ];
  return (
    <main
      className={`min-h-dvh flex items-center justify-center p-4 ${fredoka.className} bg-blue-800/90`}
    >
      <div className="grid md:grid-cols-2 w-full grid-flow-dense max-w-screen-lg gap-12 justify-items-center">
        {progressBars.map((ProgressBar, index) => (
          <ProgressCard
            index={index + 1}
            key={`progress_bar_${index}`}
            className={`${index < 4 ? "md:col-start-1" : "md:col-start-2"}`}
          >
            {<ProgressBar />}
          </ProgressCard>
        ))}
      </div>
    </main>
  );
};

const ProgressCard = ({ index, children, className }) => {
  return (
    <div
      className={twMerge(
        "relative rounded-3xl bg-white shadow-lg p-6 min-h-28 flex flex-col items-center justify-center max-w-sm w-full",
        className,
      )}
    >
      <div
        className="rounded-full size-8 font-semibold text-lg text-gray-950 bg-blue-300
      grid place-content-center absolute top-1.5 left-1.5 -translate-x-1/2 -translate-y-1/2"
      >
        {index}
      </div>
      {children}
    </div>
  );
};

const BasicProgressIndicator = ({ stepsCompleted = 1, numberOfSteps = 6 }) => {
  return (
    <AriaProgressBar className="w-full" value={stepsCompleted / numberOfSteps}>
      <div className="flex gap-3">
        {Array.from({ length: numberOfSteps }, (_, index) => (
          <div
            key={index}
            className={`h-3 flex-1 rounded-full ${index < stepsCompleted ? "bg-blue-800/90" : "bg-gray-300"}`}
          ></div>
        ))}
      </div>
    </AriaProgressBar>
  );
};

const ZigzagProgressBar = ({ progress = 65 }) => {
  return (
    <AriaProgressBar className="w-full" value={progress}>
      {({ percentage }) => (
        <div className="will-change-transform transition-transform overflow-hidden rounded-full h-2.5 bg-gray-300">
          <div
            className="h-full bg-blue-800/90"
            style={{
              width: `${percentage}%`,
              background: `repeating-linear-gradient(-45deg, #3452b6, #3452b6 10px, #e7f1fd 10px, #e7f1fd 20px)`,
            }}
          />
        </div>
      )}
    </AriaProgressBar>
  );
};

const MilestoneTracker = ({
  milestones = [
    { isDone: true, name: "Step Name 1" },
    { isCurrent: true, name: "Step Name 2" },
    { name: "Step Name 3" },
  ],
}) => {
  return (
    <AriaProgressBar
      className="w-full"
      value={milestones.filter((m) => m.isDone).length / milestones.length}
    >
      <div className="flex gap-3">
        {milestones.map(({ isCurrent, isDone, name }, index) => (
          <Fragment key={name}>
            <div
              className={twMerge(
                "text-sm flex-1 grid justify-items-center gap-1 font-medium",
                isDone || isCurrent ? "text-gray-950" : "text-gray-400",
              )}
            >
              <div
                className={twMerge(
                  "rounded-full size-8 grid place-content-center",
                  isDone
                    ? "bg-blue-400 text-gray-50"
                    : isCurrent
                      ? "bg-blue-800/90 text-gray-50"
                      : "bg-gray-300",
                )}
              >
                {isDone ? <CheckIcon /> : `${index + 1}`}
              </div>
              <span className="text-center">{name}</span>
            </div>
            {index < milestones.length - 1 && (
              <div className="flex-1 mt-3.5 border-t-2 sm:-mx-9 -mx-7 border-blue-800/90"></div>
            )}
          </Fragment>
        ))}
      </div>
    </AriaProgressBar>
  );
};

const TabbedProgressionSteps = ({
  milestones = [
    { isDone: true, name: "Step Name 1" },
    { isCurrent: true, name: "Step Name 2" },
    { name: "Step Name 3" },
  ],
}) => {
  return (
    <AriaProgressBar
      className="w-full"
      value={milestones.filter((m) => m.isDone).length / milestones.length}
    >
      <div className="flex h-12 text-sm">
        {milestones.map(({ isCurrent, isDone, name }) => (
          <div
            key={name}
            className={twMerge(
              "flex-1 grid place-content-center first:rounded-l-2xl last:rounded-r-2xl relative",
              isDone
                ? "bg-blue-400 text-gray-50"
                : isCurrent
                  ? "bg-blue-800/90 text-gray-50"
                  : "bg-gray-300",
            )}
          >
            <span className="text-center">{name}</span>
          </div>
        ))}
      </div>
    </AriaProgressBar>
  );
};

const NumericPercentageBar = ({ progress = 34 }) => {
  return (
    <AriaProgressBar className="w-full" value={progress}>
      {({ percentage, valueText }) => (
        <div className="grid gap-1.5">
          <span className="justify-self-center text-sm font-medium">
            {valueText}
          </span>
          <div className="will-change-transform transition-transform overflow-hidden rounded-full h-2.5 bg-gray-300">
            <div
              className="h-full bg-blue-800/90"
              style={{ width: percentage + "%" }}
            />
          </div>
        </div>
      )}
    </AriaProgressBar>
  );
};

const SliderPercentageIndicator = ({ progress = 34 }) => {
  return (
    <AriaProgressBar className="w-full" value={progress}>
      {({ percentage, valueText }) => (
        <div className="grid gap-1.5 self-stretch">
          <div className="will-change-transform transition-transform rounded-full h-2.5 bg-gray-300">
            <div
              className="h-full bg-blue-800/90 relative rounded-full"
              style={{ width: percentage + "%" }}
            >
              <TooltipTrigger delay={200}>
                <Button
                  className="size-5 bg-white rounded-full border-[3px] border-blue-800/90 absolute 
                right-0 translate-x-1/2 top-1/2 -translate-y-1/2 outline-none"
                ></Button>
                <Tooltip
                  offset={8}
                  className="text-sm text-gray-50 font-medium bg-gray-950 p-1 rounded-lg"
                >
                  <OverlayArrow>
                    <svg width={8} height={8} viewBox="0 0 8 8">
                      <path d="M0 0 L4 4 L8 0" />
                    </svg>
                  </OverlayArrow>
                  {valueText}
                </Tooltip>
              </TooltipTrigger>
            </div>
          </div>
        </div>
      )}
    </AriaProgressBar>
  );
};

const TimedProgressAlert = ({
  progress = 34,
  estimatedTimeLeftInSeconds = 6,
}) => {
  return (
    <AriaProgressBar className="w-full" value={progress}>
      {({ percentage, valueText }) => (
        <div className="grid gap-1.5 text-sm font-medium">
          <div className="justify-self-center flex gap-2">
            <span className=" text-blue-800/90">{valueText}</span>
            <span className="text-gray-950/70">Update in progress...</span>
            <span className="text-blue-400">{`${estimatedTimeLeftInSeconds}s left`}</span>
          </div>
          <div className="will-change-transform transition-transform overflow-hidden h-2.5 bg-gray-300">
            <div
              className="h-full bg-blue-800/90"
              style={{ width: percentage + "%" }}
            />
          </div>
        </div>
      )}
    </AriaProgressBar>
  );
};

const CircularStepCounter = ({
  steps = [
    { isDone: true, name: "Initialize Repository" },
    { isDone: true, name: "Write Basic Functions" },
    { isDone: false, name: "Implement Core Algorithms" },
    { isDone: false, name: "Optimize Performance" },
    { isDone: false, name: "Conduct Testing" },
    { isDone: false, name: "Document Code" },
  ],
}) => {
  const currentStep = steps.find((step) => !step.isDone);
  const currentStepIndex = steps.findIndex((step) => !step.isDone);
  return (
    <AriaProgressBar
      className="w-full"
      value={(steps.filter((m) => m.isDone).length / steps.length) * 100}
    >
      {({ percentage }) => (
        <div className="flex gap-3 justify-center items-center">
          <div
            className={`size-16 rounded-full grid place-items-center
            after:content-['2_of_6'] after:size-[3.25rem] after:bg-white after:rounded-full
            after:grid after:place-items-center`}
            style={{
              background: `conic-gradient(#2f4eb2 0%, #2f4eb2 ${percentage}%, #d1d5db ${percentage}%, #d1d5db 100%)`,
            }}
          ></div>
          <div className="grid gap-1">
            <span className="text-sm font-medium">{`Step ${currentStepIndex + 1}`}</span>
            <span className="text-xs opacity-60">{currentStep.name}</span>
          </div>
        </div>
      )}
    </AriaProgressBar>
  );
};
