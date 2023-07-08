"use client"
import React from 'react';
import Card from '@/app/components/Card';
import Link from 'next/link';
import {sampleMap} from "../../../../public/Demo";

const SimilarPage: React.FC = () => {
    return (
        <section className=" bg-[#14141f] px-4 md:px-16 p-8 w-full gap-2 justify-center items-center min-h-screen h-auto">
             <p className="text-[#41f0d0] text-center text-4xl font-bold mb-8">Similar Nfts</p>
            <div className="flex justify-between px-7 md:px-16 items-center w-full">
                <div className=" grid grid-cols-1 md:grid-cols-5 gap-4 items-center justify-center">
                    {sampleMap.map((item, i) => (
                        <Card
                            key={i}
                            image={item.image}
                            imageText={item.imageText}
                            price={item.price}
                            loveCount={item.loveCount}
                            label={item.label}
                            link={item.link}
                            isHoverable={false}
                            multiplier={item.multiplier} // Make `multiplier` optional in CardProps
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SimilarPage;
