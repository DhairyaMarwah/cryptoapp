import React,{useState,useEffect,useRef,useCallback} from 'react'
import Lottie from "lottie-react";
import Astronaut from '../images/astronaut.json'
import Globe from "react-globe.gl";  
import HEX_DATA from "./countries_hex_data.json";
import GlobeBg from '../images/GlobeBg.svg'
import LandingGrad from '../images/LandingGrad.svg'
import Bitcoin from '../images/Bitcoin.png'
import Blockchain from '../images/Blockchain.png'
import Ethereum from '../images/Ethereum.png'
import Faceicon from '../images/faceicon.png'
import Cosmos from '../images/Cosmos.png'
import { ContainerFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
const LandingGlobe = () => {
  const [counter, setCounter] = React.useState(20);
 const navigate=useNavigate()
  // Third Attempts
  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);
  if(counter==0){
    // navigate('/home' )
    // console.log("hello");
  }
    const globeEl = useRef();
    const [hex, setHex] = useState({ features: [] });

  useEffect(() => {
    setHex(HEX_DATA);
  }, [hex]);
    useEffect(() => {
        globeEl.current.controls().autoRotate = true;
        globeEl.current.controls().autoRotateSpeed = 3.7;
        globeEl.current.controls().enableZoom = false;
      }, []);
  return (
    <div className="landing-page-container">
      <div className="lottie-animation">
        <Lottie animationData={Astronaut} loop={true}/>
      </div>
      <div className="landing-gradient">
        <img src={LandingGrad} alt="" />
      </div>
      <div className="landing-page-logo">
        <img src={Faceicon} alt="" />
      </div>
      <div className="landing-logo-text">
      <h1> <span>&lt;</span> Dhairya Marwah <span>/&gt;</span> </h1>
      </div>
      <div className="landing-page-svgs">
        <img src={Bitcoin} alt="" />
      </div>
      <div className="landing-page-svgs landing-page-svgs2">
        <img src={Blockchain} alt="" />
      </div>
      <div className="landing-page-svgs landing-page-svgs3">
        <img src={Ethereum} alt="" />
      </div>
      <div className="landing-page-svgs landing-page-svgs4">
        <img src={Cosmos} alt="" />
      </div>
<div className="landing-page-text">
  <h1>Welcome to my crypto app</h1>
  <p>Redirect to the crypto app
    to track real time crypto fluctuations.
  </p>
  <Link to="/home"   class="btn">
        <span class="btn__circle"></span>
        <span class="btn__white-circle">
          <svg xmlns="http://www.w3.org/2000/svg" id="icon-arrow-right" viewBox="0 0 21 12">
            <path d="M17.104 5.072l-4.138-4.014L14.056 0l6 5.82-6 5.82-1.09-1.057 4.138-4.014H0V5.072h17.104z"></path>
          </svg>
        </span>
        <span class="btn__text">Discover the project</span>
      </Link>
      <div className='redirecting-text' style={{marginTop:"10px"}}><p > Redirecting in : {counter} seconds</p> </div>
</div>
    <div className='landing-page-globe'>
        <Globe
         ref={globeEl}
         globeImageUrl={GlobeBg}
         backgroundColor="rgba(0,0,0,0)"
         showAtmosphere={true}
         atmosphereAltitude={0.13}
         atmosphereColor="#4459ef"
         animateIn={true}
         hexPolygonsData={hex.features}
         hexPolygonResolution={3}
         hexPolygonMargin={0.62}
         pointAltitude="size"
         pointRadius="radius"
         hexPolygonColor={useCallback(() => "#ffff", [])}
         pointColor="color"
         />
    </div>
         </div>
  )
}

export default LandingGlobe