"use client";

import React, {useState} from "react";
import {FaHeart, FaWallet} from "react-icons/fa";
import WalletConnect from "@/app/components/Button/MainButton";
import Image from "next/image";
import Link from "next/link";

const Card = ({image, imageText, price, loveCount, label, isHoverable, link}) => {
    const [isHovered, setIsHovered] = useState(false);

    // Handle mouse enter and mouse leave to show floating button
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseOut = () => {
        setIsHovered(false);
    };

    return (
        <div
            className="hover:-translate-y-2 transition-all ease-in-out duration-500 w-80 p-4 flex  flex-col gap-4 bg-gray-700 rounded-2xl overflow-hidden relative"
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseOut}>
            <div className="flex justify-between items-center gap-2 w-full">
                <div className="flex items-center justify-center gap-2">
                    <Image
                        className="py-4 rounded-full bg-cyan-600"
                        src="/logo.png"
                        height={50}
                        width={50}
                        alt=""
                    />
                    {imageText && (
                        <p className="font-bold mb-2 text-white">{imageText}</p>
                    )}
                </div>
                <div className="flex mb-4">
                    <div className="flex items-center bg-black/40 rounded-lg p-1 text-sm">
                        <FaHeart className="text-white mr-2"/>
                        <span className="text-white font-sans">{loveCount}</span>
                    </div>
                </div>
            </div>
            {image && (
                <div className="flex justify-center">

                    <Image
                        className="rounded-[40px] px-4"
                        src={image}
                        height={600}
                        width={300}
                        alt=""
                    />

                    {
                        isHoverable && isHovered && (
                            <div
                                className="absolute top-0 transition-all ease-in-out duration-500 left-0 w-full h-full bg-black/30 flex justify-center items-center">
                                <Link href={link}>
                                    <WalletConnect
                                        title="Buy Now"
                                        classNames="text-sm"
                                        icon={<FaWallet size={16}/>}
                                        isText={true}
                                    />
                                </Link>
                            </div>
                        )
                    }
                </div>
            )}

            <div className="flex  p-4 justify-between items-start flex-col w-full">
                {price && (
                    <div className="flex justify-start items-start mb-2 flex-col w-full">
            <span className="text-white mb-4 font-bold font-2xl">
              Multiplier 2x
            </span>
                        <span className="text-white flex justify-between w-full">
              <p>{price}</p>{" "}
                            <p className="text-sm text-center flex justify-center items-center px-2 rounded-xl bg-blue-700">
                {label}
              </p>
            </span>
                    </div>
                )}

                {/* If floating button is not there the default sticky button will be applied */}

                {!isHoverable && (
                    <div className="">
                        <Link href={link}>
                            <WalletConnect
                                title="Buy Now"
                                classNames="text-sm"
                                icon={<FaWallet size={16}/>}
                                isText={true}
                            />
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Card;
