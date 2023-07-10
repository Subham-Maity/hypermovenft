"use client"
import React from "react";
import {FaWallet} from "react-icons/fa";

// import useWalletManager from "../WalletManager"

interface ProfileConnectProps {
    classNames?: string;
    icon?: JSX.Element;
    title?: string;
    isText?: boolean;
}

const ProfileConnect: React.FC<ProfileConnectProps> = ({
                                                           classNames = "text-sm lg:text-xl",
                                                           icon = <FaWallet size={16}/>,
                                                           title = "Connect Wallet",
                                                           isText = true,
                                                       }) => {
    // const { handleConnect } = useWalletManager(); // custom hook
    const handleConnect = () => {
        // do something to connect the wallet
        return <div>Connected!</div>; // return some JSX to render
    };

    return (
        <button
            onClick={() => handleConnect()} // call handleConnect and render its return value
            className={`${classNames} flex items-center space-x-2 rounded-full border-2 border-blue-500 px-4 py-2 text-white hover:bg-white hover:text-blue-500 hover:border-white`}
        >
            {icon}
            <span className={`lg:block ${isText ? "" : "hidden"}`}>{title}</span>
        </button>

    );
};

export default ProfileConnect;
