import Image from "next/image";
import SkillShape from "../../../public/SkillShape.png";
import webPage from "../../../public/web.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Portfolio() {
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

        <div className="grid grid-cols-3 gap-5 mt-4">
          <div className="grid grid-cols-2 gap-5 col-span-2">
            <div className="card bg-white drop-shadow-[3px_0px_7px_#00000038] rounded-xl overflow-hidden">
              <div>
                <Image src={webPage} alt="Web Page" className="w-auto h-auto" />
              </div>
              <div className="p-4">
                <h4 className="textRed font-semibold text-2xl uppercase mb-4">ios App</h4>
                <p className="text-md">
                  Amet minim mollit non deserunt Allamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit
                  mollit.{" "}
                </p>
              </div>
            </div>
            <div className="card bg-white drop-shadow-[3px_0px_7px_#00000038] rounded-xl overflow-hidden">
              <div>
                <Image src={webPage} alt="Web Page" className="w-auto h-auto" />
              </div>
              <div className="p-4">
                <h4 className="textRed font-semibold text-2xl uppercase mb-4">ios App</h4>
                <p className="text-md">
                  Amet minim mollit non deserunt Allamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit
                  mollit.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-blue-300">
            <ul className="p-12 portfolio_Btn cursor-pointer">
                <li className="active">
                    <span className="portfolio_heading_border"></span>
                    <span className="font-semibold text-xl">ALL</span>
                </li>
                <li>
                    <span className="portfolio_heading_border"></span>
                    <span className="font-semibold text-xl">NEXTJS</span>
                </li>
                <li>
                    <span className="portfolio_heading_border"></span>
                    <span className="font-semibold text-xl">PHP</span>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
