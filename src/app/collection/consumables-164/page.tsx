"use client"
import React from 'react';
import BannerCard from "@/app/components/BannerCard";
import Onsale from "@/app/collection/consumables-164/OnSale/Onsale";

const Page = () => {
    return (
        <div >
           <div className="mt-10">
            <BannerCard
                img="https://fabweltmarketplace.s3.us-east-2.amazonaws.com/2022/8/22/collectionBanner/banner-collection.png"
                href="https://market.fabwelt.com/collection/consumables-164"
                TabText={['Features', 'Values', 'Roadmap']}
                Child={[<Onsale key={0}/>]}
            />
           </div>

        </div>
    );
};

export default Page;