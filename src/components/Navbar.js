import React, { useState, useEffect } from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { motion } from "framer-motion";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import icon from "../images/cryptocurrency.png";
import logo from "../images/logo.svg";
import DarkMode from "./DarkMode";
const Navbar = () => {
   
  const [viewMenu, setViewMenu] = useState(false);
  const toggleMenu=()=>{
    setViewMenu(!viewMenu)
  }
  const location = useLocation();
  return (
    <div className="custom-navbar">
      <div className="logo-cont">
        <img src={logo} alt="" />
        <Link to="/home">CryptoMania</Link>
      </div>
      <div className="menu-list-nav display-none-menu">
        <div className={location.pathname==="/home"? "item-inlist item-list-visited":"item-inlist"}>
          <HomeOutlined />
          <Link to="/home">Home</Link>
        </div>
        <div className={location.pathname==="/cryptocurrencies"? "item-inlist item-list-visited":"item-inlist"}>
          <FundOutlined />
          <Link to="/cryptocurrencies">cryptocurrencies</Link>
        </div>
        <div className={location.pathname==="/news"? "item-inlist item-list-visited":"item-inlist"}>
          <BulbOutlined />
          <Link to="/news">news</Link>
        </div>
        <DarkMode />
      </div>
      <div className="hamburger display-none-ham" onClick={toggleMenu}>
        <MenuOutlined />
      </div>
      {viewMenu?
      <motion.div className="menu-after-tab"
      initial={{  y:10 }}
      animate={{  y:0 }}
      exit={{  y:50 }}
   transition={{ duration: 1 }}
      >
        <div className="menu-list-nav  ">
          <div  className={location.pathname==="/home"? "item-inlist item-list-visited":"item-inlist"}  >
            <HomeOutlined />
            <Link to="/home">Home</Link>
          </div>
          <div className={location.pathname==="/cryptocurrencies"? "item-inlist item-list-visited":"item-inlist"}>
            <FundOutlined />
            <Link to="/cryptocurrencies">cryptocurrencies</Link>
          </div>
          <div className={location.pathname==="/news"? "item-inlist item-list-visited":"item-inlist"}>
            <BulbOutlined />
            <Link to="/news">news</Link>
          </div>
          <DarkMode />
        </div>
      </motion.div>
  :null}
    </div>
    // <div className="nav-container">
    //     <div className="logo-container">
    //         <Avatar src={icon} size="large" />
    //         <Typography.Title level={2} className="logo">
    //             <Link to="/">CryptoMania</Link>
    //         </Typography.Title>
    //         <Button className='menu-control-container' onClick={()=>setActiveMenu(!activeMenu)}>
    //           <MenuOutlined/>
    //         </Button>
    //     </div>
    //     {activeMenu && (

    //       <Menu theme="dark">
    //       <Menu.Item icon={<HomeOutlined/>}>
    //         <Link to="/home">Home</Link>
    //       </Menu.Item>
    //       <Menu.Item icon={<FundOutlined/>}>
    //         <Link to="/cryptocurrencies">CryptoCurrency</Link>
    //       </Menu.Item>
    //       <Menu.Item icon={<BulbOutlined/>}>
    //         <Link to="/news">News</Link>
    //       </Menu.Item>
    //       <DarkMode/>
    //     </Menu>
    //       )}
    // </div>
  );
};

export default Navbar;
