import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import Standings from './Components/Api.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Standings/> */}
  </StrictMode>,
)
