"use client"
import React from 'react';
import Card from '@/app/components/Card';
import { sampleMap } from '../../../public/Demo';
import Link from 'next/link';

const Viewed: React.FC = () => {
    return (
        <section className="w-full gap-2 justify-center items-center min-h-screen h-auto bg-viewed-custom">
            <div className="p-8 flex justify-between px-4 md:px-16 items-center w-full">
                <div className="text-4xl text-amber-50 font-bold mb-4">Popular Collections</div>
                <Link href="/">
                    <div className="text-xl text-amber-50 font-bold hidden md:block">EXPLORE MORE</div>
                </Link>
            </div>
            <div className="flex justify-between px-8 md:px-16 items-center w-full">
                <div className=" grid grid-cols-1 md:grid-cols-5 gap-4 items-center justify-center">
                    {sampleMap.map((item, i) => (
                        <Card
                            key={i}
                            image={item.image}
                            imageText={item.imageText}
                            price={item.price}
                            loveCount={item.loveCount}
                            label={item.label}
                            isHoverable={false}
                            multiplier={item.multiplier} // Make `multiplier` optional in CardProps
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Viewed;