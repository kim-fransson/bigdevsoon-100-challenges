"use client";

import { useState } from "react";
import {
  Button,
  Dialog,
  Input,
  Modal,
  ModalOverlay,
  Switch,
  TextField,
} from "react-aria-components";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddCardIcon from "@mui/icons-material/AddCard";
import { tv } from "tailwind-variants";
import { anton, fredoka } from "@/app/fonts";

import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import WorkIcon from "@mui/icons-material/Work";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

export const CardWallet = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main
      className={`flex min-h-dvh items-center justify-center bg-purple-50 ${fredoka.className}`}
    >
      <Welcome onAdd={() => setIsOpen(true)} />
      <AddCardFormModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </main>
  );
};

const container = tv({
  base: [
    "sm:min-h-0 min-h-dvh sm:max-w-sm sm:rounded-2xl sm:shadow-xl w-full overflow-hidden",
  ],
});

const input = tv({
  base: [
    "border-2 border-gray-300 outline-none w-full rounded-lg px-3 py-2 font-medium transition-all selection:bg-purple-200",
  ],
  variants: {
    isFocused: {
      true: ["border-purple-800"],
    },
  },
});

const toggle = tv({
  base: [
    "w-12 h-7 bg-gray-300 rounded-full transition-all duration-200 flex items-center",
    "before:contents-[''] before:block before:mx-1 before:size-5  before:bg-white before:rounded-full",
    "before:transition-all before:duration-200",
  ],
  variants: {
    isSelected: {
      true: ["before:translate-x-full bg-purple-800"],
    },
    isFocusVisible: {
      true: ["outline-2 outline outline-purple-800 outline-offset-2"],
    },
  },
});

const button = tv({
  base: ["outline-none transition-all flex items-center justify-center"],
  variants: {
    isPressed: {
      true: ["scale-95"],
    },
    isFocusVisible: {
      true: ["outline-2 outline-offset-2 outline-purple-800"],
    },
    variant: {
      primary: [
        "rounded-md p-3 font-semibold bg-purple-700 text-white hover:bg-white hover:ring-2 hover:ring-purple-800 hover:text-purple-800",
      ],
      ghost: ["rounded-full hover:bg-gray-200 p-1 text-gray-800"],
      add: ["bg-purple-400 text-gray-50 p-1 rounded-full hover:bg-purple-500"],
    },
  },
});

const Welcome = ({ onAdd }) => {
  return (
    <div className={container({ class: "bg-white flex flex-col pb-8" })}>
      <Cards onAdd={onAdd} />
      <Transactions />
    </div>
  );
};

const cards = [
  {
    bank: "BANKY",
    balance: "$ 8,335",
    number: "9287",
    expires: "09/26",
  },
  {
    bank: "MONIES",
    balance: "$ 3,655",
    number: "1558",
    expires: "01/27",
  },
  {
    bank: "BANKY",
    balance: "$ 3,137",
    number: "6655",
    expires: "12/27",
  },
  {
    bank: "LOANY",
    balance: "$ 2,423",
    number: "7493",
    expires: "04/26",
  },
];

const Cards = ({ onAdd }) => {
  return (
    <div className="bg-gray-950 rounded-b-3xl text-white px-4 py-8 relative">
      <div className="grid gap-4 z-20 relative">
        <h2 className="text-gray-200 text-sm">Welcome</h2>
        <h3 className="text-gray-100 text-3xl font-semibold">My Cards</h3>
        <div className="flex -mr-4 py-4 overflow-x-auto gap-6 snap-x *:snap-center outline-none focus-visible:outline-purple-800 focus-visible:outline-offset-2">
          {cards.map((card) => (
            <Card key={card.number} card={card} />
          ))}
        </div>
      </div>
      <div
        className="size-32 absolute z-10 left-1/2 -translate-x-1/2 bottom-0 translate-y-1/4 
      rounded-[2rem] bg-gray-950 rotate-45"
      >
        <Button
          onPress={onAdd}
          className={(states) =>
            button({
              ...states,
              variant: "add",
              class: "rotate-[135deg] absolute bottom-3 right-3",
            })
          }
        >
          <AddCardIcon />
        </Button>
      </div>
    </div>
  );
};

const creditCard = tv({
  base: ["rounded-2xl grid gap-2 p-4 min-w-72"],
  variants: {
    banks: {
      BANKY: ["bg-gradient-to-br from-cyan-300 via-purple-600 to-purple-300 "],
      MONIES: ["bg-gradient-to-br from-pink-600 via-lime-600 to-red-300 "],
      LOANY: ["bg-gradient-to-br from-amber-600 via-blue-600 to-yellow-300 "],
    },
  },
});

const Card = ({ card }) => {
  return (
    <div className={creditCard({ banks: card.bank })}>
      <span className="text-sm text-gray-200">Balance</span>
      <span className="text-3xl font-semibold">{card.balance}</span>
      <span className="text-gray-200 text-lg font-semibold tracking-widest">
        {`•••• •••• •••• ${card.number}`}
      </span>
      <div className="flex justify-between items-center">
        <div className="grid text-xs text-gray-200">
          <span>Expires</span>
          <span>{card.expires}</span>
        </div>
        <span className={`${anton.className} text-3xl tracking-widest`}>
          {card.bank}
        </span>
      </div>
    </div>
  );
};

const transactions = [
  {
    category: "Travel",
    icon: FlightTakeoffIcon,
    daysAgo: 3,
    amount: "200,00",
    isNegative: true,
  },
  {
    category: "Food",
    icon: FastfoodIcon,
    daysAgo: 5,
    amount: "16,00",
  },
  {
    category: "Work",
    icon: WorkIcon,
    daysAgo: 6,
    amount: "2400,00",
    isNegative: true,
  },
  {
    category: "Shopping",
    icon: LocalOfferIcon,
    daysAgo: 6,
    amount: "140,00",
    isNegative: true,
  },
];

const Transactions = () => {
  return (
    <div className="grid gap-4 mt-16 px-4">
      <h2 className="text-lg font-semibold">Transactions</h2>
      <div className="grid gap-4">
        {transactions.map((transaction) => (
          <Transaction key={transaction.category} transaction={transaction} />
        ))}
      </div>
    </div>
  );
};

const transactionIcon = tv({
  base: ["size-12 p-2 rounded-lg"],
  variants: {
    category: {
      Travel: ["bg-sky-200 text-sky-700"],
      Food: ["bg-green-200 text-green-700"],
      Work: ["bg-red-200 text-red-700"],
      Shopping: ["bg-lime-200 text-lime-700"],
    },
  },
});

const transactionBadge = tv({
  base: ["p-1 rounded-lg font-semibold text-sm"],
  variants: {
    isNegative: {
      true: ["bg-red-200 text-red-700"],
      false: ["bg-green-200 text-green-700"],
    },
  },
});

const Transaction = ({ transaction }) => {
  return (
    <div className="flex items-center gap-4">
      <transaction.icon
        className={transactionIcon({ category: transaction.category })}
      />
      <div className="inline-grid">
        <span className="font-semibold">{transaction.category}</span>
        <span className="text-gray-600">{`${transaction.daysAgo} days ago`}</span>
      </div>
      <div
        className={transactionBadge({
          class: "ml-auto",
          isNegative: transaction.isNegative,
        })}
      >{`${transaction.isNegative ? "-" : "+"}$ ${transaction.amount}`}</div>
    </div>
  );
};

const AddCardForm = ({ onAdd, onBack }) => {
  return (
    <div
      className={container({
        class: "flex flex-col gap-12 bg-white py-8 px-5",
      })}
    >
      <Button
        onPress={onBack}
        className={(states) =>
          button({ ...states, variant: "ghost", class: "mr-auto -mb-10 -ml-1" })
        }
      >
        <ArrowBackIcon />
      </Button>
      <h2 className="text-3xl font-semibold">Add a Card</h2>
      <form className="grid grid-cols-2 gap-5 h-full">
        <TextField className={"col-span-full"}>
          <Input placeholder="Name on card" className={input} />
        </TextField>
        <TextField className={"col-span-full"}>
          <Input placeholder="Card number" className={input} />
        </TextField>
        <TextField className={"col-span-1"}>
          <Input placeholder="Expiry date" className={input} />
        </TextField>
        <TextField className={"col-span-1"}>
          <Input placeholder="Security code" className={input} />
        </TextField>

        <Switch
          className={
            "flex items-center gap-4 col-span-full cursor-pointer mt-4"
          }
        >
          {({ isSelected, isFocusVisible }) => (
            <>
              <div className={toggle({ isSelected, isFocusVisible })} />
              <span className="text-sm font-medium">SET AS DEFAULT CARD</span>
            </>
          )}
        </Switch>
      </form>
      <Button
        onPress={onAdd}
        className={(states) =>
          button({ ...states, variant: "primary", class: "mt-auto" })
        }
      >
        Add a new Card
      </Button>
    </div>
  );
};

const AddCardFormModal = ({ isOpen, setIsOpen }) => {
  return (
    <ModalOverlay
      isDismissable
      isOpen={isOpen}
      onOpenChange={setIsOpen}
      className={({ isEntering, isExiting }) => `
      fixed inset-0 z-50 overflow-y-auto flex min-h-dvh items-center justify-center backdrop-blur
      ${isEntering ? "animate-fade animate-duration-300 animate-normal" : ""}
      ${isExiting ? "animate-fade animate-duration-200 animate-reverse" : ""}
    `}
    >
      <Modal
        className={({ isEntering, isExiting }) => `
              ${isEntering ? "animate-fade animate-duration-300 animate-normal" : ""}
              ${isExiting ? "animate-fade animate-duration-200 animate-reverse" : ""}
            `}
      >
        <Dialog aria-label="add card form" className="outline-none">
          {({ close }) => <AddCardForm onAdd={close} onBack={close} />}
        </Dialog>
      </Modal>
    </ModalOverlay>
  );
};
