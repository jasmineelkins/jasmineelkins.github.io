import React, { useState } from "react";
import headshot from "../assets/images/other/headshot.png";
import { FaGithub, FaLinkedin, FaEnvelope, FaBlogger } from "react-icons/fa";
import { ImEarth } from "react-icons/im";
import { BsMedium } from "react-icons/bs";

function Header(props) {
  return (
    <header className="hero">
      <div className="headshot">
        <img
          src="https://res.cloudinary.com/dbl7owtdh/image/upload/v1657220412/Portfolio%20Images/new_headshot_c44msq.png"
          className="portrait"
          alt="Portrait"
        />
      </div>

      <h1>Hi!</h1>
      <h2>I'm Jasmine</h2>
      <h3>full-stack developer</h3>
      <h4>scientist, artist, rock climber, explorer</h4>

      <div id="locationIcon">
        <ImEarth size={30} />
        <h5>
          &nbsp;<b> New York, NY</b>
        </h5>
      </div>

      <div id="iconContainer">
        <a
          href="mailto:jasmine.elkins@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/jasmineelkins"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/jasmine-elkins/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        {/* <a
          href="https://manyroadstohere.blogspot.com"
          target="_blank"
          rel="noreferrer"
        >
          <FaBlogger />
        </a> */}
        <a
          href="https://medium.com/@jasmine.elkins"
          target="_blank"
          rel="noreferrer"
        >
          <BsMedium />
        </a>
      </div>
    </header>
  );
}

export default Header;
