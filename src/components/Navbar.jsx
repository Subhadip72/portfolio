import React, { useState } from "react";
import logo from "../assets/logo1.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { TfiClose } from "react-icons/tfi";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <nav className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={logo} alt="logo" style={{ width: "3.5rem" }} />
      </div>

      <ul className="hidden md:flex">
        <li className="hover:bg-pink-600 px-3 py-1 duration-300 rounded-md">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="hover:bg-pink-600 px-3 py-1 duration-300 rounded-md">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="hover:bg-pink-600 px-3 py-1 duration-300 rounded-md">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="hover:bg-pink-600 px-3 py-1 duration-300 rounded-md">
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="hover:bg-pink-600 px-3 py-1 duration-300 rounded-md">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      <div
        className="md:hidden z-10 text-2xl cursor-pointer"
        onClick={handleClick}
      >
        {nav ? <TfiClose /> : <FaBars />}
      </div>

      <ul
        className={
          nav
            ? "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex-col justify-center items-center hidden"
        }
      >
        <li className="py-6 text-4xl">
          <Link to="home" smooth={true} duration={500} onClick={handleClick}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link to="about" smooth={true} duration={500} onClick={handleClick}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link to="skills" smooth={true} duration={500} onClick={handleClick}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link to="work" smooth={true} duration={500} onClick={handleClick}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link to="contact" smooth={true} duration={500} onClick={handleClick}>
            Contact
          </Link>
        </li>
      </ul>
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0 -z-10">
        <ul>
          <li className="w-[160px] h-[60px] ml-[-100px] hover:ml-[-15px] duration-300">
            <a
              href="https://www.linkedin.com/in/subhadip-chakraborty-b66763237/"
              target="_blank"
              className="p-2 w-full h-full text-gray-300 flex justify-between items-center text-xl bg-blue-600"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] ml-[-100px] hover:ml-[-15px] duration-300">
            <a
              href="https://github.com/Subhadip72"
              target="_blank"
              className="p-2 w-full h-full text-gray-300 flex justify-between items-center text-xl bg-[#333]"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] ml-[-100px] hover:ml-[-15px] duration-300">
            <a
              href="subhadipchakraborty193@gmail.com"
              target="_blank"
              className="p-2 w-full h-full text-gray-300 flex justify-between items-center text-xl bg-[#6fc2b0]"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] ml-[-100px] hover:ml-[-15px] duration-300">
            <a
              href="C:\Users\RUPAK CHAKRABORTY\Downloads\Subhadip Chakraborty Resume (1).pdf"
              className="p-2 w-full h-full text-gray-300 flex justify-between items-center text-xl bg-[#565f69]"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
