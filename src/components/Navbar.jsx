import React, { useState } from "react";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { close, menu, logo } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-2 fixed top-0 z-20 bg-black-200 sm:opacity-[0.97] xxs:h-[12vh] text-white-100`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <a
          href="#hero"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            id="logo-img"
            src={logo}
            alt="logo"
            className="sm:w-[50px] sm:h-[50px] w-[45px] h-[45px] object-contain"
          />
          <span className="sm:flex lg:hidden xl:flex sm:h-[90px] xs:h-[100%] h-[85px] -ml-[0.6rem] logo-text text-white-100">
            Serkan Karışan
          </span>
        </a>

        {/* Desktop Menu */}
        <ul className="list-none hidden lg:flex flex-row gap-14 mt-2">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-primary" : "text-white-100"
              } hover:text-primary text-[21px] font-medium 
                uppercase tracking-[3px] cursor-pointer nav-links`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex flex-1 w-screen justify-end items-center">
          {toggle ? (
            // Menü açıkken
            <div
              className={`fixed top-0 left-0 w-full h-full bg-black-200 bg-opacity-90 p-6 z-20 transition-transform duration-500 ease-in-out transform ${
                toggle ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <div className="flex justify-end">
                <img
                  src={close}
                  alt="close"
                  className="w-[22px] h-[22px] object-contain cursor-pointer"
                  onClick={() => setToggle(!toggle)}
                />
              </div>
              <ul className="list-none flex flex-col items-start justify-center mt-[10rem] space-y-6">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`${
                      active === nav.title ? "text-primary" : "text-white-100"
                    } text-[32px] font-bold font-arenq uppercase cursor-pointer transition-all duration-300`}
                    onClick={() => {
                      setToggle(false);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            // Menü kapalıyken
            <img
              src={menu}
              alt="menu"
              className="w-[34px] h-[34px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
