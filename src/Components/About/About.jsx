import React, { useEffect } from "react";
import "./About.css"

export default function About() {
    useEffect(()=> { document.title = 'about'})
    return <>
    <div className="AboutPage vh-100">
        <div className="text-center text-white position-absolute translate-middle top-50 start-50 w-100">
            <h1 className="fw-bold">ABOUT COMPONENT</h1>
            <div className='starIcon'>
        <i className="fa-solid fa-star"></i>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-md-6 text-start">
                    <p>Freelancer is a free bootstrap theme created by Route.
                        The download include the complete source files including HTML,
                    CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
                <div className="col-md-6 text-start">
                    <p>Freelancer is a free bootstrap theme created by Route.
                        The download includes the complete source files including HTML,
                    CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
            </div>
        </div>
        </div>
    </div>
    </>
}
