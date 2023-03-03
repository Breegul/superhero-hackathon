import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { SearchPage, HomePage } from '../pages'
import { Nav } from '../components'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
      </Route>
    </Routes>

  )
}

export default App
