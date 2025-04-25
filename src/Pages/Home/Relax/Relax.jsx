import React from 'react'

export const Relax = () => {
  return (
    <div className='grid md:grid-cols-2 w-11/12 mx-auto gap-12 my-16'>
        <div>
            <img src="https://i.ibb.co.com/cJFqmq2/room10.jpg" alt="" />
        </div>
        <div className='grid space-y-2'>
<p className='font-semibold text-primary'>Hotel Quest</p>
<h1 className='text-7xl font-bold'>
Relax  in our <br></br> Hotel Resort
</h1>

<div className='grid font-semibold
 text-gray-600 md:grid-cols-2 gap-4'>
     <p>Experience luxury and comfort at Hotel Quest, where every guest is treated like royalty. Our resort offers a variety of world-class amenities, ensuring a truly unforgettable stay.</p>
    <p>Indulge in exquisite dining, unwind at our spa, and enjoy stunning panoramic views from your private room. We pride ourselves on delivering exceptional service and creating memorable experiences for all our visitors.</p>
    <p>From pristine beaches to lush gardens, Hotel Quest is the perfect paradise for relaxation, adventure, and exploration. Whether you're here for a peaceful retreat or an exciting getaway, we cater to all your needs and desires.</p>
    <p>Book your stay at Hotel Quest today and escape to a world of luxury, tranquility, and unparalleled comfort. Your perfect vacation is just a reservation away, and we can’t wait to welcome you!</p>
  
  </div>

  <div className="flex items-center space-x-4">
  <img 
    className="w-16 h-16 rounded-full object-cover" 
    src="https://i.ibb.co/tcsPbcr/person1.jpg" 
    alt="Tamjid Ahmed" 
  />
  <div>
    <h1 className="text-xl font-bold">Tamjid Ahmed</h1>
    <p className="text-lg font-medium text-gray-600">Hotel Manager</p>
  </div>
</div>

        </div>
    </div>
  )
}
