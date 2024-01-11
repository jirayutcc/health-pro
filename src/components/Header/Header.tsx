import "./Header.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import healthpro from "../../assets/logo/healthpro.png";

const Links = [{ name: "คำนวณ BMI", link: "/bmi" }];

function Header() {
    const [open, setOpen] = useState(false);

    return (
        <div className="w-full fixed top-0 left-0 backdrop-blur transition-colors duration-500">
            <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
                {/* logo section */}
                <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
                    <Link to="/" className="logo">
                        <img
                            className="object-contain h-12 w-12"
                            src={healthpro}
                        ></img>
                    </Link>
                    <Link to="/" className="titleName hidden sm:block">
                        <span>Health Pro</span>
                    </Link>
                </div>
                {/* Menu icon */}
                <div
                    onClick={() => setOpen(!open)}
                    className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
                >
                    {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
                </div>
                {/* linke items */}
                <ul
                    className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                        open ? "top-12" : "top-[-490px]"
                    }`}
                >
                    {Links.map((link) => (
                        <li
                            className="md:ml-8 md:my-0 my-7 font-semibold"
                            onClick={() => setOpen(!open)}
                        >
                            <Link
                                to={link.link}
                                className="subTitleName hover:text-sky-400 duration-500"
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                    {/* <button className="btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static">
            Get Started
          </button> */}
                </ul>
                {/* button */}
            </div>
        </div>
    );
}

export default Header;
