import Image from "next/image";
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
    RiChromeFill
} from "react-icons/ri";

const Footer = () => {
    return (
        <footer className="bg-black text-white w-full flex items-center justify-center">
            <div className="flex w-full mx-auto py-8 px-4 justify-around items-start">
                <div className="flex flex-col items-center justify-center gap-4 mb-8">
                    <div>
                        <Image src="/logo.png" width={150} height={100} alt="Logo"/>
                    </div>
                    <div className="flex gap-2 flex-wrap w-[250px]">
                        <a href="#" className="text-hover p-2 rounded-md hover:bg-blue-700 bg-zinc-600">
                            <RiFacebookFill className="w-6 h-6"/>
                        </a>
                        <a href="#" className="text-hover p-2 rounded-md hover:bg-blue-700 bg-zinc-600">
                            <RiTwitterFill className="w-6 h-6"/>
                        </a>
                        <a href="#" className="text-hover p-2 rounded-md hover:bg-blue-700 bg-zinc-600">
                            <RiInstagramFill className="w-6 h-6"/>
                        </a>
                        <a href="#" className="text-hover p-2 rounded-md hover:bg-blue-700 bg-zinc-600">
                            <RiLinkedinBoxFill className="w-6 h-6"/>
                        </a>
                        <a href="#" className="text-hover p-2 rounded-md hover:bg-blue-700 bg-zinc-600">
                            <RiDiscordFill className="w-6 h-6"/>
                        </a>
                        <a href="#" className="text-hover p-2 rounded-md hover:bg-blue-700 bg-zinc-600">
                            <RiGithubFill className="w-6 h-6"/>
                        </a>
                        <a href="#" className="text-hover p-2 rounded-md hover:bg-blue-700 bg-zinc-600">
                            <RiYoutubeFill className="w-6 h-6"/>
                        </a>
                        <a href="#" className="text-hover p-2 rounded-md hover:bg-blue-700 bg-zinc-600">
                            <RiTelegramFill className="w-6 h-6"/>
                        </a>
                        <a href="#" className="text-hover p-2 rounded-md hover:bg-blue-700 bg-zinc-600">
                            <RiMediumFill className="w-6 h-6"/>
                        </a>
                        <a href="#" className="text-hover p-2 rounded-md hover:bg-blue-700 bg-zinc-600">
                            <RiRedditFill className="w-6 h-6"/>
                        </a>
                        <a href="#" className="text-hover p-2 rounded-md hover:bg-blue-700 bg-zinc-600">
                            <RiChromeFill className="w-6 h-6"/>
                        </a>

                    </div>
                </div>
                <div className="mb-8 md:mb-0 flex flex-col justify-start items-start">
                    <h3 className="text-xl font-bold mb-4">My Account</h3>
                    <ul className="flex flex-col gap-4 ">
                        <li>
                            <a href="#" className="text-gray-300 hover:text-violet-600 hover:underline">
                                Profile
                            </a>
                        </li>

                    </ul>
                </div>
                <div className="mb-8 md:mb-0 flex flex-col justify-start items-start">
                    <h3 className="text-xl font-bold mb-4">Resources</h3>
                    <ul className="flex flex-col gap-4 ">
                        <li>
                            <a href="#" className="text-gray-300 hover:text-violet-600 hover:underline">
                                Explore
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-300 hover:text-violet-600 hover:underline">
                                Live Auctions
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-300 hover:text-violet-600 hover:underline">
                                Activity
                            </a>
                        </li>
                    </ul>
                </div>
                <div className=" flex flex-col justify-start items-start">
                    <h3 className="text-xl font-bold mb-4">company</h3>
                    <ul className="flex flex-col gap-4 ">
                        <li>
                            <a href="#" className="text-gray-300 hover:text-violet-600 hover:underline">
                                Contact Us
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
