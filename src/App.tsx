import './App.scss'
import concert from './ressources/guitar5.jpg';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Home from './pages/Home';

function App() {

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
            backgroundColor: 'black'
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
            backgroundImage: 'linear-gradient(rgba(49,43,36,0), black 80%)'
          }}
        >
        </ParallaxLayer>


        <ParallaxLayer
          offset={1}
          speed={0.6} 
          factor={1}
          style={{
            backgroundColor: 'black'
          }}
        >
          <Home />
        </ParallaxLayer>

      </Parallax>
    </div>
  )
}

export default App
