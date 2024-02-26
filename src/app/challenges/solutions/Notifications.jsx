"use client";

import { Button } from "react-aria-components";
import { tv } from "tailwind-variants";
import MarkUnreadChatAltIcon from "@mui/icons-material/MarkUnreadChatAlt";
import ChatIcon from "@mui/icons-material/Chat";
import Groups2Icon from "@mui/icons-material/Groups2";
import PersonIcon from "@mui/icons-material/Person";
import LinkIcon from "@mui/icons-material/Link";
import DownloadIcon from "@mui/icons-material/Download";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { fredoka } from "@/app/fonts";

const focusVisible = tv({
  base: "outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400 selection:bg-yellow-200",
});

const file = tv({
  slots: {
    base: [
      "rounded-md p-2 items-center border border-gray-300 bg-gray-100 grid grid-cols-[max-content_1fr_max-content] text-gray-500 text-xs gap-3",
    ],
    title: ["font-semibold text-indigo-800 text-base leading-tight"],
    thumbnail: ["rounded-md size-14 object-contain self-start"],
  },
});
const { base: fileBase, title: fileTitle, thumbnail } = file();

const card = tv({
  slots: {
    base: ["rounded-md shadow-xl p-4 bg-white relative"],
    title: ["font-semibold text-xl"],
  },
});
const { base: cardBase, title } = card();

const notification = tv({
  slots: {
    base: ["grid grid-cols-[max-content_1fr] gap-4 p-3"],
    highlight: ["font-semibold"],
    time: ["text-sm text-gray-400"],
    avatar: ["rounded-full size-12 relative object-contain bg-gray-700"],
  },
});
const { base: notificationBase, highlight, time, avatar } = notification();

const badge = tv({
  base: ["rounded-full p-1 flex justify-center items-center bg-white"],
  variants: {
    variant: {
      inactive: ["text-gray-300 shadow-lg"],
      active: ["text-indigo-400 shadow-lg"],
      group: ["text-gray-50 bg-sky-400"],
      mention: ["text-gray-50 bg-amber-500"],
      request: ["text-gray-50 bg-blue-600"],
      upload: ["text-gray-50 bg-green-600"],
    },
    size: {
      medium: ["p-2"],
      small: ["p-1"],
    },
  },
});

const button = tv({
  extend: focusVisible,
  base: ["pressed:scale-90 transition-all flex items-center justify-center"],
  variants: {
    variant: {
      primary: [
        "bg-indigo-800 font-medium rounded-md text-gray-50 hover:ring-2 hover:ring-indigo-800 hover:bg-white hover:text-indigo-800",
      ],
      secondary: [
        "bg-gray-300 font-medium rounded-md text-gray-900 hover:bg-gray-400",
      ],
      icon: [
        "rounded-full text-gray-900 size-8 hover:bg-indigo-600 hover:text-gray-50",
      ],
      subtile: ["text-gray-500 hover:text-indigo-800"],
    },
    size: {
      small: ["px-2 py-1 text-sm"],
      large: ["px-4 py-3 "],
    },
  },
});

export const Notifications = () => {
  return (
    <main
      className={`min-h-dvh flex justify-center items-center bg-indigo-100 p-4 ${fredoka.className}`}
    >
      <div className="grid md:grid-cols-2 md:gap-12 gap-8 max-w-6xl">
        <NoNotificationsCard />
        <NotificationsCard />
      </div>
    </main>
  );
};

export const NoNotificationsCard = () => {
  return (
    <div className={twMerge(cardBase(), "self-start")}>
      <div
        className={twMerge(
          badge({ variant: "inactive" }),
          "absolute right-0 -top-3 -translate-y-full lg:block hidden",
        )}
      >
        <ChatIcon />
      </div>
      <div className="flex items-center justify-between">
        <h2 className={title()}>Notifications</h2>
        <Button className={button({ variant: "subtile" })}>Mark as read</Button>
      </div>
      <p className="my-8 text-sm text-gray-400 text-center">
        You don&apos;t have any notifications yet
      </p>
    </div>
  );
};

export const NotificationsCard = () => {
  return (
    <div className={cardBase()}>
      <div
        className={twMerge(
          badge({ variant: "active" }),
          "absolute right-0 -top-3 -translate-y-full lg:block hidden",
        )}
      >
        <MarkUnreadChatAltIcon />
      </div>
      <div className="flex items-center justify-between">
        <h2 className={title()}>Notifications</h2>
        <Button className={button({ variant: "subtile" })}>Mark as read</Button>
      </div>
      <div className="mt-4 divide-y -mx-4">
        <div className={notificationBase()}>
          <AvatarWithBadge
            icon={Groups2Icon}
            imageSrc="/challenges/15/boromir.png"
            variant="group"
          />
          <div className="grid">
            <p>
              <span className={highlight()}>Boromir</span> joined{" "}
              <span className={highlight()}>Council of Elrond</span> Group
            </p>
            <span className={time()}>2 min ago</span>
          </div>
        </div>

        <div className={notificationBase()}>
          <div className="relative">
            <AvatarWithBadge
              icon={ChatIcon}
              imageSrc="/challenges/15/gandalf.png"
              variant="mention"
            />
          </div>
          <div className="grid">
            <p>
              <span className={highlight()}>Gandalf</span> mentioned you in a{" "}
              <span className={highlight()}>comment</span>.
            </p>
            <span className={time()}>2 hours ago</span>
          </div>
        </div>

        <div className={notificationBase()}>
          <AvatarWithBadge
            icon={PersonIcon}
            imageSrc="/challenges/15/gollum.png"
            variant="request"
          />
          <div className="grid">
            <p>
              <span className={highlight()}>Gollum</span> sent you a{" "}
              <span className={highlight()}>friend request</span>.
            </p>
            <span className={time()}>1 day ago</span>
            <div className="flex gap-2 mt-2">
              <Button className={button({ variant: "primary", size: "small" })}>
                Accept
              </Button>
              <Button
                className={button({ variant: "secondary", size: "small" })}
              >
                Delete
              </Button>
            </div>
          </div>
        </div>

        <div className={notificationBase()}>
          <AvatarWithBadge
            icon={LinkIcon}
            imageSrc="/challenges/15/elrond.png"
            variant="upload"
          />
          <div className="grid">
            <p>
              <span className={highlight()}>Elrond</span> uploaded 2 attachment
              to <span className={highlight()}>&quot;Plan&quot;</span> Channel
            </p>
            <span className={time()}>2 days ago</span>

            <div className="flex flex-col gap-2 mt-3">
              <div className={fileBase()}>
                <Image
                  width={200}
                  height={200}
                  alt=""
                  src="/challenges/15/gossip.png"
                  className={thumbnail()}
                />
                <div className="grid gap-1">
                  <span>MiddleEarthGossip.com</span>
                  <h2 className={fileTitle()}>Orc Gossip: Mordor Exposed!</h2>
                  <p>
                    Uncover the untold stories of Sauron&apos;s forces as we
                    reveal the hidden rivalries and surprising hobbies of
                    Mordor&apos;s Orcs. From fashion feuds to culinary
                    experiments, get an exclusive look at the lighter side of
                    life in the Dark Lord&apos;s army.
                  </p>
                </div>
              </div>

              <div className={fileBase()}>
                <Image
                  width={200}
                  height={200}
                  alt=""
                  src="/challenges/15/doom.png"
                  className={thumbnail()}
                />
                <div className="grid gap-1">
                  <h2 className={fileTitle()}>
                    How to get the ring to Mount Doom
                  </h2>
                  <span>ZIP &#183; 1.4GB</span>
                </div>
                <Button className={button({ variant: "icon" })}>
                  <DownloadIcon />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Button
        className={twMerge(
          button({ variant: "primary", size: "large" }),
          "w-full mt-4",
        )}
      >
        See all notifications
      </Button>
    </div>
  );
};

const AvatarWithBadge = ({ icon: Icon, imageSrc, variant }) => {
  return (
    <div className="relative">
      <Image
        width={200}
        height={200}
        alt=""
        src={imageSrc}
        className={avatar()}
      />
      <div className={twMerge(badge({ variant }), "absolute -right-1 -top-0")}>
        <Icon fontSize="" />
      </div>
    </div>
  );
};
