import React from 'react';
import LanguageIcon from '@mui/icons-material/Language';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import './Form.css';
function Form(props) {
  const handleInputChange = () => {};
  const handleSubmit = (e) => {e.preventDefault();};
  return (
    <div className="contacts">
      <div className="contact-form">
        <form 
        onSubmit={handleSubmit}
        >
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            onChange={handleInputChange}
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
          />
          <br />
          <br />
          <label htmlFor="name">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            onChange={handleInputChange}
          />
          <br />
          <br />
          <label htmlFor="name">Message</label>
          <textarea
            type="text"
            id="message"
            name="message"
            onChange={handleInputChange}
          />
          <br />
          <br />
          <input type="submit" value="Send"/>
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
