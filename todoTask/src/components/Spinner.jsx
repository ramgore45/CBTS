import React from 'react'
import { ClipLoader } from 'react-spinners'

export const Spinner = () => {
  return (
    <div className='flex justify-center content-center h-screen w-screen'>
        <ClipLoader color="#49ae72" />
    </div>
  )
}
