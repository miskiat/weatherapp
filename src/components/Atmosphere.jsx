import React from "react";

const Atmospheres = ({ icon1, desc1, title1, icon2, desc2, title2 }) => {
  return (
    <div className="atmosphere-container">
      <div className="section-one-first">
        <img className="icon" src={icon1} />
        <div>
          <div>{title1}</div>
          <div>{desc1}</div>
        </div>
      </div>

      <div className="section-one-second">
        <img className="icon" src={icon2} />
        <div>
          <div>{title2}</div>
          <div>{desc2}</div>
        </div>
      </div>
    </div>
  );
};

export default Atmospheres;
