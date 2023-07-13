"use client";
import React from "react";
import Card from "@/app/components/Card";
import Link from "next/link";
import { useTokens } from "@/store/tokens/hook";
import { NFTTokenData } from "@/store/tokens";

const Viewed: React.FC = () => {
  const nftData = useTokens();
  return (
    <section className="w-full gap-2 justify-center items-center min-h-screen h-auto bg-viewed-custom">
      <div className="p-8 flex justify-between px-4 md:px-16 items-center w-full">
        <div className="text-4xl text-amber-50 font-bold mb-4">
          Popular Collections
        </div>
        <Link href="/">
          <div className="text-xl text-amber-50 font-bold hidden md:block">
            EXPLORE MORE
          </div>
        </Link>
      </div>
      <div className="flex justify-between px-8 md:px-16 items-center w-full">
        <div className=" grid grid-cols-1 md:grid-cols-5 gap-4 items-center justify-center">
          {Object.values(nftData).map((item: NFTTokenData, i) => (
            <Card
              key={i}
              tokenId={String(item?.tokenId)}
              image={item?.metadata?.image}
              imageText={item?.metadata?.description}
              price={String(item?.price)}
              loveCount={1}
              label={item?.metadata?.description}
              isHoverable={item?.active}
              multiplier={"7x"} // Make `multiplier` optional in CardProps
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Viewed;
