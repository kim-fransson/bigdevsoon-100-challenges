import { fredoka } from "@/app/fonts";
import Image from "next/image";

import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

export const Testimonials = () => {
  return (
    <main
      className={`min-h-dvh flex justify-center items-center bg-slate-600 p-4 ${fredoka.className}`}
    >
      <div className="text-center">
        <h2 className="text-4xl text-slate-50 font-semibold">
          Don&apos;t take our word for it.
        </h2>
        <h3 className="text-4xl mb-12 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-lime-300 to-blue-300">
          Trust our customers
        </h3>
        <div className="flex flex-wrap justify-center gap-4 w-full">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-slate-800 text-slate-300 rounded-2xl shadow-2xl p-4 max-w-xs w-full
            flex flex-col gap-4"
            >
              <header className="flex justify-between items-center">
                <span className="text-7xl">
                  <FormatQuoteIcon fontSize="inherit" />
                </span>
                <div className="bg-gradient-to-tr from-lime-300 to-blue-300 rounded-t-lg rounded-br-lg rounded-bl-[100px]">
                  <div className="pt-1 m-1 bg-slate-900 rounded-t-md rounded-br-md rounded-bl-[96px] overflow-clip">
                    <Image
                      width={64}
                      height={64}
                      alt=""
                      src={`https://robohash.org/${testimonial.name}?set=set5`}
                      priority
                    />
                  </div>
                </div>
              </header>
              <p>{testimonial.text}</p>
              <div className="flex flex-col text-sm mt-auto">
                <span className="font-medium">{testimonial.name}</span>
                <p>
                  {testimonial.position}{" "}
                  <span className="text-lime-300">@{testimonial.company}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

const testimonials = [
  {
    name: "Sally Sillycoder",
    company: "Laughing Inc.",
    position: "Chief Chaos Officer",
    text: "BigDevSoon's frontend challenge per day is like getting a daily dose of coding chaos! My brain feels both fried and oddly enlightened at the same time. It's like doing mental gymnastics while juggling flaming swords... but with HTML and CSS instead!",
  },
  {
    name: "Bob Bugfinder",
    company: "Quirky Co.",
    position: "Browser Bug Bounty Hunter",
    text: "I signed up for BigDevSoon's frontend challenge thinking it would be a piece of cake. Little did I know, it's more like a cake made of spaghetti code and sprinkled with browser compatibility bugs! But hey, if you can survive this, you can survive anything the coding world throws at you.",
  },
  {
    name: "Danny Debug",
    company: "Semicolon Chaos",
    position: "Code Coordinator",
    text: "BigDevSoon's frontend challenge per day is like being trapped in a virtual reality maze designed by a mischievous AI. Each day feels like stumbling upon a new easter egg of confusion and triumph. It's like living in a coding sitcom where the punchline is always a semicolon.",
  },
];
