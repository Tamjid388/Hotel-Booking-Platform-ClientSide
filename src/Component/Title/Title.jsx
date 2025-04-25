import React from 'react'

export const Title = ({heading,subheading}) => {
  return (
    <div>
           <div className="text-center mb-8">
  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-base mb-2">{heading}</h1>
  <p className="text-lg md:text-xl lg:text-2xl font-semibold pt-2">{subheading}</p>
</div>

    </div>
  )
}
