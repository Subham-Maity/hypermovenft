"use client"
import React from "react";
import {FaWallet} from "react-icons/fa";

interface MainButtonProps {
    classNames: string;
    icon: JSX.Element;
    title: string;
    isText?: boolean;
}

const MainButton: React.FC<MainButtonProps> = ({
                                                   classNames,
                                                   icon,
                                                   title,
                                                   isText = true,
                                               }) => {
    const handleConnect = () => {
        // do something to connect the wallet
    };

    return (
        <button
            onClick={handleConnect}
            className={`${classNames} flex items-center space-x-2 rounded-full border-2 border-blue-500 px-4 py-2 text-white hover:bg-white hover:text-blue-500 hover:border-white`}
        >
            {icon}
            <span className={`lg:block ${isText ? "" : "hidden"}`}>{title}</span>
        </button>
    );
};

export default MainButton;
