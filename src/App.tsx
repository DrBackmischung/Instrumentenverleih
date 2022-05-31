import './App.scss'
import Home from './pages/Home';
import NavigationBar from './components/NavigationBar';
import { Route, Router, Routes } from 'react-router-dom';
import FooterBar from './components/FooterBar';
import Ausleihe from './pages/Ausleihe';

function App() {

  return (
    <>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ausleihe" element={<><NavigationBar/><Ausleihe /><FooterBar/></>} />
          <Route path="/marktplatz" element={<><NavigationBar/><Ausleihe /><FooterBar/></>} />
          <Route path="/serviceportal" element={<><NavigationBar/><Ausleihe /><FooterBar/></>} />
      </Routes>
    </>
  )
}

export default App
