import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Index'

function Web() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={ <Home /> } />
        </Routes>
    </BrowserRouter>
  )
}

export default Web

createRoot(document.getElementById('web')).render(<Web />);
