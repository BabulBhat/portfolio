"use client";
import Image from "next/image";
import SkillShape from "../../../public/SkillShape.png";
import clientImg from "../../../public/client.png";
import thankU from "../../../public/Thnk_u.png";
import thankUMark from "../../../public/Thnk_u_mark.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Testimonials() {
  const clientdata = [
    {
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "/client.png",
      name: "Tressy Townley",
      designation: "CEO & MANAGER",
    },
    {
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "/client2.png",
      name: "Micheal Townley",
      designation: "CEO & MANAGER",
    },
    {
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "/client.png",
      name: "Micheal Townley",
      designation: "CEO & MANAGER",
    },
    {
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "/client2.png",
      name: "Micheal Townley",
      designation: "CEO & MANAGER",
    },
  ];
  return (
    <section className="testimonials">
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-20">
          <div>
            <h3 className="heading relative text-left z-1 mb-4">
              Testimonia<span className="textRed font-semibold">ls</span>
              <div className="absolute top-0 right-[30%] translate-[-5%_-30%] z-[-2]">
                <Image src={SkillShape} alt="Skills Shape" />
              </div>
            </h3>
            <h3 className="mb-4 font-semibold text-2xl">
              What Clients are Say
            </h3>
            <p className="mb-6">
              I'm{" "}
              <span className="textRed font-semibold text-2xl">
                {" "}
                Babul Kr. Bhat
              </span>
              , Indian based web designer and front‑end developer living in
              London focused on crafting clean, creative and user‑friendly
              experiences, I build beautiful and powerful websites and{" "}
            </p>

            <button className="btn_One px-5 py-4 uppercase font-semibold text-md">
              Connect Now
            </button>
          </div>
          <div className="relative col-span-2 max-w-[680px] w-full ml-auto ">
            <div className="relative col-span-2 max-w-[680px] w-full ml-auto overflow-hidden p-3 pt-25">
              <Swiper
                className="!overflow-visible"
                modules={[Navigation, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                navigation={{
                  prevEl: ".custom-prev",
                  nextEl: ".custom-next",
                }}  
                autoplay={{ delay: 7000 }}
                loop={true}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 2,
                  },
                }}
              >
                {clientdata.map((item, index) => {
                  return (
                    <SwiperSlide className="!py-6">
                      <div className="card bg-white drop-shadow-[0px_4px_17px_#514e4e36] p-4">
                        <FontAwesomeIcon
                          icon={faQuoteLeft}
                          className="w-10 text-end textRed text-3xl"
                        />
                        <p className="text-sm px-8">{item.paragraph}</p>
                        <div className="text-end">
                          <FontAwesomeIcon
                            icon={faQuoteRight}
                            className="w-10 text-end textRed text-3xl"
                          />
                        </div>

                        <div className="flex items-center jusitify-center flex-col mt-12">
                          <div className="rounded-full overflow-hidden w-20">
                            <Image
                              src={item.img}
                              alt="Testimonials Image"
                              width={100}
                              height={100}
                              className="w-full h-auto"
                            />
                          </div>
                          <h5 className="mt-4 font-bold text-md mb-1">
                            {item.name}
                          </h5>
                          <p className="text-sm text-gray-500 uppercase">
                            {item.designation}
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
              <button
                className="custom-prev absolute flex items-center justify-center cursor-pointer"
                aria-label="Previous slide"
              >
                <FontAwesomeIcon icon={faAngleLeft}/>
              </button>

              <button
                className="custom-next absolute flex items-center justify-center cursor-pointer"
                aria-label="Next slide"
              >
                <FontAwesomeIcon icon={faAngleRight}/>
              </button>
            </div>

            <div className="absolute bottom-[-100px] left-[-100px] z-10">
              <Image src={thankU} alt="Shape About" className="rotateText" />
              <div className="flex items-center justify-center absolute top-0 right-0 bottom-0 left-0">
                <Image src={thankUMark} alt="Shape Mark" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
