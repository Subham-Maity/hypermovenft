import Image from "next/image";
import React from "react";
import WalletConnect from "@/app/components/Button/MainButton";
import {FaRocket, FaNewspaper} from "react-icons/fa";

const Banner = () => {
    return (
        <section
            className="flex w-full justify-center items-center bg-[url('https://market.fabwelt.com/assets/images/backgroup-secsion/bg-h7.jpg')]">
            <div className="flex w-[80%] items-center bg-cover object-cover justify-between  ">
                <div className="w-1/2 flex items-start justify-center flex-col gap-4">
                    <h1 className="text-6xl text-amber-50 flex flex-col gap-4">
                        <span>Unlock the</span>
                        <span>WELTimate</span>
                        <span>NFT Experience</span></h1>
                    <div className="flex gap-4 ">

                        <WalletConnect classNames="" title="Explore" icon={<FaRocket size={15}/>} isText={true}/>
                        <WalletConnect classNames="" title="Lend/Rent" icon={<FaNewspaper size={15}/>} isText={true}/>
                    </div>


                </div>
                <div className="hidden md:flex w-1/2 justify-center items-center">
                    <Image src="/human.png" width={700} height={500} alt="Banner"/>
                </div>
            </div>

        </section>
    );
};

export default Banner;
