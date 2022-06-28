import React from "react";
import { images } from "../../constants";

const SubHeading = ({ title }) => (
  <div className="">
    <p className="font-base text-xs xs:text-2xl text-white tracking-[0.64px] font-bold">
      {title}
    </p>
    <img src={images.spoon} alt="spoon" className="w-11" />
  </div>
);

export default SubHeading;
