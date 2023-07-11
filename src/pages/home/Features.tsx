"use client";
import React, {useState} from 'react';
import LargeCard from '@/app/components/LargeCard';
import Link from 'next/link';

const Features: React.FC = () => {
    const [sampleMap] = useState<number>(2);

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
        <section className=" w-full p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20 h-auto bg-features-custom">
            <div className="flex justify-between px-4 md:px-60 items-center w-full">
                <div className="text-2xl sm:text-3xl md:text-4xl text-amber-50 font-bold mb-4">Popular Collections</div>
                <Link href="/">
                    <div className="text-lg sm:text-xl text-amber-50 font-bold hidden md:block">EXPLORE MORE</div>
                </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-21 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6 max-w-screen-xl mx-auto">
                <LargeCard

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

                />
                <LargeCard

                    banner="https://fabweltmarketplace.s3.us-east-2.amazonaws.com/2022/8/22/collectionBanner/banner-collection.png"
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

                />

            </div>


        </section>
    );
};

export default Features;