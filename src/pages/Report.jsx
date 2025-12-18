import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'


export default function Report() {
    return (
        <><section className="page report">
            <h1>AduanExpress</h1>
            <p>AduanExpress is a streamlined digital ticketing and reporting platform designed to simplify the process of submitting, tracking, and managing aduan. The system provides users with a fast, intuitive interface to lodge issues, upload supporting details, and monitor the status of their reports in real time. For administrators, AduanExpress offers a centralized dashboard that supports efficient case assignment, progress tracking, and resolution management. Built to enhance transparency, responsiveness, and service quality, AduanExpress enables organizations to handle complaints and service requests with greater accuracy, accountability, and speed.</p>
        </section>
            <section className="ticketing">
                <h1>Ticketing</h1>
                <p>The ticketing process is a way for us to manage and respond to reports or complaints in a systematic and efficient manner. The ticketing process involves the following steps:</p>
                <ul>
                    <li>Submit a report or complaint</li>
                    <li>Upload supporting details</li>
                    <li>Monitor the status of your report in real time</li>
                    <li>Receive a response from us</li>
                </ul>
                <form className="contact-form">
                    <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Your Email" />
                    <input type="text" placeholder="Subject" />
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Submit</button>
                </form>
                <statusbar>
                    <p>Status: Pending</p>
                </statusbar>
            </section>
        </>
    )
}