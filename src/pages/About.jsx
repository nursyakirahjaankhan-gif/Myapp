import React from 'react'
import { Link } from 'react-router-dom'
import SCSlogo from "../assets/scsLogo.png";
import 'bootstrap/dist/css/bootstrap.min.css'

export default function About(){
  return (
    <><>
      <section className="page about">
        <h1>About Us</h1>
        <p>SCS started in 1993 with only six engineers and now operates three subdivisions run by more than 90 specialized scientists and engineers in electronics, communications and information technology. Thinking together with our clients has allowed us to find innovative solutions for their needs and requirements. The team is dedicated, to find and refine ways to meet any given objectives. Our aim is to EXCEED EXPECTATIONS.</p>

        <div style={{ textAlign: "center" }}>
          <img src={SCSlogo} alt="SCS Logo" style={{ width: "150px" }} />
        </div>
      </section>

    </><>

        <section className="page about mission">
          <h1>Your Thinking Company</h1>
        </section>

        <section className="page about" style={{ textAlign: "center", marginTop: "20px" }}>
          <h2>Have Questions?</h2>
          <p style={{ marginBottom: "20px" }}>Check our FAQ section to find answers to common questions about our services and solutions.</p>
          <Link to="/faq">
            <button style={{ padding: "10px 20px", backgroundColor: "#0f172a", color: "white", border: "none", borderRadius: "6px", cursor: "pointer" }}>View FAQ</button>
          </Link>
        </section>
      </></>
  )
}
