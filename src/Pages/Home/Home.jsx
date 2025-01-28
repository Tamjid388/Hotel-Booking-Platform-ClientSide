import React from 'react'
import { Banner } from './Banner/Banner'
import { HotelMap } from './Map/HotelMap'
import { FAQ } from './FAQ/FAQ'
import { Blog } from './Blog/Blog'



export const Home = () => {
  return (
    <div>
        
        <Banner></Banner>
        <HotelMap></HotelMap>
        <Blog></Blog>
        <FAQ></FAQ>
      
    </div>
  )
}
