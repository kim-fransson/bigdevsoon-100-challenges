"use client";

import { fredoka } from "@/app/fonts";
import { tv } from "tailwind-variants";
import PetsIcon from "@mui/icons-material/Pets";
import SearchIcon from "@mui/icons-material/Search";
import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import PaidIcon from "@mui/icons-material/Paid";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import {
  Button,
  Dialog,
    GridList,
  GridListItem,
  Input,
  Modal,
  ModalOverlay,
  SearchField,
  ToggleButton,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { useFocusRing } from "react-aria";
import Image from "next/image";
import { useState } from "react";

const card = tv({
  base: ["rounded-2xl bg-white shadow-lg"],
});

const focusVisible = tv({
  base: "outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-700 selection:bg-pink-200",
});

const item = tv({
  extend: focusVisible,
  variants: {},
  base: [""],
});

const button = tv({
  extend: focusVisible,
  base: [
    "pressed:scale-95 transition-all flex items-center justify-center gap-2",
  ],
  variants: {
    variant: {
      donate: [
        "bg-gray-200 text-gray-800 hover:text-gray-200  hover:bg-gray-800",
        "font-semibold rounded-md py-3 px-4",
      ],
      adopt: [
        "bg-pink-700 text-gray-50 hover:text-pink-700 hover:ring-2 hover:ring-pink-700 hover:bg-white",
        "font-semibold rounded-md py-3 px-4",
      ],
    },
  },
});

export const FurFriends = () => {
  const [dogs, setDogs] = useState(initialState);
  const [activeDog, setActiveDog] = useState();
  const [showModal, setShowModal] = useState(false);

  return (
    <main
      className={`min-h-dvh flex items-center justify-center bg-teal-50 ${fredoka.className}`}
    >
      <div
        className={card({
          class:
            "max-w-lg w-full min-h-dvh sm:min-h-0 flex flex-col p-4 gap-4 bg-gradient-to-b from-white to-gray-50",
        })}
      >
        <div className="flex items-center gap-2">
          <PetsIcon fontSize="large" />
          <h2 className="text-2xl font-semibold">FurEver Friends</h2>
        </div>
        <Search />

        <GridList
          aria-label="fur friends"
          className="sm:max-h-[500px] overflow-auto no-scrollbar -mx-4"
          items={dogs}
          onAction={(key) => {
            setActiveDog(dogs.find((dog) => dog.name === key));
            setShowModal(true);
          }}
        >
          {(dog) => (
            <GridListItem
              id={dog.name}
              key={dog.name}
              textValue={dog.name}
              className={twMerge(
                card({
                  className: "my-5 mx-4 cursor-pointer hover:bg-pink-50",
                }),
                item(),
              )}
            >
                              <DogItem dog={dog} />
                          </GridListItem>
          )}
        </GridList>
      </div>
      <DogModal
        activeDog={activeDog}
        isOpen={showModal}
        setIsOpen={setShowModal}
      />
    </main>
  );
};

const DogItem = ({ dog }) => {
  return (
    <div className="grid grid-cols-[max-content_1fr]">
      <Image
        width={120}
        height={120}
        src={dog.thumbnail}
        alt=""
        className="rounded-2xl size-32"
      />
      <div className="flex flex-col justify-around px-4 py-2">
        <div className="text-xl font-semibold flex items-center gap-1">
          {dog.name}
          {dog.gender === "female" && <FemaleIcon />}
          {dog.gender === "male" && <MaleIcon />}
        </div>
        <div className="text-gray-500 flex items-center justify-between">
          {dog.breed}
          <ToggleButton
            defaultSelected={dog.favorites}
            className={button({ className: "text-gray-800 rounded-full" })}
          >
            {({ isSelected }) =>
              isSelected ? (
                <FavoriteIcon className="text-pink-700" />
              ) : (
                <FavoriteBorderIcon />
              )
            }
          </ToggleButton>
        </div>
        <div className="flex items-center gap-1">
          <FmdGoodIcon className="text-pink-700" />
          {dog.distance}
        </div>
      </div>
    </div>
  );
};

const Search = () => {
  const { focusProps, isFocused } = useFocusRing();

  return (
    <SearchField
      aria-label="Search for a friend"
      className={twMerge(
        "border-2 flex items-center gap-2 border-gray-300 rounded-lg bg-gray-50 py-2 px-3 transition-all",
        isFocused ? "border-pink-700" : "",
      )}
    >
      <SearchIcon className="text-gray-600" />
      <Input
        {...focusProps}
        placeholder="Search for a friend"
        className={"bg-transparent w-full outline-none selection:bg-pink-200"}
      />
    </SearchField>
  );
};

const DogModal = ({ activeDog, isOpen, setIsOpen }) => {
  return (
    <ModalOverlay
      isDismissable={true}
      isKeyboardDismissDisabled={true}
      isOpen={isOpen}
      onOpenChange={setIsOpen}
      className={({ isEntering, isExiting }) => `
    fixed inset-0 z-10 overflow-y-auto flex min-h-dvh items-center justify-center backdrop-blur
    ${isEntering ? "animate-fade animate-duration-300 animate-normal" : ""}
    ${isExiting ? "animate-fade animate-duration-200 animate-reverse" : ""}
  `}
    >
      <Modal
        className={({ isEntering, isExiting }) => `m-4 sm:m-0 sm:max-w-3xl
            ${isEntering ? "animate-fade animate-duration-300 animate-normal" : ""}
            ${isExiting ? "animate-fade animate-duration-200 animate-reverse" : ""}
          `}
      >
        <Dialog aria-label="dog details" className="outline-none">
          {({ close }) => (
            <div
              className={card({ className: "grid sm:grid-cols-2 sm:flex-row" })}
            >
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  width={500}
                  height={500}
                  alt=""
                  src={activeDog?.thumbnail}
                  className=""
                />
                <ToggleButton
                  defaultSelected={activeDog?.favorites}
                  className={button({
                    className:
                      "text-gray-800 rounded-full absolute top-2 right-2",
                  })}
                >
                  {({ isSelected }) =>
                    isSelected ? (
                      <FavoriteIcon className="text-pink-700" />
                    ) : (
                      <FavoriteBorderIcon />
                    )
                  }
                </ToggleButton>
                <Button
                  className={button({ className: "left-2 top-2 absolute" })}
                  onPress={close}
                >
                  <ArrowBackIcon />
                </Button>
              </div>
              <div className="p-4 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xl font-semibold flex items-center gap-1">
                      <h2>{activeDog?.name}</h2>
                      {activeDog?.gender === "female" && <FemaleIcon />}
                      {activeDog?.gender === "male" && <MaleIcon />}
                    </div>
                    <span className="text-gray-500">{activeDog?.breed}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FmdGoodIcon className="text-pink-700" />
                    {activeDog?.distance}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex flex-col items-center bg-gray-200 px-3 py-2 rounded-lg">
                    <span className="text-gray-900 font-semibold">Age</span>
                    <span className="text-sm text-gray-700">
                      {activeDog?.age}
                    </span>
                  </div>
                  <div className="flex flex-col items-center bg-gray-200 px-3 py-2 rounded-lg">
                    <span className="text-gray-900 font-semibold">Height</span>
                    <span className="text-sm text-gray-700">
                      {activeDog?.height}
                    </span>
                  </div>
                  <div className="flex flex-col items-center bg-gray-200 px-3 py-2 rounded-lg">
                    <span className="text-gray-900 font-semibold">Weight</span>
                    <span className="text-sm text-gray-700">
                      {activeDog?.weight}
                    </span>
                  </div>
                </div>

                <p>{activeDog?.description}</p>

                <div className="flex items-center mt-auto w-full gap-4">
                  <Button className={button({ variant: "donate" })}>
                    Donate
                    <PaidIcon />
                  </Button>
                  <Button
                    className={button({
                      variant: "adopt",
                      className: "flex-1",
                    })}
                  >
                    Adopt
                    <PetsIcon />
                  </Button>
                </div>
              </div>
            </div>
          )}
        </Dialog>
      </Modal>
    </ModalOverlay>
  );
};

const initialState = [
  {
    name: "Lola",
    breed: "Jack Russell Terrier",
    distance: "2.5 miles",
    gender: "female",
    age: "4 yr",
    height: "14 inch",
    weight: "15 lb",
    description:
      "Lola is a lively and intelligent Jack Russell Terrier full of energy and looking for a playful home.",
    thumbnail: "/challenges/16/Lola.png",
    favorites: false,
  },
  {
    name: "Bailey",
    breed: "Labrador Retriever",
    distance: "2.5 miles",
    gender: "male",
    age: "6 yr",
    height: "35 inch",
    weight: "17 lb",
    description:
      "Bailey is a gentle and loving Labrador Retriever who is eagerly awaiting her forever home.",
    thumbnail: "/challenges/16/Bailey.png",
    favorites: true,
  },
  {
    name: "Buddy",
    breed: "Border Collie",
    distance: "33 miles",
    gender: "male",
    age: "3 yr",
    height: "22 inch",
    weight: "30 lb",
    description:
      "Buddy is a smart and agile Border Collie with a passion for learning new tricks and herding.",
    thumbnail: "/challenges/16/Buddy.png",
    favorites: false,
  },
  {
    name: "Tucker",
    breed: "German Shepherd",
    distance: "64 miles",
    gender: "male",
    age: "5 yr",
    height: "26 inch",
    weight: "40 lb",
    description:
      "Tucker is a loyal and protective German Shepherd, great with families and as a dedicated companion.",
    thumbnail: "/challenges/16/Tucker.png",
    favorites: false,
  },
  {
    name: "Rosie",
    breed: "Golden Retriever",
    distance: "12 miles",
    gender: "female",
    age: "2 yr",
    height: "24 inch",
    weight: "55 lb",
    description:
      "Rosie is a sweet-natured Golden Retriever who loves water and is always ready for a game of fetch.",
    thumbnail: "/challenges/16/Rosie.png",
    favorites: true,
  },
  {
    name: "Charlie",
    breed: "Cocker Spaniel",
    distance: "7 miles",
    gender: "male",
    age: "1 yr",
    height: "15 inch",
    weight: "28 lb",
    description:
      "Charlie is an energetic Cocker Spaniel puppy with a lot of love to give and an eagerness to please.",
    thumbnail: "/challenges/16/Charlie.png",
    favorites: false,
  },
  {
    name: "Daisy",
    breed: "Dachshund",
    distance: "8 miles",
    gender: "female",
    age: "5 yr",
    height: "9 inch",
    weight: "16 lb",
    description:
      "Daisy is a charming and curious Dachshund who loves to burrow under blankets and enjoys long walks.",
    thumbnail: "/challenges/16/Daisy.png",
    favorites: true,
  },
  {
    name: "Bruno",
    breed: "Boxer",
    distance: "15 miles",
    gender: "male",
    age: "4 yr",
    height: "25 inch",
    weight: "65 lb",
    description:
      "Bruno is a friendly and energetic Boxer with a playful spirit and a love for family-oriented activities.",
    thumbnail: "/challenges/16/Bruno.png",
    favorites: false,
  },
  {
    name: "Stella",
    breed: "French Bulldog",
    distance: "5 miles",
    gender: "female",
    age: "3 yr",
    height: "12 inch",
    weight: "24 lb",
    description:
      "Stella is a sociable and affectionate French Bulldog who enjoys companionship and short strolls in the park.",
    thumbnail: "/challenges/16/Stella.png",
    favorites: false,
  },
  {
    name: "Oliver",
    breed: "Pug",
    distance: "22 miles",
    gender: "male",
    age: "2 yr",
    height: "12 inch",
    weight: "18 lb",
    description:
      "Oliver is an adorable Pug with a playful demeanor and a face full of expression, always ready for cuddles.",
    thumbnail: "/challenges/16/Oliver.png",
    favorites: true,
  },
];
