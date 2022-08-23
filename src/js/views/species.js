import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Species(){
    return (
    <div>
    <h1 className='m-5 text-white'>Species</h1>
       <Outlet />
    </div>)
}