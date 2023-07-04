"use client";
import React, {useState} from 'react';
import LargeCard from "@/app/components/LargeCard";
import Link from "next/link";

const Features = () => {
    const [sampleMap] = useState(3);

    return (
        <section
            className="flex flex-col gap-2 justify-center items-center min-h-screen h-auto bg-features-custom">

            <div className="flex justify-between px-4 md:px-16 items-center w-full">
                <div className="text-4xl text-amber-50 font-bold mb-4">Popular Collections</div>
                <Link href="/">
                    <div className="text-xl text-amber-50 font-bold hidden md:block">EXPLORE MORE</div>
                </Link>
            </div>

            <div className="flex gap-2 items-center justify-center flex-wrap sm:flex-nowrap w-full px-4 md:px-16">
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
        </section>
    );
};

export default Features;
