import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { SearchPage, HomePage, HeroesPage, NotFound } from '../pages'
import { Nav } from '../components'
import '../assets/app.css';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/Heroes" element={<HeroesPage />}/>
        <Route path="*" element={<NotFound />}/>
      </Route>
    </Routes>

  )
}

export default App
