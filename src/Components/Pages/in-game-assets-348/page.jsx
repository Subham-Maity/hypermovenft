"use client"
import React from 'react';
// import BannerCard from "@/app/components/BannerCard";
// import Onsale from "@/app/collection/in-game-assets-348/OnSale/Onsale";
// import ConsumablesHead from "../Consumables/ConsumablesHead";
import OnAuction from "./OnAuction/page";
import OnSale from "./OnSale/Onsale";
import BannerCard from '../../BannerCards';
import CollectiblesHead from '../Collectibles/CollectiblesHead';
import Onsale from './OnSale/Onsale';

const InGameAssetes = () => {
    return (
        <div >
            <CollectiblesHead/>
           <div className="">
            <BannerCard
                img="https://fabweltmarketplace.s3.us-east-2.amazonaws.com/2023/0/27/collectionBanner/IngameassetsBanner.png"
                href="https://market.fabwelt.com/collection/consumables-164"
                TabText={['On Sale', 'On Auction']}
                Child={[<Onsale key={0}/>,<OnAuction key={1}/>]}
            />
           </div>
        </div>
    );
};

export default InGameAssetes;