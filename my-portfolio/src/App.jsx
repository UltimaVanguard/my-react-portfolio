// import CSS and other pages
import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Image from './components/Image';
import Footer from './components/Footer';

// main App
function App() {
  return (
    <>
      <div>
        <header className='align-items-center d-flex justify-content-between'>
          <Header />
          <Nav />
        </header>
        <Image />
        <Outlet />
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  )
}

export default App