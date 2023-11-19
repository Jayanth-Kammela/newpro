import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Github from '../pages/Github'
import Ntwist from '../pages/Ntwist'
import MainPage from '../MainPage'

const Routing = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/github' element={<Github />} />
        <Route path='/ntwist' element={<Ntwist />} />
      </Routes>
    </React.Fragment>
  )
}

export default Routing