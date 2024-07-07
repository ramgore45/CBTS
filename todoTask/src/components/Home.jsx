import React, { useContext } from 'react'
import Task from './Task'
import { AppContext } from '../contextApi/ContextAPI'
import { NavLink } from 'react-router-dom';
import { Spinner } from './Spinner';

export const Home = () => {
    const {task , edit, loading} = useContext(AppContext)
  return (
    <div >
      <div>
        {
          edit===false &&
          <NavLink to="/createTask">
                  <button className='my-2 text-xl bg-blue-300 rounded-md px-3 p-1 hover:scale-110 shadow-md font-bold'>
                    Create Task
                  </button>
          </NavLink>
        }
      </div>
      <p className='font-medium text-xl text-green-800 mt-3'>List of Tasks</p>
      {loading ? 
        (<Spinner/>)
          :
        (task &&
          task.map((item)=>(
                <Task item={item} key={item.id}/>
          ))
        )
      }
      
    </div>
  )
};
