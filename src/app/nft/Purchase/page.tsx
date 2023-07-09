import React from 'react';
import { FaEye, FaHeart, FaGlobeAmericas, FaTag, FaWallet, FaPlus, FaMinus } from 'react-icons/fa';

interface PurchaseProps {
    image: string;
    heading: string;
    headingNumber: string;
    loveCount: number;
    polygon: string;
    gamingAsset: string;
    createdBy: string;
    contractAddress: string;
    itemId: string;
    price: string;
    collection: string;
    inGameAsset: string;
}

const Purchase = ({
                      image,
                      heading,
                      headingNumber,
                      loveCount,
                      polygon,
                      gamingAsset,
                      createdBy,
                      contractAddress,
                      itemId,
                      price,
                      collection,
                      inGameAsset,
                  }: PurchaseProps) => {
    const [count, setCount] = React.useState(1);

    const handleBuyNow = () => {
        // send count and event
        console.log(count);
        // add event here
    };

    const handleDecreaseCount = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const handleIncreaseCount = () => {
        setCount(count + 1);
    };

    return (
        <div className="m-2 sm:m-4 md:m-8 lg:m-12 xl:m-24">
            <div className="p-8 flex text-white flex-col md:flex-row justify-center md:justify-between items-center">
                <div className="flex items-center md:w-1/4">
                    <img className="rounded-2xl w-full" src={image} alt="NFT" />
                </div>
                <div className="md:ml-8">
                    <h2 className="font-bold text-4xl mb-6">{heading} {headingNumber}</h2>
                    <p className="font-sans text-2xl">Obtain a 700% increase in your income within the WELT ecosystem.</p>
                    <div className="flex mb-4">
                        <div className="ml-1 flex items-center bg-black rounded-2xl p-2 text-sm my-2">
                            <FaEye className="text-white mr-2" />
                            <span className="text-white font-sans">{loveCount}</span>
                        </div>
                        <div className="ml-1 flex items-center bg-black rounded-2xl p-2 text-sm my-2">
                            <FaHeart className="text-white mr-2" />
                            <span className="text-white font-sans">{loveCount}</span>
                        </div>
                        <div className="ml-1 flex items-center bg-black rounded-2xl p-2 text-sm my-2">
                            <FaGlobeAmericas className="text-white mr-2" />
                            <span className="text-white font-sans">{polygon}</span>
                        </div>
                        <div className="ml-1 flex items-center bg-black rounded-2xl p-2 text-sm my-2">
                            <FaTag className="text-white mr-2" />
                            <span className="text-white font-sans">{gamingAsset}</span>
                        </div>
                    </div>
                    <div className="flex justify-between my-4">
                        <div className="block w-full p-2 rounded-2xl shadow bg-[#343444]">
                            <p className="font-sans text-gray-400">Created By</p>
                            <p className="font-bold">{createdBy}</p>
                        </div>
                        <div className="ml-2 block w-full p-2 rounded-2xl shadow bg-[#343444]">
                            <p className="font-sans text-gray-400">Contract Address</p>
                            <p>{contractAddress}</p>
                        </div>
                    </div>
                    <div className="flex justify-between my-4">
                        <div className="ml-2 w-full p-2 rounded-2xl flex justify-between shadow bg-[#343444]">
                            <div>
                                <p className="font-sans text-gray-400">ITEM ID</p>
                                <p>{itemId}</p>
                            </div>
                            <div>
                                <p>{price}</p>
                            </div>
                        </div>
                        <div className="ml-2  w-full p-2 rounded-2xl flex justify-between shadow bg-[#343444]">
                            <div className="flex justify-between">
                                <p className="font-sans text-gray-400 mr-3">Collection</p>
                                <p>{inGameAsset}</p>
                            </div>
                        </div>
                    </div>

                    <p>Select no. of tokens (242 Tokens available for sale.)</p>

                    <div className="flex items-center my-4 mr-2">
                        <div className="flex items-center justify-center rounded-full border-2 border-blue-500 w-10 h-10">
                            <button onClick={handleDecreaseCount} className="text-blue-500">
                                <FaMinus />
                            </button>
                        </div>
                        <div className="mx-4 text-center w-12">
                            <input type="number" value={count} onChange={(e) => setCount(parseInt(e.target.value))} className="text-center bg-transparent border-b-2 border-blue-500 text-white w-full" />
                        </div>
                        <div className="flex items-center justify-center rounded-full border-2 border-blue-500 w-10 h-10">
                            <button onClick={handleIncreaseCount} className="text-blue-500">
                                <FaPlus />
                            </button>
                        </div>

                        <button onClick={handleBuyNow} className={`ml-12 flex items-center space-x-2 rounded-full border-2 border-blue-500 px-4 py-2 text-blue-500 hover:bg-white hover:border-white`}>
                            <FaWallet size={16} className="text-blue-500" />
                            <span>Buy Now</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;
