import React from 'react'
import errorimg from "../../assets/404error.png"
import { Link } from 'react-router-dom'

export const Error = () => {
  return (
    <div className='flex md:h-screen gap-4  flex-col justify-center items-center bg-yellow-100'>
        
   <div className='flex justify-center items-center   '>
    <img className='max-w-4xl mx-auto object-contain w-full' src={errorimg} alt="" />
   </div>

  <div className=''>
  <Link to={"/"} className="btn btn-warning">Back TO Home</Link>
  </div>
    </div>
  )
}
