import React from "react";
import "./SideBar.css";
import { Link, useLocation } from "react-router-dom";
import Folder from "../../Assets/FolderSimple.png";
import Caret from "../../Assets/CaretRight.png";

const SideBar = () => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <ul className="side-list">
        <li
          className={`list-item ${
            location.pathname.startsWith("/films") ? "active-sidebar" : ""
          }`}
        >
          <Link className="nav-link" to="/films">
            <div className="list-link">
              <img src={Folder} alt="" />
              <p>Films</p>
            </div>
            <img src={Caret} alt="" />{" "}
          </Link>{" "}
        </li>
        <li
          className={`list-item ${
            location.pathname.startsWith("/peoples") ? "active-sidebar" : ""
          }`}
        >
          <Link className="nav-link" to="/peoples">
            <div className="list-link">
              <img src={Folder} alt="" />
              <p>Peoples</p>
            </div>

            <img src={Caret} alt="" />
          </Link>
        </li>
        <li
          className={`list-item ${
            location.pathname.startsWith("/planets") ? "active-sidebar" : ""
          }`}
        >
          <Link className="nav-link" to="/planets">
            <div className="list-link">
              <img src={Folder} alt="" />
              <p>Planets</p>
            </div>

            <img src={Caret} alt="" />
          </Link>
        </li>
        <li
          className={`list-item ${
            location.pathname.startsWith("/species") ? "active-sidebar" : ""
          }`}
        >
          <Link className="nav-link" to="/species">
            <div className="list-link">
              <img src={Folder} alt="" />
              <p>Species</p>
            </div>

            <img src={Caret} alt="" />
          </Link>
        </li>
        <li
          className={`list-item ${
            location.pathname.startsWith("/starships") ? "active-sidebar" : ""
          }`}
        >
          <Link className="nav-link" to="/starships">
            <div className="list-link">
              <img src={Folder} alt="" />
              <p>Starships</p>
            </div>

            <img src={Caret} alt="" />
          </Link>
        </li>
        <li
          className={`list-item ${
            location.pathname.startsWith("/vehicles") ? "active-sidebar" : ""
          }`}
        >
          <Link className="nav-link" to="/vehicles">
            <div className="list-link">
              <img src={Folder} alt="" />
              <p>Vehicles</p>
            </div>

            <img src={Caret} alt="" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
