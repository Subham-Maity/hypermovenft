// Card.tsx
import React, { useState } from "react";
import { FaHeart, FaWallet } from "react-icons/fa";
import MainButton from "@/app/components/Button/MainButton";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface CardProps {
  tokenId: string;
  image: string;
  imageText: string;
  price: string;
  loveCount: number;
  label: string;
  isHoverable: boolean;
  multiplier: string;
}

const Card: React.FC<CardProps> = ({
  tokenId,
  image,
  imageText,
  price,
  loveCount,
  label,
  isHoverable,
  multiplier,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  const handleBuyNow = () => {
    router.push(`/nft?tokenId=${tokenId}`);
  };

  return (
    <div
      className="hover:-translate-y-2 transition-all ease-in-out duration-500 w-80 p-4 flex flex-col gap-4 bg-[#17171b] rounded-2xl overflow-hidden relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseOut}
    >
      <div className="flex justify-between items-center gap-2 w-full">
        <div className="flex items-center justify-center gap-2">
          <Image
            className="py-4 rounded-full bg-cyan-600"
            src={image}
            height={50}
            width={50}
            alt=""
          />
          {imageText && (
            <p className="font-bold mb-2 text-white">{imageText}</p>
          )}
        </div>
        <div className="flex mb-4">
          <div className="flex items-center bg-black/40 rounded-lg p-1 text-sm">
            <FaHeart className="text-white mr-2" />
            <span className="text-white font-sans">{loveCount}</span>
          </div>
        </div>
      </div>
      {image && (
        <div className="flex justify-center">
          <Image
            className="rounded-[40px] px-4"
            src={image}
            height={600}
            width={300}
            alt=""
          />
          {isHoverable && isHovered && (
            <div className="absolute top-0 transition-all ease-in-out duration-500 left-0 w-full h-full bg-black/30 flex justify-center items-center">
              <MainButton
                title="Buy Now"
                classNames="text-sm"
                icon={<FaWallet size={16} />}
                isText={true}
                onClick={handleBuyNow}
              />
            </div>
          )}
        </div>
      )}

      <div className="flex  p-4 justify-between items-start flex-col w-full">
        {price && (
          <div className="flex justify-start items-start mb-2 flex-col w-full">
            <span className="text-white mb-4 font-bold font-2xl">
              {multiplier}
            </span>
            <span className="text-white flex justify-between w-full">
              <p>{price}</p>{" "}
              <p className="text-sm text-center flex justify-center items-center px-2 rounded-xl bg-blue-700">
                {label}
              </p>
            </span>
          </div>
        )}

        {!isHoverable && (
          <div className="">
            <MainButton
              title="Buy Now"
              classNames="text-sm"
              icon={<FaWallet size={16} />}
              isText={true}
              onClick={handleBuyNow}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
