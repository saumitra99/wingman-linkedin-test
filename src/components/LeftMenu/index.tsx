"use client"; // Mark the file as a client component

import React, { useState } from "react";
import { usePathname } from "next/navigation"; // Use usePathname instead of useRouter
import Link from "next/link";
import CCText from "@/atom/CCText";
import Spacer from "@/atom/Spacer";
import Image from "next/image";
import WingmanLogo from "@/assets/logo/wingman-coloured-logo.svg";
import CCDivider from "@/atom/CCDivider";
import { MdHomeFilled } from "react-icons/md";
import { ColorTheme } from "@/utils/ColorUtils";
import { PiChatTeardropFill } from "react-icons/pi";
import { PiUsersFourFill } from "react-icons/pi";
import { IoIosSettings } from "react-icons/io";

function LeftMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  if (!pathname) {
    return null;
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const bottomMenuItems = [
    {
      name: "",
      path: "/settings",
      icon: (color = ColorTheme?.primary?.aqua) => (
        <IoIosSettings size={24} color={color} />
      ),
    },
    // {
    //   name: "",
    //   path: "/chat",
    //   icon: (color = ColorTheme?.primary?.aqua) => (
    //     <PiChatTeardropFill size={24} color={color} />
    //   ),
    // },
    // {
    //   name: "",
    //   path: "/users",
    //   icon: (color = ColorTheme?.primary?.aqua) => (
    //     <PiUsersFourFill size={24} color={color} />
    //   ),
    // },
    // Add more menu items as needed
  ];
  const topMenuItems = [
    {
      name: "",
      path: "/",
      icon: (color = ColorTheme?.primary?.aqua) => (
        <MdHomeFilled size={24} color={color} />
      ),
    },
    {
      name: "",
      path: "/chat",
      icon: (color = ColorTheme?.primary?.aqua) => (
        <PiChatTeardropFill size={24} color={color} />
      ),
    },
    {
      name: "",
      path: "/users",
      icon: (color = ColorTheme?.primary?.aqua) => (
        <PiUsersFourFill size={24} color={color} />
      ),
    },
    // Add more menu items as needed
  ];
  // wingman-coloured-logo
  return (
    <>
      {/* <button
        className="fixed top-4 left-4 z-50 block lg:hidden"
        onClick={toggleMenu}
      >
        <FiMenu size={24} />
      </button> */}

      <div
        className=" lg:flex flex-col w-30 h-full p-3.5 bg-brand-primary text-white fixed"
        style={{ display: "flex !important", justifyContent: "space-between" }}
      >
        <div className=" lg:flex flex-col">
          <Spacer spacing={20} />
          <Image
            src={WingmanLogo}
            alt="circle-chess"
            layout="responsive"
            width={50}
            height={50}
          />
          <Spacer spacing={30} />
          <CCDivider styleType={2} />
          <Spacer spacing={20} />
          {topMenuItems?.map((item, index) => (
            <Link href={item.path} key={index}>
              <div
                className={`flex flex-col justify-center items-center ${
                  item.name && "space-x-2 gap-2"
                } mb-4 p-2 rounded-lg cursor-pointer ${
                  pathname === item.path
                    ? //   ? "bg-grey text-white"
                      "bg-white"
                    : "text-gray-400 hover:bg-gray-700 hover:text-white"
                }`}
              >
                {item?.icon?.(
                  pathname === item.path
                    ? ColorTheme?.primary?.darkAqua
                    : ColorTheme?.primary?.lightAqua
                )}
                {item?.name && (
                  <CCText className="text-xs text-white">{item?.name}</CCText>
                )}
              </div>
            </Link>
          ))}
        </div>
        <div className=" lg:flex flex-col">
          {bottomMenuItems?.map((item) => (
            <Link href={item.path} key={item.name}>
              <div
                className={`flex flex-col justify-center items-center ${
                  item.name && "space-x-2 gap-2"
                } mb-4 p-2 rounded-lg cursor-pointer ${
                  pathname === item.path
                    ? //   ? "bg-grey text-white"
                      "bg-white"
                    : "text-gray-400 hover:bg-gray-700 hover:text-white"
                }`}
              >
                {item?.icon?.(
                  pathname === item.path
                    ? ColorTheme?.primary?.darkAqua
                    : ColorTheme?.primary?.lightAqua
                )}
                {item?.name && (
                  <CCText className="text-xs text-white">{item?.name}</CCText>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-gray-900 bg-opacity-90 z-50">
          <div className="flex flex-col w-64 h-full p-4 text-white">
            {/* Close button */}
            <button className="self-end text-white mb-8" onClick={toggleMenu}>
              Close
            </button>
            {topMenuItems.map((item) => (
              <Link href={item.path} key={item.name}>
                <div
                  className={`flex items-center space-x-2 mb-4 p-2 rounded-md cursor-pointer ${
                    pathname === item.path
                      ? "bg-blue-500 text-white"
                      : "text-gray-400 hover:bg-gray-700 hover:text-white"
                  }`}
                  onClick={toggleMenu} // Close modal when navigating
                >
                  {item?.icon?.(pathname === item.path ? "#FACF47" : "white")}
                  {item?.name && (
                    <CCText className="text-xs text-white">{item?.name}</CCText>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default LeftMenu;
