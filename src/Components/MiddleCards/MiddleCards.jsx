import React from "react";
import '../Cards/Cards.css'
const MiddleCards = ({ banner, images, text, createdBy }) => {
  return (
    <div className="">
      <div className="abc w-full flex flex-col rounded-2xl overflow-hidden ">
        {banner && (
          <div className="flex justify-center">
            <img
              className="mt-1 rounded-2xl w-full p-3 object-cover"
              src={banner}
              height={600}
              width={300}
              alt=""
            />
          </div>
        )}

        {images && images.length > 0 && (
          <div className="mediaFlex p-2 mt-2 flex justify-center">
            {images.map((image, index) => (
              <div key={index}>
                <img
                  className="rounded-[25px] gap-4 p-1 sm:w-[150px] md:w-[200px] lg:w-[400px] "
                  src={image.image}
                  height={600}
                  width={600}
                  alt=""
                />
              </div>
            ))}
          </div>
        )}

        {text && <div className="text-white mt-4 p-2">{text}</div>}

        {createdBy && (
          <span className="text-white mt-2 p-2">Created by {createdBy}</span>
        )}
      </div>

      <style jsx>{`
        .abc {
          background: rgba(255, 255, 255, 0.1) !important;
          backdrop-filter: blur(10px)!important;
          box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1)!important;
          border: 1px solid rgba(255, 255, 255, 0.2)!important;
        }
      `}</style>
    </div>
  );
};

export default MiddleCards;
