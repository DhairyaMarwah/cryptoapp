import React from 'react'
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom'; 
import { useGetCryptosQuery } from '../services/cryptoApi';
import { News,Cryptocurrencies } from '.';
import Loader from './Loader';
import {motion} from 'framer-motion'
import LoadingAnim from './LoadingAnim';
const {Title}=Typography;
const HomePage = () => {  
  const {data,isFetching}=useGetCryptosQuery(10)
  if(isFetching) return <LoadingAnim/>
  console.log(data);
  const globalStats=data?.data?.stats;
  return (
   <motion.div
   initial={{  y:50 }}
   animate={{  y:0 }}
   exit={{  y:50 }}
transition={{ duration: 1 }}
   >
    <Title level={2} className="heading" >
    Global Crypto Status
    </Title>
    <Row>
      <Col span={12}><Statistic title="Total CryptoCurrencies" value={globalStats.total}/></Col>
      <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)}/></Col>
      <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)}/></Col>
      <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)}/></Col>
      <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)}/></Col> 
    </Row>
    <div className="home-heading-container">
      <Title level={2} className="home-title">
        Top 10 Cryptocurrencies in the world
      </Title>
      <Title level={4} className="show-more">
        <Link to='/cryptocurrencies'>
        Show more
        </Link>
      </Title>
    </div>
    <Cryptocurrencies simplified/>
    <div className="home-heading-container">
      <Title level={2} className="home-title">
        Latest Crypto News
      </Title>
      <Title level={4} className="show-more">
        <Link to='/news'>
        Show more
        </Link>
      </Title>
    </div>
    <News simplified/>
   </motion.div>
  )
}

export default HomePage