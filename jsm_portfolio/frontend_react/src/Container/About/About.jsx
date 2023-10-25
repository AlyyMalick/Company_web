import React from "react";
import { motion } from "framer-motion";
// import React from "react";
import { images } from "../../Constants";

import "./About.scss";

const abouts = [
  {
    title: "Web Development",
    description:
      "Bespoke, fast, functional and agile. There are no limits to what we can create to help you reach your full potential.",
    imgUrl: images.about01,
  },
  {
    title: "App Development",
    description:
      "We craft apps to match your exact vision and business needs. Intuitive and eye-catching interfaces leveraging the latest tech.",
    imgUrl: images.about02,
  },
  {
    title: "SEO",
    description:
      "In the digital age, visibility on search engines is the key to success. Our services cut out the competition and put you at the forefront",
    imgUrl: images.about03,
  },
  {
    title: "Data Engineering",
    description:
      "We thrive on solving complex data challenges and crafting custom solutions. Data Integration, Robust Data Pipelines, Data Warehousing and Big Data Expertise",
    imgUrl: images.about04,
  },
];

const About = () => {
  // const [abouts, setAbouts] = useState([]);

  // useEffect(() => {
  //   const query = '*[_type == "abouts"]';

  //   client.fetch(query).then((data) => setAbouts(data));
  // }, []);

  return (
    <div id="about">
      <h2 className="head-text">
        {/* <br /> */}
        <span>
          Our integrated digital services are here to empower your business
        </span>
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
    </div>
  );
};

export default About;
