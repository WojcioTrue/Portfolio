import { mabryProRegular } from "@/app/assets/fonts/MabryPro";
import React from "react";

const SlideParagraph = () => {
  return (
    <p className={`mx-8 mb-9 text-my-gray ${mabryProRegular.className}`}>
      lorem ipsum dol...,lorem ipsum dol...,lorem ipsum dol...,,lorem ipsum
      dol...lorem ipsum dol...lorem ipsum dol...,lorem ipsum dol...,lorem ipsum
      dol...,,lorem ipsum dol...lorem ipsum dol...lorem ipsum dol...,lorem ipsum
      dol...,lorem ipsum dol...,,lorem ipsum dol...lorem ipsum dol...lorem ipsum
      dol...,lorem ipsum
    </p>
  );
};

export default SlideParagraph;
