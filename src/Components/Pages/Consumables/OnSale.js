"use client";
import React from "react";
import { useTokens } from "../../../store/tokens/hook";
// import { NFTTokenData } from "../../../store/tokens";
import GunCards from "../../GunCards/GunCards";
import { useNavigate } from "react-router-dom";
const Onsale = () => {
  const nftData = useTokens();
  const navigate = useNavigate();
  function handleClick(id) {
    navigate(`/purchase/${id}`);
  }
  return (
    // <section className="px-6 md:px-16 p-8 w-full gap-2 justify-center items-center min-h-screen h-auto">
    //   <div className="flex justify-between md:px-16 items-center w-full">
    //     <div className=" grid grid-cols-1 md:grid-cols-4 gap-4 items-center justify-center">
    //       {Object.values(nftData).map((item, i) => (
    //         <GunCards handleClick={handleClick} data={item} />
    //       ))}
    //     </div>
    //   </div>
    // </section>
    <section className=" px-4 md:px-16 p-8 w-full gap-2 justify-center items-center min-h-screen h-auto">

      <div className=" items-center w-full">
        <div className=" grid grid-cols-1 mediaGrid md:grid-cols-4 gap-4 items-center justify-center">
          {Object.values(nftData).map((item, i) => (
            <GunCards handleClick={handleClick} data={item} id={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Onsale;
