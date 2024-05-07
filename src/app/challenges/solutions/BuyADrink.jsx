"use client";

import { fredoka } from "@/app/fonts";
import { GridList, GridListItem } from "react-aria-components";

export const BuyADrink = () => {
  return (
    <main
      className={`${fredoka.className} min-h-dvh p-4 bg-green-600 flex items-center justify-center`}
    >
      <div className="rounded-2xl shadow-md px-12 py-8 bg-white">
        <GridList className="grid lg::grid-cols-3 gap-8">
          <GridListItem
            id={1}
            className="outline-none focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-green-600"
          >
            <SimpleDrinkCard
              supportPrice={3}
              price={2}
              type="coffee"
              emoji="☕"
            />
          </GridListItem>
          <GridListItem
            id={2}
            className="outline-none focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-green-600"
          >
            <SimpleDrinkCard
              supportPrice={5}
              price={4}
              type="beer"
              emoji="🍺"
            />
          </GridListItem>
          <GridListItem
            id={3}
            className="outline-none focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-green-600"
          >
            <SimpleDrinkCard
              supportPrice={7}
              price={6}
              type="drink"
              emoji="🍹"
            />
          </GridListItem>
          <GridListItem
            id={4}
            className="outline-none flex items-center justify-center lg:col-span-3 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-green-600"
          >
            <SimpleDrinkCard
              supportPrice={20}
              price={15}
              type="champage"
              emoji="🍾"
            />
          </GridListItem>
        </GridList>
      </div>
    </main>
  );
};

const SimpleDrinkCard = ({ supportPrice, type, price, emoji }) => {
  return (
    <div className="group w-full pt-2 max-w-96 min-w-64 overflow-hidden transition-all cursor-pointer bg-white rounded-xl shadow-2xl hover:bg-green-700 hover:text-neutral-50 text-neutral-800">
      <h2 className="opacity-70 text-center">Support for ${supportPrice}</h2>
      <span className="text-center block my-4 text-7xl">{emoji}</span>
      <h3 className="uppercase text-center font-semibold">{type}</h3>
      <div className="font-semibold mt-2.5 bg-green-700 w-full block text-neutral-50 py-2.5 text-center">
        ${price}
      </div>
    </div>
  );
};
