import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter as Router } from "react-router-dom"
import { HeroProvider } from '../contexts'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HeroProvider>
      <Router>
        <App />
      </Router>
    </HeroProvider>
  </React.StrictMode>,
)
