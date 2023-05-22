import React from "react";

const Sky = ({ title, iconn, desc }) => {
  return (
    <div className="weather">
      <div>{title}</div>
      <img className="" src="{icon}" />
      <div>{desc}</div>
    </div>
  );
};

export default Sky;
