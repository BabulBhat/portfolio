"use client";
import Image from "next/image";
import SkillShape from "../../../public/SkillShape.png";
import skillShape from "../../../public/Skill_ShapeTwo.png";
import { motion } from "framer-motion";
import { useIsInView } from "../hooks/useIsInView";
const skilldata = [
  {
    skillname: "HTML",
    marks: "90%",
  },
  {
    skillname: "CSS",
    marks: "80%",
  },
  {
    skillname: "JS",
    marks: "70%",
  },
  {
    skillname: "jQuery",
    marks: "90%",
  },
  {
    skillname: "BOOTSTRAP",
    marks: "90%",
  },
  {
    skillname: "TAILWIND",
    marks: "75%",
  },
  {
    skillname: "PHP",
    marks: "85%",
  },
  {
    skillname: "MYSQL",
    marks: "80%",
  },
  {
    skillname: "NEXTJS",
    marks: "72%",
  },
  {
    skillname: "MONGODB",
    marks: "45%",
  },
];
export default function Skill() {
  const { ref, isInView } = useIsInView();
  return (
    <section className="skill relative">
      <div className="container mx-auto overflow-hidden">
        <div>
          <motion.h3
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            className="heading relative text-center z-1"
          >
            My Skil<span className="textRed font-semibold">ls</span>
            <div className="absolute top-0 right-[30%] translate-[-5%_-30%] z-[-2]">
              <Image src={SkillShape} alt="Skills Shape" />
            </div>
          </motion.h3>
          <motion.p
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            className="max-w-250 text-center mx-auto mt-4"
          >
            I'm{" "}
            <span className="textRed font-semibold text-2xl">
              {" "}
              Babul Kr. Bhat
            </span>
            , Indian based web designer and front‑end developer living in London
            focused on crafting clean, creative and user‑friendly experiences, I
            build beautiful and powerful websites and android applications.
          </motion.p>
        </div>
        <div className="grid grid-cols lg:grid-cols-2 gap-5 gap-x-10 mt-6 relative z-[10]">
          {skilldata.map((item, index) => {
            return (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
                }
                transition={{ duration: 1 }}
                className="skillfeature flex items-center justify-start relative "
                key={index}
              >
                <div className="skill_Lang">
                  {item.skillname} <span className="skill_LangShadow"></span>
                </div>

                <div className="result">
                  <div className="fullmarks block">100%</div>
                  <div className="fullmarksLine"></div>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: item.marks }}
                    className="marksLine"
                  >
                    <div className="marks block">{item.marks}</div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -50, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="lineSkill absolute bottom-[-180px] right-[100px] z-[1]"
      >
        <Image src={skillShape} alt="Round Shape" className="w-auto h-auto" />
      </motion.div>
    </section>
  );
}
