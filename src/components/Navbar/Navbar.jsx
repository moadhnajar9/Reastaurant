import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { motion } from "framer-motion";

import images from "../../constants/images";
import "./Navbar.scss";
const navMenu = ["home", "about", "menu", "awards", "contact"];

const navbarMobileVariants = {
  init: {
    y: "-100vh",
  },
  animate: {
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};
const listNavbarMobileVariants = {
  init: {
    y: -5,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};

const NavbarMobile = ({ navMenu, toggleMenu, setToggleMenu }) => (
  <div className="md:hidden flex">
    {!toggleMenu && (
      <GiHamburgerMenu
        fontSize={27}
        onClick={() => setToggleMenu(true)}
        className=" text-white cursor-pointer absolute top-5 right-5 z-20"
      />
    )}

    <div className="flex justify-center items-start">
      {toggleMenu && (
        <MdOutlineRestaurantMenu
          fontSize={27}
          onClick={() => setToggleMenu(false)}
          className="text-golden cursor-pointer absolute top-5 right-5 z-20"
        />
      )}
      {toggleMenu && (
        <>
          <motion.ul
            className="z-10 flex flex-col justify-center items-center space-y-8  fixed top-0 left-0 w-full h-screen bg-costume-black"
            variants={navbarMobileVariants}
            initial="init"
            animate="animate"
          >
            {navMenu.map((item, index) => (
              <motion.li
                key={index}
                className="text-golden text-[2rem] text-center font-base capitalize hover:text-white"
                variants={listNavbarMobileVariants}
              >
                <a href={`#${item}`}>{item}</a>
              </motion.li>
            ))}
            <motion.li
              className="flex sm:hidden justify-center w-full flex-col space-y-8 pt-10"
              variants={listNavbarMobileVariants}
            >
              <a
                href="#login"
                className="text-golden text-[2rem] text-center font-base capitalize hover:text-white flex-1"
              >
                Log In / Register
              </a>

              <a
                href="/"
                className="text-golden text-[2rem] text-center font-base capitalize hover:text-white flex-1"
              >
                Book Table
              </a>
            </motion.li>
          </motion.ul>
        </>
      )}
    </div>
  </div>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [imgageLoaded, setImageLoaded] = useState(true);

  const handleImageLoaded = () => {
    setImageLoaded(false);
  };
  return (
    <nav className="flex w-full  justify-between items-center bg-costume-black py-4 px-5 capitalize">
      <div className="flex justify-start items-center">
        {imgageLoaded && (
          <img
            src={
              "https://wordpress.iqonic.design/product/wp-free/geritcht/wp-content/themes/geritcht-theme/assets/images/logo.svg"
            }
            onError={handleImageLoaded}
            alt="logo"
            className="w-28 xs:w-32 "
          />
        )}
        {!imgageLoaded && (
          <img
            src={images.gericht}
            alt="logo"
            className="w-32 sm:w-[150px] 2xl:w-52"
          />
        )}
      </div>
      <ul className="hidden md:flex flex-1  justify-center items-center space-x-8  ">
        {navMenu.map((item, index) => (
          <li key={index} className="p__opensans hover:text-light-grey">
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className="navbar--login  justify-end items-center space-x-4 sm:flex hidden ">
        <a href="#login" className="p__opensans ">
          Log In / Register
        </a>
        <div className="w-[1px] h-[30px] bg-light-grey" />
        <a href="/" className="p__opensans ">
          Book Table
        </a>
      </div>
      <NavbarMobile
        navMenu={navMenu}
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
      />
    </nav>
  );
};

export default Navbar;
