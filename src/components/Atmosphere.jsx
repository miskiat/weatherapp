import React from "react";

const Atmospheres = ({ icon, title, desc }) => {
  return (
    <div className="section-one">
      <img className="icon" src={icon} />
      <div>
        <div>{title}</div>
        <div>{desc}</div>
      </div>
    </div>
  );
};

export default Atmospheres;
