import React from "react";
import { FaHeart, FaPlay, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { Carousel } from "react-responsive-carousel";
// import ImagesData from "../data/ImagesData";

export const Hero = () => {
  return (
    <div className="">
      <section className="relative flex flex-col h-[110vh]">
        <div className="w-full preview-image h-full absolute">
          {/* <Carousel
            showArrows={false}
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
          >
            {ImagesData.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`slide ${index}`} />
              </div>
            ))}
          </Carousel> */}
        </div>
        <div className="bg-gradient-to-r from-black via-transparent to-black w-full h-full absolute"></div>
        <div className="mx-20 mt-24 h-screen flex relative items-center">
          <div className="absolute content-center w-full space-y-5">
            <h1 className="text-white text-[76px] leading-none font-bold font-outfit tracking-wide antialiased">
              Kimetsu no Yaiba
            </h1>
            <ul className="flex items-end space-x-5">
              <li>
                <p className="flex items-end justify-center content-between space-x-1 text-white text-xs font-normal font-outfit antialiased">
                  <div className="text-[#FBC94A]">
                    <FaStar size={20} />
                  </div>
                  <div>5.0</div>
                </p>
              </li>
              <li>
                <p className="text-white text-xs font-normal font-outfit antialiased">
                  Category: Adventure fiction, Dark fantasy, Martial Arts
                </p>
              </li>
            </ul>
            <p className="text-white text-base font-normal font-outfit antialiased w-full lg:w-[45%]">
              Demon Slayer: Kimetsu no Yaiba is a Japanese manga series written
              and illustrated by Koyoharu Gotouge. It follows teenage Tanjiro
              Kamado, who strives to become a demon slayer after his family was
              slaughtered and his younger sister Nezuko turned into a demon.
            </p>
            <ul className="flex space-x-4">
              <li>
                <button className="flex items-center justify-center content-between nav-link rounded-md space-x-2 w-40 h-10 border-solid border-sm button-blue hover:bg-white hover:text-black antialiased">
                  <div>
                    <FaPlay size={18} />
                  </div>
                  <p className="text-base">Watch Now!</p>
                </button>
              </li>
              <li>
                <button className="flex items-center justify-center nav-link font-thin rounded-md w-11 h-10 border-solid border-white border border-sm hover:bg-white hover:text-black antialiased">
                  <FaHeart size={20} />
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-20 mb-20 max-w-full flex justify-between relative items-center">
          <ul className="flex items-center space-x-2 md:space-x-5">
            <li>
              <Link
                to="/"
                className="font-outfit text-white font-thin text-base decoration-[#106580] tracking-wide antialiased underline-offset-8 decoration-[3px] hover:underline hover:font-medium"
              >
                Overview
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="font-outfit text-white font-thin text-base decoration-[#106580] tracking-wide antialiased underline-offset-8 decoration-[3px] hover:underline hover:font-medium"
              >
                Episodes
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="font-outfit text-white font-thin text-base decoration-[#106580] tracking-wide antialiased underline-offset-8 decoration-[3px] hover:underline hover:font-medium"
              >
                Details
              </Link>
            </li>
          </ul>
          <ul className="flex items-center space-x-1 md:space-x-1">
            <li className="w-6 h-5 bg-white rounded-full hover:bg-[#106580] hover:w-24 transition-all"></li>
            <li className="w-6 h-5 bg-white rounded-full hover:bg-[#106580] hover:w-24 transition-all"></li>
            <li className="w-6 h-5 bg-white rounded-full hover:bg-[#106580] hover:w-24 transition-all"></li>
            <li className="w-6 h-5 bg-white rounded-full hover:bg-[#106580] hover:w-24 transition-all"></li>
          </ul>
        </div>
      </section>
    </div>
  );
};
