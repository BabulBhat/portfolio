import Image from "next/image";
import SkillShape from "../../../public/SkillShape.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
export default function Contact() {
  const [alldata, setalldata] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setalldata({
      ...alldata,
      [name]: value,
    });
  };

  const handleSave = async () => {
    setLoading(true);
    const { fname, lname, email, phone, message } = alldata;
    if (fname === "" || email === "") {
      toast.error("Please * mark must be filled...");
    } else {
      const response = await fetch(`http://localhost:3000/api/frontend`, {
        method: "POST",
        body: JSON.stringify(alldata),
      });
      const result = await response.json();
      if (result.success) {
        toast.success("Data Save Successfully");
        setLoading(false);
        setalldata({
          fname: "",
          lname: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  return (
    <section className="contact">
      <div className="container mx-auto">
        <h3 className="heading relative z-1 ">
          Contact <span className="textRed font-semibold">Us</span>
        </h3>
      </div>
      <div className="contactForm">
        <div className="container mx-auto relative">
          <div className="relative top-[-100px]">
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-20">
              <div className="contactCard flex items-center justify-center flex-col p-3 lg:p-6 rounded-md text-center">
                <div className="bg-white text-2xl w-10 h-10 flex items-center justify-center rounded-full textRed mb-6 lg:w-25 lg:h-25 lg:text-5xl">
                  <FontAwesomeIcon icon={faLocationDot} />
                </div>
                <h5 className="text-white text-lg lg:text-2xl font-semibold mb-2">
                  Head Quarter
                </h5>
                <p className="text-white text-sm">
                  123 Main Street, Kolkata, West Bengal 700001
                </p>
              </div>
              <div className="contactCard flex items-center justify-center flex-col p-3 lg:p-6 rounded-md text-center">
                <div className="bg-white text-2xl w-10 h-10 flex items-center justify-center rounded-full textRed mb-6 lg:w-25 lg:h-25 lg:text-5xl">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <h5 className="text-white text-lg lg:text-2xl font-semibold mb-2">
                  Email
                </h5>
                <p className="text-white text-sm">info@mail.com</p>
              </div>
              <div className="contactCard flex items-center justify-center flex-col p-3 lg:p-6 rounded-md text-center">
                <div className="bg-white text-2xl w-10 h-10 flex items-center justify-center rounded-full textRed mb-6 lg:w-25 lg:h-25 lg:text-5xl">
                  <FontAwesomeIcon icon={faLocationDot} />
                </div>
                <h5 className="text-white text-lg lg:text-2xl font-semibold mb-2">
                  24/7 Hours Available
                </h5>
                <p className="text-white text-sm">033-1010252-555</p>
              </div>
            </div>
            <div className="grid grid-cols-4 items-end gap-10 mt-8">
              <div className="col-span-4 lg:col-span-1 contactFormINfo rounded-md p-6">
                <h4 className="text-black font-bold text-2xl pb-4">
                  Send Me An Email
                </h4>
                <p className="text-sm mb-10 dark:text-gray-800">
                  Feel free to get in touch with me. I am always open to
                  discussing new projects or creative ideas.
                </p>
                <span className="text-black font-bold text-xl mb-3 block">
                  Follow Us
                </span>
                <div className="flex items-center justify-start">
                  <Link
                    href={""}
                    className="bg-white drop-shadow-[0px_1px_1px_#111] rounded-full w-10 h-10 flex items-center justify-center text-xl mr-2 transition-transform duration-300 dark:bg-black dark:text-white hover:drop-shadow-[0px_3px_2px_#111]"
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </Link>
                  <Link
                    href={""}
                    className="bg-white drop-shadow-[0px_1px_1px_#111] rounded-full w-10 h-10 flex items-center justify-center text-xl mr-2 transition-transform duration-300 dark:bg-black dark:text-white hover:drop-shadow-[0px_3px_2px_#111]"
                  >
                    <FontAwesomeIcon icon={faX} />
                  </Link>
                  <Link
                    href={""}
                    className="bg-white drop-shadow-[0px_1px_1px_#111] rounded-full w-10 h-10 flex items-center justify-center text-xl mr-2 transition-transform duration-300 dark:bg-black dark:text-white hover:drop-shadow-[0px_3px_2px_#111]"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </Link>
                </div>
              </div>
              <div className="col-span-4 lg:col-span-3">
                <div className="grid grid-cols-2 gap-5 contactFormMain">
                  <div>
                    <input
                      type="text"
                      className="text-white"
                      placeholder="Enter First Name"
                      name="fname"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="text-white"
                      placeholder="Enter Last Name"
                      name="lname"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="text-white"
                      placeholder="Enter Email"
                      name="email"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      className="text-white"
                      placeholder="Enter Phone No"
                      name="phone"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <textarea
                    placeholder="Message"
                    name="message"
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="mt-3">
                  <button
                    className="btn_One px-5 py-4 uppercase font-semibold text-md disabled:cursor-not-allowed disabled:opacity-60"
                    onClick={handleSave}
                    disabled={loading}
                  >
                    {loading ? (
                      <span>Sending...</span>
                    ) : (
                      <span>Send Message</span>
                    )}
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
