"use client";

import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import {
  Button,
  Cell as AriaCell,
  Checkbox,
  Column as AriaColumn,
  Row as AriaRow,
  Table,
  TableBody,
  TableHeader,
} from "react-aria-components";
import AddIcon from "@mui/icons-material/Add";
import { tv } from "tailwind-variants";
import notSupported from "@/app/assets/not-supported.svg";
import Image from "next/image";
import { fredoka } from "@/app/fonts";

const badge = tv({
  base: [
    "rounded-full py-1 px-2 text-center text-gray-50 text-sm inline-block",
  ],
  variants: {
    variant: {
      paid: ["bg-green-600"],
      outstanding: ["bg-amber-600"],
      overdue: ["bg-red-600"],
    },
  },
});

const card = tv({
  base: ["rounded-2xl shadow-lg md:p-6 p-4"],
  variants: {
    variant: {
      white: ["bg-white text-gray-950"],
      dark: ["bg-blue-950 text-gray-50"],
    },
  },
});

const button = tv({
  base: [
    "rounded-md outline-none transition-all px-2 py-1 flex items-center justify-center gap-1 font-medium",
  ],
  variants: {
    variant: {
      secondary: [
        "border-2 border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-gray-50",
      ],
      primary: ["bg-blue-600 text-gray-50 hover:bg-blue-800"],
    },
    isFocusVisible: {
      true: ["outline-2 outline outline-yellow-400 outline-offset-1"],
    },
    isPressed: {
      true: ["scale-95"],
    },
  },
});

export const Invoices = () => {
  return (
    <main
      className={`flex min-h-dvh md:items-center md:justify-center bg-gradient-radial from-gray-200 to-gray-300 ${fredoka.className}`}
    >
      <div className="w-full grid grid-cols-2 auto-rows-min max-w-5xl gap-6 md:p-8 p-4">
        <div
          className={card({ class: "col-span-1 space-y-2", variant: "white" })}
        >
          <h2 className="md:text-xl text-lg opacity-90 font-semibold">
            Balance
          </h2>
          <p className="md:text-2xl text-xl font-semibold tracking-wider">
            $ 10,234<span className="opacity-60">.40</span>
          </p>
        </div>
        <div
          className={card({ class: "col-span-1 space-y-2", variant: "dark" })}
        >
          <h2 className="md:text-xl text-lg opacity-90 font-semibold">
            Pending
          </h2>
          <p className="md:text-2xl text-xl font-semibold tracking-wider">
            $ 24,497<span className="opacity-60">.13</span>
          </p>
        </div>
        <div
          className={card({
            class: "col-span-full space-y-4",
            variant: "white",
          })}
        >
          <header className="flex justify-end gap-4">
            <h2 className="md:text-xl text-lg opacity-90 font-semibold mr-auto">
              Invoices
            </h2>
            <Button
              className={(states) =>
                button({ ...states, variant: "secondary" })
              }
            >
              View invoices
            </Button>
            <Button
              className={(states) => button({ ...states, variant: "primary" })}
            >
              <AddIcon className="hidden md:block" fontSize="small" />
              New Invoice
            </Button>
          </header>
          <Table
            aria-label="Invoice Summary"
            selectionMode="multiple"
            className="w-full hidden md:table"
          >
            <TableHeader className="uppercase text-gray-950/40 text-sm text-left">
              <Column>
                <TableCheckbox slot="selection" />
              </Column>
              <Column isRowHeader>Invoice</Column>
              <Column>Client</Column>
              <Column>Amount</Column>
              <Column>Status</Column>
              <Column>Date</Column>
            </TableHeader>
            <TableBody>
              <Row>
                <Cell>
                  <TableCheckbox slot="selection" />
                </Cell>
                <Cell>#Mraz-Sons 402</Cell>
                <Cell>Mraz and Sons</Cell>
                <Cell>$3,120.98</Cell>
                <Cell>
                  <span className={badge({ variant: "paid" })}>Paid</span>
                </Cell>
                <Cell>24 February 2024</Cell>
              </Row>
              <Row>
                <Cell>
                  <TableCheckbox slot="selection" />
                </Cell>
                <Cell>#Stokes LLC 02</Cell>
                <Cell>Stokes LLC</Cell>
                <Cell>$1,327.80</Cell>
                <Cell>
                  <span className={badge({ variant: "paid" })}>Paid</span>
                </Cell>
                <Cell>21 February 2024</Cell>
              </Row>
              <Row>
                <Cell>
                  <TableCheckbox slot="selection" />
                </Cell>
                <Cell>#BBP 16</Cell>
                <Cell>Bergnaum, Blick and Pagac</Cell>
                <Cell>$2,700.31</Cell>
                <Cell>
                  <span className={badge({ variant: "outstanding" })}>
                    Outstanding
                  </span>
                </Cell>
                <Cell>18 February 2024</Cell>
              </Row>
              <Row>
                <Cell>
                  <TableCheckbox slot="selection" />
                </Cell>
                <Cell>#Bash-Grim 01</Cell>
                <Cell>Bashirian-Grimes</Cell>
                <Cell>$4,219.58</Cell>
                <Cell>
                  <span className={badge({ variant: "overdue" })}>Overdue</span>
                </Cell>
                <Cell>17 February 2024</Cell>
              </Row>
              <Row>
                <Cell>
                  <TableCheckbox slot="selection" />
                </Cell>
                <Cell>#McC-Schinner 09</Cell>
                <Cell>McCullough-Schinner</Cell>
                <Cell>$3,230.74</Cell>
                <Cell>
                  <span className={badge({ variant: "overdue" })}>Overdue</span>
                </Cell>
                <Cell>16 February 2024</Cell>
              </Row>
            </TableBody>
          </Table>
          <div className="md:hidden flex flex-col items-center">
            <Image src={notSupported} width={270} height={420} alt="" />
            <h3 className="text-2xl font-semibold -mt-8 text-center">
              Responsive Tables are hard
            </h3>
          </div>
        </div>
      </div>
    </main>
  );
};

const Row = (props) => {
  return (
    <AriaRow
      {...props}
      className="selected:bg-blue-100 focus-visible:outline focus-visible:outline-yellow-400 outline-none hover:bg-blue-50 rounded-md cursor-pointer"
    >
      {props.children}
    </AriaRow>
  );
};

const Column = (props) => {
  return (
    <AriaColumn
      {...props}
      className="focus-visible:outline font-medium focus-visible:outline-yellow-400 outline-none -outline-offset-2 px-4 py-3 rounded-md"
    >
      {props.children}
    </AriaColumn>
  );
};

const Cell = (props) => {
  return (
    <AriaCell
      {...props}
      className="focus-visible:outline focus-visible:outline-yellow-400 outline-none
      px-4 py-3 -outline-offset-2 rounded-md font-medium"
    >
      {props.children}
    </AriaCell>
  );
};

const TableCheckbox = (props) => {
  return (
    <Checkbox
      className="cursor-pointer outline-none focus-visible:outline-2 focus-visible:outline-yellow-400
       outline-offset-1 aspect-square rounded flex items-center justify-center"
      {...props}
    >
      {({ isSelected }) => (
        <>
          {isSelected ? (
            <CheckBoxIcon fontSize="small" className="text-blue-600" />
          ) : (
            <CheckBoxOutlineBlankIcon
              fontSize="small"
              className="text-gray-300"
            />
          )}
        </>
      )}
    </Checkbox>
  );
};
