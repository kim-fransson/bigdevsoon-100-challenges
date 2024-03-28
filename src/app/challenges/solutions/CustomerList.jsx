"use client";

import { fredoka } from "@/app/fonts";
import {
  Button,
  TableBody,
  Column as AriaColumn,
  TableHeader as AriaTableHeader,
  Cell as AriaCell,
  Row as AriaRow,
  Menu as AriaMenu,
  MenuItem as AriaMenuItem,
  Table,
  Group,
  composeRenderProps,
  Collection,
  Checkbox as AriaCheckbox,
  useTableOptions,
  Popover,
  MenuTrigger,
  ResizableTableContainer,
} from "react-aria-components";

import AddIcon from "@mui/icons-material/Add";
import CheckIcon from "@mui/icons-material/Check";
import RemoveIcon from "@mui/icons-material/Remove";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import { tv } from "tailwind-variants";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

const focusRing = tv({
  base: "outline outline-indigo-600 outline-offset-2",
  variants: {
    isFocusVisible: {
      false: "outline-0",
      true: "outline-2",
    },
  },
});

const badge = tv({
  base: ["rounded-full px-3 py-1"],
  variants: {
    variant: {
      Active: "bg-green-200 text-green-700",
      Inactive: "bg-red-200 text-red-700",
    },
  },
});

const columnStyles = tv({
  extend: focusRing,
  base: "px-2 h-5 flex-1 flex gap-1 items-center overflow-hidden",
});

const menuTriggerStyles = tv({
  extend: focusRing,
  base: "aspect-square rounded-full grid place-content-center ml-auto",
});

const rowStyles = tv({
  extend: focusRing,
  base: [
    "group/row cursor-pointer select-none -outline-offset-2 text-sm hover:bg-gray-200 selected:bg-indigo-100 selected:hover:bg-indigo-200",
    "bg-white",
  ],
});

const checkboxStyles = tv({
  base: "flex gap-2 items-center group text-sm transition text-gray-50",
});

const boxStyles = tv({
  extend: focusRing,
  base: "size-4 flex-shrink-0 rounded flex items-center justify-center border-2 transition",
  variants: {
    isSelected: {
      false: "border-gray-300 bg-white",
      true: "bg-indigo-500 border-indigo-500",
    },
  },
});

const cellStyles = tv({
  extend: focusRing,
  base: ["p-3 first:rounded-l-lg last:rounded-r-lg truncate -outline-offset-2"],
});

const dropdownItemStyles = tv({
  base: "group flex items-center gap-4 cursor-pointer select-none py-2 pl-3 pr-1 rounded-lg outline outline-0 text-sm",
  variants: {
    isFocused: {
      true: "bg-indigo-500 text-white",
    },
  },
});

export const CustomerList = () => {
  return (
    <main
      className={`${fredoka.className} text-gray-950 min-h-dvh flex items-center justify-center p-4 bg-indigo-50`}
    >
      <div className="max-w-6xl w-full">
        <header className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Customer List</h2>
          <Button
            className="transition-all pressed:scale-95 bg-indigo-500 hover:bg-indigo-600
          text-gray-50 px-3 py-2 rounded-full shadow-md focus-visible:outline-2 focus-visible:outline-offset-2
          outline-none focus-visible:outline-indigo-600 flex items-center gap-3"
          >
            <AddIcon fontSize="small" />
            Add Customer
          </Button>
        </header>

        <ResizableTableContainer className="overflow-auto">
          <Table
            aria-label="Customers"
            className="border-separate border-spacing-y-4"
            selectionMode="multiple"
          >
            <TableHeader>
              <Column id="basicInfo" isRowHeader>
                BASIC INFO
              </Column>
              <Column id="companyName">COMPANY NAME</Column>
              <Column id="phoneNumber">PHONE NUMBER</Column>
              <Column id="status">STATUS</Column>
              <Column id="createdDate">CREATED DATE</Column>
            </TableHeader>
            <TableBody items={rows}>
              {(row) => (
                <Row>
                  <Cell>
                    <Group className="flex gap-2 items-center">
                      <Image
                        width={36}
                        height={36}
                        alt=""
                        src={`https://robohash.org/${row.id}`}
                        className="rounded-full border border-gray-300 bg-white"
                      />
                      <div className="grid">
                        <span>{row.name}</span>
                        <span className="opacity-70 truncate">{row.email}</span>
                      </div>
                    </Group>
                  </Cell>
                  <Cell>{row.group}</Cell>
                  <Cell>{row.phone}</Cell>
                  <Cell>
                    <span
                      className={badge({
                        variant: row.status,
                      })}
                    >
                      {row.status}
                    </span>
                  </Cell>
                  <Cell>
                    <div className="flex gap-4 items-center">
                      {row.date_added}
                      <MenuTrigger>
                        <Button
                          variant="secondary"
                          className={menuTriggerStyles}
                        >
                          <MoreHorizIcon fontSize="small" />
                        </Button>
                        <Menu placement="bottom end" crossOffset={10}>
                          <MenuItem id="editContact">
                            <EditIcon fontSize="small" />
                            Edit Contact
                          </MenuItem>
                          <MenuItem id="remove">
                            <DeleteIcon fontSize="small" />
                            Remove
                          </MenuItem>
                          <MenuItem id="duplicate">
                            <ContentCopyIcon fontSize="small" />
                            Duplicate
                          </MenuItem>
                        </Menu>
                      </MenuTrigger>
                    </div>
                  </Cell>
                </Row>
              )}
            </TableBody>
          </Table>
        </ResizableTableContainer>
      </div>
    </main>
  );
};

const Menu = (props) => {
  return (
    <Popover
      placement={props.placement}
      crossOffset={props.crossOffset}
      className={`min-w-[150px] entering:animate-in entering:fade-in exiting:animate-out exiting:fade-out ${fredoka.className}`}
    >
      <AriaMenu
        {...props}
        className="p-1 outline outline-0 max-h-[inherit] bg-white overflow-auto rounded-lg shadow-xl"
      />
    </Popover>
  );
};

const MenuItem = (props) => {
  return (
    <AriaMenuItem {...props} className={dropdownItemStyles}>
      {composeRenderProps(props.children, (children) => (
        <span className="flex items-center flex-1 gap-2 truncate">
          {children}
        </span>
      ))}
    </AriaMenuItem>
  );
};

const Cell = (props) => {
  return <AriaCell {...props} className={cellStyles} />;
};

const Row = ({ id, columns, children, ...otherProps }) => {
  let { selectionBehavior } = useTableOptions();

  return (
    <AriaRow id={id} {...otherProps} className={rowStyles}>
      {selectionBehavior === "toggle" && (
        <Cell>
          <Checkbox slot="selection" />
        </Cell>
      )}
      <Collection items={columns}>{children}</Collection>
    </AriaRow>
  );
};

const Column = (props) => {
  return (
    <AriaColumn
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "[&:hover]:z-20 [&:focus-within]:z-20 text-start text-sm font-semibold text-gray-700 cursor-default",
      )}
    >
      {composeRenderProps(props.children, (children) => (
        <div className="flex items-center">
          <Group role="presentation" tabIndex={-1} className={columnStyles}>
            <span className="truncate">{children}</span>
          </Group>
        </div>
      ))}
    </AriaColumn>
  );
};

const Checkbox = (props) => {
  return (
    <AriaCheckbox
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        checkboxStyles({ ...renderProps, className }),
      )}
    >
      {({ isSelected, isIndeterminate, ...renderProps }) => (
        <>
          <div
            className={boxStyles({
              isSelected: isSelected || isIndeterminate,
              ...renderProps,
            })}
          >
            {isIndeterminate ? (
              <RemoveIcon aria-hidden fontSize="small" className="p-0.5" />
            ) : isSelected ? (
              <CheckIcon aria-hidden fontSize="small" className="p-0.5" />
            ) : null}
          </div>
          {props.children}
        </>
      )}
    </AriaCheckbox>
  );
};

const TableHeader = (props) => {
  let { selectionBehavior, selectionMode } = useTableOptions();

  return (
    <AriaTableHeader {...props} className={props.className}>
      {selectionBehavior === "toggle" && (
        <AriaColumn
          width={36}
          minWidth={36}
          className="text-start cursor-default p-2"
        >
          {selectionMode === "multiple" && <Checkbox slot="selection" />}
        </AriaColumn>
      )}
      <Collection items={props.columns}>{props.children}</Collection>
    </AriaTableHeader>
  );
};

const composeTailwindRenderProps = (className, tw) => {
  return composeRenderProps(className, (className) => twMerge(tw, className));
};

const rows = [
  {
    id: 1,
    name: "RoboTech Group",
    email: "contact@rggroup.com",
    phone: "+22 101 00 01",
    group: "RoboTech Group",
    status: "Inactive",
    date_added: "23 Oct 2024",
  },
  {
    id: 2,
    name: "Cybernetic Corp",
    email: "contact@ccgroup.com",
    phone: "+22 102 00 02",
    group: "Cybernetic Corp",
    status: "Active",
    date_added: "23 Oct 2025",
  },
  {
    id: 3,
    name: "Android Associates",
    email: "contact@aagroup.com",
    phone: "+22 103 00 03",
    group: "Android Associates",
    status: "Inactive",
    date_added: "23 Oct 2026",
  },
  {
    id: 4,
    name: "Machine Minds LLC",
    email: "contact@mmlgroup.com",
    phone: "+22 104 00 04",
    group: "Machine Minds LLC",
    status: "Active",
    date_added: "23 Oct 2027",
  },
  {
    id: 5,
    name: "AI Innovations",
    email: "contact@aigroup.com",
    phone: "+22 105 00 05",
    group: "AI Innovations",
    status: "Inactive",
    date_added: "23 Oct 2023",
  },
  {
    id: 6,
    name: "Automaton Hub",
    email: "contact@ahgroup.com",
    phone: "+22 106 00 06",
    group: "Automaton Hub",
    status: "Active",
    date_added: "23 Oct 2024",
  },
  {
    id: 7,
    name: "Droid Division",
    email: "contact@ddgroup.com",
    phone: "+22 107 00 07",
    group: "Droid Division",
    status: "Inactive",
    date_added: "23 Oct 2025",
  },
  {
    id: 8,
    name: "Synthetix Solutions",
    email: "contact@ssgroup.com",
    phone: "+22 108 00 08",
    group: "Synthetix Solutions",
    status: "Active",
    date_added: "23 Oct 2026",
  },
];
