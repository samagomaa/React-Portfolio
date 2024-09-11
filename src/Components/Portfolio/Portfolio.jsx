import React, { useEffect } from "react";
import "./Portfolio.css";
import prj1 from "../../Assets/images/Responsive Weather Web APP (1).png";
import prj2 from "../../Assets/images/movies2.png";
import prj3 from "../../Assets/images/event.png";
import prj4 from "../../Assets/images/saraha.png";
import prj5 from "../../Assets/images/jobsearchapp.png";
import prj6 from "../../Assets/images/e-commerce.png";

export default function Portfolio() {
  useEffect(() => {
    document.title = "ShowRoom";
  });
  return (
    <>
      <div className="portfolioPage d-flex justify-content-center align-items-center">
        <div className="container py-5">
          <div className="row g-4">
            <div className="col-md-12">
              <div className="text-center">
                <h1>My Recent Work</h1>
                <div className="starIcon starIconPort">
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="position-relative Pimg">
                <div>
                  <img src={prj2} alt="poert1" className="w-100 rounded-3" />
                </div>
                <div className="imgLayer  w-100 h-100 rounded-3 position-absolute top-0 left-0 start-0">
                  <a href="https://github.com/samagomaa/Movies">
                    <button className="btn text-white fw-bold border-white border-3 rounded-5 px-5 position-absolute top-50 start-50 translate-middle">
                      Vist
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="position-relative Pimg">
                <div>
                  <img src={prj1} alt="poert1" className="w-100 rounded-3" />
                </div>
                <div className="imgLayer w-100 h-100 rounded-3 position-absolute top-0 left-0 start-0">
                  <a href="https://github.com/samagomaa/weather-app">
                    <button className="btn text-white fw-bold border-white border-3 rounded-5 px-5 position-absolute top-50 start-50 translate-middle">
                      Vist
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="position-relative Pimg">
                <div>
                  <img src={prj3} alt="poert1" className="w-100 rounded-3" />
                </div>

                <div className="imgLayer w-100 h-100 rounded-3 position-absolute top-0 left-0 start-0">
                  <a href="https://github.com/samagomaa/Event-Invitation">
                    <button className="btn text-white fw-bold border-white border-3 rounded-5 px-5 position-absolute top-50 start-50 translate-middle">
                      Vist
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="position-relative Pimg">
                <div>
                  <img src={prj4} alt="poert1" className="w-100 rounded-3" />
                </div>

                <div className="imgLayer w-100 h-100 rounded-3 position-absolute top-0 left-0 start-0">
                  <a href="https://github.com/samagomaa/Saraha-App">
                    <button className="btn text-white fw-bold border-white border-3 rounded-5 px-5 position-absolute top-50 start-50 translate-middle">
                      Vist
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="position-relative Pimg">
                <div>
                  <img src={prj5} alt="poert1" className="w-100 rounded-3" />
                </div>

                <div className="imgLayer w-100 h-100 rounded-3 position-absolute top-0 left-0 start-0">
                  <a href="https://github.com/samagomaa/job-search-app">
                    <button className="btn text-white fw-bold border-white border-3 rounded-5 px-5 position-absolute top-50 start-50 translate-middle">
                      Vist
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="position-relative Pimg">
                <div>
                  <img src={prj6} alt="poert1" className="w-100 rounded-3" />
                </div>

                <div className="imgLayer w-100 h-100 rounded-3 position-absolute top-0 left-0 start-0">
                  <a href="https://github.com/samagomaa/E-commerce_Backend">
                    <button className="btn text-white fw-bold border-white border-3 rounded-5 px-5 position-absolute top-50 start-50 translate-middle">
                      Vist
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
