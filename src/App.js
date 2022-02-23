import React, {useState, useEffect } from 'react'
// import { Routes, Route   } from "react-router-dom";
import {Navbar,Exchanges,News,CryptoDetails,Cryptocurrencies,HomePage} from './components';
import './App.css'
import { Layout, Typography, Space } from 'antd';
import { Route, Routes } from 'react-router'; 
import {Link} from 'react-router-dom'
import LandingGlobe from './components/LandingGlobe';
import { useLocation } from "react-router-dom";
const App = () => {
  const location = useLocation();
  const [isLanding, setIsLanding] = useState(false);
  useEffect(()=>{
    if(location.pathname==='/'){
      setIsLanding(true)
    }
    else{
      setIsLanding(false)

    }
  })
  return (
     <>
     <div className="app">
       {!isLanding?
         <div className="navbar">
          <Navbar/>
         </div>
       :null }
         <div className={isLanding?"" :"main"}>
           <Layout>
             <div className={isLanding?"" :"routes"}>
               <Routes>
                 <Route exact path="/" element={  <LandingGlobe/>}  />
                 <Route  path="/home" element={  <HomePage/>}  /> 
                 <Route   path="/cryptocurrencies" element={<Cryptocurrencies/>} /> 
                 <Route   path="/crypto/:coinId" element={<CryptoDetails/> } /> 
                 <Route  path="/news" element={<News/> } />
                 {/* <Route   path="/exchanges" element={<Exchanges/>} />  */}
               </Routes> 
             </div>
           </Layout>
           {!isLanding?
         <div className="footer" >
           <Typography.Title level={5} style={{color:'white',textAlign:'center'}}>
             CrytoMania <br/>
             All rights reserved
           </Typography.Title>
           <Space>
             <Link to="/">Home</Link>
             <Link to="/news">News</Link>
           </Space>
         </div>
       :null }
         </div>
     </div>
     
     </>
  )
}

export default App