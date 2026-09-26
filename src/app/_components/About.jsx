import Image from "next/image";
import Aboutme from "../../../public/About.png";
import Aboutline from "../../../public/About_Line.svg";
import thankU from "../../../public/Thnk_u.png";
import thankUMark from "../../../public/Thnk_u_mark.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <section className="about">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-10">
          <div className="relative ">
            <div>
              <Image src={Aboutme} alt="About Me" className="w-full h-auto" />
            </div>
            <div className=" absolute top-0 right-0">
              <Image src={thankU} alt="Shape About" className="rotateText" />
              <div className="flex items-center justify-center absolute top-0 right-0 bottom-0 left-0">
                <Image src={thankUMark} alt="Shape Mark" />
              </div>
            </div>
            <div>
              <Image src={Aboutline} alt="Shape About" />
            </div>
          </div>
          <div className="aboutME">
            <h3 className="heading">
              About <span className="textRed font-semibold">Me</span>
            </h3>
            <p className="mt-4 text-sm mt-4 leading-[1.3] capitalize">
              I’m a passionate Front-End Developer with a strong interest in
              creating modern, responsive, and user-friendly web experiences. I
              enjoy turning ideas into clean and engaging interfaces while
              continuously learning new technologies and improving my skills. As
              a fresher, I’m excited to work on real-world projects, collaborate
              with new people, and gain valuable experience while contributing
              to meaningful digital solutions.
            </p>

            <ul className="mt-4">
              <li className="pb-2 flex items-center">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="w-full max-w-5 mr-2 text-yellow-500"
                />
                <span className="font-semibold">
                  Date Of Birth : June 1990
                </span>
              </li>
              <li className="pb-2 flex items-center">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="w-full max-w-5 mr-2 text-yellow-500"
                />
                <span className="font-semibold">
                  Nationality : Indian
                </span>
              </li>

              <li className="pb-2 flex items-center">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="w-full max-w-5 mr-2 text-yellow-500"
                />
                <span className="font-semibold">
                  Email : info@example.com
                </span>
              </li>
              <li className="pb-2 flex items-center">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="w-full max-w-5 mr-2 text-yellow-500"
                />
                <span className="font-semibold">
                  Location: India
                </span>
              </li>
              <li className="pb-2 flex items-center">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="w-full max-w-5 mr-2 text-yellow-500"
                />
                <span className="font-semibold">
                  Hobbies: Coding, Exploring New Technologies, Playing Football
                </span>
              </li>
            </ul>

            <button className="btn_One px-5 py-4 uppercase font-semibold text-md mt-5">
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
