"use client"
import React, { useState, useEffect } from "react";

const ConnectWallet = ({classNames, icon, title, isText}) => {

    const [extensionUrl, setExtensionUrl] = useState(null);
    const [showAlert, setShowAlert] = useState(true);

    useEffect(() => {

        const url = window.web3?.currentProvider?.extensionUrl;
        // if the url exists, set the extensionUrl state
        if (url) {
            setExtensionUrl(url);
        } else {

            if (showAlert) {

                const response = window.confirm("Please install MetaMask");

                if (response) {
                    window.location.href = "https://metamask.io/download.html";
                } else {

                    setShowAlert(false);
                }
            }
        }
    }, [showAlert]);

    const handleConnect = () => {

        if (extensionUrl) {
            window.location.href = `${extensionUrl}/home.html#onboarding/welcome`;
        }
    };

    return (
        <button
            onClick={handleConnect}
            className={`${classNames} flex items-center space-x-2 rounded-full border-2 border-blue-500 px-4 py-2 text-white hover:bg-white hover:text-blue-500 hover:border-white `}
        >
            {icon}
            <span className={`lg:block ${isText ? '' : 'hidden'}`}>{title}</span>
        </button>
    );
};

export default ConnectWallet;
