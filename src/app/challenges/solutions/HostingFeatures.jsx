"use client";

import { fredoka } from "@/app/fonts";
import { ListBox, ListBoxItem } from "react-aria-components";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StorageIcon from "@mui/icons-material/Storage";
import MemoryIcon from "@mui/icons-material/Memory";
import MouseIcon from "@mui/icons-material/Mouse";
import DescriptionIcon from "@mui/icons-material/Description";
import DomainVerificationIcon from "@mui/icons-material/DomainVerification";

export const HostingFeatures = () => {
  return (
    <main
      className={`min-h-dvh flex text-gray-950 justify-center 
      items-center bg-gray-100 p-4 ${fredoka.className}`}
    >
      <div className="max-w-screen-lg w-full">
        <h1 className="font-medium text-purple-500 text-center">Features</h1>
        <h2 className="text-4xl font-semibold text-center">
          Our Web Hosting Features
        </h2>
        <ListBox
          aria-label="features"
          layout="grid"
          items={features}
          className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-8"
        >
          {(item) => (
            <ListBoxItem
              className="shadow-md transition-all rounded-lg outline-none
              focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 cursor-pointer"
            >
              <div
                className="flex h-full rounded-lg border-2 flex-col gap-3 p-4 group
               hover:border-purple-600 hover:bg-purple-600 hover:text-gray-50 transition-all hover:scale-105 duration-300"
              >
                <span className="p-2 border-gray-300 border-2 rounded-lg aspect-square self-start text-purple-600 group-hover:text-gray-50">
                  {<item.Icon fontSize="large" />}
                </span>
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="opacity-70">{item.description}</p>
                <span className="mt-auto font-medium text-purple-600 group-hover:text-gray-50">
                  Learn more
                </span>
              </div>
            </ListBoxItem>
          )}
        </ListBox>
      </div>
    </main>
  );
};

const seats = Array.from({ length: 48 }, (_, index) => ({
  id: index + 1,
}));

const features = [
  {
    id: 1,
    title: "E-commerce Features",
    description:
      "Support for online transactions, shopping carts, and secure payment gateways if you plan to run an online store.",
    Icon: ShoppingCartIcon,
  },
  {
    id: 2,
    title: "Disk Space",
    description:
      "The amount of storage space provided for your website files, emails, databases, etc.",
    Icon: MemoryIcon,
  },
  {
    id: 3,
    title: "Server Location",
    description:
      "The physical location of the server hosting your website, which can affect page load times and SEO.",
    Icon: StorageIcon,
  },
  {
    id: 4,
    title: "One-Click Installers",
    description:
      "Tools like Softaculous or Fantastico that simplify the installation of popular web applications like WordPress, Joomla, or Drupal.",
    Icon: MouseIcon,
  },
  {
    id: 5,
    title: "Script Support",
    description:
      "Support for programming languages and scripts such as PHP, Python, Perl, and Ruby on Rails.",
    Icon: DescriptionIcon,
  },
  {
    id: 6,
    title: "Domain Hosting",
    description:
      "The ability to host one or more domain names on the same hosting account.",
    Icon: DomainVerificationIcon,
  },
];
