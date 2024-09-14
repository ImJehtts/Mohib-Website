import React from 'react'
import './Contact.css'
import {FaLinkedin} from "react-icons/fa";
import {useRef} from 'react';
import emailjs from '@emailjs/browser';



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(process.env.REACT_APP_SERVICE_KEY, process.env.REACT_APP_TEMPLATE_ID, form.current, {
        publicKey: process.env.REACT_APP_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          console.log(process.env.REACT_APP_SERVICE_KEY)
        },
      );
    e.target.reset()
  };

  return (
    <section id='Contact'>
      <h5>Reach Out</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
        <article className='contact__option'>
            <FaLinkedin className='contact__option__icon'/>
            <h4>Linkedin</h4>
            <h5>Mohib Rehman</h5>
            <a href='https://www.linkedin.com/in/mohib-rehman-892930245/'>Let's Connect</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required></input>
          <input type='email' name='email' placeholder='Your Email' required></input>
          <textarea type='message' name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
