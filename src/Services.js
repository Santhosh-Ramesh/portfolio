import React from 'react';
import './Services.css';
function Services(props) {
  return (
    <div id="services">
      <div className="services-content">
        <div className="content-container1">
          <p>What I Do?</p>
          <h1>My Services</h1>
        </div>
        <div className="content-container2">
          <div id="container2-box1">
              <h2>SEO</h2>
              <p>Help to increase your website ranking on the search engine result page with On-Page SEO, Off-Page SEO, Technical SEO & Local SEO.</p>
          </div>
          <div id="container2-box2">
              <h2>Content Writing</h2>
              <p>Research the possible keywords and write content to attract the targeted audience into leads.</p>
          </div>
          <div id="container2-box3">
              <h2>Pay Per Click</h2>
              <p>Increase leads or sales with Google Ads - Search, Display, Video, Smart, Discovery, Shopping, Local, YouTube and App store campaigns.</p>
          </div>
        </div>
        <div className="content-container3">
          <div id="container3-box1">
              <h2>Social Media Marketing</h2>
              <p>Engage and attract your customers on social media channels like Facebook, Instagram, YouTube, Twitter, LinkedIn & Pinterest.</p>
          </div>
          <div id="container3-box2">
              <h2>
              Creative Design
              </h2>
              <p>Help to create a perfect design beyond your expectation like Website Logo, Social Media Post, Blog Images, Brochure, & Website Design.</p>
          </div>
          <div id="container3-box3">
              <h2>Mobile Marketing</h2>
              <p>Help to target your audience via Mobile Apps, SMS, Email, Social Media and Website.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
