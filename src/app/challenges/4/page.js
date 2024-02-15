import {
  Input,
  TextField as AriaTextField,
  FieldError,
  RadioGroup,
  Radio,
  Label,
  TextArea,
  Button,
} from "react-aria-components";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function ContactUs() {
  return (
    <main
      className={`min-h-dvh grid items-center justify-center bg-gradient-to-t from-[#470028] via-[#451480] to-[#4628d6] ${montserrat.className}`}
    >
      <div className="grid lg:grid-cols-2 lg:p-10 lg:gap-20 p-4 gap-10 max-w-6xl">
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl font-semibold text-gray-50">Contact Us</h1>
          <p className="text-gray-300">
            Get in touch with us! Whether you have questions, feedback, or just
            want to say hello, we&apos;re here for you.
          </p>

          <div className="bg-[#ff007a] p-3 rounded-xl text-gray-50 max-w-sm flex flex-col gap-1 relative mt-4">
            <h2>Windler, Lockman and McClure</h2>
            <p className="text-gray-200 text-xs">
              3629 N Cole Rd, Boise, Illinois
            </p>
          </div>
        </div>

        <div className="grid">
          <div className="bg-white shadow-2xl rounded-2xl p-6 grid lg:max-w-md w-full mx-auto">
            <h2 className="font-medium text-lg">Send us a Message</h2>
            <form className="grid gap-4 mt-5">
              <TextField name="name" placeholder="Name" aria-label="name" />
              <TextField name="email" placeholder="Email" type="email" />
              <TextField name="phone" placeholder="Phone" type="phone" />

              <RadioGroup className="grid gap-3" orientation="horizontal">
                <Label className="text-sm text-gray-600">
                  Preferred contact method of communication
                </Label>
                <div className="flex gap-8">
                  <PreferredContactRadio value="email" />
                  <PreferredContactRadio value="phone" />
                </div>
              </RadioGroup>

              <TextField
                placeholder="Message"
                name="message"
                aria-label="message"
                textarea
              />

              <Button
                className="mt-12 font-medium outline-none rounded-full text-gray-50 bg-[#ff007a] py-2 px-3 pressed:scale-95 transition-all 
              hover:bg-[#4a2cdb] focus-visible:ring-2 ring-[#4a2cdb]"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

const TextField = ({
  description,
  errorMessage,
  placeholder,
  type = "text",
  textarea = false,
  ...props
}) => {
  return (
    <AriaTextField {...props} className="text-sm">
      {textarea ? (
        <TextArea
          placeholder={placeholder}
          className="min-h-28 outline-none focus:border-[#4a2cdb] resize-none border-2 border-gray-300 rounded-2xl px-3 py-2 w-full placeholder:text-gray-400"
        />
      ) : (
        <Input
          className="outline-none focus:border-[#4a2cdb] border-2 border-gray-300 rounded-2xl px-3 py-2 w-full placeholder:text-gray-400"
          placeholder={placeholder}
          type={type}
        />
      )}
      <FieldError>{errorMessage}</FieldError>
    </AriaTextField>
  );
};

const PreferredContactRadio = ({ value }) => {
  return (
    <Radio
      className="text-sm flex items-center gap-1 capitalize cursor-pointer focus-visible:ring-2 ring-[#ff007a]
        before:content-[''] before:block before:w-4 before:h-4 before:box-border before:border 
      before:border-gray-400 before:rounded-full before:transition-all selected:before:border-4 selected:before:border-[#4a2cdb]"
      value={value}
    >
      {value}
    </Radio>
  );
};
