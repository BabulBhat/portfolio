import Image from "next/image";
import HeroImage from "../../../public/HeroImage.png";
import HeroLine from "../../../public/LineHero.svg";
import HeroShapeOne from "../../../public/Hero_Shape1.png";
import HeroShapeTwo from "../../../public/Hero_Shape2.png";
import HeroShapeThree from "../../../public/Hero_Shape3.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
export default function HeroSection() {
  return (
    <section className="hero">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-10 items-center">
          <div className="w-full max-w-[350px]">
            <h1 className="text-7xl font-bold w-full max-w-[300px] leading-[0.3]">
              Hi! <span className="text-xl font-normal">Dear, I am</span>
              <span className="text-4xl">
                Babul Kr. <span className="textRed">Bhat</span>
              </span>
              <br /> <span className="textRed text-4xl">UI/UX</span>
              <span className="text-xl font-semibold uppercase"> Designer</span>
            </h1>
            <p className="text-sm mt-4 leading-[1.3]">
              Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
              ullamco cillum dolor. Voluptate exercitation incididunt aliquip
              deserunt reprehenderit elit laborum.
            </p>
            <div className="mt-4 flex items-center jusitfy-start gap-5">
              <button className="btn_One px-5 py-4 uppercase font-semibold text-md">
                See Portfolio
              </button>
              <button className="btn_Two px-5 py-4 uppercase font-semibold text-md">
                <div className="flex items-center justify-start">
                  <FontAwesomeIcon
                    icon={faDownload}
                    className="text-white w-5 mx-2"
                  />
                  <span>Resume</span>
                </div>
              </button>
            </div>
            <div className="mt-12">
              <Image
                src={HeroLine}
                alt="Hero Line"
                className="w-full max-w-full h-auto"
              />
            </div>
          </div>
          <div className="relative">
            <Image src={HeroImage} alt="Hero" className="w-full h-auto"/>
            <div className="absolute top-[15%] right-0">
              <Image src={HeroShapeOne} alt="Hero Shape" />
            </div>
            <div className="absolute top-[15%] left-0 z-[-1]">
              <Image src={HeroShapeTwo} alt="Hero Shape" />
            </div>
            <div className="absolute w-[500px] top-[30%] left-0">
              <div className="transform-[perspective(500px)_rotateY(60deg)_skewX(10deg)]">
                <div className="bg-white w-[90px] text-center drop-shadow-[1px_3px_5px_#00000054] rounded-md py-1">
                  <span className="block text-sm textRed font-bold leading-[1.2]">
                    200+
                  </span>
                  <span className="block text-sm uppercase font-bold leading-[1.2] tracking-[-0.8px]">
                    Project
                  </span>
                </div>
              </div>
            </div>
            <div className="absolute w-[500px] top-[60%] left-0">
              <div className="transform-[perspective(500px)_rotateY(60deg)_skewX(10deg)]">
                <div className="bg-white w-[90px] text-center drop-shadow-[1px_3px_5px_#00000054] rounded-md py-1">
                  <span className="block text-sm textRed font-bold leading-[1.2]">
                    15+
                  </span>
                  <span className="block text-sm uppercase font-bold leading-[1.2] tracking-[-0.8px]">
                    Experience
                  </span>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0">
              <Image src={HeroShapeThree} alt="Hero Shape" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
