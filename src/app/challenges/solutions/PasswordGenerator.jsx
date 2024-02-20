"use client";
import { useCopyToClipboard, useObjectState } from "@uidotdev/usehooks";
import {
  Button,
  Switch,
  Label,
  Slider,
  SliderOutput,
  SliderThumb,
  SliderTrack,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CachedIcon from "@mui/icons-material/Cached";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const initialSettingsState = {
  includeUppercaseLetters: true,
  includeLowercaseLetters: true,
  includeNumbers: true,
  includeSymbols: false,
  characterLength: 16,
};

export const PasswordGenerator = () => {
  const [settings, setSettings] = useObjectState(initialSettingsState);
  const [generatedPassword, setGeneratedPassword] = useState();

  useEffect(() => {
    setGeneratedPassword(generatePassword(settings))
  }, [])

  const disableGeneratePassword = useMemo(() => {
    return (
      !settings.includeLowercaseLetters &&
      !settings.includeUppercaseLetters &&
      !settings.includeNumbers &&
      !settings.includeSymbols
    );
  }, [settings]);

  const handleGeneratePassword = useCallback(() => {
    setGeneratedPassword(generatePassword(settings));
  }, [settings]);

  return (
    <main className={`min-h-dvh flex justify-center items-center md:bg-[#f7e8ff] bg-[#090212] text-[#f3f2f4] ${lato.className}`}>
      <div className="bg-[#090212] md:rounded-xl md:shadow-2xl p-8 flex flex-col md:max-w-md w-full">
        <h2 className="font-bold text-3xl">Generate password</h2>

        <GeneratedPassword
          disableGeneratePassword={disableGeneratePassword}
          password={generatedPassword}
          handleGeneratePassword={handleGeneratePassword}
          className="mt-10"
        />
        <LengthSlider
          className="mt-5"
          characterLength={settings.characterLength}
          onChange={(val) => setSettings(() => ({ characterLength: val }))}
        />

        <div className="grid gap-2 mt-5">
          <h3 className="text-[#605b66] text-sm font-bold">SETTINGS</h3>
          <SettingsCard
            value={settings.includeUppercaseLetters}
            onChange={(v) =>
              setSettings(() => ({ includeUppercaseLetters: v }))
            }
          >
            Include uppercase letters
          </SettingsCard>
          <SettingsCard
            value={settings.includeLowercaseLetters}
            onChange={(v) =>
              setSettings(() => ({ includeLowercaseLetters: v }))
            }
          >
            Include lowercase letters
          </SettingsCard>
          <SettingsCard
            value={settings.includeNumbers}
            onChange={(v) => setSettings(() => ({ includeNumbers: v }))}
          >
            Include numbers
          </SettingsCard>
          <SettingsCard
            value={settings.includeSymbols}
            onChange={(v) => setSettings(() => ({ includeSymbols: v }))}
          >
            Include symbols
          </SettingsCard>
        </div>

        <Button
          isDisabled={disableGeneratePassword}
          onPress={() => handleGeneratePassword()}
          className="mt-9 disabled:cursor-not-allowed disabled:opacity-50 outline-none text-white bg-[#cd5fff] rounded-lg font-bold p-4 pressed:scale-95 transition-all
            focus-visible:outline outline-2 outline-offset-2 focus-visible:outline-[#cd5fff]"
        >
          Generate Password
        </Button>
      </div>
    </main>
  );
};

const SettingsCard = ({ children, value, onChange }) => {
  return (
    <Switch
      isSelected={value}
      onChange={onChange}
      className="flex items-center gap-4 justify-between bg-[#26163b] px-2.5 py-3 text-[#b7b2bf] font-bold cursor-pointer rounded-2xl"
    >
      {({ isSelected, isFocusVisible }) => (
        <>
          {children}
          <div
            className={twMerge(
              `w-8 h-[1.143rem] bg-[#72518a] rounded-[1.143rem] transition-all duration-200
                before:contents-[''] before:block before:m-[0.143rem] before:w-[0.857rem] before:aspect-square before:bg-[#aa96b9] before:rounded-[16px]
                before:transition-all before:duration-200`,
              isSelected
                ? `before:bg-white before:translate-x-full bg-[#cd5fff]`
                : "",
              isFocusVisible
                ? `outline-2 outline outline-[#cd5fff] outline-offset-2`
                : "",
            )}
          />
        </>
      )}
    </Switch>
  );
};

const LengthSlider = ({ className, characterLength, onChange }) => {
  return (
    <Slider
      aria-label="change password length"
      maxValue={64}
      minValue={8}
      value={characterLength}
      onChange={onChange}
      className={className}
    >
      <div className="flex justify-between mb-2">
        <Label className="text-[#605b66] text-sm font-bold">
          CHARACTER LENGTH
        </Label>
        <SliderOutput className="text-[#d060fd] font-bold" />
      </div>
      <div
        className="relative text-[#b7b2bf] text-sm font-bold
      bg-[#26163b] px-2.5 py-2 rounded-2xl flex items-center"
      >
        <span className="left-2.5 top-1/2 -translate-y-1/2 absolute">
          {characterLength}
        </span>
        <SliderTrack className="relative w-full group h-7 mx-8">
          {({ state }) => (
            <div>
              {/* track */}
              <div className="absolute h-1.5 top-[50%] translate-y-[-50%] w-full rounded-full bg-[#5b4e6a]" />
              {/* fill */}
              <SliderThumb
                className={twMerge(
                  "w-3 aspect-square top-[50%] rounded-full bg-white outline-none transition peer z-50",
                  "focus-visible:outline outline-2 focus-visible:outline-[#cd5ffe] outline-offset-2",
                )}
              />
              <div
                style={{ width: state.getThumbPercent(0) * 100 + "%" }}
                className="absolute h-1.5 top-[50%] translate-y-[-50%] rounded-full bg-[#cd5ffe]"
              />
            </div>
          )}
        </SliderTrack>
        <span className="right-2.5 top-1/2 -translate-y-1/2 absolute">64</span>
      </div>
    </Slider>
  );
};

const GeneratedPassword = ({
  password,
  handleGeneratePassword,
  className,
  disableGeneratePassword,
}) => {
  const [copiedText, copyToClipboard] = useCopyToClipboard();
  return (
    <div className={className}>
      <h3 className="text-[#605b66] text-sm font-bold mb-2">GENERATED PASSWORD</h3>
      <div className="bg-[#26163b] px-2.5 py-3 rounded-2xl flex items-center justify-between gap-4">
        <p className="text-white font-bold select-none truncate">{password}</p>
        <div className="flex items-center gap-2">
          <Button
            aria-label="copy generated password"
            isDisabled={!password}
            onPress={() => copyToClipboard(password)}
            className="transition-all hover:text-[#cd5ffe] disabled:opacity-50 pressed:scale-95 outline-none focus-visible:outline-[#cd5ffe] outline-2 outline-offset-2 rounded-full aspect-square flex items-center justify-center"
          >
            <ContentCopyIcon fontSize="small" />
          </Button>
          <Button
            aria-label="generate new password"
            isDisabled={disableGeneratePassword}
            onPress={handleGeneratePassword}
            className="transition-all disabled:opacity-50 disabled:cursor-not-allowed group hover:text-[#cd5ffe] pressed:scale-95 outline-none focus-visible:outline-[#cd5ffe]  outline-2 outline-offset-2 rounded-full aspect-square flex items-center justify-center"
          >
            <CachedIcon
              fontSize="small"
              className="-scale-100 group-hover:animate-spin disabled:cursor-not-allowed group-hover:animate-infinite group-hover:animate-duration-[2000ms] group-hover:animate-ease-in-out"
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

const generatePassword = (settings) => {
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+-=[]{}|;:'\",.<>?/";

  let characters = "";
  let password = "";

  if (settings.includeUppercaseLetters) {
    characters += uppercaseLetters;
  }
  if (settings.includeLowercaseLetters) {
    characters += lowercaseLetters;
  }
  if (settings.includeNumbers) {
    characters += numbers;
  }
  if (settings.includeSymbols) {
    characters += symbols;
  }

  for (let i = 0; i < settings.characterLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  return password;
};
