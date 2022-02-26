import React from 'react'
import Lottie from "lottie-react";
import Loading from '../images/loading.json'
const LoadingAnim = () => {
  return (
     <div className="loading-animation">
         <Lottie animationData={Loading} loop={true}/>
     </div>
  )
}

export default LoadingAnim