import React from "react";

const Skys = ({ title, icon, desc }) => {
  return (
    <div className="weather">
      <div>{title}</div>
      <img className="skys" src={icon} />
      <div>{desc}</div>
    </div>
  );
};

export default Skys;
