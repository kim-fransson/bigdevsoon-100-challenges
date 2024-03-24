"use client";

import { fredoka } from "@/app/fonts";
import {
  Separator as AriaSeparator,
  TabList,
  Tabs,
  Tab as AriaTab,
  TabPanel,
  Select,
  Label,
  Button,
  SelectValue,
  Text,
  Popover,
  ListBox,
  ListBoxItem,
  I18nProvider,
  RadioGroup,
  Radio,
  Group,
  useLocale,
} from "react-aria-components";

import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import { twMerge } from "tailwind-merge";
import { useEffect, useState } from "react";

export const SettingsAppearance = () => {
  const [locale, setLocale] = useState("en-US");
  const [theme, setTheme] = useState("light");
  const [accent, setAccent] = useState("blue");

  useEffect(() => {
    let savedTheme = "light";
    if (localStorage) {
      savedTheme = localStorage.getItem("theme") || "light";
    }
    setTheme(savedTheme);
    document.body.className = savedTheme;
  }, []);

  useEffect(() => {
    if (localStorage) {
      localStorage.setItem("theme", theme);
    }
    setTheme(theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <I18nProvider locale={locale}>
      <main
        className={`flex items-center justify-center min-h-dvh p-4 ${fredoka.className} bg-indigo-50`}
      >
        <div className="p-6 max-w-2xl w-full rounded-xl shadow-xl bg-white text-gray-950 dark:text-gray-50 dark:bg-gray-950">
          <h2 className="text-2xl font-semibold tracking-wide">
            {translations[locale].settings}
          </h2>
          <Separator />
          <Tabs
            disabledKeys={["profile", "notifications", "account"]}
            defaultSelectedKey="appereance"
          >
            <TabList
              className="flex gap-x-4 gap-y-1 flex-wrap"
              aria-label="settings"
            >
              <Tab id="profile">{translations[locale].profile}</Tab>
              <Tab id="notifications">{translations[locale].notifications}</Tab>
              <Tab id="appereance">{translations[locale].appearance}</Tab>
              <Tab id="account">{translations[locale].account}</Tab>
            </TabList>
            <TabPanel className="mt-6 flex flex-col gap-6" id="appereance">
              <Select
                className="grid grid-cols-2 gap-x-4 w-full"
                selectedKey={locale}
                onSelectionChange={setLocale}
              >
                {({ isOpen }) => (
                  <>
                    <Label className="text-lg tracking-wide font-medium col-span-1 col-start-1">
                      {translations[locale].language}
                    </Label>
                    <Button
                      className="col-start-2 row-span-2 self-center
              border-2 border-gray-500 rounded-lg px-3 py-2 flex items-center gap-4 justify-between focus-visible:outline-2 focus-visible:outline-indigo-400
              focus-visible:outline-offset-2 outline-none"
                    >
                      <SelectValue />
                      <span
                        aria-hidden="true"
                        className={twMerge(
                          "transition-all",
                          isOpen ? "-rotate-180" : "rotate-0",
                        )}
                      >
                        <ExpandMoreRoundedIcon />
                      </span>
                    </Button>
                    <Text
                      slot="description"
                      className="opacity-70 col-span-1 col-start-1"
                    >
                      {translations[locale].select_language}
                    </Text>
                    <Popover className="w-[--trigger-width] entering:animate-in entering:fade-in exiting:animate-out exiting:fade-out">
                      <ListBox className="bg-white dark:bg-gray-950 text-gray-950 dark:text-gray-50 shadow-lg rounded-lg">
                        <Option id="en-US">
                          {translations[locale].english}
                        </Option>
                        <Option id="de-DE">
                          {translations[locale].german}
                        </Option>
                        <Option id="se-SE">
                          {translations[locale].swedish}
                        </Option>
                      </ListBox>
                    </Popover>
                  </>
                )}
              </Select>

              <RadioGroup
                className="flex flex-col"
                value={theme}
                onChange={setTheme}
              >
                <Label className="text-lg tracking-wide font-medium">
                  {translations[locale].interface_theme}
                </Label>
                <Text slot="description" className="opacity-70">
                  {translations[locale].customize_theme}
                </Text>
                <Group className="flex gap-4 mt-4">
                  <Radio value="light">
                    {({ isSelected, isFocusVisible }) => (
                      <ThemeRadioOption
                        accent={accent}
                        isSelected={isSelected}
                        isFocusVisible={isFocusVisible}
                        theme="light"
                      />
                    )}
                  </Radio>
                  <Radio value="dark">
                    {({ isSelected, isFocusVisible }) => (
                      <ThemeRadioOption
                        accent={accent}
                        isSelected={isSelected}
                        isFocusVisible={isFocusVisible}
                        theme="dark"
                      />
                    )}
                  </Radio>
                </Group>
              </RadioGroup>

              <RadioGroup
                className="grid grid-cols-2 gap-x-4 w-full"
                value={accent}
                onChange={setAccent}
              >
                <Label className="text-lg tracking-wide font-medium col-span-1 col-start-1">
                  {translations[locale].accent_color}
                </Label>
                <Text
                  slot="description"
                  className="opacity-70 col-span-1 col-start-1"
                >
                  {translations[locale].select_accent_color}
                </Text>
                <Group className="flex gap-4 self-center col-start-2 row-start-1 row-span-2">
                  <AccentRadio value="blue" />
                  <AccentRadio value="green" />
                  <AccentRadio value="red" />
                  <AccentRadio value="yellow" />
                </Group>
              </RadioGroup>
              <Separator />
              <Group className="flex flex-wrap items-center gap-4">
                <Button
                  className="flex items-center gap-2 focus-visible:outline-2 outline-none focus-visible:outline-indigo-400 focus-visible:outline-offset-2
                rounded-lg px-3 py-2 transition-all pressed:scale-95"
                >
                  <HistoryOutlinedIcon fontSize="small" />
                  <span className="mb-0.5">
                    {translations[locale].reset_to_default}
                  </span>
                </Button>
                <Button
                  className="md:ml-auto bg-gray-300 text-gray-600 px-3 py-2 rounded-lg hover:bg-gray-400 transition-all pressed:scale-95
                focus-visible:outline-2 outline-none focus-visible:outline-indigo-400 focus-visible:outline-offset-2"
                >
                  {translations[locale].cancel}
                </Button>
                <Button
                  className="bg-indigo-600 text-gray-50 px-3 py-2 rounded-lg hover:bg-indigo-700 transition-all pressed:scale-95
                focus-visible:outline-2 outline-none focus-visible:outline-indigo-400 focus-visible:outline-offset-2"
                >
                  {translations[locale].save_preferences}
                </Button>
              </Group>
            </TabPanel>
          </Tabs>
        </div>
      </main>
    </I18nProvider>
  );
};

const ThemeRadioOption = ({ isSelected, isFocusVisible, theme, accent }) => {
  const { locale } = useLocale();
  const isDark = theme === "dark";
  const backgroundColor = isDark ? "bg-gray-950" : "bg-gray-300";
  const itemColor = isDark ? "bg-gray-700" : "bg-white";
  const label = isDark
    ? translations[locale].dark_theme
    : translations[locale].light_theme;

  const accentColorClasses = {
    red: "ring-red-400",
    blue: "ring-blue-400",
    yellow: "ring-yellow-400",
    green: "ring-green-400",
  };

  return (
    <div
      className={twMerge(
        "cursor-pointer hover:scale-105 transition-all",
        isFocusVisible ? "scale-105" : "",
      )}
    >
      <div
        className={twMerge(
          "p-3 grid grid-cols-6 rounded-lg gap-3",
          backgroundColor,
          isSelected ? `ring-4 ${accentColorClasses[accent]}` : "",
        )}
      >
        <div className={`${itemColor} rounded-full size-5 col-span-1`}></div>
        <div className={`${itemColor} h-5 rounded-lg col-span-5`}></div>
        <div className={`${itemColor} h-8 rounded-lg col-span-6`}></div>
        <div className={`${itemColor} h-8 rounded-lg col-span-3`}></div>
        <div className={`${itemColor} h-8 rounded-lg col-span-3`}></div>
      </div>
      <span className="text-sm">{label}</span>
    </div>
  );
};

const AccentRadio = ({ value }) => {
  const accentColorClasses = {
    red: "selected:before:border-red-400",
    blue: "selected:before:border-blue-400",
    yellow: "selected:before:border-yellow-400",
    green: "selected:before:border-green-400",
  };

  const accentClasses = accentColorClasses[value] || "";
  return (
    <Radio
      className={twMerge(
        `text-sm flex items-center gap-1 capitalize cursor-pointer focus-visible:before:ring-2 focus-visible:before:ring-indigo-400
        before:content-[''] before:block before:size-5 before:box-border before:border 
      before:border-gray-400 before:rounded-full before:transition-all selected:before:border-[6px]
      font-medium`,
        accentClasses,
      )}
      value={value}
    />
  );
};

const Separator = () => {
  return (
    <AriaSeparator orientation="horizontal" className="rounded-full my-4" />
  );
};

const Tab = (props) => {
  return (
    <AriaTab
      {...props}
      className="outline-none tracking-wide text-lg opacity-70 px-1 selected:text-indigo-400 selected:opacity-100 selected:underline-offset-[6px] selected:decoration-2 selected:underline cursor-pointer transition-all 
    focus-visible:outline-2 focus-visible:outline-indigo-400 rounded-lg focus-visible:outline-offset-2 font-medium disabled:cursor-not-allowed"
    >
      {props.children}
    </AriaTab>
  );
};

const Option = (props) => {
  return (
    <ListBoxItem
      {...props}
      className={({ isFocused, isSelected }) =>
        twMerge(
          "first:rounded-t-lg last:rounded-b-lg px-3 py-2 outline-none cursor-pointer",
          isSelected && "bg-indigo-400 text-gray-50",
          isFocused &&
            !isSelected &&
            "outline-2 outline-indigo-400 -outline-offset-2",
        )
      }
    />
  );
};

const translations = {
  "en-US": {
    settings: "Settings",
    profile: "Profile",
    notifications: "Notifications",
    appearance: "Appearance",
    account: "Account",
    language: "Language",
    select_language: "Select the language of the application",
    interface_theme: "Interface theme",
    customize_theme: "Customise your application theme",
    light_theme: "Light theme",
    dark_theme: "Dark theme",
    accent_color: "Accent color",
    select_accent_color: "Select your application accent color",
    reset_to_default: "reset to default",
    cancel: "Cancel",
    save_preferences: "Save Preferences",
    english: "English",
    german: "German",
    swedish: "Swedish",
  },
  "de-DE": {
    settings: "Einstellungen",
    profile: "Profil",
    notifications: "Benachrichtigungen",
    appearance: "Erscheinungsbild",
    account: "Konto",
    language: "Sprache",
    select_language: "Wählen Sie die Sprache der Anwendung",
    interface_theme: "Interface-Thema",
    customize_theme: "Passen Sie Ihr Anwendungsthema an",
    light_theme: "Helles Thema",
    dark_theme: "Dunkles Thema",
    accent_color: "Akzentfarbe",
    select_accent_color: "Wählen Sie Ihre Anwendungsakzentfarbe",
    reset_to_default: "auf Standard zurücksetzen",
    cancel: "Abbrechen",
    save_preferences: "Einstellungen speichern",
    english: "Englisch",
    german: "Deutsch",
    swedish: "Schwedisch",
  },
  "se-SE": {
    settings: "Inställningar",
    profile: "Profil",
    notifications: "Notiser",
    appearance: "Utseende",
    account: "Konto",
    language: "Språk",
    select_language: "Välj applikationens språk",
    interface_theme: "Gränssnittstema",
    customize_theme: "Anpassa ditt applikationstema",
    light_theme: "Ljust tema",
    dark_theme: "Mörkt tema",
    accent_color: "Accentfärg",
    select_accent_color: "Välj din applikations accentfärg",
    reset_to_default: "återställ till standard",
    cancel: "Avbryt",
    save_preferences: "Spara inställningar",
    english: "Engelska",
    german: "Tyska",
    swedish: "Svenska",
  },
};
