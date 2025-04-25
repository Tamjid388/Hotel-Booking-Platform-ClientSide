import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Authcontext } from '../../Providers/Authprovider'
import { FcNegativeDynamic } from 'react-icons/fc'
import Swal from 'sweetalert2'
import { Toggle } from '../DarkMode/Toggle'

export const Navbar = () => {
  const {user,logout}=useContext(Authcontext)
    const navOptions=
    <>
    <li><NavLink className={'mx-1'} to={'/'}> Home</NavLink></li>
    <li><NavLink className={'mx-1'} to={'/rooms'}>Rooms</NavLink></li>
    {
      !user &&  <li><NavLink className={'mx-1'} to={'/register'}>Register</NavLink></li>
    }
   
   
    <li><NavLink className={'mx-1'} to={'/mybookings'}>My Bookings</NavLink></li>
    <li><NavLink className={'mx-1'} to={'/about'}>About Us</NavLink></li>
    
   
    </>
    function handlelogout(){
      logout()
      .then(()=>{
        console.log("Logged out");
        Swal.fire({
          title: "Logged out!",
          icon: "success",
          draggable: true
        });
      })
    }
  return (
    <div>
         <div>
        <div className="navbar fixed z-10 bg-primary text-white ">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content
          text-black bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
         {navOptions}
        </ul>
      </div>
      <a className="btn btn-ghost text-xl">HotelQuest</a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
      {navOptions}
      </ul>
    </div>
    <div className="navbar-end">
     {
      user?  
     <>
      <Toggle></Toggle>
      <Link onClick={handlelogout}  className="btn">Logout</Link></>
      :
      <>
      <Toggle></Toggle>
      <NavLink className={'btn btn-outline text-white'} to={'/login'}>Login</NavLink>
      </>
     }
    </div>
  </div></div>
    </div>
  )
}
