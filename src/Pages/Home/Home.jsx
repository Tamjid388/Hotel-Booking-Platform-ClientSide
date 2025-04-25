import React from 'react'
import { Banner } from './Banner/Banner'
import { HotelMap } from './Map/HotelMap'
import { FAQ } from './FAQ/FAQ'
import { Blog } from './Blog/Blog'
import { PopUp } from './Popup/PopUp'
import { Relax } from './Relax/Relax'



export const Home = () => {
  return (
    <div>
         <title>  Home | HotelQuest</title>
        <Banner></Banner>
        <HotelMap></HotelMap>
        <Relax></Relax>
        <Blog></Blog>
        <FAQ></FAQ>
        <PopUp></PopUp>
      
    </div>
  )
}
