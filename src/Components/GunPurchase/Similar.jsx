import React from "react";
import { useNavigate } from "react-router-dom";
import GunCards from "../GunCards/GunCards";
import { useTokens } from "../../store/tokens/hook";
import "./Gunpurchase.css";
const Similar = () => {
  const navigate = useNavigate();
  function handleClick(id) {
    // const handleBuyNow = () => {
    navigate(`/purchase/${id}`);
    // };

    // navigate("/purchase");
  }
  const tokenData = useTokens();
  return (
    <div>
      <section className=" bg-[#14141f] px-4 md:px-16 p-8 w-full gap-2 justify-center items-center min-h-screen h-auto">
        <p className="text-[#41f0d0] text-center text-4xl font-bold mb-8">
          Similar NFTs
        </p>
        <div className=" items-center w-full">
          <div className=" grid grid-cols-1 mediaGrid md:grid-cols-4 gap-4 items-center justify-center">
            {Object.values(tokenData).map((item, i) => (
              <GunCards handleClick={handleClick} data={item} id={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Similar;
