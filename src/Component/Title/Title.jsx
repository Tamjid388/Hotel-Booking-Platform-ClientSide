import React from 'react'

export const Title = ({heading,subheading}) => {
  return (
    <div>
            <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">{heading}</h1>
        <p className="text-lg font-semibold text-gray-600">{subheading}</p>
      </div>
    </div>
  )
}
