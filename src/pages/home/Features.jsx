"use client";
import React, {useState} from 'react';
import LargeCard from "@/app/components/LargeCard";

const Features = () => {
    const [sampleMap] = useState(3);

    return (
        <div
            className="flex flex-col gap-2 justify-center items-center h-screen bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-violet-900 via-amber-900 to-purple-200">

            <div className="text-4xl text-amber-50 font-bold mb-4">Popular Collections</div>

            <div className="flex gap-2 items-center justify-center ">
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
        </div>
    );
};

export default Features;
