import React from 'react'
// import { Routes, Route   } from "react-router-dom";
import {Navbar,Exchanges,News,CryptoDetails,Cryptocurrencies,HomePage} from './components';
import './App.css'
import Layout from 'antd/lib/layout/layout';
import { Route, Routes } from 'react-router';
const App = () => {
  return (
     <>
     <div className="app">
         <div className="navbar">
          <Navbar/>
         </div>
         <div className="main">
           <Layout>
             <div className="routes">
               <Routes>
                 <Route exact path="/" element={  <HomePage/>}  />
                 
                  
                 <Route exact path="/exchanges" element={<Exchanges/>} />
                   
                  
                 <Route exact path="/cryptocurrencies" element={<Cryptocurrencies/>} />
                   
              
                 <Route exact path="/crypto/:coinid" element={<CryptoDetails/> } />
                   
                 <Route exact path="/news" element={<News/> } />
                   
               </Routes>
             </div>
           </Layout>
         </div>
         <div className="footer"></div>
     </div>
     </>
  )
}

export default App