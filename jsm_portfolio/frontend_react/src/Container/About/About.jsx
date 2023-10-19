import React from "react";
import { motion } from "framer-motion";
// import React from "react";
import { images } from "../../Constants";
import { AppWrap } from "../../wrapper";

import "./About.scss";
const abouts = [
  {
    title: "Web Development",
    description: "We have the best web developers.",
    imgUrl: images.about01,
  },
  {
    title: "React Native Developer",
    description:
      "We have the best React Native developers with a passion for building beautiful mobile applications.",
    imgUrl: images.about02,
  },
  {
    title: "UI/UX",
    description: "Professionals in User Interface and User Experience.",
    imgUrl: images.about03,
  },
  {
    title: "Data Engineering",
    description: "We have the best Data Engineers.",
    imgUrl: images.about04,
  },
];

const About = () => {
  return (
    <>
      <h2 className="head-text">
        I know that
        <span>Good Buisness</span>
        <br />
        means
        <span>good Business</span>
      </h2>
      <div className="app__profiles ">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(About, "about");
