"use client";
import React, {useState} from 'react';
import LargeCard from '@/app/components/LargeCard';
import Link from 'next/link';

const Features: React.FC = () => {
    const [sampleMap] = useState<number>(3);

    interface Image {
        image: string;
        href?: string; // optional property
    }

    interface Props {
        banner: string;
        images: Image[];
        text: string;
        createdBy: string;
    }


    return (
        <section className="flex flex-col gap-2 justify-center items-center min-h-screen h-auto bg-features-custom">
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
                                    image:
                                        'https://fabweltmarketplace.s3.us-east-2.amazonaws.com/2022/9/27/nft/health.webp',
                                    // href: '/link1', // use href instead of link
                                },
                                {
                                    image:
                                        'https://fabweltmarketplace.s3.us-east-2.amazonaws.com/2022/9/27/nft/speed.webp',

                                },
                                {
                                    image:
                                        'https://fabweltmarketplace.s3.us-east-2.amazonaws.com/2022/9/27/nft/speed.webp',
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
