import React from "react";
import ContactItem from "../components/ContactItem";
import Title from "../components/Title";
import phone from "../img/phone.svg";
import email from "../img/emailme.svg";
import location from "../img/location.svg";

const ContactPage = () => {
  return (
    <div>
      <div className="title">
        <Title title={"About Me"} span={"Sobre mi"} />
      </div>
      <div className="ContactPage">
        <div className="map-sect">
          <iframe
            src="https://maps.google.com/maps?q=lima&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="600"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
        <div className="contact-sect">
          <ContactItem icon={phone} text={"+51 936944063"} title={"Telefono"} />
          <ContactItem
            icon={email}
            text={"aponcenicolas@gmail.com"}
            title={"Email"}
          />
          <ContactItem
            icon={location}
            text={"Ate Vitarte Lima-Perú"}
            title={"Direccion"}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
