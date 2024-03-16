import Image from "next/image";

import NewsLetterSvg from "../../assets/news-letter.svg";
import { Button, Input, TextField } from "react-aria-components";
import EmailIcon from "@mui/icons-material/Email";
import { fredoka } from "@/app/fonts";

export const NewsLetter = () => {
  return (
    <main
      className={`flex items-center justify-center min-h-dvh p-4 bg-sky-50 ${fredoka.className}`}
    >
      <div className="flex md:p-10 p-4 gap-8 rounded-2xl shadow-2xl bg-sky-600 text-gray-50">
        <Image
          width={256}
          height={256}
          alt=""
          src={NewsLetterSvg}
          className="hidden md:block"
        />
        <div className="grid gap-6 md:p-8 p-4">
          <h2 className="text-xl font-semibold">
            Get the{" "}
            <span className="block text-7xl rotate-2 origin-top-left">
              Scoop!
            </span>
          </h2>
          <p className="text-lg">
            Hop on board our news train and be the first to know the fun stuff!
          </p>
          <TextField className="relative">
            <EmailIcon className="absolute top-1/2 -translate-y-1/2 left-4 text-gray-400" />
            <Input
              className="w-full outline-none px-4 pl-12 py-3 focus:outline-2 focus:outline-yellow-400 focus:outline-offset-2 rounded-lg text-gray-950 font-medium"
              placeholder="Where do we send the good vibes?"
            />
          </TextField>

          <Button
            className="bg-yellow-400 px-4 py-3 rounded-lg text-black text-lg font-semibold
          hover:animate-wiggle hover:animate-infinite hover:animate-duration-[800ms] hover:animate-ease-out
          outline-none focus:outline-2 focus:outline-yellow-400 focus:outline-offset-2"
          >
            Join the Party!
          </Button>
        </div>
      </div>
    </main>
  );
};
