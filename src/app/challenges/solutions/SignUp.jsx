"use client";

import {
  Button,
  TextField as AriaTextField,
  Input,
  Label,
  ToggleButton,
} from "react-aria-components";
import EmailIcon from "@mui/icons-material/Email";
import GoogleIcon from "@mui/icons-material/Google";
import { useFocusRing } from "react-aria";
import { twMerge } from "tailwind-merge";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { notoSans } from "@/app/fonts";

export const SignUp = () => {
  return (
    <main
      className={`bg-[#e7e7f1] flex items-center justify-center font-medium min-h-dvh text-gray-950 ${notoSans.className}`}
    >
      <div className="bg-[#f2f2f2] shadow-2xl shadow-[#cbccdc] p-8 rounded-2xl grid gap-4">
        <h2 className="text-3xl font-semibold text-center">Sign Up</h2>
        <p className="text-gray-900 mb-4 text-center">
          Join us now! Sign up to kick-start your journey.
        </p>

        <SignUpWithEmail />

        <SignUpWithGoogle />

        <div className="flex items-center gap-1 justify-center">
          <p>Already have an account?</p>
          <Button className="text-[#4467f8] outline-none rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500">
            Log In
          </Button>
        </div>
      </div>
    </main>
  );
};

const SignUpWithEmail = () => {
  const [showForm, setShowForm] = useState(false);

  return !showForm ? (
    <PrimaryButton onPress={() => setShowForm(true)}>
      <EmailIcon fontSize="small" />
      Sign up with Email
    </PrimaryButton>
  ) : (
    <div
      className={twMerge(
        "flex flex-col gap-4",
        false
          ? "animate-fade-down animate-duration-500"
          : "animate-fade-up animate-duration-500",
      )}
    >
      <EmailSignUpForm
        onSubmit={() => {
          setShowForm(false);
        }}
      />
      <div className="flex items-center gap-2 text-[#76757a]">
        <div className="bg-[#cdcdcd] h-[1px] flex-1 rounded-l-3xl" />
        <span>or</span>
        <div className="bg-[#cdcdcd] h-[1px] flex-1 rounded-r-3xl" />
      </div>
    </div>
  );
};

const SignUpWithGoogle = () => {
  return (
    <Button
      className="outline-none group rounded-lg shadow-2xl flex items-center justify-center gap-1
    py-2 px-3 transition-all pressed:scale-95 border-2 border-[#cdcdcd] hover:border-[#277dd3] hover:text-[#f2f2f2] hover:bg-[#277dd3]
    focus-visible:outline focus-visible:outline-2 outline-offset-2 focus-visible:outline-blue-500"
    >
      <GoogleIcon
        fontSize="small"
        className="text-[#277dd3] group-hover:text-[#f2f2f2] transition-all"
      />
      Sign up with Google
    </Button>
  );
};

const EmailSignUpForm = ({ onSubmit }) => {
  return (
    <form className="grid gap-4">
      <TextField label="name" />
      <TextField label="email" />
      <TextField label="password" passwordField />
      <PrimaryButton onPress={onSubmit} className="mt-4">
        Sign up
      </PrimaryButton>
    </form>
  );
};

const TextField = ({ label, type = "text", passwordField }) => {
  let { focusProps, isFocused } = useFocusRing();
  const [hidePassword, setHidePassword] = useState(true);
  let [value, setValue] = useState("");

  return (
    <AriaTextField
      onChange={setValue}
      type={passwordField ? (hidePassword ? "password" : "text") : type}
      className={twMerge(
        "border-2 border-[#cdcdcd] transition-all p-2 rounded-lg relative",
        isFocused ? "border-[#4467f8]" : "",
      )}
    >
      <Label
        className={twMerge(
          "capitalize text-[#cdcdcd] absolute top-1/2 left-2 transition-all z-50",
          isFocused || value
            ? "top-2 text-sm  -translate-y-full px-1 bg-[#f2f2f2]"
            : "-translate-y-1/2",
          isFocused ? "text-[#4467f8]" : "",
        )}
      >
        {label}
      </Label>
      <Input
        {...focusProps}
        className="outline-none bg-transparent w-full pr-8"
      />
      {passwordField && (
        <ToggleButton
          {...focusProps}
          className={twMerge(
            "absolute top-1/2 text-[#cdcdcd] -translate-y-1/2 right-2 focus-visible:ring-2 ring-blue-500 outline-none",
            isFocused ? "text-[#4467f8]" : "",
          )}
          isSelected={hidePassword}
          onChange={setHidePassword}
        >
          {hidePassword ? (
            <VisibilityIcon fontSize="small" />
          ) : (
            <VisibilityOffIcon fontSize="small" />
          )}
        </ToggleButton>
      )}
    </AriaTextField>
  );
};

const PrimaryButton = ({ children, className, onPress }) => {
  return (
    <Button
      onPress={onPress}
      className={`bg-[#27334b] outline-none rounded-lg shadow-2xl text-[#f8f8f9] flex items-center justify-center gap-1
  py-2 px-3 transition-all pressed:scale-95 hover:ring-2 hover:ring-[#27334b] hover:text-[#27334b] hover:bg-[#f2f2f2]
  focus-visible:outline focus-visible:outline-2 outline-offset-2 focus-visible:outline-blue-500 ${className}`}
    >
      {children}
    </Button>
  );
};
