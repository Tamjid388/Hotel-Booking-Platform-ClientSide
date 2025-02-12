import React from 'react'

export const Title = ({heading,subheading}) => {
  return (
    <div>
            <div className="text-center mb-8">
        <h1 className=" text-2xl md:text-4xl lg:text-5xl  font-bold text-gray-800 mb-2">{heading}</h1>
        <p className="text-lg md:text-2xl font-semibold pt-2 text-gray-600">{subheading}</p>
      </div>
    </div>
  )
}
