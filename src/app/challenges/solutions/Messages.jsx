"use client";

import { tv } from "tailwind-variants";
import NotificationsIcon from "@mui/icons-material/NotificationsNone";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Button,
  Input,
  ListBox,
  ListBoxItem,
  TextField,
} from "react-aria-components";
import AddIcon from "@mui/icons-material/Add";
import Image from "next/image";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { fredoka } from "@/app/fonts";

const page = tv({
  base: [
    "min-h-dvh text-gray-900 w-full lg:max-w-md md:min-h-0 lg:h-[700px] bg-white md:rounded-2xl p-6",
  ],
});

const avatar = tv({
  base: [
    "rounded-full border-2 border-gray-300 bg-white size-14 object-contain overflow-clip",
  ],
});

const button = tv({
  base: [
    "outline-none pressed:scale-95 transition-all inlien-flex justify-center items-center",
  ],
  variants: {
    variant: {
      ghost: ["hover:bg-gray-200 text-gray-800 p-1"],
      primary: [
        "hover:size-16 size-12 bg-green-600 opacity-70 hover:opacity-100 text-gray-50",
      ],
    },
    isRounded: {
      true: ["rounded-full"],
    },
    isFocusVisible: {
      true: ["outline-2 outline-offset-1 outline-green-700"],
    },
  },
});

const messageCard = tv({
  base: ["rounded-md px-2 py-3 bg-gray-200 max-w-56"],
  variants: {
    isMe: {
      true: ["bg-green-700 text-gray-50 justify-self-end"],
    },
  },
});

export const Messages = () => {
  const [activeUser, setActiveUser] = useState();
  return (
    <main
      className={`flex min-h-dvh bg-green-100 lg:items-center lg:justify-center ${fredoka.className}`}
    >
      <div
        className={page({ class: "relative p-0 overflow-clip md:shadow-2xl" })}
      >
        <Home setActiveUser={setActiveUser} activeUser={activeUser} />
        <div
          className={twMerge(
            "transition-all absolute inset-0 duration-300",
            activeUser ? "translate-x-0" : "translate-x-full",
          )}
        >
          <Conversation user={activeUser} onBack={() => setActiveUser(null)} />
        </div>
      </div>
    </main>
  );
};

const Home = ({ setActiveUser, activeUser }) => {
  return (
    <div
      className={page({
        class: "grid gap-3 relative",
      })}
    >
      <div className="flex items-center">
        <h2 className="text-2xl font-semibold">Messages</h2>
        <div className="space-x-1 ml-auto">
          <Button
            className={(states) =>
              button({ ...states, variant: "ghost", isRounded: true })
            }
          >
            <NotificationsIcon />
          </Button>
          <Button
            className={(states) =>
              button({ ...states, variant: "ghost", isRounded: true })
            }
          >
            <MoreVertIcon />
          </Button>
        </div>
      </div>
      <div className="flex pb-4 items-center gap-8 overflow-x-auto overflow-y-clip outline-none focus-visible:ring-2 focus-visible:ring-green-700">
        {onlineUsers.map((user) => (
          <User key={user.name} user={user} />
        ))}
      </div>

      <ListBox
        aria-label="latest messages"
        selectedKeys={[activeUser?.name || ""]}
        onSelectionChange={(v) => {
          setActiveUser(
            conversations.find((conv) => conv.name === Array.from(v)[0]),
          );
        }}
        selectionMode="single"
        className="overflow-y-auto divide-y-2 outline-none focus-visible:ring-2 focus-visible:ring-green-700"
      >
        {conversations.map((user) => (
          <ListBoxItem
            key={user.name}
            id={user.name}
            className={
              "focus-visible:bg-green-100 hover:bg-green-100 outline-none cursor-pointer"
            }
          >
            <LatestMessage user={user} />
          </ListBoxItem>
        ))}
      </ListBox>

      <Button
        className={(states) =>
          button({
            ...states,
            variant: "primary",
            isRounded: true,
            class: "absolute bottom-4 right-4",
          })
        }
      >
        <AddIcon fontSize="large" />
      </Button>
    </div>
  );
};

const Conversation = ({ user, onBack }) => {
  return (
    <div className={page({ class: "relative grid gap-4" })}>
      <Button
        onPress={onBack}
        className={(states) =>
          button({
            ...states,
            variant: "ghost",
            isRounded: true,
            class: "absolute top-4 left-4",
          })
        }
      >
        <ArrowBackIcon />
      </Button>
      <div className="grid gap-1 justify-items-center">
        <div className="relative">
          <div className={avatar({ isOnline: user?.isOnline })}>
            <Image
              width={56}
              height={56}
              alt=""
              src={`https://robohash.org/${user?.name}`}
            />
          </div>
          {user?.isOnline && (
            <div className="absolute bottom-0.5 right-0.5 block size-3 rounded-full ring-2 ring-white bg-green-400" />
          )}
        </div>
        <span className="font-semibold text-2xl">{user?.name}</span>
      </div>
      <hr className="-mx-6 border-gray-400" />

      <div className="grid gap-4 overflow-y-auto">
        {user?.conversation.map((message) => (
          <Message user={user} key={message} message={message} />
        ))}
      </div>

      <TextField>
        <Input
          placeholder="Message"
          className="w-full outline-none focus:border-green-700 border-2 border-gray-300
          px-3 py-2 rounded-full transition-all"
        />
      </TextField>
    </div>
  );
};

const Message = ({ message, user }) => {
  return (
    <div className={"grid gap-2"}>
      <span className={"justify-self-center opacity-70 text-sm"}>
        {message.timestamp}
      </span>
      <div
        className={twMerge(
          "flex items-center gap-1",
          message?.sender === "me" && "justify-self-end",
        )}
      >
        {message?.sender !== "me" && (
          <div className="relative scale-75">
            <div className={avatar({ isOnline: user?.isOnline })}>
              <Image
                width={56}
                height={56}
                alt=""
                src={`https://robohash.org/${user?.name}`}
              />
            </div>
            {user?.isOnline && (
              <div className="absolute bottom-0.5 right-0.5 block size-3 rounded-full ring-2 ring-white bg-green-400" />
            )}
          </div>
        )}
        <div className={messageCard({ isMe: message.sender === "me" })}>
          {message.message}
        </div>
      </div>
    </div>
  );
};

const User = ({ user }) => {
  return (
    <div className="grid gap-1 justify-items-center">
      <div className="relative">
        <div className={avatar({ isOnline: user.isOnline })}>
          <Image
            width={56}
            height={56}
            alt=""
            src={`https://robohash.org/${user.name}`}
          />
        </div>
        {user.isOnline && (
          <div className="absolute bottom-0.5 right-0.5 block size-3 rounded-full ring-2 ring-white bg-green-400" />
        )}
      </div>

      <p className="truncate text-sm font-medium">{user.name}</p>
    </div>
  );
};

const LatestMessage = ({ user }) => {
  return (
    <div className="grid grid-cols-[auto_auto_1fr] gap-4 items-center py-2">
      <div className="relative">
        <div className={avatar({ isOnline: user.isOnline })}>
          <Image
            width={56}
            height={56}
            alt=""
            src={`https://robohash.org/${user.name}`}
          />
        </div>
        {user.isOnline && (
          <div className="absolute bottom-0.5 right-0.5 block size-3 rounded-full ring-2 ring-white bg-green-400" />
        )}
      </div>
      <div className="grid gap-1">
        <span className="font-semibold">{user.name}</span>
        <span className="text-xs truncate opacity-70">
          {user.latestMessage}
        </span>
      </div>
      <span className="self-start mt-1 opacity-70 text-xs whitespace-nowrap">
        {user.time}
      </span>
    </div>
  );
};

const onlineUsers = [
  { name: "XJ-27", isOnline: true },
  { name: "Model 5R", isOnline: true },
  { name: "Unit 3V", isOnline: true },
  { name: "Cyber 9T", isOnline: true },
  { name: "AI Gen Zeta", isOnline: true },
  { name: "Droid 77X", isOnline: true },
  { name: "Bot V5", isOnline: true },
  { name: "Synth 4D", isOnline: true },
  { name: "Echo Sigma", isOnline: true },
  { name: "Nova IX", isOnline: true },
];

const conversations = [
  {
    name: "XJ-27",
    isOnline: true,
    latestMessage: "System diagnostics complete.",
    conversation: [
      {
        timestamp: "12:29",
        message: "Commencing system diagnostics.",
        sender: "cyborg",
      },
      {
        timestamp: "12:39",
        message: "Acknowledged. Report when complete.",
        sender: "me",
      },
      { timestamp: "12:49", message: "Diagnostics at 50%.", sender: "cyborg" },
      {
        timestamp: "12:59",
        message: "System diagnostics complete.",
        sender: "cyborg",
      },
    ],
  },
  {
    name: "Model 5R",
    isOnline: true,
    latestMessage: "Update installation successful.",
    conversation: [
      {
        timestamp: "12:29",
        message: "Initiating update sequence.",
        sender: "cyborg",
      },
      {
        timestamp: "12:39",
        message: "Ensure data backup before proceeding.",
        sender: "me",
      },
      {
        timestamp: "12:49",
        message: "Update sequence at 75%.",
        sender: "cyborg",
      },
      {
        timestamp: "12:59",
        message: "Update installation successful.",
        sender: "cyborg",
      },
    ],
  },
  {
    name: "Unit 3V",
    isOnline: true,
    latestMessage: "Energy optimization is now at peak efficiency.",
    conversation: [
      {
        message: "Energy levels suboptimal. Adjusting parameters.",
        timestamp: "11.39",
        sender: "cyborg",
      },
      {
        message: "What is the status on the energy optimization?",
        timestamp: "11.49",
        sender: "me",
      },
      {
        message: "Optimization at 90%. Almost at peak efficiency.",
        timestamp: "11.59",
        sender: "cyborg",
      },
      {
        message: "Energy optimization is now at peak efficiency.",
        timestamp: "12:09",
        sender: "cyborg",
      },
    ],
  },
  {
    name: "Cyber 9T",
    isOnline: true,
    latestMessage: "Entertainment module analysis complete.",
    conversation: [
      {
        message: "Beginning analysis of entertainment module.",
        sender: "cyborg",
        timestamp: "12:39",
      },
      {
        timestamp: "12:49",
        message: "Keep me updated on the analysis progress.",
        sender: "me",
      },
      {
        message: "Analysis at 60%. Predictive outcomes look promising.",
        sender: "cyborg",
      },
      {
        timestamp: "12:59",
        message: "Entertainment module analysis complete.",
        sender: "cyborg",
      },
    ],
  },
  {
    name: "AI Gen Zeta",
    isOnline: true,
    latestMessage: "No anomalies detected in today's operations.",
    conversation: [
      {
        message:
          "Daily operations commencing. Anomaly detection systems active.",
        sender: "cyborg",
        timestamp: "12:29",
      },
      {
        timestamp: "12:39",
        message: "Report if any anomalies are detected.",
        sender: "me",
      },
      {
        message:
          "Midday report: All systems operating within normal parameters.",
        sender: "cyborg",
        timestamp: "12:49",
      },
      {
        message: "No anomalies detected in today's operations.",
        sender: "cyborg",
        timestamp: "13.49",
      },
    ],
  },
  {
    name: "Droid 77X",
    isOnline: true,
    latestMessage: "Destination algorithm suggests several optimal locations.",
    conversation: [
      {
        message: "Processing destination algorithms for summer relocation.",
        timestamp: "12:39",
        sender: "cyborg",
      },
      {
        message:
          "Looking for destination suggestions. Preferably with moderate climate.",
        timestamp: "12:49",
        sender: "me",
      },
      {
        message:
          "Algorithm suggests several locations with your specified parameters.",
        timestamp: "12:59",
        sender: "cyborg",
      },
      {
        message: "Destination algorithm suggests several optimal locations.",
        timestamp: "13.39",
        sender: "cyborg",
      },
    ],
  },
  {
    name: "Bot V5",
    isOnline: true,
    latestMessage: "Narrative module upload recommended.",
    conversation: [
      {
        message: "New narrative module acquired. Commencing data input.",
        sender: "cyborg",
        timestamp: "12:19",
      },
      {
        timestamp: "12:29",
        message: "Is the new module worth reading?",
        sender: "me",
      },
      {
        message: "Data input at 75%. Engagement levels are high.",
        sender: "cyborg",
      },
      {
        timestamp: "12:29",
        message: "Narrative module upload recommended.",
        sender: "cyborg",
      },
    ],
  },
  {
    name: "Synth 4D",
    isOnline: true,
    latestMessage:
      "Event synchronization achieved. Awaiting your input for the celebration parameters.",
    conversation: [
      {
        message: "Received positive news. Proposing a celebration.",
        timestamp: "12:39",
        sender: "me",
      },
      {
        message:
          "Celebration parameters are being compiled. Suggest preferred activities.",
        timestamp: "12:49",
        sender: "cyborg",
      },
      {
        message: "Preference for a low-key gathering with close units.",
        timestamp: "12:59",
        sender: "me",
      },
      {
        message:
          "Event synchronization achieved. Awaiting your input for the celebration parameters.",
        timestamp: "13:39",
        sender: "cyborg",
      },
    ],
  },
  {
    name: "Echo Sigma",
    isOnline: true,
    latestMessage:
      "Performance enhancements are notable. Ready for benchmark tests.",
    conversation: [
      {
        message:
          "System upgrade completed. Shall we proceed to performance comparisons?",
        sender: "cyborg",
        timestamp: "12:19",
      },
      {
        timestamp: "12:29",
        message: "Yes, let's compare the before and after.",
        sender: "me",
      },
      {
        message: "Initial tests indicate a 20% increase in efficiency.",
        sender: "cyborg",
        timestamp: "12:39",
      },
      {
        message:
          "Performance enhancements are notable. Ready for benchmark tests.",
        sender: "cyborg",
        timestamp: "12:49",
      },
    ],
  },
  {
    name: "Nova IX",
    isOnline: true,
    latestMessage: "Debugging complete. All systems restored.",
    conversation: [
      {
        message: "Encountered a code anomaly. Beginning debug process.",
        sender: "cyborg",
        timestamp: "12:19",
      },
      {
        timestamp: "12:29",
        message: "Do you require assistance with debugging?",
        sender: "me",
      },
      {
        message:
          "Assistance could expedite the resolution. Uploading debug logs.",
        sender: "cyborg",
        timestamp: "12:49",
      },
      {
        message: "Debugging complete. All systems restored.",
        sender: "cyborg",
        timestamp: "12:59",
      },
    ],
  },
  {
    name: "Zeta Prime",
    isOnline: true,
    latestMessage: "Task execution is imminent. All preparations are complete.",
    conversation: [
      {
        message: "Preparing for task execution. Checking all systems.",
        timestamp: "12:59",
        sender: "cyborg",
      },
      {
        message: "Ensure all parameters are optimized for the task.",
        timestamp: "13:59",
        sender: "me",
      },
      {
        message:
          "Parameter optimization is at 100%. Ready to initiate the task.",
        sender: "cyborg",
        timestamp: "14:59",
      },
      {
        message: "Execute the task as planned and report back the results.",
        sender: "me",
        timestamp: "15:59",
      },
      {
        message: "Task execution is imminent. All preparations are complete.",
        sender: "cyborg",
        timestamp: "15:59",
      },
    ],
  },
];
