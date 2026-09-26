import Image from "next/image";
import SkillShape from "../../../public/SkillShape.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
export default function Contact() {
  return (
    <section className="contact">
      <div className="container mx-auto">
        <h3 className="heading relative z-1 mb-8">
          Contact <span className="textRed font-semibold">Us</span>
          <div className="absolute top-0 right-[30%] translate-[-5%_-30%] z-[-2]">
            <Image src={SkillShape} alt="Skills Shape" />
          </div>
        </h3>
      </div>
      <div className="contactForm">
        <div className="container mx-auto relative">
          <div className="relative top-[-100px]">
            <div className="grid grid-cols-3 gap-20">
              <div className="contactCard flex items-center justify-center flex-col p-6 rounded-md">
                <div className="bg-white w-25 h-25 flex items-center justify-center rounded-full text-5xl textRed mb-6">
                  <FontAwesomeIcon icon={faLocationDot} />
                </div>
                <h5 className="text-white text-3xl font-semibold mb-2">
                  Head Quarter
                </h5>
                <p className="text-white text-sm">
                  123 Main Street, Kolkata, West Bengal 700001
                </p>
              </div>
              <div className="contactCard flex items-center justify-center flex-col p-6 rounded-md">
                <div className="bg-white w-25 h-25 flex items-center justify-center rounded-full text-5xl textRed mb-6">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <h5 className="text-white text-3xl font-semibold mb-2">
                  Email
                </h5>
                <p className="text-white text-sm">info@mail.com</p>
              </div>
              <div className="contactCard flex items-center justify-center flex-col p-6 rounded-md">
                <div className="bg-white w-25 h-25 flex items-center justify-center rounded-full text-5xl textRed mb-6">
                  <FontAwesomeIcon icon={faLocationDot} />
                </div>
                <h5 className="text-white text-3xl font-semibold mb-2">
                  24/7 Hours Available
                </h5>
                <p className="text-white text-sm">033-1010252-555</p>
              </div>
            </div>
            <div className="grid grid-cols-4 items-end gap-10 mt-8">
              <div className="contactFormINfo rounded-md p-6">
                <h4 className="text-black font-bold text-2xl pb-4">
                  Send Me An Email
                </h4>
                <p className="text-sm mb-10">
                  Feel free to get in touch with me. I am always open to
                  discussing new projects or creative ideas.
                </p>
                <span className="text-black font-bold text-xl mb-3 block">
                  Follow Us
                </span>
                <div className="flex items-center justify-start">
                  <div className="bg-white drop-shadow-[0px_1px_1px_#111] rounded-full w-10 h-10 flex items-center justify-center text-xl mr-2">
                    <FontAwesomeIcon icon={faFacebook} />
                  </div>
                  <div className="bg-white drop-shadow-[0px_1px_1px_#111] rounded-full w-10 h-10 flex items-center justify-center text-xl mr-2">
                    <FontAwesomeIcon icon={faX} />
                  </div>
                  <div className="bg-white drop-shadow-[0px_1px_1px_#111] rounded-full w-10 h-10 flex items-center justify-center text-xl mr-2">
                    <FontAwesomeIcon icon={faInstagram} />
                  </div>
                </div>
              </div>
              <div className="col-span-3">
                <div className="grid grid-cols-2 gap-5 contactFormMain">
                  <div>
                    <input
                      type="text"
                      className="text-white"
                      placeholder="Enter First Name"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="text-white"
                      placeholder="Enter Last Name"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="text-white"
                      placeholder="Enter Email"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="text-white"
                      placeholder="Enter Phone No"
                    />
                  </div>
                </div>
                <div>
                  <textarea placeholder="Message"></textarea>
                </div>
                <div className="mt-3">
                  <button className="btn_One px-5 py-4 uppercase font-semibold text-md">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
