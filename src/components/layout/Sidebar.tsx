import React, { useState } from "react";
import { X } from "lucide-react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

type NavListItem = {
  listTitle: string;
  dropdownList: string[] | undefined;
};

const navigationList: NavListItem[] = [
  {
    listTitle: "Services",
    dropdownList: [
      "Advisory Services",
      "Asset Management",
      "Audit",
      "Planning",
      "Digital",
    ],
  },
  {
    listTitle: "Sectors",
    dropdownList: [
      "Energy",
      "Water and Waste Water",
      "Forsetry and Biodiversity",
      "Agriculture",
      "Capacity Development",
      "Carbon",
      "Plastic",
      "The Blue Economy",
      "Fashion and Textile",
    ],
  },
  {
    listTitle: "Projects",
    dropdownList: undefined,
  },
  {
    listTitle: "Resources",
    dropdownList: undefined,
  },
  {
    listTitle: "About",
    dropdownList: ["Profile", "Team", "Events and News", "Careers"],
  },
  {
    listTitle: "Contact us",
    dropdownList: undefined,
  },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: (close: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <header
        className={`fixed top-0 left-0 h-screen w-full sm:w-2/5 bg-white text-black z-50 p-4 transform transition duration-500 shadow-lg ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <div className="text-black font-bold text-2xl">
            <Link href={"#"}>CoreCarbonC</Link>
          </div>
          <div className="flex justify-end">
            <button onClick={() => onClose(true)}>
              <X className="text-black" />
            </button>
          </div>
        </div>
        <nav className="mt-10">
          <ul className="flex flex-col items-center space-y-8 sm:space-y-10 text-lg font-medium text-gray-700">
            <li className="group cursor-pointer select-none">
              <div className="flex gap-x-1 justify-center items-center hover:text-blue-500">
                <Link href={"/"}>Services</Link>
                <ChevronDown className="w-4 h-4 mt-1 hover:text-blue-500" />
              </div>
              <div className="sm:min-w-0">
                <ul
                  className="flex flex-col group-hover:max-h-max group-hover:py-2 max-h-0 w-64 md:w-80 overflow-hidden 
                       duration-500 bg-white font-normal rounded-md px-1 cursor-pointer"
                >
                  {navigationList[0].dropdownList?.map((item, index) => (
                    <li
                      key={index}
                      className="text-center text-sm px-1 py-2 shrink-0 hover:text-blue-500 duration-200"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li className="group cursor-pointer select-none">
              <div className="flex gap-x-1 justify-center items-center hover:text-blue-500">
                <Link href={"/"}>Sectors</Link>
                <ChevronDown className="w-4 h-4 mt-1 hover:text-blue-500" />
              </div>
              <div className="sm:min-w-0">
                <ul
                  className="flex flex-col group-hover:max-h-max group-hover:py-2 max-h-0 w-64 md:w-80 overflow-hidden 
                       duration-500 bg-white font-normal rounded-md px-1 cursor-pointer"
                >
                  {navigationList[1].dropdownList?.map((item, index) => (
                    <li
                      key={index}
                      className="text-center text-sm px-1 py-2 shrink-0 hover:text-blue-500 duration-200"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li className="hover:text-blue-500 duration-200 select-none">
              <Link href={"#"}>Projects</Link>
            </li>
            <li className="hover:text-blue-500 duration-200 select-none">
              <Link href={"#"}>Resources</Link>
            </li>
            <li className="group cursor-pointer select-none">
              <div className="flex gap-x-1 justify-center items-center hover:text-blue-500">
                <Link href={"/"}>About</Link>
                <ChevronDown className="w-4 h-4 mt-1 hover:text-blue-500" />
              </div>
              <div className="sm:min-w-0">
                <ul
                  className="flex flex-col group-hover:max-h-max group-hover:py-2 max-h-0 w-64 md:w-80 overflow-hidden 
                       duration-500 bg-white font-normal rounded-md px-1 cursor-pointer"
                >
                  {navigationList[4].dropdownList?.map((item, index) => (
                    <li
                      key={index}
                      className="text-center text-sm px-1 py-2 shrink-0 hover:text-blue-500 duration-200"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li className="hover:text-blue-500 duration-200 select-none">
              <Link href={"#"}>Contact us</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Sidebar;
