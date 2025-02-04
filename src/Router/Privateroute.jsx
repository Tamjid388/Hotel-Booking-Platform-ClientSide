import React, { useContext } from 'react'
import { Authcontext } from '../Providers/Authprovider'
import { Navigate, useLocation } from 'react-router-dom'
import { Spinner } from '../Component/Spinner/Spinner'

export const Privateroute = ({children}) => {
    const {user,loading}=useContext(Authcontext)
    const location=useLocation()
    if(loading){
        return <Spinner></Spinner>
    }
    if(user){
       return children
    }
  return <Navigate to={'/login'} state={{from:location}} replace></Navigate>
}
