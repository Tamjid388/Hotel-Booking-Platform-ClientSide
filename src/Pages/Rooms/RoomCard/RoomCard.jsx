import React from 'react'

export const RoomCard = ({room}) => {
  const {id,name,image_url,availability,cost_per_night,description,reviews}=room
  return (
    <div>
      <div className="card bg-base-100 rounded-none shadow-xl h-full">
  <figure className='h-[250px]'>
    <img className='h-full w-full object-cover'
      src={image_url}
      alt="Images Of Rooms" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     {name}
      <div className="badge badge-secondary">{ availability? "Available":"Not Available" }</div>
    </h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <button className='btn btn-outline  rounded-none'>More Info</button>
    </div>
  </div>
</div>
    </div>
  )
}
