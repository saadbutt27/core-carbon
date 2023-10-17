import React from "react";
import Link from "next/link";
import { LinkedinIcon } from "lucide-react";
import { TwitterIcon } from "lucide-react";
import { YoutubeIcon } from "lucide-react";
import Image from "next/image";
import Logo from "public/logo1.png";

const navigationList = [
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
  },
  {
    listTitle: "Resources",
  },
  {
    listTitle: "About",
    dropdownList: ["Profile", "Team", "Events and News", "Careers"],
  },
  {
    listTitle: "Contact us",
  },
];

export default function Footer() {
  return (
    <footer className="bg-green-100">
      <div className="grid md:grid-cols-2 lg:grid-cols-[auto,1fr,1fr,1fr] md:justify-items-center gap-12 px-10 py-20">
        <div className="flex justify-center lg:items-start items-center text-gray-950 text-3xl font-bold">
          <Link href={"/"} className="flex items-center">
            <Image src={Logo} alt="Core Carbon Logo" height={50} width={50} />
            <span className="-mb-4">oreCarbon</span>
          </Link>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">
            {navigationList[0].listTitle}
          </h3>
          <ul>
            {navigationList[0].dropdownList?.map((item, index) => (
              <li
                key={index}
                className="text-base ml-5 mb-2 hover:underline duration-300"
              >
                <Link href={"#"}>{item}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">
            {navigationList[1].listTitle}
          </h3>
          <ul>
            {navigationList[1].dropdownList?.map((item, index) => (
              <li
                key={index}
                className="text-base ml-5 mb-2 hover:underline duration-300"
              >
                <Link href={"#"}>{item}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Social Media</h3>
            <ul className="flex gap-x-5">
              <li className="group border border-gray-600 rounded-full p-2 hover:bg-bg-gray-900 transition-colors duration-300">
                <Link href={"#"}>
                  <LinkedinIcon className="group-hover:text-white" />
                </Link>
              </li>
              <li className="group border border-gray-600 rounded-full p-2 hover:bg-bg-gray-900 transition-colors duration-300">
                <Link href={"#"}>
                  <TwitterIcon className="group-hover:text-white" />
                </Link>
              </li>
              <li className="group border border-gray-600 rounded-full p-2 hover:bg-gray-950 transition-colors duration-300">
                <Link href={"#"}>
                  <YoutubeIcon className="group-hover:text-white" />
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul>
              <li className="text-base ml-5 mb-2 hover:underline duration-300">
                <Link href={"#"}>About</Link>
              </li>
              <li className="text-base ml-5 mb-2 hover:underline duration-300">
                <Link href={"#"}>Projects</Link>
              </li>
              <li className="text-base ml-5 mb-2 hover:underline duration-300">
                <Link href={"#"}>Events & News</Link>
              </li>
              <li className="text-base ml-5 mb-2 hover:underline duration-300">
                <Link href={"#"}>Careers</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray-950 text-white flex md:flex-row flex-col justify-between items-center px-10 py-6">
        <p>&copy; 2023 CoreCarbonC. All rights reserved.</p>
        <Link href={"#"} className="hover:underline duration-300">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}
