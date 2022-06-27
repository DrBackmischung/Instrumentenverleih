import './App.scss'
import Home from './pages/Home';
import NavigationBar from './components/NavigationBar';
import { Route, Router, Routes } from 'react-router-dom';
import FooterBar from './components/FooterBar';
import Ausleihe from './pages/Ausleihe';
import Detail from './pages/Detail';
import CookiesNotification from './components/CookiesNotification';
import { QueryClient, QueryClientProvider } from 'react-query';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ProfilePage from './pages/Profil';
import ChatBot from './components/ChatBot';
import Marktplatz from './pages/Marktplatz';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
      <CookiesNotification/>
        <Routes>
            <Route path="/" element={<><Home /></>} />
            <Route path="/profil" element={<><NavigationBar/><ProfilePage /><FooterBar/></>} />
            <Route path="/login" element={<><NavigationBar/><SignIn /><FooterBar/></>} />
            <Route path="/signup" element={<><NavigationBar/><SignUp /><FooterBar/></>} />
            <Route path="/ausleihe" element={<><NavigationBar/><Ausleihe /><FooterBar/></>} />
            <Route path="/ausleihe/:instrumentID" element={<><NavigationBar/><Detail /><FooterBar/></>} />
            <Route path="/marktplatz" element={<><NavigationBar/><Marktplatz /><FooterBar/></>} />
            <Route path="/serviceportal" element={<><NavigationBar/><Ausleihe /><FooterBar/></>} />
            <Route path="/marktplatz/:id" element={<><NavigationBar/><Ausleihe /><FooterBar/></>} />

        </Routes>
        <ChatBot />
      </QueryClientProvider>
    </>
  )
}

export default App
