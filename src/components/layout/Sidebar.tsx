import React, { useState } from "react";
import { X } from "lucide-react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Logo from "public/logo1.png";
import { usePathname } from "next/navigation";
import { navigationList } from "@/lib/navList";

interface SidebarProps {
  isOpen: boolean;
  onClose: (close: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const handleLinkClick = () => {
    onClose(false); // Close the sidebar when a link is clicked
  };
  return (
    <>
      <header
        className={`block lg:hidden fixed top-0 left-0 h-screen w-full sm:w-2/5 bg-slate-50 text-gray-950 z-50 p-4 transform transition duration-500 shadow-lg ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <div className="text-gray-950 font-bold text-2xl select-none">
            <Link
              href={"/"}
              onClick={handleLinkClick}
              className="flex items-center"
            >
              <Image src={Logo} alt="Core Carbon Logo" height={50} width={50} />
              <span className="-mb-4">oreCarbon</span>
            </Link>
          </div>
          <div className="flex justify-end">
            <button onClick={() => onClose(true)}>
              <X
                className="text-gray-950
              "
              />
            </button>
          </div>
        </div>
        <nav className="mt-10">
          <ul className="flex flex-col items-center space-y-8 sm:space-y-10 text-lg font-medium text-gray-700">
            <li className="group cursor-pointer select-none">
              <div className="flex gap-x-1 justify-center items-center hover:text-[#009f7f]">
                <Link href={"#"}>Services</Link>
                <ChevronDown className="w-4 h-4 mt-1 hover:text-[#009f7f]" />
              </div>
              <div className="sm:min-w-0">
                <ul
                  className="flex flex-col group-hover:max-h-max group-hover:py-2 max-h-0 w-64 md:w-80 overflow-hidden 
                       duration-500 bg-slate-50 font-normal rounded-md px-1 cursor-pointer"
                >
                  {navigationList[0].dropdownList?.map((item, index) => (
                    <li
                      key={index}
                      className="text-center text-sm px-1 py-2 shrink-0 hover:text-[#009f7f] duration-200"
                    >
                      {typeof item === "object" ? (
                        <Link
                          href={`/services/${item.path}`}
                          className={`${
                            pathname === `/services/${item.path}`
                              ? "text-[#009f7f]"
                              : ""
                          }`}
                          onClick={handleLinkClick}
                        >
                          {item.title}
                        </Link>
                      ) : (
                        <Link href={`/`} onClick={handleLinkClick}>
                          {item}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li className="group cursor-pointer select-none">
              <div className="flex gap-x-1 justify-center items-center hover:text-[#009f7f]">
                <Link href={"#"}>Sectors</Link>
                <ChevronDown className="w-4 h-4 mt-1 hover:text-[#009f7f]" />
              </div>
              <div className="sm:min-w-0">
                <ul
                  className="flex flex-col group-hover:max-h-max group-hover:py-2 max-h-0 w-64 md:w-80 overflow-hidden 
                       duration-500 bg-slate-50 font-normal rounded-md px-1 cursor-pointer"
                >
                  {navigationList[1].dropdownList?.map((item, index) => (
                    <li
                      key={index}
                      className="text-center text-sm px-1 py-2 shrink-0 hover:text-[#009f7f] duration-200"
                    >
                      {typeof item === "object" ? (
                        <Link
                          href={`/sectors/${item.path}`}
                          className={`${
                            pathname === `/sectors/${item.path}`
                              ? "text-[#009f7f]"
                              : ""
                          }`}
                          onClick={handleLinkClick}
                        >
                          {item.title}
                        </Link>
                      ) : (
                        <Link href={`/`} onClick={handleLinkClick}>
                          {item}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li className="group cursor-pointer select-none">
              <div className="flex gap-x-1 justify-center items-center hover:text-[#009f7f]">
                <Link
                  href={"/about"}
                  className={`${pathname === "/about" ? "text-[#009f7f]" : ""}`}
                  onClick={handleLinkClick}
                >
                  About
                </Link>
              </div>
            </li>
            <li className="hover:text-[#009f7f] duration-200 select-none">
              <Link href={"/contact"} onClick={handleLinkClick}>
                Contact us
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Sidebar;
