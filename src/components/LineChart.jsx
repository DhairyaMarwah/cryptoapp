import React from 'react'
import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement, 
    Tooltip,
    Legend,
    } from 'chart.js';
    
    ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement, 
    Tooltip,
    Legend
    );
const { Title } = Typography;
const LineChart = ({coinHistory,currentPrice,coinName}) => {
    const coinPrice=[]
    const coinTimestamp=[]
    for(let i=0;i<coinHistory?.data?.history?.length;i=i+1){
        coinPrice.push(coinHistory?.data.history[i].price)
        coinTimestamp.push(new Date(coinHistory?.data.history[i].timestamp).toLocaleDateString())
        }
        const data = {
            labels: coinTimestamp,
            datasets: [
              {
                label: 'Price In USD',
                data: coinPrice,
                fill: true,
                backgroundColor: '#be48d1',
                borderColor: '#be48d1',
              },
            ],
          };
          const options = {
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
          };
  return (
   <>
    <Row className='chart-header'>
        <Title level={2} className="chart-title">
            {coinName} Price Chart
        </Title>
        <Col className='price-container'>
            <Title level={5} className="price-change">
                {coinHistory?.data?.change}%
            </Title>
            <Title level={5} className="current-price">
                Current {coinName} Price: $ {currentPrice}
            </Title>
        </Col>
        <Line data={data} options={options}/>
    </Row>
    </>
  )
}

export default LineChart