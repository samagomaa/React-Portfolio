import React, { useEffect } from 'react'
import "./Portfolio.css"
import poert1 from '../../Assets/images/poert1.png'
import poert2 from '../../Assets/images/port2.png'
import poert3 from '../../Assets/images/port3.png'

export default function Portfolio() {
  useEffect(()=> { document.title = 'Portfolio'})
  return <>
  <div className='portfolioPage py-5'>
    <div className=' text-center' >
    <h1>PORTFOLIO COMPONENT</h1>
    <div className='starIconPort'>
        <i className="fa-solid fa-star"></i>
        </div>
        <div className="container">
          <div className="row g-4 py-2">
            <div className="col-md-4 position-relative Pimg">
              <img src={poert1} alt="poert1" className='w-100 rounded-3'/>
              <div className="imgLayer  w-100 h-100 rounded-3 position-absolute top-0 left-0 start-0">
              <i className="fa-solid fa-plus fw-bold text-white position-absolute top-50 start-50 translate-middle"></i>
              </div>
            </div>
            <div className="col-md-4 position-relative Pimg">
              <img src={poert2} alt="poert1" className='w-100 rounded-3' />
              <div className="imgLayer w-100 h-100 rounded-3 position-absolute top-0 left-0 start-0">
              <i className="fa-solid fa-plus fw-bold text-white position-absolute top-50 start-50 translate-middle"></i>
              </div>
            </div>
            <div className="col-md-4 position-relative Pimg">
              <img src={poert3} alt="poert1" className='w-100 rounded-3' />
              <div className="imgLayer w-100 h-100 rounded-3 position-absolute top-0 left-0 start-0">
              <i className="fa-solid fa-plus fw-bold text-white position-absolute top-50 start-50 translate-middle"></i>
              </div>
            </div>
            <div className="col-md-4 position-relative Pimg">
              <img src={poert1} alt="poert1" className='w-100 rounded-3' />
              <div className="imgLayer w-100 h-100 rounded-3 position-absolute top-0 left-0 start-0">
              <i className="fa-solid fa-plus fw-bold text-white position-absolute top-50 start-50 translate-middle"></i>
              </div>
            </div>
            <div className="col-md-4 position-relative Pimg">
              <img src={poert2} alt="poert1" className='w-100 rounded-3' />
              <div className="imgLayer w-100 h-100 rounded-3 position-absolute top-0 left-0 start-0">
              <i className="fa-solid fa-plus fw-bold text-white position-absolute top-50 start-50 translate-middle"></i>
              </div>
            </div>
            <div className="col-md-4 position-relative Pimg">
              <img src={poert3} alt="poert1" className='w-100 rounded-3' />
              <div className="imgLayer w-100 h-100 rounded-3 position-absolute top-0 left-0 start-0">
              <i className="fa-solid fa-plus fw-bold text-white position-absolute top-50 start-50 translate-middle"></i>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
  </>
}

