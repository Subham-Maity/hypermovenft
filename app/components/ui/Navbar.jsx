"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import logo from "../../../public/logo.png"
import WalletConnect from "../WalletConnect/WalletConnect"

const Navbar = () => {
  const [activePage, setActivePage] = useState("home");
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const router = useRouter();

  const links = [
    {
      label: "Home",
      href: "/",
      active: activePage === "home",
    },
    {
      label: "Consumables",
      href: "/consumables",
      active: activePage === "consumables",
    },
    {
      label: "Collectibles",
      href: "/collectibles",
      active: activePage === "collectibles",
    },
    {
      label: "In Game Assets",
      href: "/in-game-assets",
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

  const handleSearch = (e) => {
    e.preventDefault();
    // do something with searchTerm
  };

  return (
    <nav className="flex items-center justify-between bg-zinc-950 p-4">
      <div className="flex items-center space-x-4 justify-between">
        <Link href="/">
          <Image src={logo} width={250} height={250} alt="Logo" />
        </Link>
        <ul className="flex space-x-4 text-xl font-bold items-center">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={
                  link.active
                    ? "text-white hover:text-gray-300"
                    : "text-gray-400 hover:text-white"
                }
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center space-x-4">
        {showSearch && (
          <form onSubmit={handleSearch}>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..."
              className="rounded-md px-2 py-1 bg-gray-700 text-white focus:outline-none focus:border-blue-500 text-xl"
            />
            <button
              type="submit"
              className="rounded-md px-2 py-1 bg-blue-500 text-white hover:bg-blue-600 focus:outline-none text-xl"
            >
              Search
            </button>
          </form>
        )}
        <FaSearch
          size={32}
          color={showSearch ? "#ffffff" : "#9ca3af"}
          onClick={() => setShowSearch(!showSearch)}
        />
       <WalletConnect/>
      </div>
    </nav>
  );
};

export default Navbar