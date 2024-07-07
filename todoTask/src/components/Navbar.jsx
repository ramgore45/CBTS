import React from 'react'
import { NavLink } from 'react-router-dom';

export const Navbar=()=> {
  return (
    <div className='flex w-full mb-5 justify-between items-center shadow-md '>
            <NavLink to='/' ><div className='cursor-pointer p-1 px-2 m-3 bg-gray-100 hover:bg-gray-200 rounded-md hover:scale-105'>Home</div></NavLink>
            <NavLink to='/completeTask'><div className='cursor-pointer p-1 px-2 m-3 bg-gray-100 hover:bg-gray-200 rounded-md hover:scale-105'>Complete Task</div></NavLink>
    </div>
  )
};
