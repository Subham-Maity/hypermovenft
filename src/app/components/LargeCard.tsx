import React from "react";
import Image from "next/image";

interface LargeCardProps {
    banner?: string;
    images?: { image: string }[];
    text?: string;
    createdBy?: string;
}

const LargeCard: React.FC<LargeCardProps> = ({ banner, images, text, createdBy }) => {
    return (
        <div className="">
            <div className="w-full flex flex-col bg-[#343444] rounded-2xl overflow-hidden">
                {banner && (
                    <div className="flex justify-center">
                        <Image
                            className="mt-1 rounded-2xl w-full p-3 object-cover"
                            src={banner}
                            height={600}
                            width={300}
                            alt=""
                        />
                    </div>
                )}

                {images && images.length > 0 && (
                    <div className="p-2 mt-2 flex justify-center">
                        {images.map((image, index) => (
                            <div key={index} className="sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
                                <Image
                                    className="rounded-[25px] gap-4 p-1 w-full"
                                    src={image.image}
                                    layout="responsive"
                                    height={600}
                                    width={600}
                                    alt=""
                                />
                            </div>
                        ))}
                    </div>
                )}

                {text && <div className="text-white mt-4 p-2">{text}</div>}

                {createdBy && <div className="text-white mt-2 p-2">Created by {createdBy}</div>}
            </div>
        </div>
    );
};

export default LargeCard;
