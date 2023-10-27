"use client";
import React, { useState, useEffect } from "react";
import { ChevronDown, MenuIcon } from "lucide-react";
import Link from "next/link";
import Sidebar from "./Sidebar";
import Image from "next/image";
import Logo from "public/logo1.png";
import { usePathname } from "next/navigation";
import Wrapper from "../reusable/Wrapper";
import { navigationList } from "@/lib/navList";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      // Close the sidebar if it's open when the window is resized
      if (isSidebarOpen && window.innerWidth > 768) {
        setIsSidebarOpen(false);
      }
    };

    const handleFocus = () => {
      // Close the sidebar if it's open when the window gains focus
      if (isSidebarOpen && window.innerWidth > 1024) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("focus", handleFocus);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("focus", handleFocus);
    };
  }, [isSidebarOpen]);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Wrapper>
      <header className="sticky top-0 z-50">
        <nav
          className={`py-4 px-10 h-auto backdrop-blur-md bg-slate-50 bg-opacity-90 shadow-lg`}
        >
          <div className="flex justify-between items-center">
            <div className="text-bg-gray-900 font-bold text-3xl select-none">
              <Link href={"/"} className="flex items-center">
                <Image
                  src={Logo}
                  alt="Core Carbon Logo"
                  height={50}
                  width={50}
                />
                <span className="-mb-4">oreCarbon</span>
              </Link>
            </div>

            {/* Hamburger menu for small screens */}
            <div className="block lg:hidden">
              <button onClick={() => setIsSidebarOpen(true)}>
                <MenuIcon className="text-bg-gray-900" />
              </button>
            </div>

            {/* Navbar for large screens */}
            <nav className="hidden lg:block">
              <ul className="relative flex space-x-8 sm:space-x-12 text-lg font-medium text-gray-700">
                <li className="group relative cursor-pointer select-none">
                  <div className="flex gap-x-1 items-center hover:text-[#009f7f]">
                    <Link href={"#"} className="active:text-[#009f7f]">
                      Services
                    </Link>
                    <ChevronDown className="w-4 h-4 mt-1 hover:text-[#009f7f]" />
                  </div>
                  <div className="sm:min-w-0 absolute left-3/4">
                    <ul
                      className="flex flex-col group-hover:max-h-max group-hover:py-2 max-h-0 w-52 overflow-hidden 
                   duration-500 bg-slate-50 text-xs sm:text-base font-normal rounded-md
                   group-hover:shadow-md px-1 group-hover:border border-transparent group-hover:border-slate-200 cursor-pointer"
                    >
                      {navigationList[0].dropdownList?.map((item, index) => (
                        <li
                          key={index}
                          className="px-1 py-2 shrink-0 hover:text-[#009f7f] duration-200"
                        >
                          {typeof item === "object" ? (
                            <Link
                              href={`/services/${item.path}`}
                              className={`${
                                pathname === `/services/${item.path}`
                                  ? "text-[#009f7f]"
                                  : ""
                              }`}
                            >
                              {item.title}
                            </Link>
                          ) : (
                            <Link href={`/`}>{item}</Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
                <li className="group relative cursor-pointer select-none">
                  <div className="flex gap-x-1 items-center hover:text-[#009f7f]">
                    <Link href={"#"}>Sectors</Link>
                    <ChevronDown className="w-4 h-4 mt-1 hover:text-[#009f7f]" />
                  </div>
                  <div className="sm:min-w-0 absolute left-3/4">
                    <ul
                      className="flex flex-col group-hover:max-h-max group-hover:py-2 max-h-0 w-64 overflow-hidden 
                   duration-500 bg-slate-50 text-xs sm:text-base font-normal rounded-md
                   group-hover:shadow-md px-1 group-hover:border border-transparent group-hover:border-slate-200 cursor-pointer"
                    >
                      {navigationList[1].dropdownList?.map((item, index) => (
                        <li
                          key={index}
                          className="px-1 py-2 shrink-0 hover:text-[#009f7f] duration-200"
                        >
                          {typeof item === "object" ? (
                            <Link
                              href={`/sectors/${item.path}`}
                              className={`${
                                pathname === `/sectors/${item.path}`
                                  ? "text-[#009f7f]"
                                  : ""
                              }`}
                            >
                              {item.title}
                            </Link>
                          ) : (
                            <Link href={"/"}>{item}</Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
                <li className="group relative cursor-pointer select-none">
                  <div className="flex gap-x-1 items-center hover:text-[#009f7f]">
                    <Link
                      href={"/about"}
                      className={`${
                        pathname === "/about" ? "text-[#009f7f]" : ""
                      }`}
                    >
                      About
                    </Link>
                  </div>
                </li>
                <li className="hover:text-[#009f7f] duration-200 select-none">
                  <Link
                    href={"/contact"}
                    className={`${
                      pathname === "/contact" ? "text-[#009f7f]" : ""
                    }`}
                  >
                    Contact us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Sidebar for small screens */}
          <Sidebar isOpen={isSidebarOpen} onClose={handleSidebarToggle} />
        </nav>
      </header>
    </Wrapper>
  );
}
