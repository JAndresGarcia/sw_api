import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Peoples(){
    return (
    <div>
    <h1 className='m-5 text-white'>Personajes</h1>
       <Outlet />
    </div>)
}