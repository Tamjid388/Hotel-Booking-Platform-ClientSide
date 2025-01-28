import { useEffect, useState } from "react"
import { RoomCard } from "./RoomCard/RoomCard"
import { Title } from "../../Component/Title/Title"
import axios from "axios"


export const Rooms = () => {
    const [rooms,setRooms]=useState([])
useEffect(()=>{
  axios.get('http://localhost:5000/rooms')
.then(res=>{
  setRooms(res.data);
})

},[])


  return (
    <div>
      <div className="pt-16">
      <Title 
       heading="Explore Our Exquisite Rooms"
       subheading="Comfort, luxury, and elegance combined for an unforgettable stay."
      ></Title>
      <h1 className="text-center text-xl font-bold">Total Rooms {rooms.length}</h1>
      </div>
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 container mx-auto px-2">
    {
        rooms.map(room=><RoomCard
             key={room._id}
             room={room}
             
             ></RoomCard>)
    }
   </div>
    </div>
  )
}
