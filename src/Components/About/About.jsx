import React, { useEffect } from "react";
import "./About.css";

export default function About() {
  useEffect(() => {
    document.title = "About";
  });
  return (
    <>
      <div className="AboutPage vh-100">
        <div className="container text-white vh-100 d-flex justify-content-center align-items-center">
          <div className="row pt-5">
            <div className="col-md-12">
              <div className="text-center pt-5">
                <h1 className="fw-bold">ABOUT</h1>
                <div className="starIcon">
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="d-flex justify-content-center align-items-center">
                <p className="w-75 py-4 fs-3 text-center">
                  I am a software engineer. Recognized as a practical and
                  effective developer, experienced in leading cross-functional
                  teams in a time-pressured setting to complete projects on
                  schedule and within budget.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
