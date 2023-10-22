import React, { useState, useEffect } from "react";
import "./Skills.scss";

const industryIcons = {
  Health: 'fa fa-heart',
  Education: 'fa fa-graduation-cap',
  Finance: 'fa fa-dollar',
  Transport: 'fa fa-car',
  Technology: 'fa fa-laptop',
  Telcomm: 'fa fa-phone',
  Energy: 'fa fa-bolt',
  Realstate: 'fa fa-building',
  Retail: 'fa fa-shopping-cart',
};

const Skills = () => {
  return (
    <div className="container">
      <h2>Featured Industries</h2>
      <div className="row">
        {Object.keys(industryIcons).map((industry) => (
          <div className="col-md-4 col-sm-6" key={industry}>
            <div className="box">
              <i className={`icon ${industryIcons[industry]}`}></i>
              <p>{industry}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;

