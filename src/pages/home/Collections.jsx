import React from 'react'
import Card from "@/app/components/Card";

const Collections = ({sampleMap}) => { // receive sampleMap as a prop
    return (
        <div className="flex gap-2 justify-center items-center h-screen bg-gray-900">
            {
                Array(sampleMap).fill(0).map((_, i) => (
                    <Card key={i}
                          image="https://fabweltmarketplace.s3.us-east-2.amazonaws.com/2023/3/22/nft/17d686dc-32eb-4db1-8b09-08815d68cf5e"
                          imageText="Image Text"
                          price="Price: $9.99"
                          loveCount={5}
                          label="Label"
                          link={"https://www.example.com"}
                          isHoverable={true}
                    />))
            }
        </div>
    )
}

export default Collections
