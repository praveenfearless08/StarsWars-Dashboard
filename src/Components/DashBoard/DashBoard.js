import React from "react";
import "./DashBoard.css";
import img from "../../Assets/dash-img.png";
const LeftSection = () => {
  return (
    <div className="main">
      <div className="dashboard">
        <img src={img} alt="" />
        <div className="mid-section">
          <h2>Welcome to Star Wars DashBoard</h2>
        </div>
        <div className="bottom-section">
          <p>
            Star Wars is an American epic space opera multimedia franchise
            created by George Lucas, which began with the eponymous 1977 film
            and quickly became a worldwide pop culture phenomenon.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
