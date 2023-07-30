import React, { useEffect, useState, useMemo } from "react";
import Viewlist from "../../Assets/Viewlist.png";
import Viewgrid from "../../Assets/Viewgrid.png";
import FilmReel from "../../Assets/FilmReel.png";
import more from "../../Assets/more.png";
import loadingIcon from "../../Assets/loading.png";
import view from "../../Assets/view.png";
import share from "../../Assets/share.png";
import download from "../../Assets/download.png";
import rename from "../../Assets/rename.png";
import copy from "../../Assets/copy.png";
import del from "../../Assets/delete.png";
import alert from "../../Assets/alert.png";
import close from "../../Assets/close.png";
import viewImg from "../../Assets/view-img.png";

const Starships = () => {
  const [expandedGrid, setExpandedGrid] = useState(false);
  const [expandedList, setExpandedList] = useState(true);
  const [movies, setMovies] = useState([]);
  const [randomImages, setRandomImages] = useState([]);
  const [loading, setLoading] = useState(false);
  // State to handle dropdown visibility for each movie
  const [dropdownVisible, setDropdownVisible] = useState([]);

  const [deleteToggleVisible, setDeleteToggleVisible] = useState(false);
  const [deleteToggleIndex, setDeleteToggleIndex] = useState(null);

  const [viewToggleVisible, setViewToggleVisible] = useState(false);
  const [viewToggleIndex, setViewToggleIndex] = useState(null);
  // Function to open the view toggle for a specific movie
  const openViewToggle = (index) => {
    setViewToggleVisible(true);
    setViewToggleIndex(index);
  };
  const closeViewToggle = (index) => {
    setViewToggleVisible(false);
    setViewToggleIndex(null);
  };

  // Function to open the delete toggle for a specific movie
  const openDeleteToggle = (index) => {
    setDeleteToggleVisible(true);
    setDeleteToggleIndex(index);
  };

  // Function to close the delete toggle
  const closeDeleteToggle = () => {
    setDeleteToggleVisible(false);
    setDeleteToggleIndex(null);
  };

  // Function to handle the actual deletion of the movie
  const handleDelete = (index) => {
    // Perform the deletion here (e.g., remove the movie from the movies array)
    const updatedMovies = [...movies];
    updatedMovies.splice(index, 1);
    setMovies(updatedMovies);

    // Close the delete toggle after deletion
    closeDeleteToggle();
  };

  // Function to toggle dropdown visibility for a specific movie
  const toggleDropdown = (index) => {
    setDropdownVisible((prevVisible) => {
      const updatedVisible = [...prevVisible];
      updatedVisible[index] = !updatedVisible[index];
      return updatedVisible;
    });
  };

  useEffect(() => {
    // Initialize dropdownVisible state with false for each movie
    setDropdownVisible(Array(movies.length).fill(false));
  }, [movies]);
  // Use useMemo to cache the fetched data
  const filmLength = useMemo(() => movies.length, [movies]);

  useEffect(() => {
    // Fetch all movies from SWAPI
    setLoading(true);
    fetch("https://swapi.dev/api/starships/")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
        setLoading(false);
        console.log(data.results);
      })
      .catch((error) => console.error("Error fetching movies:", error));

    // Fetch random images from Picsum
    const fetchRandomImages = async () => {
      const imagePromises = Array.from({ length: filmLength }, (_, index) =>
        fetch(`https://picsum.photos/400/300?random=${index}`)
          .then((response) => response.url)
          .catch((error) =>
            console.error("Error fetching random image:", error)
          )
      );
      const images = await Promise.all(imagePromises);
      setRandomImages(images);
    };
    fetchRandomImages();
  }, [setExpandedGrid, filmLength]);

  const handleGridClick = () => {
    setExpandedGrid(true);
    setExpandedList(false);
  };

  const handleListClick = () => {
    setExpandedList(true);
    setExpandedGrid(false);
  };

  return (
    <div className="main-container">
      <div className="top-container">
        <h2>Starships</h2>
        <div className="toggle-container">
          <button
            className={`toggle-button ${expandedGrid ? "active" : ""} btn1`}
            onClick={handleGridClick}
          >
            <span className={`icon ${expandedGrid ? "show-text" : ""}`}>
              <img src={Viewgrid} alt="" />
            </span>
            {expandedGrid && "Grid"}
          </button>
          <button
            className={`toggle-button ${expandedList ? "active" : ""} btn2`}
            onClick={handleListClick}
          >
            <span className={`icon ${expandedList ? "show-text" : ""}`}>
              <img src={Viewlist} alt="" />
            </span>
            {expandedList && "List"}
          </button>
        </div>
      </div>
      {loading ? ( // Conditionally render the loading icon
        <div className="loading-container">
          <img
            src={loadingIcon}
            alt="Loading..."
            className={`rotate ${loading ? "loading" : ""}`}
          />
        </div>
      ) : expandedGrid ? (
        <div className="card-content">
          <div className="flex-container">
            {movies.map((movie, index) => (
              <div className="main-card" key={movie.episode_id}>
                <div className="card-img">
                  {randomImages[index] && (
                    <img src={randomImages[index]} alt={`Random ${index}`} />
                  )}
                </div>
                <div className="card-info">
                  <div className="left-info">
                    <img src={FilmReel} alt="" />
                    <p>{movie.name}</p>
                  </div>
                  <div className="right-info">
                    <img
                      src={more}
                      alt=""
                      onClick={() => toggleDropdown(index)}
                    />
                    {dropdownVisible[index] && (
                      <div className="dropdown-menu">
                        <div
                          className="single-dropdown"
                          onClick={() => openViewToggle(index)}
                        >
                          <img src={view} alt="" /> <p>View</p>
                        </div>

                        <div className="single-dropdown">
                          <img src={download} alt="" /> <p>Download</p>
                        </div>
                        <div className="single-dropdown">
                          <img src={rename} alt="" /> <p>Rename</p>
                        </div>
                        <div className="single-dropdown">
                          <img src={share} alt="" /> <p>Share</p>
                        </div>
                        <div className="single-dropdown">
                          <img src={copy} alt="" /> <p>Move</p>
                        </div>
                        <div
                          className="single-dropdown"
                          onClick={() => openDeleteToggle(index)}
                        >
                          <img src={del} alt="" />{" "}
                          <p className="last-p">Delete</p>
                        </div>
                      </div>
                    )}
                    {/* delete dropdown  */}
                    {deleteToggleIndex === index && deleteToggleVisible && (
                      <div className="delete-box">
                        <div className="delete-top-box">
                          <img src={alert} alt="" />
                          <div>
                            {" "}
                            <h2>Caution!</h2>
                            <p>
                              Are you sure you want to Delete{" "}
                              <span>{movie.name}</span>{" "}
                            </p>
                          </div>
                        </div>
                        <div className="delete-bottom-box">
                          <button
                            className="cancel-button"
                            onClick={closeDeleteToggle}
                          >
                            Cancel
                          </button>
                          <button
                            className="confirm-button"
                            onClick={() => handleDelete(index)}
                          >
                            Yes
                          </button>
                        </div>
                      </div>
                    )}
                    {/*  view dropdown*/}
                    {viewToggleIndex === index && viewToggleVisible && (
                      <div className="view-container">
                        <div className="top-view-container">
                          <div className="detail-container">
                            {" "}
                            <h2>Starship details</h2>
                            <img
                              src={close}
                              alt=""
                              onClick={() => closeViewToggle(index)}
                            />
                          </div>
                        </div>
                        <div className="mid-view-container">
                          <div className="mid-detail-container">
                            <div className="img-div">
                              <p>Image</p>
                              <img src={viewImg} alt="" />
                            </div>
                            <div className="title-div">
                              <p>Name</p>
                              <div className="title-container">
                                {movie.name}
                              </div>
                            </div>
                            <div className="crawl-div">
                              <p>Model</p>
                              <div className="crawl-container">
                                {movie.model}
                              </div>
                            </div>
                            <div className="genre-div">
                              <p>Rating</p>
                              <div className="genre-container">
                                {movie.hyperdrive_rating}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bottom-view-container">
                          <button
                            className="close-button"
                            onClick={() => closeViewToggle(index)}
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="list-container">
          <div className="header-list">
            <p>Name</p>
            <p>Model</p>
            <p>Rating</p>
            <p></p>
          </div>
          <div className="single-list-container">
            {movies.map((movie, index) => (
              <div className="main-list">
                <div className="left-list">
                  <img src={FilmReel} alt="" />
                  {movie.name.slice(0, 10)}
                </div>
                <p>{movie.model.trim("").slice(0, 8)}</p>
                <p>{movie.hyperdrive_rating}</p>
                <img src={more} alt="" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Starships;
