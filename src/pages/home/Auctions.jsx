import React from 'react';
import Link from "next/link";
import logo from "../../../public/logo.png";

const Auctions = () => {
    return (
        <div className="h-screen bg-[#1D1D24] ">
            <div className="flex justify-between">
                <div className="text-4xl text-amber-50 font-bold mb-4 ml-16">Recent Auctions</div>
                <Link href="/">
                    <div className="text-1xl text-amber-50 font-bold mb-4 mr-16">Recent Auctions</div>
                </Link>
            </div>
        </div>
    );
};

export default Auctions;