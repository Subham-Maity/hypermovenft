import React, { useState } from "react";
import logo from "../../../Assets/logo-300.png";

import { FaBars, FaTimes } from "react-icons/fa";
import { Link,useNavigate } from "react-router-dom";
import WalletManager from "../../WalletManager";
import ProfileConnect from "../../Buttons/ProfileConnect";
import { HashLink } from "react-router-hash-link";
import SwitchNetwork from "../../Buttons/SwitchNetwork";
import { IoCloseOutline } from "react-icons/io5";
const Nav = () => {
  // const navigate =useNavigate()
  const [activePage, setActivePage] = useState("home");
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false); // State for sidebar visibility
  const handleCloseSidebar = () => {
    setShowSidebar(false);
  };
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
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    // do something with searchTerm
  };

  // const chainId = useAppChainId();

  return (
    <nav className="flex items-center justify-between bg-zinc-950 p-4">
      <div className="flex flex-col items-start space-y-4 lg:space-y-0 lg:flex-row lg:items-center lg:space-x-4">
        <Link to="/">
          <div className="lg:w-auto w-[180px]">
            <img src={logo} width={250} height={250} alt="Logo" />
          </div>
        </Link>
      </div>

      <div className="hidden 2xl:flex items-center gap-4 space-x-4 justify-between">
        <ul className="flex space-x-4 text-xl font-bold items-center">
          {links.map((link) => (
            <li key={link.label}>
              <HashLink
                to={link.href}
                smooth={true}
                offset={200}
                duration={500}
                onClick={()=>setActivePage(link.label)}
                className={
                  link.active
                    ? "text-white hover:text-[#38FFDC]"
                    : "text-gray-400 hover:text-[#38FFDC]"
                }
              >
                {link.label}
              </HashLink>
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
        <div className="mb-2">
          <SwitchNetwork />
        </div>
        <div className="mb-2">
          <WalletManager />
          <ProfileConnect isText={false} />
        </div>
        <div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FaBars
            className="mb-2 w-8 h-8 text-gray-400 cursor-pointer 2xl:hidden"
            onClick={() => setShowSidebar(!showSidebar)}
          />
        </div>
      </div>

      {showSidebar && (
        <div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="z-40 fixed top-0 left-0 h-screen w-60 bg-zinc-950"
        >
          <button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute top-4 right-4 bg-transparent border-none outline-none cursor-pointer"
            onClick={handleCloseSidebar}
          >
            <IoCloseOutline size={24} color="#9ca3af" />
          </button>
          <FaTimes
            size={24}
            color="#9ca3af"
            onClick={() => setShowSidebar(false)}
            className="absolute top-4 right-4 cursor-pointer"
          />
          <ul className="flex flex-col space-y-4 mt-8 pl-8">
            {links.map((link) => (
              <li key={link.label}>
                <HashLink
                  to={link.href}
                  className={`text-xl ${
                    link.active ? "text-white" : "text-gray-400"
                  }`}
                >
                  {link.label}
                </HashLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
