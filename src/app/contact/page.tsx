import React from "react";
import TetimonaialBG from "public/images/tetimonial_image.webp";
import Title from "@/components/reusable/Title";
import Link from "next/link";
import { LinkedinIcon } from "lucide-react";
import { MailIcon } from "lucide-react";
import { TwitterIcon } from "lucide-react";
import { YoutubeIcon } from "lucide-react";
import Wrapper from "@/components/reusable/Wrapper";

export default function Contact() {
  return (
    <Wrapper>
      <section>
        <Title imgSrc={TetimonaialBG} title="Contact" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-4 px-10 my-16 ">
          <div className="flex flex-col justify-between items-start gap-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-3">
                We&apos;re eager to collaborate with you.
              </h2>
              <p className="text-base md:text-xl">
                Fill in the detail and get in touch with us.
              </p>
            </div>

            <div>
              <span className="text-2xl font-semibold">Address:</span>{" "}
              <div className="mb-6 ml-4">
                <address className="text-lg lg:text-2xl">
                  25-5230 Gleb Erin Drive, Mississauga ON L5M5Z7, Canada
                </address>
                <Link
                  href={
                    "https://www.google.com/maps/place/5230+Glen+Erin+Dr+%2325,+Mississauga,+ON+L5M+5Z7,+Canada/@43.55703,-79.7206999,17z/data=!3m1!4b1!4m6!3m5!1s0x882b41f5814b1397:0x2c934cbbf712fe8c!8m2!3d43.55703!4d-79.7206999!16s%2Fg%2F11spwlx498?entry=ttu"
                  }
                  target="_blank"
                  className="hover:text-[#009f7f] underline duration-300 italic"
                >
                  Click to see our location
                </Link>
              </div>
              <span className="text-2xl font-semibold">Follow us on</span>{" "}
              <ul className="flex gap-x-5 mt-2 ml-4">
                <li className="group border border-gray-600 rounded-full p-2 hover:bg-[#009f7f] transition-colors duration-300">
                  <Link href={"#"} target="_blank">
                    <MailIcon className="group-hover:text-white" />
                  </Link>
                </li>
                <li className="group border border-gray-600 rounded-full p-2 hover:bg-[#009f7f] transition-colors duration-300">
                  <Link href={"#"} target="_blank">
                    <LinkedinIcon className="group-hover:text-white" />
                  </Link>
                </li>
                <li className="group border border-gray-600 rounded-full p-2 hover:bg-[#009f7f] transition-colors duration-300">
                  <Link href={"#"} target="_blank">
                    <TwitterIcon className="group-hover:text-white" />
                  </Link>
                </li>
                <li className="group border border-gray-600 rounded-full p-2 hover:bg-[#009f7f] transition-colors duration-300">
                  <Link href={"#"} target="_blank">
                    <YoutubeIcon className="group-hover:text-white" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <form>
            <div className="grid md:grid-cols-2 md:gap-6 mb-10">
              <div className="relative z-0 w-full group mb-10 md:mb-0">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#009f7f] focus:outline-none focus:ring-0 focus:border-[#009f7f] peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009f7f] peer-focus:dark:text-[#009f7f] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Name
                </label>
              </div>
              <div className="relative z-0 w-full group md:mb-0">
                <input
                  type="text"
                  name="company_name"
                  id="company_name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#009f7f] focus:outline-none focus:ring-0 focus:border-[#009f7f] peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="company_name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009f7f] peer-focus:dark:text-[#009f7f] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Company name
                </label>
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6 mb-10">
              <div className="relative z-0 w-full group mb-10 md:mb-0">
                <select
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 dark:text-white dark:border-gray-600 dark:focus:border-[#009f7f] focus:outline-none focus:ring-0 focus:border-[#009f7f] peer"
                  required
                >
                  <option
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009f7f] peer-focus:dark:text-[#009f7f] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    value=""
                  >
                    Select Country Code
                  </option>
                  <option value="1">+1 (USA)</option>
                  <option value="44">+44 (UK)</option>
                  <option value="92">+92 (PAK)</option>
                  {/* Add more country codes */}
                </select>
              </div>
              <div className="relative z-0 w-full group">
                <input
                  type="tel"
                  // pattern=""
                  // [0-9]{3}-[0-9]{3}-[0-9]{4}
                  name="floating_phone"
                  id="floating_phone"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#009f7f] focus:outline-none focus:ring-0 focus:border-[#009f7f] peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_phone"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009f7f] peer-focus:dark:text-[#009f7f] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Phone number
                </label>
              </div>
            </div>

            <div className="relative z-0 w-full group mb-10">
              <input
                type="email"
                name="email"
                id="email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#009f7f] focus:outline-none focus:ring-0 focus:border-[#009f7f] peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009f7f] peer-focus:dark:text-[#009f7f] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email
              </label>
            </div>
            <div className="relative z-0 w-full group mb-10">
              <textarea
                name="message"
                id="message"
                cols={20}
                rows={5}
                placeholder=" "
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#009f7f] focus:outline-none focus:ring-0 focus:border-[#009f7f] peer"
              ></textarea>
              <label
                htmlFor="message"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009f7f] peer-focus:dark:text-[#009f7f] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Your message
              </label>
            </div>
            <button
              type="submit"
              className="bg-[#009f7f] text-slate-50 text-sm sm:text-base px-4 py-2 sm:px-6 font-semibold tracking-wide hover:scale-110 duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </Wrapper>
  );
}
