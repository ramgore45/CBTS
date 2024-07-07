import React from 'react'
import { ProjectItems } from './Data/ProjectItems'

export const Project = () => {
  return (
    <div className='py-10 min-h-[100vh] max-w-[100vw]'>
      <p className='text-5xl text-indigo-400 font-mono font-bold border-b-2 w-fit border-indigo-500'>Skills</p>
      <div className='flex justify-center gap-x-8 mt-8'>
        {
          ProjectItems.map((item)=>(
            <div className='h-fit w-fit border border-blue-300 flex flex-col justify-center p-5 text-white gap-y-4 rounded-xl hover:bg-gray-800 shadow-lg shadow-white'>
              <img src={`${item.img}`}
                  className='h-40 w-60 self-center rounded-xl'
              />
              <p className='self-center text-xl'>{item.title}</p>
              <p className='text-gray-400 text-center' >{item.desc}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}
