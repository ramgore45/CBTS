import { Route, Routes } from "react-router-dom";
import "./App.css";
import { About } from "./Components/About";
import { Education } from "./Components/Education";
import { Home } from "./Components/Home";
import { Navbar } from "./Components/Navbar";
import { Project } from "./Components/Project";
import { Skills } from "./Components/Skills";

function App() {
  return (
   <div className="bg-gray-700 w-full h-full font-sans ">
    <div className="w-[950px] mx-auto">
        <div >
          <Navbar/>
        </div>
        <div>
            {
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/education" element={<Education/>}/>
                <Route path="/projects" element={<Project/>}/>
                <Route path="/skills" element={<Skills/>}/>
              </Routes>
            }
        </div>
    </div>
   </div>
  );
}

export default App;
