import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Starships(){
    return (
    <div>
    <h1 className='m-5 text-white'>Naves</h1>
       <Outlet />
    </div>)
}