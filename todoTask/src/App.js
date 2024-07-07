import { Route, Routes } from "react-router";
import "./App.css";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { CreateTask } from "./components/CreateTask";
import { useContext, useEffect } from "react";
import { AppContext } from "./contextApi/ContextAPI";
import { UpdateTask } from "./components/updateTask";
import { CompleteTask } from "./components/CompleteTask";

function App() {

  const {getTasksData, edit} = useContext(AppContext)

  useEffect(()=>{
    getTasksData()
  },[edit])

  return (
   <div className="mx-auto w-[800px] my-5 ">
    <div >
      <Navbar/>
    </div>
   

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/createTask" element={<CreateTask/>}/> 
      <Route path='/completeTask' element={<CompleteTask/>}/>
      <Route path="/updateTask/:id" element={<UpdateTask/>}/>
    </Routes> 

   </div>
  );
}

export default App;
