import React from "react";

const ContactItem = ({ icon, text, title }) => {
  return (
    <div className="ContactItem">
      <div className="contact">
        <img src={icon} alt="" />
        <div className="right.items">
          <h6>{title}</h6>
          <p>{text}</p>
        </div>
      </div>
      <h1>ContactItem</h1>
    </div>
  );
};

export default ContactItem;
