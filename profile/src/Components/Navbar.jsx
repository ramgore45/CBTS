import React from 'react'
import { NavItems } from './Data/NavItems'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    
  return (
    <div className='w-[950px] mx-auto py-3 text-white'>
        <div className='flex justify-between'>
            <NavLink to='/'>
                <div className='font-mono font-bold text-[20px] cursor-pointer'>
                    Portfolio
                </div>
            </NavLink>
            <div className=' font-semibold flex gap-x-5'>
                {
                    NavItems.map((item)=>(
                        <NavLink to={`${item.path}`}>
                            <button key={item.id} className='focus:text-blue-500 focus:border-b-2 focus:border-blue-500 cursor-pointer hover:text-blue-300 hover:border-b-2 hover:border-blue-300'>
                                {item.page}
                            </button>
                        </NavLink>
                    ))
                }
            </div>
        </div>
    </div>
    
  )
}
