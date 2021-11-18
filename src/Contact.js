import React from 'react';
import './Contact.css';
import Contact_Form from './Contact_Form'
function Contact(props) {
  return (
    <div id="contact">
      <div className="contact-us">
        <div className="block__content1">
          <h4 className="block__title">Need any help with your project?</h4>
          <p className="block__des">Let's have a talk!</p>
        </div>

        <div className="block__content2">
          <div className="block__content2_name">
            <a
              className="block__contact"
              href="https://api.whatsapp.com/send/?phone=919092744115&text&app_absent=0"
              target="__blank"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>

      <div className="contact_me">
        <div className="contact_content">
          <p>Get In Touch</p>
          <h1>Contact Me</h1>
        </div>
        <Contact_form/>
      </div>
    </div>
  );
}

export default Contact;
