import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="flex items-center h-[50vh] bg-cover object-cover justify-between p-4 bg-[url('https://market.fabwelt.com/assets/images/backgroup-secsion/bg-h7.jpg')]">
      <div className="w-1/2">
        <h1 className="text-4xl font-bold mb-2">
Unlock the
WELTimate
NFT Experience</h1>
      </div>
      <div className="hidden md:flex w-1/2">
        <Image src="/human.png" width={500} height={500} alt="Banner" />
      </div>
    </div>
  );
};

export default Banner;
