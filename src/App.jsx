import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Products from './pages/Products.jsx'
import Contact from './pages/Contact.jsx'
import Login from './pages/Login.jsx'
import Report from './pages/Report.jsx'
import FAQ from './pages/FAQ.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function App() {
  return (
    <><div className="app-wrapper">
      <div className="app-content">
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/report" element={<Report />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
    </>
  )
}
