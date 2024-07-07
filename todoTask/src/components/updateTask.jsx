import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../contextApi/ContextAPI';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Form } from './Form';
import { Spinner } from './Spinner';

export const UpdateTask = () => {
    const {id} = useParams();
    const {taskData, setTaskData, url, navigate, setEdit, setLoading, loading} = useContext(AppContext);

    async function getSingleTaskData(){
        setLoading(true)
        await axios.get(`${url}/${id}`)
        .then(res=>{
            console.log(res)
            setEdit(true)
            setTaskData({topicName:res.data.topicName , description:res.data.description})
        })
        .catch(error=>console.log(error))
        setLoading(false)
    }
    useEffect(()=>{
        getSingleTaskData()
    },[])

    function updateHandler(e){
        e.preventDefault()
        setLoading(true)
        axios.put(`${url}/${id}`, taskData)
        .then(res=>{
            setEdit(false)
            navigate('/')
            toast.success('Task updated Succefully')
        })
        .catch(error=>console.log(error))
        setLoading(false)
    }


  return (
    <div>
        {
            loading ? (
                <Spinner/>
            ):(
                <Form updateHandler={updateHandler} />
            )
        }
        
    </div>
  )
}
