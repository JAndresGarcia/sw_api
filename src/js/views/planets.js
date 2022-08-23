import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Planets(){
    return (
    <div>
    <h1 className='m-5 text-white'>Peliculas</h1>
       <Outlet />
    </div>)
}