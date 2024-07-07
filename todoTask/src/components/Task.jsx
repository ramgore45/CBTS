import React, { useContext, useEffect, useState } from 'react'
import { CiEdit } from 'react-icons/ci'
import { MdDelete } from 'react-icons/md'
import { AppContext } from '../contextApi/ContextAPI'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../Redux/Slice/Cartslice'
import { toast } from 'react-toastify'
import axios from 'axios'
import { SiAwselasticloadbalancing } from 'react-icons/si'

const Task = ({item}) => {
    const {deleteHandler, taskData, changeHandler, url, setEdit, navigate, } = useContext(AppContext)
    // const [complete,setComplete] = useState(false)
    const dispatch = useDispatch()
    const { cart } = useSelector(state => state)

    // async function completeTask(){
    //     await axios.put(`${url}/${item.id}`, taskData.complete)
    //     .then(res=>{
    //         setEdit(false)
    //         setComplete(true)
    //         navigate('/')
    //     })
    //     .catch(error=>console.log(error))
    // }

    const handleCompleteTask = (e) => {
        // setTask(task.map((item) => 
        // item.id === id ? { ...item, completed: true } : item
        // ));
        e.preventDefault()
        axios.put(`${url}/${item.id}`, taskData )
        .then(res=>{
                const completed = cart.find(data => data.id === item.id);
                if (cart && !cart.includes(completed)) {
                    dispatch(add(completed))
                }
                toast.success("Task Completed, Check completed task list")
                setEdit(false)
                navigate('/')
            })
        .catch(error=>console.log(error))
        
    };
    
  return (
    <div className='border-[3px] w-full flex mt-3 rounded-xl'>
        <div className='content-center p-2 font-medium bg-red-100 rounded-l-lg border-r-2'>
            {item.related}
        </div>
        <div className='p-3  w-full bg-red-50 border-l-2 rounded-r-lg'>
            <div className='flex justify-between'>
                <h3 className='font-semibold text-2xl'>{item.topicName}</h3>
                <div className='flex justify-between w-[10%] text-xl font-semibold'>
                    <NavLink to={`/updateTask/${item.id}`}>
                        <div className='text-blue-800 cursor-pointer'><CiEdit /></div>
                    </NavLink>
                    <div className='text-red-600 cursor-pointer' onClick={()=>deleteHandler(item.id)}><MdDelete /></div>
                </div>
            </div>

            <div className='text-gray-600'>
                {item.description}
            </div>

            <div className='flex justify-between'>
                <div className='text-gray-400 content-center'>
                    {item.createdAt}
                </div>
                <button className={`px-[10px] p-1 rounded-lg border text-sm text-gray-400 font-semibold transition flex gap-x-3 
                        ${item.mode==="Completed" ? "bg-green-200 transition-300 disabled":"bg-fuchsia-200 "}
                `} 
                    onClick={item.mode==="Completed" ? "" : handleCompleteTask}
                >
                    {item.mode==="Completed" ? "Completed" : "Mark Complete"}
                    <input     
                        required
                         className={`self-center cursor-pointer
                                ${!item.mode==="Completed" ? "" : "text-green-800 transition-300"}
                            `}
                            type='radio' 
                            name='mode'
                            value='Completed'
                            checked={taskData.mode === "Completed"}
                            onChange={changeHandler}/>
                </button>
            </div>

        </div>
    </div>
  )
}

export default Task