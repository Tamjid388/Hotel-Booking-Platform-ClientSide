import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Title } from '../../Component/Title/Title'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

export const RoomDetails = () => {
  // const [roomdetail,setRoom]=useState()
  const {id}=useParams()

  console.log(id);
  const { isPending, error, data: room } = useQuery({
    queryKey: ['roomDetails', id], 
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/rooms/${id}`);
      return res.data; 
    },
  });

  if (isPending) return 'Loading...'

  function handledBooking(){
    //  document.getElementById("my_modal_5").showModal();
  }

  return (
    <div className='py-16'>

    <Title heading={'RoomDetails'}></Title>
    <div className="container mx-auto flex flex-col lg:flex-row gap-8 p-6 bg-gray-50 shadow-lg rounded-lg">
  {/* Image Section */}
  <div className="lg:w-1/2">
    <img
      src={room.image_url}
    
      className="w-full h-auto rounded-lg object-cover"
    />
  </div>

  {/* Details Section */}
  <div className="lg:w-1/2 flex flex-col justify-between">
    {/* Room Title */}
    <h1 className="text-4xl font-bold text-gray-800 mb-4">{room.name}</h1>

    {/* Description */}
    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
      {room.description}
    </p>

    {/* Cost Per Night */}
    <div className="mt-4">
      <h2 className="text-2xl font-semibold text-gray-900">
        Price Per Night:
        <span className="text-teal-500 ml-2">${room.cost_per_night}</span>
      </h2>
    </div>

    {/* Call to Action (Optional) */}
    <div className="mt-8">
      <button onClick={handledBooking} className="bg-teal-600 text-white text-lg px-6 py-3 rounded-lg shadow-lg hover:bg-teal-700 transition-all">
        Book Now
      </button>
    </div>
  </div>
</div>


{/* Modal */}
 {/* Apply Form */}

 

    </div>
  )
}
