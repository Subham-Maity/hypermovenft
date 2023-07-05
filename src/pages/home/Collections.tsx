"use client"

import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Card from "@/app/components/Card";
import {sampleMap} from '../../../public/Demo';
import Link from "next/link";
import {FreeMode, Pagination} from 'swiper/modules';

const Collections = () => {
    return (
        <section className="w-full p-8 bg-collection-custom">
            <div className="flex justify-between px-4 md:px-16 ">
                <div className="text-4xl text-amber-50 font-bold mb-4">Popular Collections</div>
                <Link href="/">
                    <div className="text-xl text-amber-50 font-bold hidden md:block">EXPLORE MORE</div>
                </Link>
            </div>

            <Swiper
                modules={[FreeMode, Pagination]}
                slidesPerView={1} // one card per view on phone
                spaceBetween={10} // space between cards
                breakpoints={{
                    768: {
                        slidesPerView: 5, // five cards per view on desktop
                        spaceBetween: 0,
                    },
                }}
                navigation
                pagination={{
                    clickable: true,
                }}
                freeMode={true}
                className="mx-auto m-8"
            >
                {sampleMap.map((item, i) => (
                    <SwiperSlide key={i}>
                        <Card
                            image={item.image}
                            imageText={item.imageText}
                            price={item.price}
                            loveCount={item.loveCount}
                            label={item.label}
                            link={item.link}
                            isHoverable={true}
                            multiplier={item.multiplier}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

export default Collections;
