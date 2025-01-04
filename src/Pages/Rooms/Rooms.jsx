import { useEffect, useState } from "react"
import { RoomCard } from "./RoomCard/RoomCard"
import { Title } from "../../Component/Title/Title"


export const Rooms = () => {
    const [rooms,setRooms]=useState([])
useEffect(()=>{
    fetch("room.json")
    .then(res=>res.json())
    .then(data=>{
        setRooms(data)

    })

},[])

  return (
    <div>
      <div className="pt-16">
      <Title 
       heading="Explore Our Exquisite Rooms"
       subheading="Comfort, luxury, and elegance combined for an unforgettable stay."
      ></Title>
      </div>
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 container mx-auto px-2">
    {
        rooms.map(room=><RoomCard
             
             room={room}
             
             ></RoomCard>)
    }
   </div>
    </div>
  )
}
