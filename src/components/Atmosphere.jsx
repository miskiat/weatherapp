import React from "react";

const Atmospheres = ({ icon, title, desc }) => {
  console.log(icon);
  return (
    <div className="section-one">
      <img src={icon} />
      <div>
        <div>{title}</div>
        <div>{desc}</div>
      </div>
    </div>
  );
};

export default Atmospheres;
