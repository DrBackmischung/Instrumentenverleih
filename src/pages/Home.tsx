import { Box, Container, Grid, Typography } from "@mui/material";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./styles/Home.scss"
import concert from '../ressources/guitar5.jpg';
import HomeContent from "../components/HomeContent";

function Home() {

    return (
        <div className='main'>
          <Parallax pages={2}>
            <ParallaxLayer
              offset={0}
              speed={1}
              factor={2.3}
              style={{
                backgroundImage: `url(${concert})`,
                backgroundSize: 'cover',
                backgroundColor: 'rgba(14,20,32,255)'
              }}
            />
    
            <ParallaxLayer
              offset={0}
              speed={0.05} 
              factor={1}
            >
              
              <h1 className='home-header'>Instrumentenverleih</h1>
              <h4 className='home-swipe'>Swipe up!</h4>
              <h4 className='home-arrow'>^</h4>
              
            </ParallaxLayer>
    
            <ParallaxLayer
              offset={0.7}
              speed={1} 
              factor={1.3}
              style={{
                backgroundImage: 'linear-gradient(rgba(49,43,36,0), rgba(14,20,32,255) 80%)'
              }}
            >
            </ParallaxLayer>
    
    
            <ParallaxLayer
              offset={1}
              speed={0.6} 
              factor={1}
              style={{
                backgroundColor: 'rgba(14,20,32,255)'
              }}
            >
              <HomeContent />
            </ParallaxLayer>
    
          </Parallax>
        </div>
    )

}

export default Home;