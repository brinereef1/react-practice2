import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Choose from './components/Choose_Shape'
import Mine from './components/Mine_is_Yours'
import Summer from './components/Summer_in_October'
import Complex from './components/Complex_Beauty'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/summer_in_october' element={<Summer />} />
        <Route path='/choose_shape' element={<Choose/>} />
        <Route path='/mine_is_yours' element={<Mine />} />
        <Route path='/complex_beauty' element={<Complex />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App