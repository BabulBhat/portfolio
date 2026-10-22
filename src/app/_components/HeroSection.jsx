"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import HeroImage from "../../../public/HeroImage.png";
import HeroLine from "../../../public/LineHero.svg";
import HeroShapeOne from "../../../public/Hero_Shape1.png";
import HeroShapeTwo from "../../../public/Hero_Shape2.png";
import HeroShapeThree from "../../../public/Hero_Shape3.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { useIsInView } from "../hooks/useIsInView";
export default function HeroSection() {
  const { ref, isInView } = useIsInView();
  return (
    <section className="hero">
      <div className="container mx-auto">
        <div className="grid grid-cols lg:grid-cols-2 gap-10 items-center">
          <div className="w-full lg:max-w-[350px]">
            <motion.h1
              ref={ref}
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opactiy: 0, y: 100 }}
              transition={{ duration: 1 }}
              className="text-7xl font-bold w-full max-w-[291px] leading-[0.3] "
            >
              Hi! <span className="text-xl font-normal">Dear, I am </span>
              <span className="text-4xl">
                Babul Kumar <span className="textRed">Bhat</span>
              </span>
              <br /> <span className="textRed text-4xl">UI/UX</span>
              <span className="text-xl font-semibold uppercase"> Designer</span>
            </motion.h1>
            <motion.p
              ref={ref}
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opactiy: 0, y: 100 }}
              transition={{ duration: 1.3 }}
              className="text-sm mt-4 leading-[1.3]"
            >
              Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
              ullamco cillum dolor. Voluptate exercitation incididunt aliquip
              deserunt reprehenderit elit laborum.
            </motion.p>
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opactiy: 0, y: 100 }}
              transition={{ duration: 1.6 }}
              className="mt-4 block sm:flex items-center jusitfy-start gap-5"
            >
              <button className="btn_One px-5 py-4 uppercase font-semibold text-md mb-4 sm:mb-0">
                <span>See Portfolio</span>
              </button>
              <button className="btn_Two px-5 py-4 uppercase font-semibold text-md">
                <div className="flex items-center justify-start">
                  <span>
                    <FontAwesomeIcon
                      icon={faDownload}
                      className="text-white w-5 mx-2 dark:text-black"
                    />
                    Resume
                  </span>
                </div>
              </button>
            </motion.div>
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: [0, -50, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "loop",
              }}
              className="mt-12 w-full"
            >
              <Image
                src={HeroLine}
                alt="Hero Line"
                className="w-full max-w-full h-auto"
                priority
              />
            </motion.div>
          </div>
          <div className="relative">
            <Image src={HeroImage} alt="Hero" className="w-full h-auto" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, ease: "linear", repeat: Infinity }}
              className=" absolute top-[15%] right-0 "
            >
              <Image
                src={HeroShapeOne}
                alt="Hero Shape"
                className="w-full h-auto"
              />
            </motion.div>
            <div className="absolute top-[15%] left-0 z-[-1]">
              <Image
                src={HeroShapeTwo}
                alt="Hero Shape"
                className="w-full h-auto"
              />
            </div>
            <motion.div
              ref={ref}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
              }
              transition={{ duration: 1 }}
              className="absolute w-full xl:w-[500px] top-[30%] left-0"
            >
              <div className="transform-[perspective(500px)_rotateY(60deg)_skewX(10deg)] md:transform-[perspective(700px)_rotateY(60deg)_skewX(10deg)] lg:md:transform-[perspective(500px)_rotateY(60deg)_skewX(10deg)]">
                <div className="bg-white w-[90px] text-center drop-shadow-[1px_3px_5px_#00000054] rounded-md py-1">
                  <span className="block text-sm textRed font-bold leading-[1.2]">
                    200+
                  </span>
                  <span className="block text-sm uppercase font-bold leading-[1.2] tracking-[-0.8px] dark:text-black">
                    Project
                  </span>
                </div>
              </div>
            </motion.div>
            <motion.div
              ref={ref}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
              }
              transition={{ duration: 1 }}
              className="absolute  w-full xl:w-[500px] top-[60%] left-0"
            >
              <div className="transform-[perspective(500px)_rotateY(60deg)_skewX(10deg)] md:transform-[perspective(700px)_rotateY(60deg)_skewX(10deg)] lg:md:transform-[perspective(500px)_rotateY(60deg)_skewX(10deg)]">
                <div className="bg-white w-[90px] text-center drop-shadow-[1px_3px_5px_#00000054] rounded-md py-1">
                  <span className="block text-sm textRed font-bold leading-[1.2]">
                    15+
                  </span>
                  <span className="block text-sm uppercase font-bold leading-[1.2] tracking-[-0.8px] dark:text-black">
                    Experience
                  </span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
              }
              transition={{ duration: 1 }}
              className="absolute bottom-0 left-0 w-[50px] h-[50px] md:w-[100px] md:h-[100px] lg:w-auto lg:h-auto"
            >
              <Image src={HeroShapeThree} alt="Hero Shape" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
