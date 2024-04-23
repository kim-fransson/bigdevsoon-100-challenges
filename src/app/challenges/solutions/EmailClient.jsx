"use client";

import { poppins } from "@/app/fonts";
import {
  AccessTimeOutlined,
  Add,
  DeleteOutline,
  EmailRounded,
  ErrorOutline,
  Search,
  SendOutlined,
  Star,
  StarBorderOutlined,
  StarOutline,
} from "@mui/icons-material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import {
  Button,
  GridList,
  Input,
  ListBox,
  ListBoxItem,
  SearchField,
  GridListItem,
  Checkbox,
} from "react-aria-components";
import { tv } from "tailwind-variants";
import InboxIcon from "@mui/icons-material/Inbox";
import { twMerge } from "tailwind-merge";
import { useFocusRing } from "react-aria";

const focusRing = tv({
  base: "outline outline-violet-500 outline-offset-2 outline-0 focus-visible:outline-2",
});

const buttonStyles = tv({
  extend: focusRing,
  base: ["flex items-center justify-center transition-all pressed:scale-95"],
});

export const EmailClient = () => {
  const { focusProps, isFocused } = useFocusRing();

  return (
    <main
      className={`${poppins.className} min-h-dvh flex items-center justify-center bg-violet-50`}
    >
      <div
        className="lg:min-h-0 min-h-dvh w-full lg:max-w-screen-lg 
      lg:rounded-xl lg:shadow-xl bg-neutral-800 text-neutral-50 pt-4 pl-6 flex flex-col gap-4"
      >
        <header className="flex gap-2 items-center">
          <EmailRounded fontSize="medium" />
          <h2 className="text-2xl font-semibold tracking-wider">Mailbox</h2>
        </header>
        <div className="flex flex-1 gap-6">
          <div className="md:w-1/3 flex flex-col gap-4">
            <Button
              className={buttonStyles({
                class:
                  "px-4 py-3 text-neutral-50 bg-violet-400 hover:bg-violet-500 rounded-lg gap-1",
              })}
            >
              <Add /> <span className="hidden md:block">Compose Mail</span>
            </Button>

            <ListBox
              aria-label="menu items"
              orientation="vertical"
              defaultSelectedKeys={[0]}
              disabledKeys={[1, 2, 3, 4, 5]}
              items={menuItems}
              selectionMode="single"
              className="flex flex-col gap-4 md:items-stretch items-center"
              disallowEmptySelection
            >
              {(item) => (
                <ListBoxItem
                  textValue={item.name}
                  className={twMerge(
                    "selected:bg-neutral-700 disabled:opacity-50 disabled:cursor-not-allowed md:px-4 p-2 md:py-1 flex items-center gap-2 cursor-pointer rounded-lg",
                    "md:justify-start justify-center",
                    focusRing(),
                  )}
                >
                  <span className="text-2xl leading-[0px]">
                    {<item.icon fontSize="inherit" />}
                  </span>
                  <span className="hidden md:block">{item.name}</span>
                  {item.notifications && (
                    <span className="text-xs rounded-full hidden md:grid bg-red-400 text-neutral-50 size-4 place-items-center -ml-1 -mt-1">
                      {item.notifications}
                    </span>
                  )}
                  <span className="ml-auto text-sm hidden md:block">
                    {item.count}
                  </span>
                </ListBoxItem>
              )}
            </ListBox>
          </div>
          <div className="bg-neutral-900 flex-1 p-4 rounded-tl-3xl flex flex-col">
            <h2 className="text-xl font-semibold tracking-wider">Inbox</h2>
            <span className="text-neutral-500 text-sm -mt-0.5 block">
              5 messages
            </span>

            <SearchField
              aria-label="search"
              className={twMerge(
                `bg-neutral-800 mt-4 px-4 py-1.5 rounded-lg placeholder:text-neutral-500 placeholder:font-medium
               text-sm flex items-center gap-2 placeholder:tracking-wider`,
                isFocused &&
                  "ring-violet-500 ring-offset-2 ring-2 ring-offset-neutral-900",
              )}
            >
              <Search className="text-neutral-300" fontSize="small" />
              <Input
                {...focusProps}
                placeholder="Search"
                className="outline-none bg-transparent min-w-0 w-full"
              />
            </SearchField>

            <GridList
              aria-label="emails"
              orientation="vertical"
              defaultSelectedKeys={[2]}
              items={emails}
              selectionMode="single"
              className="flex flex-col mt-4 lg:h-[500px] overflow-auto"
            >
              {(item) => (
                <GridListItem
                  textValue={item.name}
                  className="selected:bg-neutral-700 selected:border-violet-400 border-l-4 border-transparent cursor-pointer p-2 rounded
                  outline-none focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-violet-400"
                >
                  <div className="flex flex-col gap-2">
                    <header className="flex items-center gap-2 text-neutral-500">
                      <Checkbox
                        slot="selection"
                        className={twMerge(focusRing())}
                      >
                        {({ isSelected }) => (
                          <div>
                            {isSelected ? (
                              <CheckBoxIcon
                                fontSize="small"
                                className="text-violet-400"
                              />
                            ) : (
                              <CheckBoxOutlineBlankIcon fontSize="small" />
                            )}
                          </div>
                        )}
                      </Checkbox>
                      <span className="text-neutral-300 text-sm mt-0.5">
                        {item.sender}
                      </span>
                      <span className="ml-auto text-sm">{item.date}</span>
                    </header>
                    <div className="grid grid-cols-[80%_1fr] pl-7 gap-1">
                      <h2 className="text-lg font-medium col-span-2">
                        {item.subject}
                      </h2>
                      <p className="text-sm text-neutral-300 line-clamp-2">
                        {item.text}
                      </p>
                      <span className="ml-auto self-end">
                        {item.isStarred ? (
                          <Star fontSize="small" className="text-yellow-300" />
                        ) : (
                          <StarOutline fontSize="small" />
                        )}
                      </span>
                    </div>
                  </div>
                </GridListItem>
              )}
            </GridList>
          </div>
        </div>
      </div>
    </main>
  );
};

const menuItems = [
  {
    id: 0,
    icon: InboxIcon,
    name: "Inbox",
    count: 5,
  },
  {
    id: 1,
    icon: StarBorderOutlined,
    name: "Starred",
    count: 11,
  },
  {
    id: 2,
    icon: AccessTimeOutlined,
    name: "Snoozed",
    count: 2,
  },
  {
    id: 3,
    icon: ErrorOutline,
    name: "Spam",
    notifications: 2,
    count: 6,
  },
  {
    id: 4,
    icon: SendOutlined,
    name: "Send",
    count: 38,
  },
  {
    id: 5,
    icon: DeleteOutline,
    name: "Deleted",
    count: 18,
  },
];

const emails = [
  {
    id: 1,
    date: "4 Apr · 12:45 pm",
    sender: "John Doe",
    subject: "Meeting Reminder",
    text: "Just a reminder that we have a meeting scheduled for today at 2:00 pm.",
    isStarred: false,
  },
  {
    id: 2,
    date: "10 Apr · 9:30 am",
    sender: "Alice Smith",
    subject: "Project Update",
    text: "Attached is the latest update on the project. Please review it and let me know if you have any questions.",
    isStarred: true,
  },
  {
    id: 3,
    date: "15 Apr · 3:20 pm",
    sender: "David Brown",
    subject: "Invitation to Webinar",
    text: "You're invited to attend our upcoming webinar on 'Effective Time Management'. Click the link below to register.",
    isStarred: false,
  },
  {
    id: 4,
    date: "20 Apr · 11:00 am",
    sender: "Emily Johnson",
    subject: "Weekly Newsletter",
    text: "Here's our weekly newsletter with updates on company activities and events.",
    isStarred: true,
  },
  {
    id: 5,
    date: "22 Apr · 4:55 pm",
    sender: "Michael Wilson",
    subject: "Feedback Request",
    text: "We value your opinion! Please take a moment to provide feedback on your recent experience with our service.",
    isStarred: false,
  },
];
