import Image from "next/image";
import Logo from "../../../public/Logo.png";
import LogoDark from "../../../public/Logo_Dark.png";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="relative">
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
          <div >
            <ul className="flex items-center justify-center">
              <li>
                <Link href="" className="px-5 uppercase font-semibold text-sm">Ho<span className="textRed">me</span></Link>
              </li>
              <li>
                <Link href="" className="px-5 uppercase font-semibold text-sm">Abo<span className="textRed">ut</span></Link>
              </li>
              <li>
                <Link href="" className="px-5 uppercase font-semibold text-sm">Portfol<span className="textRed">io</span></Link>
              </li>
              <li>
                <Link href="" className="px-5 uppercase font-semibold text-sm">Testimonia<span className="textRed">ls</span></Link>
              </li>
              <li>
                <Link href="" className="px-5 uppercase font-semibold text-sm">Bl<span className="textRed">og</span></Link>
              </li>
            </ul>
          </div>
          <div>
            <a href="" className="btn_One px-8 py-4 uppercase font-semibold text-md">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
