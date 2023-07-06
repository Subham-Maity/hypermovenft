"use client"

import React, {useState} from "react";
import {useRouter} from "next/navigation";
import Image from "next/image";
import {FaSearch, FaBars} from "react-icons/fa";
import Link from "next/link";
import logo from "../../../public/logo.png";
import {FaTimes} from "react-icons/fa";
import {ConnectWallet} from "@thirdweb-dev/react"


const Navbar = () => {
    const [activePage, setActivePage] = useState("home");
    const [searchTerm, setSearchTerm] = useState("");
    const [showSearch, setShowSearch] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false); // State for sidebar visibility
    const router = useRouter();

    const links = [
        {
            label: "Home",
            href: "/",
            active: activePage === "home",
        },
        {
            label: "Consumables",
            href: "/collection/consumables-164",
            active: activePage === "consumables",
        },
        {
            label: "Collectibles",
            href: "/collection/collectables-977",
            active: activePage === "collectibles",
        },
        {
            label: "In Game Assets",
            href: "/collection/in-game-assets-348",
            active: activePage === "in-game-assets",
        },
        {
            label: "Lend/Rend",
            href: "/lend-rend",
            active: activePage === "lend-rend",
        },
        {
            label: "Auction",
            href: "/auction",
            active: activePage === "auction",
        },
        {
            label: "Contact",
            href: "/contact",
            active: activePage === "contact",
        },
    ];

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // do something with searchTerm
    };

    return (
        <nav className="flex items-center justify-between bg-zinc-950 p-4">
            <div className="flex justify-center items-center space-x-4">
                <FaBars
                    size={24}
                    color="#9ca3af"
                    onClick={() => setShowSidebar(!showSidebar)} // Toggle sidebar visibility
                    className="cursor-pointer 2xl:hidden"
                />
                <div className="lg:w-auto w-[100px]">
                    <Link href="/">
                        <Image src={logo} width={250} height={250} alt="Logo" />
                    </Link>
                </div>
            </div>
            <div className="hidden 2xl:flex items-center gap-4 space-x-4 justify-between">
                <ul className="flex space-x-4 text-xl font-bold items-center">
                    {links.map((link) => (
                        <li key={link.label}>
                            <Link
                                href={link.href}
                                className={
                                    link.active
                                        ? "text-white hover:text-[#38FFDC]"
                                        : "text-gray-400 hover:text-[#38FFDC]"
                                }
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex items-center space-x-4 ">
                {showSearch && (
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search..."
                            className="rounded-md px-2 py-1 bg-gray-700 text-white focus:outline-none focus:border-blue-500 text-xl"
                        />
                    </form>
                )}
                <span className="hidden lg:flex">
          <FaSearch
              size={32}
              color={showSearch ? "#ffffff" : "#9ca3af"}
              onClick={() => setShowSearch(!showSearch)}
          />
        </span>
                <ConnectWallet/>
            </div>

            {/* Sidebar */}
            {showSidebar && (
                <div className="fixed top-0 left-0 h-screen w-60 bg-zinc-950 transition-transform duration-300 transform -translate-x-1">
                    <FaTimes
                        size={24}
                        color="#9ca3af"
                        onClick={() => setShowSidebar(false)}
                        className="absolute top-4 right-4 cursor-pointer"
                    />
                    <ul className="flex flex-col space-y-4 mt-8 pl-8">
                        {links.map((link) => (
                            <li key={link.label}>
                                <Link
                                    href={link.href}
                                    className={`text-xl ${
                                        link.active ? "text-white" : "text-gray-400"
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;