import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Blog = () => {
    const [blogs,setblog]=useState([])
    useEffect(()=>{
      axios.get('/Blog.json')
      .then(res=>{
        console.log(res.data);
        setblog(res.data);
      })
    },[])
  return (
    <div className='w-11/12 mx-auto'>
        <h1 className='text-center mt-16 text-3xl font-bold mb-12'>
           Blogs</h1>

           <section className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {
                blogs.map(blog=><div key={blog.id} className="card card-compact bg-base-100 rounded-none  shadow-xl">
                    <figure>
                      <img className='h-[400px] object-cover'
                        src={blog.image}
                        alt="blog" />
                    </figure>
                    <div className="card-body space-y-2">
                      <h2 className="card-title">{blog.title}</h2>
                      <p className='line-clamp-2 opacity-80'>{blog.description}</p>
                      <div className="card-actions justify-start">
                        <button className="btn rounded-none">Read More</button>
                      </div>
                    </div>
                  </div>)
            }

           </section>

    </div>
  )
}
