import React, { useRef } from 'react';
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_l6zc378', 'template_a65q04p', form.current, 'HkXy1g8p-JDDoOkZ-')
        .then((result) => {
            console.log(result.text);
            e.target.reset();
        }, (error) => {
            console.log(error.text);
        });
    };


    return (
      <section id="contact">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <AiOutlineMail className="contanct__option-icon" />
              <h4>Email</h4>
              {/* <h5>saqibaltaf062@gmail.com</h5> */}
              <a href="mailto:saqibaltaf062@gmail.com" target="#">
                Send an Email
              </a>
            </article>
            <div className="map">
              <iframe
                src="https://maps.google.com/maps?q=abu%20dhabi%20uae&t=&z=9&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="Map of Abu Dhabi, UAE"
              ></iframe>
            </div>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
}

export default Contact;