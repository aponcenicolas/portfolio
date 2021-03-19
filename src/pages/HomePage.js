import React from "react";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomePage = () => {
  return (
    <div className="HomePage">
      <header className="hero">
        <h1 className="hero-text">
          Hola soy
          <span> Nicolas Aponce</span>
        </h1>
        <p className="h-sub-text">
          este es la descripcion este es la descripcion este es la descripcion
          este es la descripcion este es la descripcion este es la descripcion
          este es la descripcion este es la descripcion este es la descripcion
        </p>
        <div className="icons">
          <a
            href="https://www.facebook.com/Zoro.Nicolas"
            className="icon-holder"
          >
            <FontAwesomeIcon icon={faFacebook} className="icon fb" />
          </a>

          <a href="https://github.com/aponcenicolas" className="icon-holder">
            <FontAwesomeIcon icon={faGithub} className="icon gh" />
          </a>

          <a
            href="https://www.linkedin.com/in/aponcenicolas/"
            className="icon-holder"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icon ln" />
          </a>
        </div>
      </header>
    </div>
  );
};

export default HomePage;
