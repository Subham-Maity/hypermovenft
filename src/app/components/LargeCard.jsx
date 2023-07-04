import React from "react";
import Image from "next/image";
import Link from "next/link";

const LargeCard = ({banner, images, text, createdBy}) => {
    return (
        <div className="w-full mt-2 bg-[#343444] rounded-2xl m-5">
            {banner && (
                <div className="flex justify-center">
                    <Image
                        className="mt-2 rounded-2xl w-full p-6"
                        src={banner}
                        height={600}
                        width={300}
                        alt=""
                    />
                </div>
            )}

            {images && images.length > 0 && (
                <div className="p-2 mt-2 flex justify-center gap-4">
                    {images.map((image, index) => (
                        <div key={index} className="flex justify-center">
                            <Image
                                className="rounded-[25px] gap-4 p-2"
                                src={image.image}
                                height={600}
                                width={300}
                                alt=""
                            />
                        </div>
                    ))}
                </div>
            )}

            {text && (
                <div className="text-white mt-4 p-2">{text}</div>
            )}

            {createdBy && (
                <div className="text-white mt-2 p-2">Created by {createdBy}</div>
            )}
        </div>
    );
};

export default LargeCard;
