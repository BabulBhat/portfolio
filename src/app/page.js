import Image from "next/image";
import Layout from "./_components/Layout";
import HeroSection from "./_components/HeroSection";
import RoundLine from "../../public/Hero_Round.svg";
import ShapeAbout from "../../public/about_shape.svg";
import Skillglow from "../../public/skillGlow.png";
import skillShape from "../../public/Skill_ShapeTwo.png";
import About from "./_components/About";
import Skill from "./_components/Skills";
import Portfolio from "./_components/Portfolio";
import Testimonials from "./_components/Testimonials";
import Contact from "./_components/Contact";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <div className="glowOne absolute top-0 z-[-1]">
        <Image src={RoundLine} alt="Round Shape" className="w-full h-auto" />
      </div>

      <About />

      <div className="glowTwo absolute top-[25%] right-0 z-[-1]">
        <Image src={ShapeAbout} alt="Round Shape" className="w-auto h-auto" />
      </div>

      <Skill />
      <div className="glowOne absolute top-[95%] right-0 z-[-1]">
        <Image src={Skillglow} alt="Round Shape" className="w-auto h-auto" />
      </div>

      <Portfolio />
      <div className="lineSkill absolute top-[100%] right-0 z-[-1]">
        <Image src={skillShape} alt="Round Shape" className="w-auto h-auto" />
      </div>

      <Testimonials />
      <Contact />
    </Layout>
  );
}
