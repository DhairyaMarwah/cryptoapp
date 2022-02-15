import React from 'react'
// import { Routes, Route   } from "react-router-dom";
import {Navbar,Exchanges,News,CryptoDetails,Cryptocurrencies,HomePage} from './components';
import './App.css'
import { Layout, Typography, Space } from 'antd';
import { Route, Routes } from 'react-router'; 
import {Link} from 'react-router-dom'
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
                   
              
                 <Route exact path="/crypto/:coinId" element={<CryptoDetails/> } />
                   
                 <Route exact path="/news" element={<News/> } />
                   
               </Routes>
             </div>
           </Layout>
         <div className="footer" >
           <Typography.Title level={5} style={{color:'white',textAlign:'center'}}>
             CrytoVerse <br/>
             All rights reserved
           </Typography.Title>
           <Space>
             <Link to="/">Home</Link>
             <Link to="/exchanges">Exchnages</Link>
           </Space>
         </div>
         </div>
     </div>
     </>
  )
}

export default App