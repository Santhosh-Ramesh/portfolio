import React, { useState } from 'react';
import LanguageIcon from '@mui/icons-material/Language';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import './Form.css';
import { toast } from 'react-toastify';
// database
// import { getDatabase, ref, set, get, child } from 'firebase/database';
import { ref, set} from 'firebase/database';
import { database } from './firebase-config';

function Form(props) {
  const initialState = {
    id: '',
    name: '',
    email: '',
    subject: '',
    message: '',
  };
  const [state, setState] = useState(initialState);

  const { name, email, subject, message } = state;



  const handleInputChange = (event) => {
    console.log('event', event);
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !subject) {
      toast.error('Please fill the required fields');
    } else {
      const tid = Math.floor(Math.random() * 1000) + 1;
      set(ref(database, 'form_details/' + tid), {
        id: tid,
        name: name,
        email: email,
        subject: subject,
        message: message
      }).catch((err) => {
        toast.error(err);
      });
      const popupmessage = "Your message has been sent successfully!"

      toast.success(popupmessage);
      setState({ ...initialState });
    }
  };



  return (
    <div className="contacts">
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            onChange={handleInputChange}
            value={name || ''}
          />
          <br />
          <br />
          <label htmlFor="name">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleInputChange}
            value={email || ''}
          />
          <br />
          <br />
          <label htmlFor="name">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            onChange={handleInputChange}
            value={subject || ''}
          />
          <br />
          <br />
          <label htmlFor="name">Message</label>
          <textarea
            type="text"
            id="message"
            name="message"
            onChange={handleInputChange}
            value={message || ''}
          />
          <br />
          <br />
          <input type="submit" value="Send" />
        </form>
      </div>
      <div className="contact-me">
        <h5>Let's talk about everything!</h5>
        <div className="contact-me_info">
          <div className="contact-me_item">
            <p>Phone</p>
            <i>
              <LocalPhoneIcon
                className="phone"
                style={{ color: '#f75958', paddingRight: '10px' }}
              />{' '}
              +91 9092744115
            </i>
          </div>
          <div className="contact-me_item">
            <p>Email</p>
            <i>
              <MailOutlineIcon
                className="email"
                style={{ color: '#f75958', paddingRight: '10px' }}
              />{' '}
              digital.thapreel@gmail.com
            </i>
          </div>
          <div className="contact-me_item">
            <p>Website</p>
            <i>
              <LanguageIcon
                className="website"
                style={{ color: '#f75958', paddingRight: '10px' }}
              />{' '}
              www.thapreel.com
            </i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
