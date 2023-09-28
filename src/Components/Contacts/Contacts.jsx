import React, { useEffect } from 'react'
import './Contacts.css'
export default function Contacts() {
  useEffect(()=> { document.title = 'Contacts'})
  return <>
  <div>
    <div className='contactsPage py-4'>
    <h1 className='fw-bold text-center'>CONATCT SECTION</h1>
    <div className='starI position-relative text-center'> 
    <div className="fa-solid fa-star"></div>
    </div>
    <div className='container w-50 '>
      <div className="row">
        <div className="col-md-12">
        <input 
        id='userName' 
        type="text" 
        className='form-control formStyle border-0 border-bottom mt-5 py-3 focus-ring-light' 
        placeholder='userName' />
        </div>
        <div className="col-md-12">
        <input 
        type="text"
        className='form-control formStyle border-0 border-bottom mt-5 py-3 focus-ring-light'
        placeholder='userAge' />
        </div>
        <div className="col-md-12">
        <input 
        type="email" 
        className='form-control formStyle border-0 border-bottom mt-5 py-3 focus-ring-light' 
        placeholder='userEmail' />
        </div>
        <div className="col-md-12">
        <input 
        type="password" 
        className='form-control formStyle border-0 border-bottom my-5 py-3 focus-ring-light' 
        placeholder='userPassword' />
        </div>
      </div>
      
      
      
      
      <button className='btn text-white formBtn'>send Message</button>
    </div>
    </div>
  </div>
  </>
}

