 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import HomeLayout from './Pages/HomeLayout'
import Home from "./Pages/Home";
import Work from "./Pages/Work";
import Whatwedo from "./Pages/Whatwedo";
import About from "./Pages/About";
import Contact from "./Pages/Contact";




function App() {


  return (
    <>
   
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home/>} /> 
          <Route path="work" element={<Work />} />
          <Route path="whatwedo" element={<Whatwedo/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>

        </Route>
      </Routes>
   
   </>
  )
}

export default App
