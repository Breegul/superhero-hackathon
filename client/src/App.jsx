import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { SearchPage, HomePage, HeroesPage } from '../pages'
import { Nav } from '../components'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/Heroes" element={<HeroesPage />}/>
      </Route>
    </Routes>

  )
}

export default App
