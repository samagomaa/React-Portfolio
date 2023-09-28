import React, { useEffect } from 'react'
import photo from '../../Assets/images/avataaars.svg'
import './Home.css'
export default function Home() {
        useEffect(()=> { document.title = 'home'})
return <>
<div className='homeBody vh-100'>
        <div className='text-center text-white '> 
        <img src={photo} alt="home icon" className='w-25 pb-4'/>
        <h2 className='fw-bold fs-1'>START FRAMEWORK</h2>
        <div className='starIcon'>
        <i className="fa-solid fa-star"></i>
        </div>
        <p className='my-2'>Graphic Artist - Web Designer - Illustrator</p>
        </div>
        </div>
</>

}
