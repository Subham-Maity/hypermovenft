import React from "react";
import "./Cards.css";
import GunCards from "../GunCards/GunCards";
import "slick-carousel/slick/slick.css";
import { Link } from "react-router-dom";
import gun from "../../Assets/gun.png";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import MiddleCards from "../MiddleCards/MiddleCards";

const Cards = ({ data }) => {
  let collectibles = [];
  let consumables = [];

  if (data) {
    Object.values(data)?.map((value) => {
      if (value?.metadata?.properties?.type === "collectible") {
        collectibles.push(value?.metadata?.image);
      } else {
        consumables.push(value?.metadata?.image);
      }
    });
  }
  


  const navigate = useNavigate();
  function handleClick(id) {
    // const handleBuyNow = () => {
    navigate(`/purchase/${id}`);
    // };

    // navigate("/purchase");
  }
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="main bg-black text-white">
      <div className="container mx-auto">

        <div className="ml-8 mb-5">
          <h4 className="text-2xl font-medium">Popular Collectionss</h4>
        </div>
        <div style={{ overflow: "hidden", padding: "2px 30px 45px" }}>
          <Slider
            {...settings}
            // dots={true}
            // slidesToShow={4}
            // slidesToScroll={1}
            // autoplay={false}
            // autoplaySpeed={3000}
          >
            {Object.values(data).map((item, i) => (
              <GunCards handleClick={handleClick} data={item} id={i} />
            ))}
            {/* {data.map((el) => { */}
            {/* })} */}
          </Slider>
        </div>
        </div>
      </div>
      <section className="gradientDiv w-full p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20 h-auto">

      <div className="container mx-auto justify-between">
      <div className="flex flex-row justify-between">
      <h3 className="text-xl sm:text-3xl md:text-2xl text-amber-50 font-bold mb-10">Popular Collections</h3>
      <h3 className="text-xl sm:text-3xl md:text-2xl text-amber-50 font-bold mb-10">Explore More</h3>
      </div>

        <div className="grid grid-cols-1 sm:grid-cols-21 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10">
          <MiddleCards
          id="collectibles"
            banner="https://fabweltmarketplace.s3.us-east-2.amazonaws.com/2023/0/27/collectionBanner/85e40484-a3fa-4f02-a655-5c9c156160e3"
            images={[
              {
                image: collectibles[0],
              },
              {
                image: collectibles[1],
              },
              {
                image: collectibles[2],
              },
            ]}
          />
          <MiddleCards
            id="consumables"
            banner="https://fabweltmarketplace.s3.us-east-2.amazonaws.com/2022/8/22/collectionBanner/banner-collection.png"
            images={[
              {
                image: consumables[0],
              },
              {
                image: consumables[1],
              },
              {
                image: consumables[2],
              },
            ]}
          />
        </div>
        </div>
      </section>
      
      <div className=" grad bg-black ">
      <div className="container mx-auto justify-between">
        <div className="flex flex-row justify-between">
          <h3 className="text-xl sm:text-3xl md:text-2xl text-amber-50 font-bold mb-10">Popular Collections</h3>
          <h3 className="text-xl sm:text-3xl md:text-2xl text-amber-50 font-bold mb-10">Explore More</h3>
        </div>

        <div className=" items-center w-full">
          <div className=" grid grid-cols-1 md:grid-cols-4 gap-4 items-center justify-center">
            {Object.values(data).map((item, i) => (
              <GunCards data={item} handleClick={handleClick} id={i} />
            ))}
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
