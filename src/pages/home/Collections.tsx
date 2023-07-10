"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Card from "@/app/components/Card";
import { sampleMap } from "../../../public/Demo";
import Link from "next/link";
import { FreeMode, Pagination } from "swiper/modules";

const Collections = () => {
    return (
        <section className="w-full p-8 bg-collection-custom">
            <div className="flex flex-col items-center md:flex-row md:justify-between md:px-16">
                <div className="text-4xl text-amber-50 font-bold mb-4">Popular Collections</div>
                <Link href="/">
                    <div className="text-xl text-amber-50 font-bold">EXPLORE MORE</div>
                </Link>
            </div>

            <Swiper
                modules={[FreeMode, Pagination]}
                slidesPerView={1}
                spaceBetween={10}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    1280: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                    },
                }}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
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
};

export default Collections;
