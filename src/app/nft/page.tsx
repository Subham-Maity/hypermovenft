"use client";
import React from 'react';
import ConsumablesHead from "@/app/nft/Heading/page";
import { sampleMap } from "../../../public/Demo";
import Purchase from "@/app/nft/Purchase/page";
import SimilarPage from "@/app/nft/Similar NFT/page";

const Page = () => {
    // Assuming you want to use the first item from the sampleMap
    const multiplier = sampleMap[3].multiplier;

    return (
        <div>
            <ConsumablesHead multiplier={multiplier} />

            <Purchase
                image="https://fabweltmarketplace.s3.us-east-2.amazonaws.com/2023/3/27/nft/732f3377-321b-43cd-b224-8c7c87d17c9f"
                heading="Multiplier 7x"
                headingNumber="#19"
                loveCount={84}
                polygon="Polygon"
                gamingAsset="Gaming Asset"
                createdBy="Fabwelt"
                contractAddress="0x1234...abcd"
                itemId="#19"
                price="0.5 ETH"
                collection="Collection Name"
                inGameAsset="In Game Asset Name"
            />

            <SimilarPage />

        </div>

    );
};

export default Page;
