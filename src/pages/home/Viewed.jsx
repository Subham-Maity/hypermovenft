"use client"

import React, {useState} from 'react'
import Card from "@/app/components/Card";
import {useSwipeable} from 'react-swipeable'
import {FaArrowLeft, FaArrowRight, FaCircle} from 'react-icons/fa'

const Viewed = ({sampleMap}) => { // receive sampleMap as a prop
    const [index, setIndex] = useState(0) // state to keep track of the current card
    const handlers = useSwipeable({ // swipe handlers
        onSwipedLeft: () => setIndex((index + 1) % sampleMap), // increment index on left swipe
        onSwipedRight: () => setIndex((index - 1 + sampleMap) % sampleMap), // decrement index on right swipe
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    })
    return (
        <div
            className="flex flex-col gap-2 justify-center items-center h-screen bg-gradient-to-r from-purple-950 via-pink-800 to-red-950" {...handlers}>
            <div className="text-4xl text-amber-50 font-bold mb-4">Latest NFTS</div>
            <div className="flex gap-2 items-center justify-center"> {/* card container */}
                {
                    Array(sampleMap).fill(0).map((_, i) => ( // map over the sampleMap array
                        <Card key={i}
                              image="https://fabweltmarketplace.s3.us-east-2.amazonaws.com/2023/3/22/nft/17d686dc-32eb-4db1-8b09-08815d68cf5e"
                              imageText="Image Text"
                              price="Price: $9.99"
                              loveCount={5}
                              label="Label"
                              link={"https://www.example.com"}
                              isHoverable={false}
                        />
                    ))
                }
            </div>
            <div className="flex gap-2 items-center justify-center"> {/* arrow and bullet point icons */}
                <FaArrowLeft size={48} color="white"
                             onClick={() => setIndex((index - 1 + sampleMap) % sampleMap)}/> {/* left arrow button */}
                {
                    Array(sampleMap).fill(0).map((_, i) => (
                        <FaCircle key={i} size={16} color={i === index ? "white" : "gray"}/> // active bullet point is white, others are gray
                    ))
                }
                <FaArrowRight size={48} color="white"
                              onClick={() => setIndex((index + 1) % sampleMap)}/> {/* right arrow button */}
            </div>
        </div>
    )
}

export default Viewed
