import React from 'react';
import Image from "next/image";

const MetaConnectAlert = ({link}) => {
    return (
        <div
            className="bg-transparent w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-sky-950 dark:border-gray-700">

            <div className="flex flex-col items-center pb-10">
                <Image src="/Alert.png" width={60} height={500} alt="Banner"/>
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Wallet</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">Please Install MetaMask</span>
                <div className="flex mt-4 space-x-3 md:mt-6">
                    <a href={link}
                       className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#655cc9] dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ok</a>

                </div>
            </div>
        </div>
    );
};

export default MetaConnectAlert;
