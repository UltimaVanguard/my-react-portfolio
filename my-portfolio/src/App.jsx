import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header'
import Image from './components/Image'
import Nav from './components/Nav';

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
      </div>
    </>
  )
}

export default App
