import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Home() {
  return (
    <>
      <section className="page home">
        <h1>Welcome to System Consultancy Services</h1>
        <p>SCS is a technologically advanced defence contractor in Malaysia, specializing in Command & Control (C2). Our core speciality is in software development & integration, communications and security solutions. We have been maintaining and constantly innovating our Command & Control platform for the past 28 years! We also close loops with all echelons, in our Smart & Safe Cities solutions.</p>
      </section>

      <section className="page home home-services-section">
        <h2 className="home-services-title">Explore Our Services</h2>
        
        <div className="services-grid">
          <div className="service-card">
            <i class='bx  bx-info-circle'></i> 
            <h3>About Us</h3>
            <p>Learn more about System Consultancy Services, our mission, and our journey since 1993. Discover what drives us to EXCEED EXPECTATIONS.</p>
            <Link to="/about">
              <button>Go to About Us</button>
            </Link>
          </div>

          <div className="service-card">
            <i class='bx  bx-package'></i> 
            <h3>Our Products</h3>
            <p>Explore our comprehensive range of office solutions and services designed to empower your business and enhance productivity.</p>
            <Link to="/products">
              <button>View Products</button>
            </Link>
          </div>

          <div className="service-card">
            <i class='bx  bx-phone'></i> 
            <h3>Contact Us</h3>
            <p>Get in touch with our team. We're here to answer your questions and discuss how we can help your business succeed.</p>
            <Link to="/contact">
              <button>Contact Us</button>
            </Link>
          </div>

          <div className="service-card">
            <i class='bx  bx-file'></i> 
            <h3>AduanExpress</h3>
            <p>Create a support ticket or report any issues you've encountered. Our team will review and assist you with your request promptly.</p>
            <Link to="/report">
              <button>Submit Report</button>
            </Link>
          </div>

          <div className="service-card">
            <i class='bx  bx-user'></i> 
            <h3>Login</h3>
            <p>Access your account to view personalized information, reports, and manage your services with SCS.</p>
            <Link to="/login">
              <button>Sign In</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
