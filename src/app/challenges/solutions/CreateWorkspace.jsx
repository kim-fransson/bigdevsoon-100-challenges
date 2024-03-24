"use client";

import { fredoka } from "@/app/fonts";
import {
  Input,
  Label,
  TextField,
  Select as AriaSelect,
  Button,
  SelectValue,
  Text,
  Popover,
  ListBox,
  ListBoxItem,
  Separator,
  TagGroup as AriaTagGroup,
  Tag as AriaTag,
  TagList,
  MenuTrigger,
  Menu,
  MenuItem as AriaMenuItem,
} from "react-aria-components";
import { useListData } from "react-stately";
import { tv } from "tailwind-variants";

import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import { twMerge } from "tailwind-merge";
import { useState } from "react";
import Image from "next/image";

const input = tv({
  slots: {
    base: [
      "rounded-lg bg-white px-3 py-2 outline-none border-2 border-gray-500 focus:border-lime-500",
      "selection:bg-lime-200",
    ],
    label: ["font-medium select-none"],
  },
});

const button = tv({
  base: [
    "outline-none transition-all pressed:scale-95 flex items-center justify-center px-3 py-2",
    "focus-visible:outline-2 focus-visible:outline-lime-500 focus-visible:outline-offset-2 bg-lime-500 text-gray-50",
    "tracking-wider font-medium rounded-lg",
    "hover:bg-lime-600 disabled:cursor-not-allowed disabled:opacity-50",
  ],
});

export const CreateWorkspace = () => {
  const { label, base } = input();
  const workspaceMembersLimit = 5;
  const [nextUserID, setNextUserID] = useState(2);
  const [memberInput, setMemberInput] = useState("");

  const workspaceMembers = useListData({
    initialItems: [{ id: 1, email: "cyborg.metal@gmail.com" }],
  });

  const isInviteDisabled =
    workspaceMembersLimit === workspaceMembers.items.length;

  return (
    <main
      className={`flex p-4 justify-center items-center min-h-dvh bg-lime-50 ${fredoka.className}`}
    >
      <div
        className="bg-white rounded-xl shadow-xl p-6 grid auto-rows-min gap-6
      max-w-xl w-full"
      >
        <h2 className="text-2xl font-semibold">Setup workspace</h2>
        <TextField
          className="grid gap-2"
          isRequired
          defaultValue="My Workspace"
        >
          <Label className={label()}>
            Workspace name <span className="mb-1">*</span>
          </Label>
          <Input className={base()} />
        </TextField>

        <Select placeholder="Select your industry" label="Select your industry">
          <Option>Technology</Option>
          <Option>Finance</Option>
          <Option>Design</Option>
          <Option>Manufactoring</Option>
          <Option>Education</Option>
        </Select>

        <Separator
          orientation="horizontal"
          className="border border-gray-300 rounded-full my-5"
        />

        <header className="flex gap-4 justify-between font-semibold text-xl">
          <h2>Add workspace members</h2>
          <span>{`${workspaceMembers.items.length} / ${workspaceMembersLimit}`}</span>
        </header>

        <TagGroup
          label="Member email"
          items={workspaceMembers.items}
          onRemove={(keys) => workspaceMembers.remove(...keys)}
          inputValue={memberInput}
          onInputChange={setMemberInput}
          isDisabled={isInviteDisabled}
          handleInvite={() => {
            workspaceMembers.append({
              email: memberInput,
              id: nextUserID,
            });
            setNextUserID((curr) => curr + 1);
            setMemberInput("");
          }}
          onKeyDown={(e) => {
            if (e.code === "Enter") {
              workspaceMembers.append({
                email: memberInput,
                id: nextUserID,
              });
              setNextUserID((curr) => curr + 1);
              setMemberInput("");
            }
          }}
        >
          {(item) => <Tag>{item.email}</Tag>}
        </TagGroup>
        <div className="flex items-center gap-4">
          <Image
            width={42}
            height={42}
            alt=""
            src={`https://robohash.org/cyborg`}
            className="border rounded-full"
          />
          <div className="grid">
            <span className="font-medium">Cyborg Cyborgsson</span>
            <span className="opacity-60 text-sm">
              cyborg.cyborgsson@robot.com
            </span>
          </div>
          <MenuTrigger>
            <Button
              aria-label="Menu"
              className="ml-auto focus-visible:ring-2 ring-lime-400 outline-none rounded-full"
            >
              <MoreHorizRoundedIcon />
            </Button>
            <Popover className="entering:animate-in entering:fade-in exiting:animate-out exiting:fade-out">
              <Menu className="shadow-lg rounded-lg bg-white outline-none">
                <MenuItem id="resend">Resend invitation</MenuItem>
                <MenuItem id="remove">Remove</MenuItem>
              </Menu>
            </Popover>
          </MenuTrigger>
        </div>
        <Button className={button({ class: "py-3 px-4" })}>
          Setup workspace
        </Button>
      </div>
    </main>
  );
};

const TagGroup = (props) => {
  const { base, label } = input();
  return (
    <AriaTagGroup className="grid gap-2" {...props}>
      <Label className={label()}>{props.label}</Label>
      <div className="flex items-start gap-4">
        <div
          className={base({
            class: "min-h-[46px] flex items-center gap-2 flex-wrap flex-1",
          })}
        >
          <TagList
            className="flex items-center gap-2 flex-wrap outline-none"
            items={props.items}
            renderEmptyState={props.renderEmptyState}
          >
            {props.children}
          </TagList>
          <TextField
            value={props.inputValue}
            onChange={props.onInputChange}
            onKeyDown={props.onKeyDown}
            placeholder={props.isDisabled ? "Limit reached" : "Member mail"}
            type="email"
            isDisabled={props.isDisabled}
          >
            <Input className="rounded-lg px-2 py-1 outline-none disabled:cursor-not-allowed" />
          </TextField>
        </div>
        <Button
          isDisabled={props.isDisabled}
          onPress={props.handleInvite}
          className={button()}
        >
          Invite
        </Button>
      </div>
    </AriaTagGroup>
  );
};

const Tag = ({ children, ...props }) => {
  let textValue = typeof children === "string" ? children : undefined;
  return (
    <AriaTag
      className="border-2 border-gray-500 rounded-lg px-2 py-1 inline-flex items-center gap-2
      focus-visible:border-lime-400 outline-none"
      textValue={textValue}
      {...props}
    >
      {({ allowsRemoving }) => (
        <>
          {children}
          {allowsRemoving && (
            <Button slot="remove" className="outline-none">
              <ClearRoundedIcon fontSize="small" />
            </Button>
          )}
        </>
      )}
    </AriaTag>
  );
};

const Select = (props) => {
  const { label, base } = input();
  return (
    <AriaSelect {...props} className="inline-grid gap-2 self-start">
      {({ isOpen }) => (
        <>
          <Label className={label()}>{props.label}</Label>
          <Button className={base({ class: "flex gap-4 justify-between" })}>
            <SelectValue />
            <span
              aria-hidden="true"
              className={twMerge(
                "transition-all",
                isOpen ? "-rotate-180" : "rotate-0",
              )}
            >
              <ExpandMoreRoundedIcon />
            </span>
          </Button>
          <Popover className="w-[--trigger-width] entering:animate-in entering:fade-in exiting:animate-out exiting:fade-out">
            <ListBox
              className="shadow-lg rounded-lg bg-white outline-none"
              items={props.items}
            >
              {props.children}
            </ListBox>
          </Popover>
        </>
      )}
    </AriaSelect>
  );
};

const Option = (props) => {
  return (
    <ListBoxItem
      {...props}
      className={({ isFocused, isSelected }) =>
        twMerge(
          "first:rounded-t-lg last:rounded-b-lg px-3 py-2 outline-none cursor-pointer",
          isSelected && "bg-lime-500 text-gray-50",
          isFocused && !isSelected && "bg-gray-200",
        )
      }
    />
  );
};

const MenuItem = (props) => {
  return (
    <AriaMenuItem
      {...props}
      className={({ isFocused }) =>
        twMerge(
          "first:rounded-t-lg last:rounded-b-lg px-3 py-2 outline-none cursor-pointer",
          isFocused && "bg-gray-200",
        )
      }
    />
  );
};
