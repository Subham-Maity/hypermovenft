import React from "react";
import {
  RiFacebookFill,
  RiTwitterFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiDiscordFill,
  RiGithubFill,
  RiYoutubeFill,
  RiTelegramFill,
  RiMediumFill,
  RiRedditFill,
  RiChromeFill,
} from "react-icons/ri";
import logo from "../../Assets/logo-300.png";
import "./Foorter.css";

const Footer = () => {
  return (
    <div>
      <footer className="flex-col p-6 gap-8 min-w-ful pt-6 bg-zinc-900 text-white w-full flex items-center justify-center">
        <div className="grid grid-cols-4 gap-8 w-full mx-auto py-8 px-4">
          <div className="col-span-4 md:col-span-1 flex flex-col items-center justify-center gap-4 mb-8">
            <div>
              <img src={logo} width={150} height={100} alt="Logo" />
            </div>
            <div className="footerIcons grid grid-cols-2 md:grid-cols-5 gap-2">
              <a href="#" className="text-hover p-2 rounded-md ">
                <RiFacebookFill className="w-6 h-6" />
              </a>
              <a href="#" className="text-hover p-2 rounded-md ">
                <RiTwitterFill className="w-6 h-6" />{" "}
              </a>
              <a href="#" className="text-hover p-2 rounded-md ">
                <RiInstagramFill className="w-6 h-6" />
              </a>
              <a href="#" className="text-hover p-2 rounded-md ">
                <RiLinkedinBoxFill className="w-6 h-6" />
              </a>
              <a href="#" className="text-hover p-2 rounded-md ">
                <RiDiscordFill className="w-6 h-6" />
              </a>
              <a href="#" className="text-hover p-2 rounded-md ">
                <RiGithubFill className="w-6 h-6" />
              </a>
              <a href="#" className="text-hover p-2 sm:4 rounded-md ">
                <RiYoutubeFill className="w-6 h-6" />
              </a>
              <a href="#" className="text-hover p-2 rounded-md ">
                <RiTelegramFill className="w-6 h-6" />
              </a>
              <a href="#" className="text-hover p-2 rounded-md ">
                <RiMediumFill className="w-6 h-6" />
              </a>
              <a href="#" className="text-hover p-2 rounded-md ">
                <RiRedditFill className="w-6 h-6" />
              </a>
              <a href="#" className="text-hover p-2 rounded-md ">
                <RiChromeFill className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="w-full contents foot">
            <div className="col-span-auto md:col-span-auto flex flex-col justify-start items-start">
              <h3 className="h3 text-xl font-bold mb-auto">My Account</h3>
              <ul className="flex flex-col gap-auto ">
                <li>
                  <a
                    href="#"
                    className="text-gray-auto hover:text-violet-auto hover:underline"
                  >
                    Profile
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-auto md:col-span-auto flex flex-col justify-start items-start">
              <h3 className=" h3 text-xl font-bold mb-auto">Resources</h3>
              <ul className="flex flex-col gap-auto ">
                <li>
                  <a
                    href="#"
                    className="text-gray-auto hover:text-violet-auto hover:underline"
                  >
                    Explore{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-auto hover:text-violet-auto hover:underline"
                  >
                    Live Auctions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-auto hover:text-violet-auto hover:underline"
                  >
                    Activity
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-auto md:col-span-auto flex flex-col justify-start items-start">
              <h3 className="h3 text-xl font-bold mb-auto">company</h3>
              <ul className="flex flex-col gap-auto ">
                <li>
                  <a
                    href="#"
                    className="text-gray-auto hover:text-violet-auto hover:underline"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
