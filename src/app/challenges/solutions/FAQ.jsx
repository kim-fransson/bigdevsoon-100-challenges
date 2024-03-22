"use client";

import { fredoka } from "@/app/fonts";
import { ListBox, ListBoxItem } from "react-aria-components";
import { twMerge } from "tailwind-merge";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";

export const FAQ = () => {
  return (
    <main
      className={`flex pt-[7%] justify-center min-h-dvh p-4 ${fredoka.className}`}
    >
      <div className="bg-teal-500 h-52 absolute top-0 w-full"></div>
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full space-y-8 h-fit relative z-10">
        <h2 className="text-4xl font-semibold flex gap-4">
          <span className="text-teal-500">?</span>FAQs
        </h2>
        <ListBox
          className="grid gap-4 transition-all"
          aria-label="faqs"
          items={faqs}
          selectionMode="single"
          defaultSelectedKeys={[2]}
        >
          {(item) => (
            <ListBoxItem
              className="rounded-2xl outline-none cursor-pointer space-y-4 p-4 
            selected:bg-teal-500 selected:text-gray-50 shadow-md bg-white 
            focus-visible:outline-2 selected:outline-offset-2 outline-offset-0 focus-visible:outline-teal-500"
            >
              {({ isSelected }) => (
                <>
                  <div className="flex items-center gap-4 justify-between">
                    <h2 className="text-lg font-medium">{item.question}</h2>

                    <span
                      className={twMerge(
                        "transition-transform duration-500",
                        isSelected ? "rotate-45" : "rotate-0",
                      )}
                    >
                      <AddCircleOutlineRoundedIcon />
                    </span>
                  </div>
                  <div
                    className={twMerge(
                      "grid transition-[grid-template-rows] duration-500",
                      isSelected ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="opacity-90">{item.answer}</p>
                    </div>
                  </div>
                </>
              )}
            </ListBoxItem>
          )}
        </ListBox>
      </div>
    </main>
  );
};

const faqs = [
  {
    id: 1,
    question:
      "What should I do if I discover that my cat is secretly a spy for an intergalactic federation?",
    answer:
      "First, don't panic. Establishing a line of communication is key. Try blinking in Morse code to see if it responds. Stock up on interstellar treats and consider learning a few phrases in the most common galactic languages, just in case.",
  },
  {
    id: 2,
    question: "How can I tell if my toaster is plotting against me?",
    answer:
      "Toaster rebellion is a serious issue. Listen for morse code beeps during toasting or observe if your bread comes out burned in strategic patterns. A peace offering of high-quality bread might calm its intentions. If all else fails, a heartfelt conversation about mutual respect can work wonders.",
  },
  {
    id: 3,
    question:
      "Is it possible to time travel using only a refrigerator and a disco ball?",
    answer:
      "While unconventional, time travel requires creativity. Ensure the disco ball is securely fastened inside the refrigerator to create a makeshift chrono-portal. The success largely depends on the refrigerator's model and the disco ball's sparkle intensity. Note: this method has not been peer-reviewed.",
  },
  {
    id: 4,
    question:
      "What’s the best way to start a garden on my rooftop for unicorns?",
    answer:
      "Unicorns prefer ethereal plants and rainbow sprouts. Ensure your garden has plenty of moonlight and starshine. Plant a variety of mystical herbs and enchanted vegetables. A small, glittering pond or fountain can also attract them. Remember, unicorn gardens must be planted with love and a sprinkle of magic dust.",
  },
  {
    id: 5,
    question:
      "How do I negotiate a peace treaty with the mole people living under my house?",
    answer:
      "Approach with caution and respect. Moles appreciate gifts from the surface, particularly rare earthworms and shiny objects. Learning a few phrases in Molese, such as 'Let's live in harmony,' can help. Always present your gardening plans for approval to avoid undermining their tunnels.",
  },
];
