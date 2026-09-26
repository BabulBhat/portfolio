import Image from "next/image";
import Logo from "../../../public/Logo.png";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container mx-auto">
        <div className="grid grid-cols-7 gap-10">
          <div className="border-r-1 border-gray-400 col-span-3">
            <div className=" max-w-[350px]">
              <Image
                src={Logo}
                alt="Logo"
                className="w-auto max-w-full h-auto"
              />
              <p className="text-sm mb-10 mt-5 text-gray-600">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
                explicabo ullam cupiditate quo sapiente repellat, similique
                unde. Tenetur nostrum deserunt, explicabo alias illum in,
                distinctio debitis officia eos commodi architecto!
              </p>
            </div>
          </div>
          <div className="col-span-4">
            <div className="grid grid-cols-3 gap-10">
              <div>
                <h6 className="uppercase text-xl mb-5 font-semibold">
                  Quick Lin<span className="textRed">ks</span>
                </h6>
                <ul>
                  <li>
                    <Link
                      href="#about"
                      className="font-semibold uppercase py-1 block text-gray-700 text-sm"
                    >
                      About US
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#about"
                      className="font-semibold uppercase py-1 block text-gray-700 text-sm"
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#about"
                      className="font-semibold uppercase py-1 block text-gray-700 text-sm"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#about"
                      className="font-semibold uppercase py-1 block text-gray-700 text-sm"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#about"
                      className="font-semibold uppercase py-1 block text-gray-700 text-sm"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h6 className="uppercase text-xl mb-5 font-semibold">
                  RESOURC<span className="textRed">ES</span>
                </h6>
                <ul>
                  <li>
                    <Link
                      href="#about"
                      className="font-semibold uppercase py-1 block text-gray-700 text-sm"
                    >
                      Authentication
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#about"
                      className="font-semibold uppercase py-1 block text-gray-700 text-sm"
                    >
                      System Status
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#about"
                      className="font-semibold uppercase py-1 block text-gray-700 text-sm"
                    >
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#about"
                      className="font-semibold uppercase py-1 block text-gray-700 text-sm"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#about"
                      className="font-semibold uppercase py-1 block text-gray-700 text-sm"
                    >
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h6 className="uppercase text-xl mb-5 font-semibold">
                  DEVELOPE<span className="textRed">RS</span>
                </h6>
                <ul>
                  <li>
                    <Link
                      href="#about"
                      className="font-semibold uppercase py-1 block text-gray-700 text-sm"
                    >
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#about"
                      className="font-semibold uppercase py-1 block text-gray-700 text-sm"
                    >
                      System Status
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#about"
                      className="font-semibold uppercase py-1 block text-gray-700 text-sm"
                    >
                      API Reference
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#about"
                      className="font-semibold uppercase py-1 block text-gray-700 text-sm"
                    >
                      Support
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#about"
                      className="font-semibold uppercase py-1 block text-gray-700 text-sm"
                    >
                      Open Source
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="text-gray-400"/>
      <div className="container mx-auto py-3">
        <div className="flex items-center justify-between">
          <div>© {new Date().getFullYear()}. All rights reserved by RB Technolgies</div>
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
            <div className="bg-white drop-shadow-[0px_1px_1px_#111] rounded-full w-10 h-10 flex items-center justify-center text-xl mr-2">
              <FontAwesomeIcon icon={faYoutube} />
            </div>
            <div className="bg-white drop-shadow-[0px_1px_1px_#111] rounded-full w-10 h-10 flex items-center justify-center text-xl mr-2">
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
