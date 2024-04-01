"use client";

import { fredoka } from "@/app/fonts";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Mention from "@tiptap/extension-mention";
import { EditorContent, ReactRenderer, useEditor } from "@tiptap/react";
import {
  Button,
  Tooltip as AriaTooltip,
  TooltipTrigger,
  ToggleButton,
  ListBox,
  ListBoxItem,
} from "react-aria-components";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import tippy from "tippy.js";
import Image from "next/image";

export const MarkdownPost = () => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bold: {
          HTMLAttributes: {
            class: "font-semibold",
          },
        },
      }),
      Mention.configure({
        HTMLAttributes: {
          class: "rounded-full bg-blue-100 text-blue-500 px-1.5 py-1",
        },
        suggestion,
      }),
      Underline.configure({
        HTMLAttributes: {
          class: "decoration-[1.5px] underline",
        },
      }),
    ],
    content: `<p>👋🏻 Hey <span data-type="mention" data-id="Cyberoid907"></span></p>`,
    editorProps: {
      attributes: {
        class: `outline-none`,
      },
    },
  });
  return (
    <main
      className={`min-h-dvh flex justify-center items-center bg-gray-100 p-4 ${fredoka.className}`}
    >
      <div className="bg-white rounded-2xl shadow-lg p-4 text-gray-900 max-w-2xl w-full space-y-4">
        <h2 className="font-medium text-xl">Comment on a post</h2>
        <div className="border-2 rounded-2xl focus-within:border-blue-600">
          <EditorContent editor={editor} className="p-4 outline-none" />
          <Footer editor={editor} />
        </div>
      </div>
    </main>
  );
};

const Footer = ({ editor }) => {
  return (
    <div className="p-2 gap-2 flex items-center border-t">
      <TooltipTrigger>
        <ToggleButton
          className="transition-all pressed:scale-95 focus-visible:outline-2 focus-visible:outline-blue-600
          outline-none flex items-center justify-center p-1 rounded-md hover:bg-blue-50 selected:bg-blue-100"
          onPress={() => editor.chain().focus().toggleBold().run()}
        >
          <FormatBoldIcon />
        </ToggleButton>
        <Tooltip>Bold text</Tooltip>
      </TooltipTrigger>

      <TooltipTrigger>
        <ToggleButton
          className="transition-all pressed:scale-95 focus-visible:outline-2 focus-visible:outline-blue-600
          outline-none flex items-center justify-center p-1 rounded-md hover:bg-blue-50 selected:bg-blue-100"
          onPress={() => editor.chain().focus().toggleItalic().run()}
        >
          <FormatItalicIcon />
        </ToggleButton>
        <Tooltip>Italic text</Tooltip>
      </TooltipTrigger>

      <TooltipTrigger>
        <ToggleButton
          className="transition-all pressed:scale-95 focus-visible:outline-2 focus-visible:outline-blue-600
          outline-none flex items-center justify-center p-1 rounded-md hover:bg-blue-50 selected:bg-blue-100"
          onPress={() => editor.chain().focus().toggleUnderline().run()}
        >
          <FormatUnderlinedIcon />
        </ToggleButton>
        <Tooltip>Underline text</Tooltip>
      </TooltipTrigger>

      <Button
        className="transition-all pressed:scale-95 focus-visible:outline-2 focus-visible:outline-blue-600
          focus-visible:outline-offset-2 outline-none flex items-center justify-center p-1 rounded-md bg-gray-950 text-gray-50 ml-auto
          px-3 py-1"
        onPress={() => editor.chain().focus().toggleBold().run()}
      >
        Post a message
      </Button>
    </div>
  );
};

const Tooltip = ({ children, ...props }) => {
  return (
    <AriaTooltip
      {...props}
      offset={8}
      placement="bottom center"
      className="bg-gray-950 text-gray-50 px-1 py-0.5 text-sm rounded-md"
    >
      {children}
    </AriaTooltip>
  );
};

const suggestion = {
  items: ({ query }) => {
    return [
      { name: "Cyberoid907" },
      { name: "Robooid910" },
      { name: "Autooid947" },
      { name: "Autotron155" },
      { name: "Nanooid125" },
      { name: "Cybertech613" },
      { name: "Cyberbot841" },
      { name: "Robomatic493" },
      { name: "Cybertron934" },
      { name: "Nanotech760" },
      { name: "Nanotech566" },
      { name: "Nanobot175" },
      { name: "Cyberbot553" },
      { name: "Nanomatic280" },
      { name: "Cybermatic299" },
      { name: "Autobot819" },
      { name: "Techtech914" },
      { name: "Cybertech297" },
      { name: "Nanooid518" },
      { name: "Robooid498" },
      { name: "Nanotron445" },
      { name: "Autobot731" },
      { name: "Cyberbot123" },
      { name: "Nanotron250" },
    ]
      .filter(({ name }) => name.toLowerCase().startsWith(query.toLowerCase()))
      .slice(0, 5);
  },
  render: () => {
    let component;
    let popup;

    return {
      onStart: (props) => {
        component = new ReactRenderer(MentionList, {
          props,
          editor: props.editor,
        });

        if (!props.clientRect) {
          return;
        }

        console.log({ props });

        popup = tippy("body", {
          getReferenceClientRect: props.clientRect,
          appendTo: () => document.body,
          content: component.element,
          showOnCreate: true,
          interactive: true,
          trigger: "manual",
          placement: "bottom-start",
        });
      },

      onUpdate(props) {
        component.updateProps(props);

        if (!props.clientRect) {
          return;
        }

        popup[0].setProps({
          getReferenceClientRect: props.clientRect,
        });
      },

      onKeyDown(props) {
        if (props.event.key === "Escape") {
          popup[0].hide();

          return true;
        }

        return component.ref?.onKeyDown(props);
      },

      onExit() {
        popup[0].destroy();
        component.destroy();
      },
    };
  },
};

const MentionList = (props) => {
  return (
    <ListBox
      aria-label="suggestions"
      orientation="vertical"
      items={props.items}
      selectionMode="single"
      className="p-2 bg-white rounded-2xl shadow-xl"
      autoFocus={true}
      onSelectionChange={(items) => {
        props.command({ id: Array.from(items)[0] });
      }}
    >
      {(item) => (
        <ListBoxItem
          textValue={item.name}
          className="focus:bg-blue-100 hover:bg-blue-100 cursor-pointer rounded-md outline-none px-2 py-1
          flex items-center gap-2"
          id={item.name}
        >
          <Image
            width={24}
            height={24}
            alt=""
            src={`https://robohash.org/${item.name}`}
            className="rounded-full border border-gray-300 bg-white"
          />
          {item.name}
        </ListBoxItem>
      )}
    </ListBox>
  );
};
