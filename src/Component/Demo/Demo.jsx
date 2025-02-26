import React, { useEffect, useState } from 'react'
import { Spinner } from '../Spinner/Spinner'
import axios from 'axios'

export const Demo = () => {
      const [rooms,setRooms]=useState([])
useEffect(()=>{
  axios.get('https://hotel-booking-platform-server.vercel.app/rooms')
.then(res=>{
  setRooms(res.data);
})

},[])
  return (
    <div className='py-16'>
        <h1 className='text-5xl text-red-500 font-bold'>Demo Page {rooms.length} </h1>
        <div>
          
        </div>
     
    </div>
  )
}
