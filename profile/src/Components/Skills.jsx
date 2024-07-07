import React from 'react'
import { SkillsItems } from './Data/SkillsItems'

export const Skills = () => {
  return (
    <div className='py-10'>
        <div >
            <p className='text-5xl text-indigo-400 font-mono font-bold border-b-2 w-fit border-indigo-500'>Skills</p>
            <div className='flex flex-wrap justify-center gap-x-10 gap-y-10 mt-10'>
              {
                SkillsItems.map((item)=>(
                    <div key={item.id}
                      className='h-fit w-fit flex flex-col justify-center bg-gradient-to-r from-blue-200 to-green-100 rounded-3xl'
                    >
                        <img src={`${item.img}`}
                          className='h-60 w-60 p-7'
                        />
                    </div>
                ))
              }
            </div>
        </div>
    </div>
  )
}
