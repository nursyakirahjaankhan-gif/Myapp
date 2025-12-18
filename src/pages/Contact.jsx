import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Contact(){
  const [form, setForm] = useState({name:'', email:'', message:''})
  const [sent, setSent] = useState(false)
  function submit(e){
    e.preventDefault()
    setSent(true)
  }
  return (
    <section className="page contact">
      <h1>Contact Us</h1>
      {sent ? <p>Thanks, we'll get back to you soon.</p> : (
        <form onSubmit={submit} className="contact-form">
          <input placeholder="Name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required />
          <input placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} required />
          <textarea placeholder="Message" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} required />
          <button type="submit">Send</button>
        </form>
      )}
    </section>
  )
}
