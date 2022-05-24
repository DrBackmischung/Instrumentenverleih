import './App.scss'
import concert from './ressources/concert.jpg';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Menubar from './components/snippets/Menubar';


function App() {

  return (
    <div className='main'>
      <Parallax pages={3}>
        {/* <ParallaxLayer speed={1}>
            <h2>Welcome to my website</h2>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5}>
            <h2>Web development is fun!</h2>
        </ParallaxLayer> */}

        <ParallaxLayer
          offset={0}
          speed={1}
          factor={1.2}
          style={{
            backgroundImage: `url(${concert})`,
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer
          offset={0}
          speed={2.2} 
          factor={1}
        >
          
          <h1 className='center'>Instrumentenverleih</h1>
          
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={200} 
          factor={1}
          sticky={{start: 1, end: 3}}
        >
          <Menubar></Menubar>
        </ParallaxLayer>


      </Parallax>
    </div>
  )
}

export default App
