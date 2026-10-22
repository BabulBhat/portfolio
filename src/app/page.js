"use client";
import Image from "next/image";
import Layout from "./_components/Layout";
import HeroSection from "./_components/HeroSection";
import RoundLine from "../../public/Hero_Round.svg";
import Skillglow from "../../public/skillGlow.png";
import glowyellow from "../../public/glowYellow.png";
import About from "./_components/About";
import Skill from "./_components/Skills";
import Portfolio from "./_components/Portfolio";
import Testimonials from "./_components/Testimonials";
import Contact from "./_components/Contact";
import { motion } from "framer-motion";
import { useIsInView } from "./hooks/useIsInView";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <div className="glowOne absolute top-0 z-[-1]">
        <Image
          src={RoundLine}
          alt="Round Shape"
          className="w-full h-full object-cover"
        />
      </div>

      <About />

      

      <Skill />
      <div className="glowOne absolute top-[1200px] right-0 z-[-1]">
        <Image src={Skillglow} alt="Round Shape" className="w-auto h-auto" />
      </div>

      <Portfolio />
      <div className="glowYellow absolute top-[2400px] left-0 z-[-1]">
        <Image src={glowyellow} alt="Round Shape" className="w-auto h-auto" />
      </div>

      <Testimonials />
      <Contact />
    </Layout>
  );
}
