"use client";
import Image from "next/image";
import Logo from "../../../public/Logo.png";
import LogoDark from "../../../public/Logo_Dark.png";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Header() {
  const [openMenu, setopenMenu] = useState(false);
  return (
    <header className="header relative">
      <div className="container mx-auto">
        <div className={`flex items-center justify-between min-h-[87px] `}>
          <div className="relative lg:w-[30%]">
            <Image
              src={Logo}
              alt="Logo"
              className="w-auto max-w-full h-auto"
              priority
            />
            {/* <Image
              src={LogoDark}
              alt="Logo"
              className="w-auto max-w-full h-auto"
              priority
            /> */}
          </div>
          {/* <ul
            className={`${openMenu ? "flex opacity-100 visible" : "opacity-0 invisible lg:visible lg:opacity-100"} transition-all duration-500 ease-in-out absolute top-0 left-0 bg-[#fbfafa] h-full flex flex-col items-center justify-between w-full lg:transition-none lg:static lg:bg-transparent lg:flex lg:justify-center lg:flex-row `}
          > */}
          <div
            className={`${openMenu ? "opacity-100 visible bg-gray-200" : "opacity-0 invisible"} transition-all duration-500 ease-in-out absolute left-0 top-full w-full max-w-full flex-col items-start flex lg:items-center lg:justify-between xl:max-w-[calc(100%-30%)] lg:opacity-100 lg:visible lg:static lg:flex-row lg:bg-transparent`}
          >
            <ul className={`flex flex-col w-full lg:flex-row`}>
              <li className="">
                <Link
                  href=""
                  className="py-4 px-[30px] uppercase font-semibold text-xl block flex items-center justify-start lg:text-sm lg:justify-center"
                >
                  Ho<span className="textRed">me</span>
                </Link>
              </li>
              <li className="">
                <Link
                  href=""
                  className="py-4 px-[30px] uppercase font-semibold text-xl block flex items-center justify-start lg:text-sm lg:justify-center"
                >
                  Abo<span className="textRed">ut</span>
                </Link>
              </li>
              <li className="">
                <Link
                  href=""
                  className="py-4 px-[30px] uppercase font-semibold text-xl block flex items-center justify-start lg:text-sm lg:justify-center"
                >
                  Portfol<span className="textRed">io</span>
                </Link>
              </li>
              <li className="">
                <Link
                  href=""
                  className="py-4 px-[30px] uppercase font-semibold text-xl block flex items-center justify-start lg:text-sm lg:justify-center"
                >
                  Testimonia<span className="textRed">ls</span>
                </Link>
              </li>
              <li className="">
                <Link
                  href=""
                  className="py-4 px-[30px] uppercase font-semibold text-xl block flex items-center justify-start lg:text-sm lg:justify-center"
                >
                  Bl<span className="textRed">og</span>
                </Link>
              </li>
            </ul>
            <div className="px-[30px]">
              <Link
                href=""
                className="btn_One px-8 py-4 uppercase font-semibold text-md"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* <div
            className={`${openMenu ? "absolute right-0 top-0 w-10 bg-white rounded-full h-10 p-3 m-3 flex items-center justify-center drop-shadow-[1px_2px_1px_#11111145] cursor-pointer lg:hidden " : "hidden absolute right-0 top-0 w-10 bg-white rounded-full h-10 p-3 m-3 flex items-center justify-center drop-shadow-[1px_2px_1px_#11111145] cursor-pointer lg:hidden"}`}
            onClick={() => {
              setopenMenu(!openMenu);
            }}
          >
            <FontAwesomeIcon icon={faXmark} />
          </div> */}

          <div
            className="relative block h-[30px] w-[30px] cursor-pointer lg:hidden"
            onClick={() => setopenMenu(!openMenu)}
          >
            <FontAwesomeIcon
              icon={faBars}
              className={`absolute left-0 top-0 text-[30px] transition-all duration-500 ease-in-out ${
                openMenu
                  ? "rotate-90 scale-0 opacity-0"
                  : "rotate-0 scale-100 opacity-100"
              }`}
            />

            <FontAwesomeIcon
              icon={faXmark}
              className={`absolute left-0 top-0 text-[30px] transition-all duration-500 ease-in-out ${
                openMenu
                  ? "rotate-0 scale-100 opacity-100"
                  : "-rotate-90 scale-0 opacity-0"
              }`}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
