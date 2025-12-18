import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState(null)

  const faqs = [
    {
      question: "What is System Consultancy Services?",
      answer: "System Consultancy Services (SCS) is a technologically advanced defence contractor in Malaysia specializing in Command & Control (C2), software development & integration, communications, and security solutions."
    },
    {
      question: "How long has SCS been in business?",
      answer: "SCS has been maintaining and innovating its Command & Control platform for the past 28 years, having started in 1993 with only six engineers."
    },
    {
      question: "What services does SCS offer?",
      answer: "We offer innovative office solutions, consultancy services, Command & Control platforms, software development, communications solutions, security systems, and Smart & Safe Cities solutions."
    },
    {
      question: "How can I contact SCS?",
      answer: "You can reach us through our Contact page, email us at contact@scs.my, or call +603 4149 1919. Our team is ready to assist you with any inquiries."
    },
    {
      question: "How do I submit a report or support ticket?",
      answer: "You can submit a report through our AduanExpress feature on the home page. This allows you to create a support ticket for any issues or feedback you'd like to share."
    },
    {
      question: "Do you have a secure login system?",
      answer: "Yes, we provide a secure login system where clients can access personalized information, reports, and manage their services with SCS."
    },
    {
      question: "What makes SCS different from competitors?",
      answer: "With 28 years of experience and a dedicated team of 90+ specialized scientists and engineers, we focus on finding innovative solutions tailored to your specific needs. "
    },
    {
      question: "Can I request a custom solution?",
      answer: "Absolutely! We work closely with our clients to understand their unique requirements and develop customized solutions that meet their specific goals and objectives."
    }
  ]

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section className="page faq-page">
      <h1>Frequently Asked Questions</h1>
      <p className="faq-intro">Find answers to common questions about System Consultancy Services and our offerings.</p>

      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button
              className="faq-question"
              onClick={() => toggleExpand(index)}
            >
              <span className="faq-question-text">{faq.question}</span>
              <i className={`bx ${expandedIndex === index ? 'bx-chevron-up' : 'bx-chevron-down'} faq-icon`}></i>
            </button>
            {expandedIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
