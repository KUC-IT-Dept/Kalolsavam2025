
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Home from './components/Home'
import Search from './components/Search'
import Schedule from './components/Schedule'


function App() {



  return (
    <>


      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Search' element={<Search />} />
          <Route path='/Schedule' element={<Schedule />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
