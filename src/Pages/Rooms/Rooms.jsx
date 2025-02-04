import { useEffect, useState } from "react"
import { RoomCard } from "./RoomCard/RoomCard"
import { Title } from "../../Component/Title/Title"
import axios from "axios"
import { useQuery } from "@tanstack/react-query"
import { div } from "motion/react-client"
import { Spinner } from "../../Component/Spinner/Spinner"


export const Rooms = () => {
//     const [rooms,setRooms]=useState([])
// useEffect(()=>{
//   axios.get('https://hotel-booking-platform-server.vercel.app/rooms')
// .then(res=>{
//   setRooms(res.data);
// })

// },[])

const {isLoading, data:rooms=[]}=useQuery({
  queryKey:['allrooms'],
  queryFn:async()=>{
    const res=await axios.get('https://hotel-booking-platform-server.vercel.app/rooms')
    return res.data
  }
})
if(isLoading){
  return <div>
   <Spinner></Spinner>
    </div>
}


  return (
    <div className="pt-8">
      <div className="pt-16">
      <Title 
       heading="Explore Our Exquisite Rooms"
       subheading="Comfort, luxury, and elegance combined for an unforgettable stay."
      ></Title>
     
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
