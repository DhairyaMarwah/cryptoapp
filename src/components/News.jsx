import React, { useState } from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';
import {useGetCryptoNewsQuery} from '../services/cryptoNewsApi' 
import {useGetCryptosQuery} from '../services/cryptoApi' 
import Loader from './Loader';
import { motion } from 'framer-motion';
import LoadingAnim from './LoadingAnim';
const {Text,Title}=Typography
const {Option}=Select
const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';
const News = ({simplified}) => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency')
  const{data:cryptoNews}=useGetCryptoNewsQuery({newsCategory,count:simplified?6:12})
  const {data}=useGetCryptosQuery(100)
  // console.log(cryptoNews);
  if(!cryptoNews?.value) return <LoadingAnim/>
  return (
    <motion.div className='news-page-wrapper'
    initial={{  y:50 }}
   animate={{  y:0 }}
   exit={{  y:50 }}
transition={{ duration: 1 }}
    >
    <Row gutter={[24,24]}>
      {!simplified && (
        <Col span={24}>
        <Select showSearch className="select-news" placeholder="select a Crypto" optionFilterProp="children"
          onChange={(value)=>setNewsCategory(value)}
          filterOption={(input,option)=>option.children.toLowerCase().indexOf(input.toLoweCase()>=0)}
        >
            <Option value="Cryptocurrency">Cryptocurrency</Option>
            {data?.data?.coins.map((coin)=><Option value={coin.name}>{coin.name}</Option>)}
        </Select>
        </Col>
      )}
      {cryptoNews.value.map((news,i)=>(
        <Col sm={12} xs={24} lg={8} key={i}>
          <Card className="news-card" hoverable>
              <a href={news.url} target="_blank" rel="noreferrer">
                <div className="news-image-container">
                  <img style={{maxWidth:'200px' ,maxHeight:'100px'}} src={news?.image?.thumbnail?.contentUrl || demoImage} alt="" />
                </div>
                  <Title className="news-title" level={4}>
                      {news.name}
                  </Title>
                <p>
                  {news.description>100?
                  `${news.description.substring(0,50)}...`
                  :
                  news.description}
                </p>
                <div className="provider-container">
                  <div>
                  <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} />
                  <Text className="provider-name">{news.provider[0]?.name}</Text>
                  </div>
                  <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                </div>
              </a>
          </Card>
        </Col>
      ))}
    </Row>
      </motion.div>
  )
}

export default News