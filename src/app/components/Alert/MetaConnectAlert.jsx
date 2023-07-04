"use client"
import React, { useState } from 'react';
import Image from "next/image";
import { MdClose } from 'react-icons/md'; // import the icon

const MetaConnectAlert = ({link}) => {
    const [showAlert, setShowAlert] = useState(true); // state to control the visibility of the alert
    return (
        showAlert && ( // only render the alert if showAlert is true
            <div
                className="bg-transparent w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-sky-950 dark:border-gray-700
            transition-transform duration-300 ease-in-out transform scale-95 hover:scale-100
            position-absolute top-1/2 left-1/2 transform-translate-x-[-50%] translate-y-[-50%] z-50" // add classes for positioning
            >

                <div className="flex flex-col items-center pb-10">
                    <Image src="/Alert.png" width={60} height={500} alt="Banner"/>
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Wallet</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Please Install MetaMask</span>
                    <div className="flex mt-4 space-x-3 md:mt-6">
                        <a href={link}
                           className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#655cc9] dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ok</a>
                        <button // add a button to close the alert
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-[#ff0000] dark:hover:bg-red-700 dark:focus:ring-red-800"
                            onClick={() => setShowAlert(false)} // set showAlert to false when clicked
                        >
                            <MdClose size={24} />
                        </button>

                    </div>
                </div>
            </div>
        )
    );
};

export default MetaConnectAlert;
