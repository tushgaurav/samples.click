import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Lander from './pages/Lander'
import About from './pages/About'
import Request from './pages/Request'
import Why from './pages/Why'
import Careers from './pages/Careers'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Lander />} />
        <Route path="/about" element={<About />} />
        <Route path="/request" element={<Request />} />
        <Route path="/why" element={<Why />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
