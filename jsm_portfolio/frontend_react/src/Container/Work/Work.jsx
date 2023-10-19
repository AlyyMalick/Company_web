import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { Appwrap } from "../../wrapper";
import "./Work.scss";
const Work = () => {
  return (
    <>
      <h2 className="head-text">
        My Creative
        <span> Portfolio </span>
        Section
      </h2>
      <div className="app__work-filter">
        {["UI/UX ", "Web App ", "Mobile App ", "React JS ", "All"]}
      </div>
    </>
  );
};

export default Work;
