import './App.scss'
import Home from './pages/Home';
import NavigationBar from './components/NavigationBar';
import { Route, Router, Routes } from 'react-router-dom';
import FooterBar from './components/FooterBar';
import Ausleihe from './pages/Ausleihe';
import VerstaerkerDetail from './pages/VerstaerkerDetail';
import SchlagzeugDetail from './pages/SchlagzeugDetail';
import Detail from './pages/Detail';

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<><Home /></>} />
          <Route path="/ausleihe" element={<><NavigationBar/><Ausleihe /><FooterBar/></>} />
          <Route path="/marktplatz" element={<><NavigationBar/><Ausleihe /><FooterBar/></>} />
          <Route path="/serviceportal" element={<><NavigationBar/><Ausleihe /><FooterBar/></>} />
          <Route path="/detailVerstaerker" element={<><NavigationBar/><VerstaerkerDetail /></>} />
          <Route path="/ausleihe/egitarre" element={<><NavigationBar/><Ausleihe /><FooterBar/></>} />
          <Route path="/ausleihe/verstaerker" element={<><NavigationBar/><Detail /><FooterBar/></>} />
          <Route path="/ausleihe/orgel" element={<><NavigationBar/><Ausleihe /><FooterBar/></>} />
          <Route path="/ausleihe/schlagzeug" element={<><NavigationBar/><SchlagzeugDetail /><FooterBar/></>} />
          <Route path="/ausleihe/zubehoer" element={<><NavigationBar/><Ausleihe /><FooterBar/></>} />
          <Route path="/ausleihe/sonstiges" element={<><NavigationBar/><Ausleihe /><FooterBar/></>} />
          <Route path="/marktplatz/:id" element={<><NavigationBar/><Ausleihe /><FooterBar/></>} />

      </Routes>
    </>
  )
}

export default App
