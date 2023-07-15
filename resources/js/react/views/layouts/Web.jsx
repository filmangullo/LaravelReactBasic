import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Login from '../pages/Auth/Login/Login'
import NavbarComponent from './web-components/NavbarComponent'
import Register from '../pages/Auth/Register/Register'

function Web() {
  return (
    <BrowserRouter>
        <NavbarComponent />
        <Routes>
            <Route exact path="/" element={ <Home /> } />
            <Route path="/login" element={ <Login /> } />
            <Route exact path="/register" element={ <Register /> } />
        </Routes>
    </BrowserRouter>
  )
}

export default Web

createRoot(document.getElementById('web')).render(<Web />);
