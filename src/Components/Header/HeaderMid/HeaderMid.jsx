import React from "react";
import "./Header.css";
import WalletConnect from "../../Buttons/MainButton";
import { FaRocket, FaNewspaper } from "react-icons/fa";
const HeaderMid = () => {
  return (
    <section className="flex h-[550px] w-full bg-[url('/Banner2.jpg')] bg-cover bg-no-repeat bg-center">
      {" "}
      <div className="flex w-full items-center px-4 py-8 md:px-8 md:py-12 lg:px-16 lg:py-16 xl:px-24 xl:py-20 2xl:px-32 2xl:py-24">
        <div className="w-full md:w-1/2 flex items-start justify-start flex-col gap-4">
          {" "}
          <h1 className="text-4xl text-left font-bold sm:text-5xl md:text-6xl text-amber-50 flex flex-col gap-4 ">
            {" "}
            <span>Unlock the</span>
            <span>Hypermove Experience</span>
          </h1>
          <div className="flex gap-4">
            <WalletConnect
              classNames=""
              title="Explore"
              icon={<FaRocket size={15} />}
              isText={true}
            />
          </div>
        </div>
      </div>
     </section>
  );
};

export default HeaderMid;
