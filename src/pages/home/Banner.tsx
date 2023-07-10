import Image from "next/image";
import React from "react";
import WalletConnect from "@/app/components/Button/MainButton";
import { FaRocket, FaNewspaper } from "react-icons/fa";

const Banner = () => {
    return (
        <section className="flex w-full justify-center items-center bg-[url('https://market.fabwelt.com/assets/images/backgroup-secsion/bg-h7.jpg')] bg-cover bg-no-repeat bg-center">
            <div className="flex w-[80%] items-center justify-between px-4 py-8 md:px-8 md:py-12 lg:px-16 lg:py-16 xl:px-24 xl:py-20 2xl:px-32 2xl:py-24">
                <div className="w-full md:w-1/2 flex items-start justify-center flex-col gap-4">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl text-amber-50 flex flex-col gap-4">
                        <span>Unlock the</span>
                        <span>Hypermove</span>
                        <span>Experience</span>
                    </h1>
                    <div className="flex gap-4">
                        <WalletConnect
                            classNames=""
                            title="Explore"
                            icon={<FaRocket size={15} />}
                            isText={true}
                        />
                        <WalletConnect
                            classNames=""
                            title="Lend/Rent"
                            icon={<FaNewspaper size={15} />}
                            isText={true}
                        />
                    </div>
                </div>
                <div className="hidden md:flex w-full md:w-1/2 justify-center items-center">
                    <div className="relative">
                        <Image src="/aaa.png" width={700} height={500} alt="Banner" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
