import './App.css'
import ResponsiveAppBar from './layouts/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'

function App() {

  return (
    < >
    <BrowserRouter>
    <ResponsiveAppBar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='*' element={<Home/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
