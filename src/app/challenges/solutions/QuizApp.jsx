"use client";

import { fredoka } from "@/app/fonts";
import { useEffect, useState } from "react";
import { Button, Radio, RadioGroup, Switch } from "react-aria-components";

import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

const focusRing = tv({
  base: "outline outline-blue-500 outline-offset-1 outline-0 focus-visible:outline-2",
});

const buttonStyles = tv({
  extend: focusRing,
  base: ["transition-all pressed:scale-95"],
});

export const QuizApp = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  useEffect(() => {
    const prefersDarkMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(prefersDarkMode);
  }, []);

  useEffect(() => {
    document.body.className = isDarkMode ? "dark" : "light";
  }, [isDarkMode]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  return (
    <main
      className={`${fredoka.className} min-h-dvh flex items-center justify-center bg-gradient-to-r from-[#d89aff] to-[#5550e0] via-[#9775ee]`}
    >
      <div
        className="p-4 lg:rounded-lg lg:shadow-xl dark:text-neutral-100 text-neutral-700
      dark:bg-[#040420] bg-[#f7f7f7] lg:max-w-md w-full"
      >
        <header className="flex items-center gap-2">
          <span className="bg-white text-neutral-900 text-xl rounded-md font-semibold grid place-content-center size-6">
            Q
          </span>
          <span className="font-medium text-lg tracking-wide">QuizApp</span>
          <ThemeSwitch isSelected={isDarkMode} onChange={setIsDarkMode} />
        </header>
        {currentIndex < questions.length ? (
          <>
            <span className="opacity-70 mt-4 block text-sm">
              Question {currentIndex + 1} of {questions.length}
            </span>
            <h2 className="text-xl font-medium mt-4">
              {questions[currentIndex].question}
            </h2>

            <RadioGroup
              orientation="vertical"
              aria-label="alternatives"
              className="flex flex-col gap-4 mt-4"
              value={answers[currentIndex]}
              onChange={(v) =>
                setAnswers((curr) => {
                  const updatedAnswers = [...curr];
                  updatedAnswers[currentIndex] = v;
                  return updatedAnswers;
                })
              }
            >
              {questions[currentIndex]?.options.map((option, index) => (
                <Radio
                  key={option}
                  value={option}
                  className={twMerge(
                    `dark:bg-[#161441] bg-[#b0b0ca] text-neutral-100 p-2 rounded-md flex items-center gap-2
              selected:bg-[#5550e0] cursor-pointer`,
                    focusRing(),
                  )}
                >
                  <span className="bg-[#fefefe] rounded-md text-neutral-800 font-medium size-5 flex items-center justify-center">
                    {String.fromCharCode(65 + index)}
                  </span>
                  {option}
                </Radio>
              ))}
            </RadioGroup>

            <Button
              isDisabled={!answers[currentIndex]}
              onPress={() => {
                setCurrentIndex((curr) => curr + 1);
              }}
              className={buttonStyles({
                class:
                  "rounded-md mt-4 px-4 py-1.5 w-full dark:bg-[#d99bff] bg-[#ac27fe] dark:text-neutral-800 text-neutral-100 font-medium disabled:opacity-50",
              })}
            >
              Next Question
            </Button>
          </>
        ) : (
          <>
            <span className="block text-center text-2xl font-medium">
              {calculateCorrectAnswers(
                answers,
                questions.map((q) => q.answer),
              )}{" "}
              / {questions.length}
            </span>
            <Button
              onPress={() => {
                setCurrentIndex(0);
              }}
              className={buttonStyles({
                class:
                  "rounded-md mt-4 px-4 py-1.5 w-full dark:bg-[#d99bff] bg-[#ac27fe] dark:text-neutral-800 text-neutral-100 font-medium disabled:opacity-50",
              })}
            >
              Retry
            </Button>
          </>
        )}
      </div>
    </main>
  );
};

const ThemeSwitch = ({ ...props }) => {
  return (
    <Switch
      {...props}
      aria-label="switch between light and dark theme"
      className="flex items-center gap-2 cursor-pointer ml-auto"
    >
      {({ isSelected, isFocusVisible }) => (
        <>
          <LightModeOutlinedIcon
            fontSize="small"
            className={twMerge(
              isSelected ? "opacity-50" : "opacity-100",
              "transition-opacity duration-200",
            )}
          />
          <div
            className={twMerge(
              `w-10 h-5 bg-[#ac27fe] rounded-[1.143rem] transition-all duration-200
                before:contents-[''] before:block before:my-[0.143rem] before:w-4 before:aspect-square before:bg-white before:rounded-[16px]
                before:transition-all before:duration-200`,
              isSelected
                ? `before:bg-white before:translate-x-full bg-[#d89bfe] before:ml-1.5`
                : "before:ml-0.5",
              isFocusVisible
                ? `outline-2 outline outline-blue-500 outline-offset-1`
                : "",
            )}
          />
          <DarkModeOutlinedIcon
            fontSize="small"
            className={twMerge(
              isSelected ? "opacity-100" : "opacity-50",
              "transition-opacity duration-200",
            )}
          />
        </>
      )}
    </Switch>
  );
};

const questions = [
  {
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Creative Style Sheets",
      "Computer Style Sheets",
      "Colorful Style Sheets",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    question: "Which HTML tag is used to define an unordered list?",
    options: ["<ul>", "<ol>", "<list>", "<li>"],
    answer: "<ul>",
  },
  {
    question:
      "Which property is used to change the background color of an element in CSS?",
    options: ["color", "background-color", "text-color", "bgcolor"],
    answer: "background-color",
  },
  {
    question:
      "What is the correct JavaScript syntax for referring to an external script called 'script.js'?",
    options: [
      "<script src='script.js'>",
      "<script href='script.js'>",
      "<script name='script.js'>",
      "<script link='script.js'>",
    ],
    answer: "<script src='script.js'>",
  },
  {
    question:
      "Which CSS property is used to change the text color of an element?",
    options: ["text-color", "color", "font-color", "text-style"],
    answer: "color",
  },
  {
    question: "In HTML, what does the <div> tag represent?",
    options: [
      "A line break",
      "An image",
      "A division or section of a webpage",
      "A hyperlink",
    ],
    answer: "A division or section of a webpage",
  },
  {
    question:
      "What is the purpose of the 'document.getElementById()' method in JavaScript?",
    options: [
      "To change the background color of an element",
      "To retrieve an element from the DOM using its ID",
      "To add a new element to the DOM",
      "To display an alert message",
    ],
    answer: "To retrieve an element from the DOM using its ID",
  },
  {
    question:
      "Which CSS property is used to control the spacing between lines of text?",
    options: ["line-height", "text-spacing", "font-spacing", "line-spacing"],
    answer: "line-height",
  },
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinking Texting Markup Language",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    question:
      "Which JavaScript method is used to add an element to the end of an array?",
    options: [".push()", ".pop()", ".join()", ".concat()"],
    answer: ".push()",
  },
];

const calculateCorrectAnswers = (userAnswers, correctAnswers) => {
  if (userAnswers.length !== correctAnswers.length) {
    throw new Error(
      "The arrays of user answers and correct answers must have the same length.",
    );
  }

  let correctCount = 0;

  for (let i = 0; i < userAnswers.length; i++) {
    if (userAnswers[i] === correctAnswers[i]) {
      correctCount++;
    }
  }

  return correctCount;
};
