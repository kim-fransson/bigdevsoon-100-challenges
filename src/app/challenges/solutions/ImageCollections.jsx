"use client";

import { fredoka } from "@/app/fonts";
import {
  Button,
  Collection,
  ListBox,
  ListBoxItem,
  Tab,
  TabList,
  TabPanel,
  Tabs,
} from "react-aria-components";

import PermMediaIcon from "@mui/icons-material/PermMedia";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import GroupIcon from "@mui/icons-material/Group";
import Image from "next/image";
import { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const ImageCollections = () => {
  const [selectedCollection, setSelectedCollection] = useState(null);

  const tabs = [
    { id: 1, title: "Photos", icon: InsertPhotoIcon },
    {
      id: 2,
      title: "Collections",
      icon: PermMediaIcon,
      content: <Collections setSelectedCollection={setSelectedCollection} />,
    },
    { id: 3, title: "Users", icon: GroupIcon },
  ];

  return (
    <main
      className={`${fredoka.className} min-h-dvh bg-zinc-100 text-neutral-800 p-4 flex justify-center items-center`}
    >
      <div className="bg-zinc-50 p-5 rounded-3xl shadow-2xl max-w-screen-sm w-full">
        {!selectedCollection ? (
          <Tabs selectedKey={2} disabledKeys={[1, 3]} className="space-y-4">
            <TabList
              items={tabs}
              aria-label="menu"
              className="inline-flex px-6 py-1 rounded-2xl shadow-lg gap-4 items-center bg-zinc-200
            text-zinc-700"
            >
              {(item) => (
                <Tab
                  className="flex items-center gap-2 selected:bg-blue-500 rounded-lg
               selected:text-zinc-50 px-3 py-2 disabled:cursor-not-allowed cursor-pointer outline-none"
                >
                  <item.icon />
                  <span className="md:block hidden">{item.title}</span>
                </Tab>
              )}
            </TabList>
            <Collection items={tabs}>
              {(item) => <TabPanel>{item.content}</TabPanel>}
            </Collection>
          </Tabs>
        ) : (
          <ImageCollection
            collection={selectedCollection}
            onBack={() => setSelectedCollection(null)}
          />
        )}
      </div>
    </main>
  );
};

const ImageCollection = ({ onBack, collection }) => {
  return (
    <div className="flex flex-col gap-4">
      <Button
        onPress={onBack}
        className="flex max-w-fit transition-all hover:bg-neutral-500 hover:text-neutral-50 pressed:scale-95 rounded-3xl focus-visible:outline-2 focus-visible:outline-blue-600
        focus-visible:outline-offset-2 outline-none items-center gap-2 bg-neutral-200 text-neutral-600 px-4 py-2"
      >
        <ArrowBackIcon />
        Back to Collections
      </Button>
      <div className="flex items-center">
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold">{collection.name}</h2>
          <p>
            <span className="text-neutral-500">Created by</span>{" "}
            {collection.createdBy}
          </p>
        </div>
        <span className="ml-auto flex items-center gap-1">
          <InsertPhotoIcon className="text-blue-500" fontSize="small" />
          {collection.images.length}
        </span>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        {collection.images.map((img, index) => (
          <Image
            key={img}
            width={0}
            height={0}
            alt=""
            src={`https://robohash.org/${img}?set=${collection.set}`}
            className="w-full h-full aspect-[4/3] object-contain rounded-xl"
            style={{ background: colors[index % colors.length] }}
          />
        ))}
      </div>
    </div>
  );
};

const Collections = ({ setSelectedCollection }) => {
  const collections = [
    {
      id: 1,
      images: ["kitty1", "kitty2", "kitty3", "kitty4", "kitty5"],
      name: "Feline Friends",
      set: "set4",
      createdBy: "CatLover123",
      tags: ["cats", "pets", "cute"],
      numberOfImages: 7,
    },
    {
      id: 2,
      images: ["portrait1", "portrait2", "portrait3"],
      name: "Human Portraits",
      set: "set5",
      createdBy: "PortraitArtist",
      tags: ["portraits", "people"],
    },
    {
      id: 3,
      images: [
        "robot1",
        "robot2",
        "robot3",
        "robot4",
        "robot5",
        "robot6",
        "robot7",
        "robot8",
      ],
      set: "set1",
      name: "Robotic Wonders",
      createdBy: "TechEnthusiast",
      tags: ["robots", "technology"],
    },
    {
      id: 4,
      images: [
        "robomachine1",
        "robomachine2",
        "robomachine3",
        "robomachine4",
        "robomachine5",
        "robomachine6",
        "robomachine7",
        "robomachine8",
        "robomachine9",
        "robomachine10",
        "robomachine11",
      ],
      set: "set3",
      name: "More Robots",
      createdBy: "RoboticsFanatic",
      tags: ["robots", "sci-fi", "tech"],
    },
  ];
  return (
    <div>
      <h2 className="text-2xl font-semibold">Collections</h2>
      <ListBox
        aria-label="collections"
        layout="grid"
        items={collections}
        className="grid md:grid-cols-2 gap-6"
        selectionMode="single"
        onSelectionChange={(set) => {
          setSelectedCollection(collections[Array.from(set)[0] - 1]);
        }}
      >
        {(item) => (
          <ListBoxItem
            className="rounded-2xl outline-none flex flex-col gap-1
              focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 cursor-pointer"
          >
            <div className="grid grid-cols-2 grid-rows-2 h-[217px] gap-2 rounded-3xl overflow-hidden">
              <Image
                width={0}
                height={0}
                alt=""
                src={`https://robohash.org/${item.images[0]}?set=${item.set}`}
                className="w-full h-full row-span-2 object-contain bg-[#90e0ef]"
              />
              <Image
                width={0}
                height={0}
                alt=""
                src={`https://robohash.org/${item.images[1]}?set=${item.set}`}
                className="w-full h-full object-contain bg-[#ade8f4]"
              />
              <Image
                width={0}
                height={0}
                alt=""
                src={`https://robohash.org/${item.images[2]}?set=${item.set}`}
                className="w-full h-full object-contain bg-[#caf0f8]"
              />
            </div>
            <h2 className="text-lg font-semibold">{item.name}</h2>
            <div className="flex items-center gap-1 -mt-2">
              <span className="text-sm text-neutral-500">created by</span>
              <span className="underline underline-offset-2 text-neutral-700 font-medium">
                {item.createdBy}
              </span>
              <span className="ml-auto flex items-center gap-1">
                <InsertPhotoIcon className="text-blue-500" fontSize="small" />
                {item.images.length}
              </span>
            </div>
            <div className="flex gap-2 flex-wrap items-center mt-1">
              {item.tags.map((tag) => (
                <span
                  className="bg-neutral-200 text-neutral-600 text-sm px-2 py-0.5
                   rounded-md capitalize font-medium shadow-md"
                  key={tag}
                >
                  {tag}
                </span>
              ))}
            </div>
          </ListBoxItem>
        )}
      </ListBox>
    </div>
  );
};

const colors = [
  "#03045eff",
  "#023e8aff",
  "#0077b6ff",
  "#0096c7ff",
  "#00b4d8ff",
  "#48cae4ff",
  "#90e0efff",
  "#ade8f4ff",
  "#caf0f8ff",
];
