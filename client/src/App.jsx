import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/template'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<h1>Coming soon</h1>} />
        </Routes>
    )
}

export default App
