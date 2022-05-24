import './App.scss'
import concert from './ressources/TitleScreen.jpg';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Menubar from './components/NavigationBar';
import { Card, Grid } from '@mui/material';
import NavigationBar from './components/NavigationBar';
import FooterBar from './components/FooterBar';
import Home from './pages/Home';

function App() {

  return (
    <div className='main'>
      <Parallax pages={3}>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={1.0}
          style={{
            backgroundImage: `url(${concert})`,
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer
          offset={0}
          speed={1} 
          factor={1}
        >
          
          <h1 className='center'>Instrumentenverleih</h1>
          
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={1} 
          factor={1}
          sticky={{start: 1, end: 3}}
        >
          <NavigationBar/>
        </ParallaxLayer>


        <ParallaxLayer
          offset={2}
          speed={1.5} 
          factor={1}
        >


          <Home />

          

        </ParallaxLayer>

      </Parallax>
    </div>
  )
}

export default App
