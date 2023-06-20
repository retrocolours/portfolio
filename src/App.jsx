import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import './App.css'

function App() {
  // const [count, setCount] = useState(100)

  return (
    <>
    <BrowserRouter>
    <Home/>
    </BrowserRouter> 
    </>
  )
}

export default App
