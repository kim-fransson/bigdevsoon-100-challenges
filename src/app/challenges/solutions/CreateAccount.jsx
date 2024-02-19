"use client";

import {
  Button,
  Input,
  Label,
  Link,
  TextField as AriaTextField,
  ToggleButton,
} from "react-aria-components";
import BadgeIcon from "@mui/icons-material/Badge";
import EmailIcon from "@mui/icons-material/Email";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useFocusRing } from "react-aria";
import { useState } from "react";

import { Hind } from "next/font/google";

const hind = Hind({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const CreateAccount = () => {
  return (
    <main
      className={`min-h-dvh bg-white flex flex-col justify-center lg:items-start items-center lg:pl-20 ${hind.className}
      lg:challenge-7-gradient`}
    >
      <div className="grid md:max-w-lg w-full lg:p-0 p-4">
        <h3 className="font-semibold text-[#858890]">START FOR FREE</h3>
        <h2 className="text-4xl font-semibold mt-2 text-gray-950">
          Create new account
        </h2>
        <form className="grid grid-cols-2 mt-12 gap-4">
          <TextField
            label="First name"
            Icon={BadgeIcon}
            placeholder="..."
            className="md:col-span-1 col-span-full"
          />
          <TextField
            label="Last name"
            Icon={BadgeIcon}
            placeholder="..."
            className="md:col-span-1 col-span-full"
          />
          <TextField
            label="Email"
            Icon={EmailIcon}
            placeholder="..."
            className="col-span-full"
            type="email"
          />

          <PasswordField className="col-span-full" />

          <div className="font-medium text-[#858890] col-span-full flex items-center gap-2">
            Already have an account?
            <Link className="text-[#406afe] hover:underline decoration-2 cursor-pointer outline-none focus-visible:ring-2 ring-[#406afe]">
              Sign In
            </Link>
          </div>

          <Button
            className="mt-4 col-span-full bg-[#406afe] px-4 py-3 font-medium rounded-full text-gray-50
          shadow-2xl outline-none focus-visible:ring-2 focus-visible:ring-[#406afe] focus-visible:text-[#406afe] 
          focus-visible:bg-white hover:ring-[#406afe] pressed:scale-95 transition-all hover:bg-white hover:text-[#406afe] hover:ring-2"
          >
            Create account
          </Button>
        </form>
      </div>
    </main>
  );
};

const TextField = ({ label, className, placeholder, Icon, type = "text" }) => {
  let { focusProps, isFocused } = useFocusRing();

  return (
    <div className={className}>
      <AriaTextField
        className={`bg-[#e9ebf8] px-3 py-2 flex gap-2 items-center justify-between rounded-xl text-[#858890] 
    ${isFocused ? "ring-2 ring-[#406afe] bg-white" : ""}`}
      >
        <div className="grid w-full">
          <Label
            className={`text-xs font-medium ${isFocused ? "text-[#406afe]" : ""}`}
          >
            {label}
          </Label>
          <Input
            {...focusProps}
            placeholder={placeholder}
            type={type}
            className="bg-transparent outline-none font-semibold min-w-0 
        text-gray-950 w-full"
          />
        </div>
        <Icon fontSize="small" />
      </AriaTextField>
    </div>
  );
};

const PasswordField = ({ className }) => {
  let { focusProps, isFocused } = useFocusRing();
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <div className={className}>
      <AriaTextField
        className={`bg-[#e9ebf8] px-3 py-2 flex gap-2 items-center justify-between rounded-xl text-[#858890] 
    ${isFocused ? "ring-2 ring-[#406afe] bg-white" : ""}`}
      >
        <div className="grid w-full">
          <Label
            className={`text-xs font-medium ${isFocused ? "text-[#406afe]" : ""}`}
          >
            Password
          </Label>
          <Input
            {...focusProps}
            placeholder="..."
            type={hidePassword ? "password" : "text"}
            className="bg-transparent outline-none font-semibold min-w-0 
        text-gray-950 w-full"
          />
        </div>
        <ToggleButton
          className="focus-visible:ring-2 ring-[#406afe] outline-none"
          isSelected={hidePassword}
          onChange={setHidePassword}
        >
          {hidePassword ? (
            <VisibilityIcon fontSize="small" />
          ) : (
            <VisibilityOffIcon fontSize="small" />
          )}
        </ToggleButton>
      </AriaTextField>
    </div>
  );
};
