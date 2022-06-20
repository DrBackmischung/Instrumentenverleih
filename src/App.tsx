import './App.scss'
import Home from './pages/Home';
import NavigationBar from './components/NavigationBar';
import { Route, Router, Routes } from 'react-router-dom';
import FooterBar from './components/FooterBar';
import Ausleihe from './pages/Ausleihe';
import Detail from './pages/Detail';
import CookiesNotification from './components/CookiesNotification';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
      <CookiesNotification/>
        <Routes>
            <Route path="/" element={<><Home /></>} />
            <Route path="/ausleihe" element={<><NavigationBar/><Ausleihe /><FooterBar/></>} />
            <Route path="/ausleihe/:instrumentID" element={<><NavigationBar/><Detail /><FooterBar/></>} />
            <Route path="/marktplatz" element={<><NavigationBar/><Ausleihe /><FooterBar/></>} />
            <Route path="/serviceportal" element={<><NavigationBar/><Ausleihe /><FooterBar/></>} />
            <Route path="/marktplatz/:id" element={<><NavigationBar/><Ausleihe /><FooterBar/></>} />

        </Routes>
      </QueryClientProvider>
    </>
  )
}

export default App
