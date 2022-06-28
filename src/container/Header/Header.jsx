import React, { useState } from "react";
import { SubHeading } from "../../components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";

import { images } from "../../constants";
import "./Header.scss";

const Headermenu = [
  {
    title: "The Key to Fine Dining",
    description:
      "Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus",
    imgUrl: `${images.meal01}`,
  },
  {
    title: "Reserve Your Table Today",
    description:
      "Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus",
    imgUrl: `${images.meal02}`,
  },

  {
    title: "Food That Surprise You",
    description:
      "Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus",
    imgUrl: `${images.meal03}`,
  },
  {
    title: "Love The Original Taste",
    description:
      "Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus",
    imgUrl: `${images.meal04}`,
  },
];
const Pagination = ({ isActive, handleClick }) => (
  <div
    className={`w-5 h-5 rounded-full cursor-pointer border-solid border border-golden  ${
      isActive ? "bg-golden" : "bg-black "
    } `}
    onClick={handleClick}
  />
);

const infoVariants = {
  init: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const infoChildVariants = {
  init: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,

      type: "tween",
    },
  },
};
const Header = () => {
  const [indexMeal, setIndexMeal] = useState(0);

  return (
    <section id="home" className="min-h-screen">
      <div className="grid__section">
        <motion.div
          className="grid__section--info"
          variants={infoVariants}
          initial="init"
          animate="animate"
        >
          <SubHeading title="Chase The New Flavour" />
          <motion.h1
            className="font-base text-golden tracking-wider  font-bold  "
            variants={infoChildVariants}
          >
            {Headermenu[indexMeal].title}
          </motion.h1>
          <motion.p className="p__opensans" variants={infoChildVariants}>
            {Headermenu[indexMeal].description}
          </motion.p>
          <motion.div variants={infoChildVariants}>
            <button
              whileHover={{ backgroundColor: "#F5EFDB" }}
              type="button"
              className="custom__button "
            >
              Explore Menu
            </button>
          </motion.div>
        </motion.div>
        <div className="grid__section--img relative">
          <img src={Headermenu[indexMeal].imgUrl} alt="img" />
          <div className="absolute bottom-6  flex  w-full justify-center space-x-5 ">
            {Headermenu.map((item, index) => (
              <Pagination
                key={index}
                isActive={index === indexMeal}
                handleClick={() => setIndexMeal(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
