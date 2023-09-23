import React from "react";

const Heading = () => {
  return (
    <div>
      <div className="text-white w-full text-center h-35 bg-[#1D1D24] py-8 md:py-16">
        <div className="flex flex-col px-4 md:px-16">
          <div className="md:text-6xl font-medium text-transparent text-4xl bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 ">
            Multiplier 17x
          </div>
          <div className="center mt-4">
            {/* <Breadcrumb
              href={["/", "/Contact"]}
              text={["Home", "Explore", "644aaff79edaffb178b9730c"]}
            /> */}
            <nav aria-label="Breadcrumb" className="breadcrumb">
              <ol>
                {/* {href.map((link, index) => ( */}
                <li >
                  <a href="#">Home / Explore</a>
                </li>
                {/* ))} */}
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
