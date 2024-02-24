"use client";

import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";
import { tv } from "tailwind-variants";
import { Button } from "react-aria-components";
import { fredoka } from "@/app/fonts";

const badge = tv({
  base: [
    "inline-block text-gray-50 text-xs font-medium uppercase p-1 rounded-lg shadow-md",
    "justify-self-start",
  ],
  variants: {
    priority: {
      LOW: "bg-[#49b53c]",
      MEDIUM: "bg-[#27b5f5]",
      HIGH: "bg-[#e80581]",
    },
  },
});

const button = tv({
  base: [
    "outline-none focus-visible:outline-2 focus-visible:outline-yellow-400 outline-offset-2",
    "rounded-full inline-flex items-center justify-center aspect-square justify-self-start",
    "transition-all pressed:scale-90 p-1",
  ],
  variants: {
    variant: {
      ghost: "hover:bg-gray-300",
      avatar: [
        "border-dashed border-gray-400 border hover:bg-green-300 hover:border-transparent",
        "w-8 aspect-square",
      ],
    },
  },
});

const card = tv({
  base: "p-4 rounded-lg shadow-2xl flex flex-col gap-3 bg-gray-50",
});

const date = tv({
  base: "text-xs font-medium text-gray-400",
});

const avatar = tv({
  base: "w-8 h-8 rounded-full overflow-clip shadow-md object-cover inline-block",
});

const title = tv({
  base: "font-medium",
  variants: {
    size: {
      xl: "text-xl",
      base: "text-base",
    },
  },
});

const description = tv({
  base: "font-medium text-gray-500 text-sm",
});

const thumbnail = tv({
  base: "rounded-2xl aspect-[4/2]",
  variants: {
    variant: {
      1: "bg-gradient-to-r from-[#a1a0cb] to-[#6699b1]",
      2: "bg-gradient-to-r from-[#b8b4dc] to-[#dfbbd5]",
      3: "bg-gradient-to-r from-[#a1d1df] to-[#f6d6d1]",
    },
  },
});

export const TaskBoard = () => {
  return (
    <main className={`min-h-dvh px-8 py-4 flex justify-center items-center bg-[#e3e8ee] ${fredoka.className}`}>
      <div className="flex flex-col gap-8">
        <h2 className="font-semibold text-3xl">Boards</h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <h3 className={title({ size: "xl" })}>To do</h3>
              <Button className={button({ variant: "ghost" })}>
                <AddIcon fontSize="small" />
              </Button>
            </div>
            {tasks.todos.map((task) => (
              <Card key={task.title} task={task} />
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <h3 className={title({ size: "xl" })}>In progress</h3>
              <Button className={button({ variant: "ghost" })}>
                <AddIcon fontSize="small" />
              </Button>
            </div>
            {tasks.inProgress.map((task) => (
              <Card key={task.title} task={task} />
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <h3 className={title({ size: "xl" })}>Under Review</h3>
              <Button className={button({ variant: "ghost" })}>
                <AddIcon fontSize="small" />
              </Button>
            </div>
            {tasks.underReview.map((task) => (
              <Card key={task.title} task={task} />
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <h3 className={title({ size: "xl" })}>Done</h3>
              <Button className={button({ variant: "ghost" })}>
                <AddIcon fontSize="small" />
              </Button>
            </div>
            {tasks.done.map((task) => (
              <Card key={task.title} task={task} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

const Card = ({ task }) => {
  return (
    <div className={card()}>
      <div className="flex justify-between items-center">
        <PriorityBadge priority={task.priority} />
        <span className={date()}>{task.date}</span>
      </div>
      {task?.thumbnail && (
        <div className={thumbnail({ variant: task.thumbnail })} />
      )}
      <h2 className={title({ size: "base" })}>{task.title}</h2>
      <p className={description()}>{task.description}</p>
      <div className="flex items-center">
        {task.assignedTo.map((assignee, index) => (
          <Image
            key={assignee}
            width={200}
            height={200}
            alt=""
            src={`/challenges/13/${assignee}.png`}
            className={avatar()}
            style={{ marginRight: `-1rem` }}
          />
        ))}
        <Button className={button({ variant: "avatar" })}>
          <AddIcon fontSize="small" />
        </Button>
      </div>
    </div>
  );
};

const PriorityBadge = ({ priority }) => {
  return <span className={badge({ priority })}>{priority}</span>;
};

const tasks = {
  todos: [
    {
      priority: "HIGH",
      date: "2/15/24",
      title: "Update Website Homepage",
      description:
        "Revise the content and layout of the homepage to highlight new features and improve user engagement.",
      assignedTo: ["person1", "person2"],
      thumbnail: 1,
    },
  ],
  inProgress: [
    {
      priority: "LOW",
      date: "2/13/24",
      title: "Bug Fix - User Registration",
      description:
        "Investigate and resolve the reported bug in the user registration process where some users are unable to sign up.",
      assignedTo: ["person4"],
    },
    {
      priority: "MEDIUM",
      date: "2/08/24",
      title: "Social Media Campaign",
      description:
        "Plan and execute a social media campaign for the upcoming product launch in February, including creating posts and scheduling updates.",
      assignedTo: ["person4", "person5"],
      thumbnail: 2,
    },
  ],
  underReview: [
    {
      priority: "HIGH",
      date: "2/11/24",
      title: "Mobile App Feature - Push Notifications",
      description:
        "Implement push notification feature for the mobile app to enhance user engagement. Ensure compatibility with both iOS and Android platforms.",
      assignedTo: ["person3"],
    },
  ],
  done: [
    {
      priority: "LOW",
      date: "2/09/24",
      title: "Content Creation - Blog Post",
      description:
        "Write and publish a blog post about industry trends and their impact on our products/services. Include relevant visuals and SEO optimization.",
      assignedTo: ["person4"],
    },
    {
      priority: "MEDIUM",
      date: "2/07/24",
      title: "IT Security Audit",
      description:
        "Write and publish a blog post about industry trends and their impact on our products/services. Include relevant visuals and SEO optimization.",
      assignedTo: ["person2"],
      thumbnail: 3,
    },
  ],
};
