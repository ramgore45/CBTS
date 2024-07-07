import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Task from './Task'

export const CompleteTask = () => {

  const { cart } = useSelector((state)=> state)
  console.log(cart)


  return (
    <div>
      <p className='font-medium text-xl text-green-900 mt-3'>List of Completed Tasks</p>
      {
        cart.map((item)=>(
          <Task key={item.id} item={item} />
        ))
      }
    </div>
  )
}

