"use client";
import Image from "next/image";
import SkillShape from "../../../public/SkillShape.png";
import webPage from "../../../public/web.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const portfolioData = [
  {
    id: 1,
    category: "NEXTJS",
    title: "Nextjs Website",
    img: webPage,
  },
  {
    id: 2,
    category: "PHP",
    title: "php Website",
    img: webPage,
  },
  {
    id: 3,
    category: "REACTJS",
    title: "react Website",
    img: webPage,
  },
  {
    id: 4,
    category: "FLUTTER",
    title: "FLUTTER Website",
    img: webPage,
  },
  {
    id: 5,
    category: "PYTHON",
    title: "python Website",
    img: webPage,
  },
];

export default function Portfolio() {
  const [activeCategory, setactiveCategory] = useState("ALL");
  const filterItem =
    activeCategory === "ALL"
      ? portfolioData.slice(0, 4)
      : portfolioData.filter((item) => item.category === activeCategory ).slice(0, 4);
  return (
    <section className="portfolio">
      <div className="container mx-auto">
        <h3 className="heading relative text-left z-1">
          Portfol<span className="textRed font-semibold">io</span>
          <div className="absolute top-0 right-[30%] translate-[-5%_-30%] z-[-2]">
            <Image src={SkillShape} alt="Skills Shape" />
          </div>
        </h3>
        <p className="max-w-250 text-left mr-auto mt-4">
          I'm{" "}
          <span className="textRed font-semibold text-2xl">
            {" "}
            Babul Kr. Bhat
          </span>
          , Indian based web designer and front‑end developer living in London
          focused on crafting clean, creative and user‑friendly experiences, I
          build beautiful and powerful websites and android applications.
        </p>

        <div className="grid grid-cols-12 lg:grid-cols-3 gap-5 mt-4">
          <div className="col-span-12 order-2 xl:order-1 xl:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-5 col-span-2">
            {filterItem.map((allitem, index) => (
              <div className="card bg-white drop-shadow-[3px_0px_7px_#00000038] rounded-xl overflow-hidden" key={index}>
                <div>
                  <Image
                    src={webPage}
                    alt="Web Page"
                    className="w-auto h-auto"
                  />
                </div>
                <div className="p-4">
                  <h4 className="textRed font-semibold text-2xl uppercase mb-4">
                    {allitem.title}
                  </h4>
                  <p className="text-md">
                    Amet minim mollit non deserunt Allamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.{" "}
                  </p>
                </div>
              </div>
            ))}
            <div className="card bg-white drop-shadow-[3px_0px_7px_#00000038] rounded-xl overflow-hidden loadmore">                
                <div className="p-4 flex items-center justify-center h-full">
                  <h4 className="textRed font-semibold text-2xl uppercase mb-4">
                    Load More...
                  </h4>
                </div>
              </div>


            
          </div>
          <div className="col-span-12 order-1 xl:order-2 xl:col-span-1 bg-blue-300 h-[400px] overflow-y-auto">
            <ul className="p-12 portfolio_Btn cursor-pointer">
              {["ALL", "NEXTJS", "PHP"].map((item, index) => (
                <li
                  key={index}
                  onClick={() => setactiveCategory(item)}
                  className={`${activeCategory === item ? "active" : ""}`}
                >
                  <span className="portfolio_heading_border"></span>
                  <span className="font-semibold text-xl">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
