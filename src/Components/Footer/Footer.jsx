import React from 'react'

export default function Footer() {
return (
    <footer className=''>
        <div className='upperFooter text-white p-5 d-flex justify-content-around'>
            <div className='text-center m-5 w-100'>
                <h3>LOCATION</h3>
                <p>2215 John Daniel Drive <br />
                Clark, MO 65243</p>
            </div>
            <div className='text-center m-5 w-100'>
                <h3>AROUND THE WEB</h3>
                <ul className='nav justify-content-center'>
                    <li><i className="fa-brands nav-item mx-2 p-2 border rounded-circle  fa-facebook"></i></li>
                    <li><i className="fa-brands nav-item mx-2 p-2 border rounded-circle  fa-twitter"></i></li>
                    <li><i className="fa-brands nav-item mx-2 p-2 border rounded-circle  fa-linkedin-in"></i></li>
                    <li><i className="fa-solid  nav-item mx-2 p-2 border rounded-circle fa-globe"></i></li>
                </ul>
            </div>
            <div className='text-center m-5 w-100'>
                <h3>ABOUT FREELANCER</h3>
                <p>Freelance is a free to use, licensed Bootstrap<br/>
                    theme created by Route</p>
            </div>
        </div>
        <div className='bg-dark  text-white p-3 text-center'>
        <h6>Copyright © Your Website 2021</h6>
        </div>
    </footer>
    )
}
