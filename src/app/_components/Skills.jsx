import Image from "next/image";
import SkillShape from "../../../public/SkillShape.png";
export default function Skill() {
  return (
    <section className="skill">
      <div className="container mx-auto">
        <div>
          <h3 className="heading relative text-center z-1">
            My Skil<span className="textRed font-semibold">ls</span>
            <div className="absolute top-0 right-[30%] translate-[-5%_-30%] z-[-2]">
              <Image src={SkillShape} alt="Skills Shape" />
            </div>
          </h3>
          <p className="max-w-250 text-center mx-auto mt-4">
            I'm <span className="textRed font-semibold text-2xl"> Babul Kr. Bhat</span>
            , Indian based web designer and front‑end developer living in London
            focused on crafting clean, creative and user‑friendly experiences, I
            build beautiful and powerful websites and android applications.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-10 mt-6">

          <div>
            <div className="skillfeature flex items-center justify-start relative mb-10">
              <div className="skill_Lang">
                HTML <span className="skill_LangShadow"></span>
              </div>

              <div className="result">
                <div className="fullmarks block">100%</div>

                <div className="fullmarksLine"></div>
                <div className="marksLine">
                  <div className="marks block">90%</div>
                </div>
              </div>
            </div>
            {/* Reverse */}
            <div className="skillfeature skillfeature_reverse flex-row-reverse flex items-center justify-start relative mb-10">
              <div className="skill_Lang">
                CSS <span className="skill_LangShadow"></span>
              </div>

              <div className="result">
                <div className="fullmarks block">100%</div>

                <div className="fullmarksLine"></div>
                <div className="marksLine">
                  <div className="marks block">90%</div>
                </div>
              </div>
            </div>

            <div className="skillfeature flex items-center justify-start relative mb-10">
              <div className="skill_Lang">
                JS <span className="skill_LangShadow"></span>
              </div>

              <div className="result">
                <div className="fullmarks block">100%</div>

                <div className="fullmarksLine"></div>
                <div className="marksLine">
                  <div className="marks block">90%</div>
                </div>
              </div>
            </div>
            {/* Reverse */}
            <div className="skillfeature skillfeature_reverse flex-row-reverse flex items-center justify-start relative mb-10">
              <div className="skill_Lang">
                jQuery <span className="skill_LangShadow"></span>
              </div>

              <div className="result">
                <div className="fullmarks block">100%</div>

                <div className="fullmarksLine"></div>
                <div className="marksLine">
                  <div className="marks block">90%</div>
                </div>
              </div>
            </div>
            <div className="skillfeature flex items-center justify-start relative mb-10">
              <div className="skill_Lang">
                Bootstrap <span className="skill_LangShadow"></span>
              </div>

              <div className="result">
                <div className="fullmarks block">100%</div>

                <div className="fullmarksLine"></div>
                <div className="marksLine">
                  <div className="marks block">90%</div>
                </div>
              </div>
            </div>
            

          </div>


          <div>
            {/* Reverse */}
            <div className="skillfeature skillfeature_reverse flex-row-reverse flex items-center justify-start relative mb-10">
              <div className="skill_Lang">
                Tailwind<span className="skill_LangShadow"></span>
              </div>

              <div className="result">
                <div className="fullmarks block">100%</div>

                <div className="fullmarksLine"></div>
                <div className="marksLine">
                  <div className="marks block">90%</div>
                </div>
              </div>
            </div>

            <div className="skillfeature flex items-center justify-start relative mb-10">
              <div className="skill_Lang">
                PHP <span className="skill_LangShadow"></span>
              </div>

              <div className="result">
                <div className="fullmarks block">100%</div>

                <div className="fullmarksLine"></div>
                <div className="marksLine">
                  <div className="marks block">90%</div>
                </div>
              </div>
            </div>

            
            {/* Reverse */}
            <div className="skillfeature skillfeature_reverse flex-row-reverse flex items-center justify-start relative mb-10">
              <div className="skill_Lang">
                Mysql <span className="skill_LangShadow"></span>
              </div>

              <div className="result">
                <div className="fullmarks block">100%</div>

                <div className="fullmarksLine"></div>
                <div className="marksLine">
                  <div className="marks block">90%</div>
                </div>
              </div>
            </div>
            <div className="skillfeature flex items-center justify-start relative mb-10">
              <div className="skill_Lang">
                NEXTJS <span className="skill_LangShadow"></span>
              </div>

              <div className="result">
                <div className="fullmarks block">100%</div>

                <div className="fullmarksLine"></div>
                <div className="marksLine">
                  <div className="marks block">90%</div>
                </div>
              </div>
            </div>

            {/* Reverse */}
            <div className="skillfeature skillfeature_reverse flex-row-reverse flex items-center justify-start relative mb-10">
              <div className="skill_Lang">
                Mongodb <span className="skill_LangShadow"></span>
              </div>

              <div className="result">
                <div className="fullmarks block">100%</div>

                <div className="fullmarksLine"></div>
                <div className="marksLine">
                  <div className="marks block">90%</div>
                </div>
              </div>
            </div>
            
            
          </div>
        </div>
      </div>
    </section>
  );
}
