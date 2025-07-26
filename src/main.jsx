import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/navbar.jsx'
import Land from './components/landing.jsx'
import Button from './components/button.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Land />
    <Button />
  </StrictMode>,
)
