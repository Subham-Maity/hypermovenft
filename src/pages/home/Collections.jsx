"use client";
// Collections.jsx

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'
import Card from "@/app/components/Card";

import {sampleMap} from './Demo'; // import sampleMap from Demo.js
const Collections = () => {
    const swiperRef = useRef(null); // create a ref for Swiper instance
    return (
        <div className="flex flex-col gap-2 justify-center items-center h-screen bg-collection-custom">
            <div className="text-4xl text-amber-50 font-bold mb-4">Latest NFTS</div>
            <div className="flex gap-2 items-center justify-center"> {/* card container */}
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 7,
                            spaceBetween: 30,
                        },
                    }}
                    modules={[Pagination]}

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
                    ))
                    }
                </Swiper></div></div>)}
export default Collections;
