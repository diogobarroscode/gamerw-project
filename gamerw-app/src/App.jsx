import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import './App.css'
import Footer from './components/footer/Footer'
import Sidebar from './components/sidebar/Sidebar'


function App() {

  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
