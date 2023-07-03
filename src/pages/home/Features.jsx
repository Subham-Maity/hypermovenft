"use client";
import React, { useState } from 'react';
import LargeCard from "@/app/components/LargeCard";

const Features = () => {
    const [sampleMap] = useState(3);

    return (
        <div className="flex gap-2 items-center justify-center bg-gray-500">
            {Array(sampleMap)
                .fill(0)
                .map((_, i) => (
                    <LargeCard
                        key={i}
                        banner="https://fabweltmarketplace.s3.us-east-2.amazonaws.com/2023/0/27/collectionBanner/85e40484-a3fa-4f02-a655-5c9c156160e3"
                        images={[
                            {
                                image: "https://fabweltmarketplace.s3.us-east-2.amazonaws.com/2022/9/27/nft/health.webp",
                                link: "/link1",
                            },
                            {
                                image: "https://fabweltmarketplace.s3.us-east-2.amazonaws.com/2022/9/27/nft/speed.webp",
                                link: "/link2",
                            },
                            {
                                image: "https://fabweltmarketplace.s3.us-east-2.amazonaws.com/2022/9/27/nft/speed.webp",
                                link: "/link3",
                            },
                        ]}
                        text="Sample Text"
                        createdBy="abc"
                    />
                ))}
        </div>
    );
};

export default Features;
