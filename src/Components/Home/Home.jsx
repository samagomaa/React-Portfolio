import React, { useEffect } from "react";
import photo from "../../Assets/images/avataaars.svg";
import "./Home.css";
export default function Home() {
  useEffect(() => {
    document.title = "Home";
  });
  return (
    <>
      <div className="homeBody vh-100 d-flex justify-content-center align-items-center">
        <div className="text-center text-white w-100">
          <div className="w-100">
            <img src={photo} alt="home icon" className="w-25" />
          </div>
          <div>
            <h2 className="fw-bold fs-1">SAMA GOMAA</h2>
          </div>
          <div className="text-center starIcon">
            <i className="fa-solid fa-star"></i>
          </div>
          <div>
            <p className="m-0">MERN Stack Developer</p>
          </div>
        </div>
      </div>
    </>
  );
}
