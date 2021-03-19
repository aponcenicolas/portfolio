import React from "react";
import about from "../img/avatar.png";

const ImageSection = () => {
  return (
    <div className="ImageSection">
      <div className="img">
        <img src={about} alt="" />
      </div>
      <div className="about-info">
        <h4>
          Soy <span> Nicolas Aponce</span>
        </h4>
        <p className="about-text">
          descripcion descripcion descripcion descripcion descripcion
          descripcion descripcion descripcion descripcion descripcion
          descripcion descripcion descripcion descripcion descripcion
          descripcion descripcion descripcion descripcion descripcion
          descripcion descripcion descripcion descripcion descripcion
          descripcion descripcion descripcion descripcion descripcion
        </p>
        <div className="about-details">
          <div className="left-section">
            <p>Nombre</p>
            <p>Apellido</p>
            <p>Edad</p>
            <p>Nacionalidad</p>
            <p>Idioma</p>
            <p>Dirección</p>
          </div>
          <div className="right-section">
            <p>Nicolas</p>
            <p>Aponce</p>
            <p>25</p>
            <p>Peruano</p>
            <p>Español</p>
            <p>Ate Vitarte Lima-Perú</p>
          </div>
        </div>
        <button className="btn">Descargar CV</button>
      </div>
    </div>
  );
};

export default ImageSection;
