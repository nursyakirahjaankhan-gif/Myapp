import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About SCS</h4>
          <p>System Consultancy Services - Providing innovative office solutions and consultancy services since 1993.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li><Link to="/products">Our Products</Link></li>
            <li><Link to="/report">Submit Report</Link></li>
            <li><Link to="/login">Client Login</Link></li>
            <li><a href="#support">Support</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>Email: <a href="contact@scs.my">contact@scs.my</a></p>
          <p>Phone: <a href="tel:+60341491919">+603 41491919</a></p>
          <p>Address: System Consultancy Services Sdn Bhd, 36 Jalan Wangsa Delima 6, Pusat Bandar Wangsa Maju, 53300 Kuala Lumpur</p>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="https://www.facebook.com/scs36/" target="_blank" rel="noopener noreferrer"><i class='bxl  bx-facebook-square'></i> </a>
            <a href="https://www.instagram.com/scsdotmy/" target="_blank" rel="noopener noreferrer"><i class='bxl  bx-instagram'></i> </a>
            <a href=" https://www.linkedin.com/company/system-consultancy-services-sb" target="_blank" rel="noopener noreferrer"><i class='bxl  bx-linkedin-square'></i> </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} System Consultancy Services. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#cookies">Cookie Policy</a>
        </div>
      </div>
    </footer>
  )
}
