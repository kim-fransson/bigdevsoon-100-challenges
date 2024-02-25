"use client";

import { useObjectState } from "@uidotdev/usehooks";
import Image from "next/image";
import {
  Button,
  Group,
  NumberField,
  Input,
  TextField,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { fredoka } from "@/app/fonts";
import { useState } from "react";

const focusVisible = tv({
  base: "outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400 selection:bg-yellow-200",
});

const price = tv({
  base: "font-semibold",
});

const button = tv({
  extend: focusVisible,
  base: ["transition-all pressed:scale-90 flex items-center justify-center"],
  variants: {
    variant: {
      destructive: [
        "rounded-full text-gray-800 hover:text-red-500 pressed:text-red-500 focus-visible:text-red-500",
      ],
      numberField: [
        "rounded-md text-gray-950 p-1 bg-gray-200 hover:text-gray-50 hover:bg-gray-950",
        "pressed:text-gray-50 pressed:bg-gray-950 disabled:opacity-30 shadow-md",
      ],
      primary: [
        "text-gray-50 bg-gray-950 font-semibold py-2 px-3 rounded-md",
        "hover:ring-2 hover:ring-gray-950 hover:bg-white hover:text-gray-950 shadow-md",
        "pressed:ring-2 pressed:ring-gray-950 pressed:bg-white pressed:text-gray-950",
        "focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:bg-white focus-visible:text-gray-950",
      ],
    },
  },
});

const card = tv({
  base: ["lg:p-8 p-4 shadow-md bg-white rounded-2xl"],
});

const title = tv({
  base: ["font-semibold text-2xl"],
});

const initialState = [
  {
    id: 1,
    name: "Illuminating face cream",
    price: 12.99,
    quantity: 1,
    image_path: "/challenges/14/illuminating_face_cream_image.png",
  },
  {
    id: 2,
    name: "HydraGlow Elixir",
    price: 9.99,
    quantity: 1,
    image_path: "/challenges/14/hydra_glow_elixir_image.png",
  },
  {
    id: 3,
    name: "Intense lift up serum",
    price: 29.99,
    quantity: 1,
    image_path: "/challenges/14/intense_lift_up_serum_image.png",
  },
  {
    id: 4,
    name: "CBD Premium Oil",
    price: 32.99,
    quantity: 1,
    image_path: "/challenges/14/cbd_premium_oil_image.png",
  },
];

export const ShoppingList = () => {
  const [products, setProducts] = useState(initialState);
  return (
    <main
      className={`min-h-dvh flex justify-center items-center lg:p-8 p-4 bg-gradient-radial from-[#d8f9f9] to-[#afdcdc] ${fredoka.className}`}
    >
      <div className="grid lg:grid-cols-[minmax(550px,_1fr)_minmax(200px,_400px)] lg:gap-8 gap-4">
        <ProductList products={products} setProducts={setProducts} />
        <div className="flex flex-col lg:gap-8 gap-4">
          <OrderSummary products={products} />
          <PromoCode />
        </div>
      </div>
    </main>
  );
};

const ProductList = ({ products, setProducts }) => {
  const changeQuantity = (id, quantity) => {
    setProducts((curr) =>
      curr.map((product) =>
        product.id === id ? { ...product, quantity } : product,
      ),
    );
  };
  return (
    <div className={twMerge(card(), "grid gap-8")}>
      <div className="flex items-center justify-between">
        <h2 className={title()}>Your Product List</h2>
        <span className="text-gray-800 text-xl">4 items</span>
      </div>
      <ul className="grid gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            changeQuantity={changeQuantity}
          />
        ))}
      </ul>
    </div>
  );
};

const OrderSummary = ({ products }) => {
  const totalCost = products.reduce(
    (accumulator, product) => accumulator + product.price * product.quantity,
    0,
  );
  const tax = 6.88;
  const shipping = 0.0;
  return (
    <div className={twMerge(card(), "grid gap-8")}>
      <h2 className={title()}>Order Summary</h2>
      <div className="grid gap-3">
        <div className="flex items-center justify-between">
          <span>Subtotal</span>
          <span className={price()}>${totalCost.toFixed(2)}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Tax</span>
          <span className={price()}>${tax}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Shipping</span>
          <span className={price()}>${shipping}</span>
        </div>
      </div>

      <hr />

      <div className="flex items-center justify-between">
        <h2 className={title()}>Total</h2>
        <span className={price()}>
          ${(totalCost + tax + shipping).toFixed(2)}
        </span>
      </div>

      <Button className={button({ variant: "primary" })}>Pay now</Button>
    </div>
  );
};

const PromoCode = ({ className }) => {
  return (
    <div className={twMerge(card(), "grid gap-4", className)}>
      <h2 className={title()}>Promo Code</h2>
      <TextField defaultValue="BIGDEVSOON50" aria-label="enter promo code">
        <Input
          placeholder="Enter promo code"
          className={twMerge(
            focusVisible(),
            "border-2 border-gray-500 rounded-md px-3 py-2 truncate font-medium w-full",
          )}
        />
      </TextField>
    </div>
  );
};

const ProductCard = ({ product, changeQuantity }) => {
  return (
    <div className="flex items-center gap-4">
      <Image
        width={250}
        height={250}
        alt=""
        src={product.image_path}
        className="aspect-square w-32 rounded-xl"
      />
      <div className="grid gap-3">
        <h2 className="font-medium">{product.name}</h2>
        <NumberField
          onChange={(val) => changeQuantity(product.id, val)}
          defaultValue={1}
          minValue={0}
          maxValue={9}
        >
          <Group className="inline-flex items-center gap-2">
            <Button
              className={button({ variant: "numberField" })}
              slot="decrement"
            >
              <RemoveIcon fontSize="small" />
            </Button>
            <Input
              className={twMerge(
                "bg-transparent outline-none size-4 text-center",
                focusVisible(),
              )}
            />
            <Button
              className={button({ variant: "numberField" })}
              slot="increment"
            >
              <AddIcon fontSize="small" />
            </Button>
          </Group>
        </NumberField>
      </div>

      <div className="grid items-center ml-auto gap-3">
        <Button
          className={twMerge(
            button({ variant: "destructive" }),
            "justify-self-end",
          )}
        >
          <DeleteIcon />
        </Button>
        <span className={price()}>{`$${product.price}`}</span>
      </div>
    </div>
  );
};
