"use client";

import { roboto } from "@/app/fonts";
import { tv } from "tailwind-variants";
import mastercard from "../../assets/mastercard.svg";
import Image from "next/image";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import {
  Button,
  Cell as AriaCell,
  Column as AriaColumn,
  Row as AriaRow,
  Table,
  TableBody,
  TableHeader,
  ResizableTableContainer,
} from "react-aria-components";

const focusRing = tv({
  base: "outline outline-yellow-400 outline-offset-2 outline-0 focus-visible:outline-2",
});

const buttonStyles = tv({
  extend: focusRing,
  base: ["flex items-center justify-center transition-all pressed:scale-95"],
});

const textStyles = tv({
  slots: {
    headerStyles: ["text-xl font-semibold text-opacity-90"],
    descriptionStyles: ["opacity-55"],
  },
});

const paymentMethodStyles = tv({
  base: "rounded-lg p-4 flex items-center border-2 gap-2",
  variants: {
    isSelected: {
      true: ["bg-blue-50 border-blue-300 text-gray-950/70 text-sm"],
    },
    isButton: {
      true: [
        "bg-gray-200 border-gray-300 text-gray-400 justify-center cursor-pointer",
      ],
    },
  },
});

const planStyles = tv({
  base: "rounded-lg p-4 flex flex-col relative overflow-hidden border-2 gap-4",
  variants: {
    isSelected: {
      true: ["bg-blue-50 border-blue-300 text-gray-950/70"],
    },
    isUltimate: {
      true: ["bg-indigo-600 border-indigo-600 text-gray-50"],
    },
  },
});

const { headerStyles, descriptionStyles } = textStyles();

export const BillingPage = () => {
  return (
    <main
      className={`min-h-dvh lg:flex lg:items-center lg:justify-center bg-gray-100 ${roboto.className}`}
    >
      <div
        className="min-h-dvh bg-white lg:min-h-0 w-full lg:max-w-screen-lg lg:rounded-xl lg:shadow-lg px-4 py-8
      flex flex-col gap-8"
      >
        <div>
          <h2 className={headerStyles()}>Plan</h2>
          <span className={descriptionStyles()}>Decide whats best for you</span>

          <div className="mt-4 grid sm:grid-cols-2 gap-4">
            <div className={planStyles({ isSelected: true })}>
              <div className="flex gap-2 justify-between items-center">
                <h2 className={headerStyles()}>Standard</h2>
                <div>
                  <span className="font-semibold">$29.99</span>{" "}
                  <span className="opacity-55">/month</span>
                </div>
              </div>
              <Button
                className={buttonStyles({
                  class: [
                    "text-blue-400 border-2 border-blue-300 hover:border-red-400 hover:text-red-500 hover:bg-red-100 self-start",
                    "px-6 py-2 rounded-lg",
                  ],
                })}
              >
                Cancel Supscription
              </Button>
            </div>

            <div className={planStyles({ isUltimate: true })}>
              <div className="flex gap-2 justify-between items-center">
                <h2 className={headerStyles()}>Ultimate</h2>
                <div>
                  <span className="font-semibold">$49.99</span>{" "}
                  <span className="opacity-55">/month</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  className={buttonStyles({
                    class: [
                      "text-indigo-600 bg-white hover:bg-green-500 hover:text-gray-50 self-start",
                      "px-6 py-2 rounded-lg font-medium",
                    ],
                  })}
                >
                  Upgrade
                </Button>
                <span className={descriptionStyles()}>
                  Learn more about this plan
                </span>
              </div>
              <div className="absolute -right-4 -bottom-12 flex -rotate-[30deg]">
                <div className="rounded-full border-2 grid size-20"></div>
                <div className="-mx-8 rounded-full border-2 grid size-20"></div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className={headerStyles()}>Payment Method</h2>
          <span className={descriptionStyles()}>Update your billing</span>

          <div className="grid w-fit sm:grid-cols-2 flex-wrap gap-4 min-h-28 mt-4">
            <div
              className={paymentMethodStyles({
                isSelected: true,
                class: "pr-12",
              })}
            >
              <Image priority src={mastercard} width={44} alt="" />
              <span>**** **** **** 2361</span>
            </div>

            <div
              className={paymentMethodStyles({
                isButton: true,
              })}
            >
              <Button className={buttonStyles({ class: "rounded-full" })}>
                <AddCircleRoundedIcon fontSize="large" />
              </Button>
            </div>
          </div>
        </div>

        <div>
          <h2 className={headerStyles()}>Billing History</h2>
          <span className={descriptionStyles()}>
            Access to all your previous invoices
          </span>
          <ResizableTableContainer className="overflow-auto mt-4">
            <Table
              aria-label="Invoice Summary"
              selectionMode="multiple"
              className="border-separate border-spacing-y-2"
            >
              <TableHeader className="text-gray-950/40 text-sm text-left">
                <Column isRowHeader>DATE</Column>
                <Column>DETAILS</Column>
                <Column>AMOUNT</Column>
                <Column>OPERATION</Column>
              </TableHeader>
              <TableBody>
                <Row>
                  <Cell>04/12/2023</Cell>
                  <Cell>Standard Plan</Cell>
                  <Cell className="text-indigo-600 font-medium">$29.99</Cell>
                  <Cell className="flex items-center gap-2">
                    <Button
                      className={buttonStyles({
                        class: "border-2 p-1 border-gray-500 bg-gray-100",
                      })}
                    >
                      <VisibilityRoundedIcon fontSize="small" />
                    </Button>
                    <Button
                      className={buttonStyles({
                        class: "border-2 p-1 border-gray-500 bg-gray-100",
                      })}
                    >
                      <DownloadRoundedIcon fontSize="small" />
                    </Button>
                    <Button
                      className={buttonStyles({
                        class: "border-2 p-1 border-gray-500 bg-gray-100",
                      })}
                    >
                      <EmailRoundedIcon fontSize="small" />
                    </Button>
                  </Cell>
                </Row>
                <Row>
                  <Cell>04/12/2023</Cell>
                  <Cell>Standard Plan</Cell>
                  <Cell className="text-indigo-600 font-medium">$29.99</Cell>
                  <Cell className="flex items-center gap-2">
                    <Button
                      className={buttonStyles({
                        class: "border-2 p-1 border-gray-500 bg-gray-100",
                      })}
                    >
                      <VisibilityRoundedIcon fontSize="small" />
                    </Button>
                    <Button
                      className={buttonStyles({
                        class: "border-2 p-1 border-gray-500 bg-gray-100",
                      })}
                    >
                      <DownloadRoundedIcon fontSize="small" />
                    </Button>
                    <Button
                      className={buttonStyles({
                        class: "border-2 p-1 border-gray-500 bg-gray-100",
                      })}
                    >
                      <EmailRoundedIcon fontSize="small" />
                    </Button>
                  </Cell>
                </Row>
                <Row>
                  <Cell>04/12/2023</Cell>
                  <Cell>Standard Plan</Cell>
                  <Cell className="text-indigo-600 font-medium">$29.99</Cell>
                  <Cell className="flex items-center gap-2">
                    <Button
                      className={buttonStyles({
                        class: "border-2 p-1 border-gray-500 bg-gray-100",
                      })}
                    >
                      <VisibilityRoundedIcon fontSize="small" />
                    </Button>
                    <Button
                      className={buttonStyles({
                        class: "border-2 p-1 border-gray-500 bg-gray-100",
                      })}
                    >
                      <DownloadRoundedIcon fontSize="small" />
                    </Button>
                    <Button
                      className={buttonStyles({
                        class: "border-2 p-1 border-gray-500 bg-gray-100",
                      })}
                    >
                      <EmailRoundedIcon fontSize="small" />
                    </Button>
                  </Cell>
                </Row>
                <Row>
                  <Cell>04/12/2023</Cell>
                  <Cell>Standard Plan</Cell>
                  <Cell className="text-indigo-600 font-medium">$29.99</Cell>
                  <Cell className="flex items-center gap-2">
                    <Button
                      className={buttonStyles({
                        class: "border-2 p-1 border-gray-500 bg-gray-100",
                      })}
                    >
                      <VisibilityRoundedIcon fontSize="small" />
                    </Button>
                    <Button
                      className={buttonStyles({
                        class: "border-2 p-1 border-gray-500 bg-gray-100",
                      })}
                    >
                      <DownloadRoundedIcon fontSize="small" />
                    </Button>
                    <Button
                      className={buttonStyles({
                        class: "border-2 p-1 border-gray-500 bg-gray-100",
                      })}
                    >
                      <EmailRoundedIcon fontSize="small" />
                    </Button>
                  </Cell>
                </Row>
              </TableBody>
            </Table>
          </ResizableTableContainer>
        </div>
      </div>
    </main>
  );
};

const rowStyles = tv({
  extend: focusRing,
  base: [""],
});

const Row = (props) => {
  return (
    <AriaRow {...props} className={rowStyles({ class: props.className })}>
      {props.children}
    </AriaRow>
  );
};

const columnStyles = tv({
  extend: focusRing,
  base: [
    "-outline-offset-2 bg-gray-100 text-gray-500 font-medium py-2 px-4 first:rounded-l-lg last:rounded-r-lg",
  ],
});

const Column = (props) => {
  return (
    <AriaColumn {...props} className={columnStyles({ class: props.className })}>
      {props.children}
    </AriaColumn>
  );
};

const cellStyles = tv({
  extend: focusRing,
  base: ["-outline-offset-2 px-4"],
});

const Cell = (props) => {
  return (
    <AriaCell {...props} className={cellStyles({ class: props.className })}>
      {props.children}
    </AriaCell>
  );
};
