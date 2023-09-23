import React from 'react';
import CollectiblesHead from './CollectiblesHead'
import BannerCard from '../../BannerCards';
import Onsale from './OnSale';
import OnAuction from './OnAuction';
// import BannerCard from "@/app/components/BannerCard";
// import Onsale from "@/app/collection/collectables-977/OnSale/Onsale";
// import ConsumablesHead from "@/app/collection/collectables-977/Heading/page";
// import OnAuction from "@/app/collection/collectables-977/OnAuction/page";

const Page = () => {
    return (
        <div >
            <CollectiblesHead/>
            <div className="">
                <BannerCard
                    img="https://fabweltmarketplace.s3.us-east-2.amazonaws.com/2023/0/27/collectionBanner/85e40484-a3fa-4f02-a655-5c9c156160e3"
                    href="https://market.fabwelt.com/collection/consumables-164"
                    TabText={['On Sale', 'On Auction']}
                    Child={[<Onsale key={0}/> ,<OnAuction key={1}/>]}
                />
            </div>

        </div>
    );
};

export default Page;