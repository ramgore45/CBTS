import axios from 'axios'
import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'

export const AppContext = createContext()
export const AppContextProvider = ({children}) => {

    const url = "https://64e23131ab0037358818ce9b.mockapi.io/home/jobs/createTask"
    const navigate = useNavigate();

    const [task,setTask] = useState();
    const [edit,setEdit] = useState(false);
    const [loading,setLoading] = useState(false)


    const [taskData,setTaskData] = useState({
        topicName : " ", description:" ", related:"", mode : ""
    })

    //handle change in input text
    function changeHandler(event){
        setTaskData((prev)=>{
            return({
                ...prev,
                [event.target.name] : event.target.value
            })
        })
    }

    async function getTasksData(){
        setLoading(true)
        await axios.get(url)
        .then((res)=>{
            setTask(res.data)
            setTaskData({})
        })
        .catch((error)=> console.log(error))
        setLoading(false)
    }

    // To create task
    async function saveHandler(e){
        e.preventDefault()
        setLoading(true)
        await axios.post(url, taskData)
        .then((res)=>{
            setTask((prev)=> [...prev, res.data])
            toast.success("Task Created Successfully")
            setEdit(false)
            navigate('/')
            setTaskData({})
        })
        .catch(error => console.log(error))
        setLoading(false)
    }

    

    // To delete Task
    async function deleteHandler(id){       
        await axios.delete(`${url}/${id}`)
        setLoading(true)
        getTasksData()
        toast.error("Job deleted")
        setLoading(false)
    }

    const values = {
        task, setTask, url, navigate,
        taskData, setTaskData,
        edit, setEdit,
        loading, setLoading,
        getTasksData,
        saveHandler,
        deleteHandler,
        changeHandler
    }

  return (
    <AppContext.Provider value={values} >
        {children}
    </AppContext.Provider>
  )
}