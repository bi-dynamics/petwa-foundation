"use client";

import Image from "next/image";

import PETWA_LOGO from "../../public/Petwa-Foundation-logo.jpg";
import Link from "next/link";
import {
  ChevronDown,
  ChevronUp,
  Mail,
  MapPin,
  MenuIcon,
  Phone,
  XIcon,
} from "lucide-react";
import { Button } from "./ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { useState } from "react";
import { usePathname } from "next/navigation";

interface hyperlinksType {
  title: string;
  href: string;
  dropdown?: { title: string; href: string }[];
  CTA?: boolean;
}

const hyperlinks: hyperlinksType[] = [
  {
    title: "HOME",
    href: "/",
  },
  {
    title: "WHO WE ARE",
    href: "/about-petwa-foundation",
    dropdown: [
      {
        title: "ABOUT US",
        href: "/about-petwa-foundation",
      },
      {
        title: "OUR TEAM",
        href: "/",
      },
    ],
  },
  {
    title: "WHAT WE DO",
    href: "/about-petwa-foundation",
    dropdown: [],
  },
  {
    title: "PROJECTS",
    href: "/about-petwa-foundation",
    dropdown: [],
  },
  {
    title: "CONTACT",
    href: "/contact-petwa-foundation",
  },

  {
    title: "DONATE",
    href: "/contact-petwa-foundation",
    CTA: true,
  },
];

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openWhoDropdown, setOpenWhoDropdown] = useState(false);
  const [openWhatDropdown, setOpenWhatDropdown] = useState(false);
  const [openProjectsDropdown, setOpenProjectsDropdown] = useState(false);

  const isDesktop = useMediaQuery("(min-width: 769px)");
  return isDesktop ? (
    <nav className="sticky top-0 z-50 bg-white w-full h-fit font-montserrat shadow-lg">
      <div className="md:px-[64px] lg:px-[100px] px-4 sm:px-[64px] py-4 flex justify-between items-center">
        <Link href="/">
          <Image
            src={PETWA_LOGO}
            alt="BPIH LOGO"
            height={1454}
            width={2641}
            className="w-full max-w-32 h-auto"
          />
        </Link>
        <div className="flex gap-4 items-center justify-center text-[#4d4d4d]">
          {hyperlinks.map((link, index) => {
            if (link.dropdown) {
              return (
                <div key={index} className="relative group">
                  <Link
                    href={link.href}
                    className="hidden md:flex font-medium gap-0 items-center justify-center transition-colors hover:text-petwaGreen"
                  >
                    {link.title}
                    <ChevronDown
                      size={24}
                      className=" text-benzelRed"
                      onClick={() => setOpenDropdown((prev) => !prev)}
                    />
                  </Link>
                  <ul className="md:group-hover:block transition-all bg-petwaGreen text-sm absolute hidden text-white w-40 space-y-2 py-4 p-2 rounded-md">
                    {link.dropdown?.map((dropdownLink, dropdownIndex) => {
                      return (
                        <Link
                          key={dropdownIndex}
                          href={dropdownLink.href as string}
                          className="hidden md:block hover:pl-2 transition-all hover:text-petwaPink"
                        >
                          {dropdownLink.title as string}
                        </Link>
                      );
                    })}
                  </ul>
                </div>
              );
            } else if (!link.CTA) {
              return (
                <Link
                  key={index}
                  href={link.href}
                  className="hidden md:block font-medium transition-colors hover:text-petwaGreen"
                >
                  {link.title}
                </Link>
              );
            }
          })}
        </div>
        <div className="flex gap-4 items-center justify-center font-montserrat font-bold text-white">
          {hyperlinks.map((link, index) => {
            if (link.CTA) {
              return (
                <Link key={index} href="/contact-us">
                  <Button
                    size="lg"
                    className="w-fit bg-petwaPink rounded-full text-base flex items-center justify-center gap-2 py-[32px] px-[18px] font-medium"
                  >
                    DONATE
                    <div className="bg-white rounded-full p-[10px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#D9A28C"
                          d="M12.455 2.309L12 2.076l-.455.233a12 12 0 0 0-3.09 2.265A14 14 0 0 1 12 7.202a14 14 0 0 1 3.544-2.628a12 12 0 0 0-3.089-2.265m-1.756 6.425a11.98 11.98 0 0 0-6.518-3.536L3 4.98V13a9 9 0 0 0 5.697 8.374A14 14 0 0 1 8 17c0-3.092 1.002-5.95 2.7-8.266M21 4.981l-1.18.217C14.232 6.224 10 11.117 10 17c0 1.536.29 3.007.817 4.36l.24.615c.314.01.629.025.943.025a9 9 0 0 0 9-9z"
                        ></path>
                      </svg>
                    </div>
                  </Button>
                </Link>
              );
            }
          })}
        </div>
      </div>
    </nav>
  ) : (
    <Drawer direction="right">
      <div className=" z-50 p-4 sticky top-0 px-8 bg-white shadow-md w-full flex justify-between items-center">
        <Link className="w-full" href="/">
          <Image
            src={PETWA_LOGO}
            alt="BPIH LOGO"
            height={151}
            width={180}
            className=" w-16 h-auto"
          />
        </Link>
        <DrawerTrigger className="w-fit rounded-xl p-1 border-petwaGreen flex items-center border justify-end">
          <MenuIcon size={32} className="text-petwaGreen" />
        </DrawerTrigger>
      </div>
      <DrawerContent className="bg-white border border-benzelBlueShade">
        <DrawerHeader className="flex flex-col">
          <DrawerClose className=" self-end">
            <XIcon size={32} className="text-petwaGreen" />
          </DrawerClose>
          <DrawerTitle>
            <div className="w-full">
              <Image
                src={PETWA_LOGO}
                alt="BPIH LOGO"
                height={512}
                width={512}
                className="w-full h-auto"
              />
            </div>
          </DrawerTitle>
          <DrawerDescription className="flex flex-col items-start justify-start mt-4 gap-4 text-petwaGreen font-semibold text-2xl">
            <Link href="/">HOME</Link>

            <Link
              href="/about-petwa-foundation"
              className="flex items-center justify-center"
            >
              WHO WE ARE
              {openWhoDropdown ? (
                <ChevronUp
                  size={32}
                  className="m-2 text-benzelRed"
                  onClick={() => setOpenWhoDropdown((prev) => !prev)}
                />
              ) : (
                <ChevronDown
                  size={32}
                  className="m-2 text-benzelRed"
                  onClick={() => setOpenWhoDropdown((prev) => !prev)}
                />
              )}
            </Link>
            {openWhoDropdown && (
              <ul className="text-base text-petwaGreen flex flex-col gap-2 items-start justify-center text-left">
                <Link
                  className="active:text-petwaPink"
                  href="/about-petwa-foundation"
                >
                  About Us
                </Link>
                <Link className="active:text-benzelRed" href="/">
                  Our Team
                </Link>
              </ul>
            )}
            <Link
              href="/about-petwa-foundation"
              className="flex items-center justify-center"
            >
              WHAT WE DO
              {openWhatDropdown ? (
                <ChevronUp
                  size={32}
                  className="m-2 text-benzelRed"
                  onClick={() => setOpenWhatDropdown((prev) => !prev)}
                />
              ) : (
                <ChevronDown
                  size={32}
                  className="m-2 text-benzelRed"
                  onClick={() => setOpenWhatDropdown((prev) => !prev)}
                />
              )}
            </Link>
            {openDropdown && (
              <ul className="text-base text-petwaGreen flex flex-col gap-2 items-start justify-center text-left"></ul>
            )}
            <Link
              href="/about-petwa-foundation"
              className="flex items-center justify-center"
            >
              PROJECTS
              {openProjectsDropdown ? (
                <ChevronUp
                  size={32}
                  className="m-2 text-benzelRed"
                  onClick={() => setOpenProjectsDropdown((prev) => !prev)}
                />
              ) : (
                <ChevronDown
                  size={32}
                  className="m-2 text-benzelRed"
                  onClick={() => setOpenProjectsDropdown((prev) => !prev)}
                />
              )}
            </Link>
            {openDropdown && (
              <ul className="text-base text-petwaGreen flex flex-col gap-2 items-start justify-center text-left"></ul>
            )}

            <Link href="/contact-petwa-foundation">CONTACT</Link>
            <Link href="/contact-petwa-foundation">
              <Button
                size="lg"
                className="w-fit mt-4 bg-petwaPink rounded-full text-base flex items-center justify-center gap-2 py-[32px] px-[18px] font-medium"
              >
                DONATE TODAY
                <div className="bg-white rounded-full p-[10px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#D9A28C"
                      d="M12.455 2.309L12 2.076l-.455.233a12 12 0 0 0-3.09 2.265A14 14 0 0 1 12 7.202a14 14 0 0 1 3.544-2.628a12 12 0 0 0-3.089-2.265m-1.756 6.425a11.98 11.98 0 0 0-6.518-3.536L3 4.98V13a9 9 0 0 0 5.697 8.374A14 14 0 0 1 8 17c0-3.092 1.002-5.95 2.7-8.266M21 4.981l-1.18.217C14.232 6.224 10 11.117 10 17c0 1.536.29 3.007.817 4.36l.24.615c.314.01.629.025.943.025a9 9 0 0 0 9-9z"
                    ></path>
                  </svg>
                </div>
              </Button>
            </Link>
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter></DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
