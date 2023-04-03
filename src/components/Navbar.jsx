import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, settoggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar relative">
      <img
        src={logo}
        alt="bank"
        className="w-[148px] h-[92px] hover:scale-125 transition ease-in-out transform-gpu hover:cursor-pointer z-[5]"
      />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 ">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={` bg-[#178af53f] py-3 px-3 rounded-xl hover:opacity-50 transition ease-in-out font-poppins font-normal cursor-pointer text=[16px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-[#EDEBE6] `}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => settoggle((prev) => !prev)}
        />
      </div>
      <div
        className={`${
          toggle ? "flex" : "hidden"
        } p-6 bg-black-gradient absolute top-20 right-0 mx-4  my-2 min-w-[140px] rounded-xl sidebar z-10`}
      >
        <ul className="list-none flex flex-col justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text=[16px] ${
                index === navLinks.length - 1 ? "mb-0" : "mb-4"
              } text-[#EDEBE6] `}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`${
          toggle ? "block" : "hidden"
        } fixed top-0 left-0 w-full h-full bg-black opacity-50 z-9`}
        onClick={() => settoggle(false)}
      ></div>
    </nav>
  );
};

export default Navbar;
