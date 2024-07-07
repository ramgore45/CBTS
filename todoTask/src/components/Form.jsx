import React, { useContext } from 'react'
import { AppContext } from '../contextApi/ContextAPI'

export const Form = () => {
    const {saveHandler, changeHandler , taskData , edit, updateHandler} = useContext(AppContext)
  return (
    <div className='w-[80%] mx-auto m-3'>
        <h2 className='font-medium text-xl'>{edit ? "Edit Task":"Create Task"}</h2>
        <form className='p-5 flex flex-col gap-y-2' onSubmit={edit ? updateHandler : saveHandler}>

             <div className='w-full flex '>
                <label className='w-full flex justify-between'>Topic Name<sup className="text-red-400 right-1 top-2">*</sup> : 
                    <input 
                        required
                        className="w-[80%] px-2 border border-gray-200 rounded-md outline-none"
                            type='text'
                            placeholder="HTML, CSS, Javascript, etc"
                            name='related'
                            value={taskData.related}
                            onChange={changeHandler}
                    />
                </label>
            </div>

            <div className='w-full flex '>
                <label className='w-full flex justify-between'>Topic Name<sup className="text-red-400 right-1 top-2">*</sup> : 
                    <input 
                        required
                        className="w-[80%] px-2 border border-gray-200 rounded-md outline-none"
                            type='text'
                            placeholder="HTML basic tags, HTML table, HTML form etc"
                            name='topicName'
                            value={taskData.topicName}
                            onChange={changeHandler}
                    />
                </label>
            </div>

            <div className='flex'>
                <label className='w-full flex justify-between'>Description<sup className="text-red-400 right-1 top-2">*</sup> : 
                    <input 
                        required
                        className="w-[80%] px-2 border border-gray-200 rounded-md outline-none"
                            type='text'
                            placeholder="write the description"
                            name='description'
                            value={taskData.description}
                            onChange={changeHandler}
                    />
                </label>
            </div>

            <div className='flex justify-center content-center'>
                <button className='bg-green-400 p-2 px-4 rounded-md hover:scale-105 hover:bg-green-500 text-white font-medium'>
                   {edit ? "Update" : "Save"}
                </button>
            </div>
        </form>
    </div>
  )
}
