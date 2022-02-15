import React from 'react'
// import { Routes, Route   } from "react-router-dom";
import {Navbar} from './components';
import './App.css'
const App = () => {
  return (
     <>
     <div className="app">
         <div className="navbar">
          <Navbar/>
         </div>
         <div className="main"></div>
         <div className="footer"></div>
     </div>
     </>
  )
}

export default App