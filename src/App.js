import  "./App.css"
import Navbar from "./components/Navbar"
import TextArea from "./components/TextArea"
import AboutPage from "./components/AboutPage"
import React, { useState } from 'react'


function App() {  
  const [mode, setMode] = useState("light")

  const toggleMode = () => {
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#042743"
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = "white"
    }
  
  }
  return (
   <>
    <Navbar title = "TextUtils" aboutApp = "About" mode={mode} toggleMode = {toggleMode}/>
    <div className="container">
    <TextArea heading = "Edit Your Text Here" mode={mode} />
    <AboutPage/>
    </div>
   </>
  )
}

export default App
