import React from "react";
export default function Footer() {
  return (
    <>
      <div className="upperFooter py-5">
        <div className="container text-white">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="text-center">
                <h3>LOCATION</h3>
                <p>Giza, Egypt</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center">
                <h3>CONNECT WITH ME</h3>
                <div>
                  <a href="https://www.facebook.com/profile.php?id=100008853250931&locale=ar_AR">
                    <i className="fa-brands fa-facebook mx-2 p-2 border rounded-circle text-white"></i>
                  </a>
                  <a href="https://github.com/samagomaa">
                    <i className="fa-brands fa-github mx-2 p-2 border rounded-circle text-white"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/sama-gomaa">
                    <i className="fa-brands fa-linkedin-in mx-2 p-2 border rounded-circle text-white"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center">
                <h3>ABOUT</h3>
                <p className="m-0 px-5">
                  A MERN Stack Engineer. I help startups launch and grow their
                  products
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
