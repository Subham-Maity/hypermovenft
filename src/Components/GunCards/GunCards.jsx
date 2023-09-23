import React from "react";
import "./GunCards.css";
// import gun from "../../Assets/gun.png";

const GunCards = ({ id, data, handleClick }) => {

  return (
    <div className="p-4" key={id}>
      {" "}
      <div
        class="w-full maxWidth backgroundColor text-white  rounded-lg shadow  "
        style={{ justifyItems: "center", paddingRight: "4px !important" }}
      >
        <div class="flex items-center justify-between pt-2 pl-3 pr-2">
          <span class="text-white font-bold dark:text-white">
            {data?.metadata?.name}
          </span>
          <a
            href="#"
            class="text-white bg-black m-0 flex justify-center items-center w-8"
          >
            {/* <i class="fa-solid fa-heart " />  */}
            <i class="w-5 fa-regular fa-heart "></i> 0
          </a>
        </div>
        <a href="#" className="flex items-center justify-center">
          <img
            class="p-8 rounded-t-lg"
            src={data?.metadata?.image}
            alt="product image"
          />
        </a>
        <div class="px-5 pb-5">
          <div
            class="flex items-center justify-between"
            onClick={()=>handleClick(data.tokenId)}
          >
            {/* <span class="multiplier text-white font-bold text-gray-900 dark:text-white">
              Multiplier 10X
            </span> */}
            <a
              href="#"
              class="text-white w-full  borderr backgroundColor focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <i className="fa-solid fa-wallet mr-2" />
            Buy Now
            </a>
            <a
              href="#"
              class="text-white  borderr1 backgroundColor focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <i className="fa-solid fa-wallet mr-2" />
            </a>
          </div>
          <div className="bottomText">
            <p className="text-grey text-sm flex ">
              price
              <h5 className="text-blue-500 ml-2 font-semibold text-base">
                {data.price}
              </h5>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GunCards;
