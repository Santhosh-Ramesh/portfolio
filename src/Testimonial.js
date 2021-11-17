import React from 'react';
import './Testimonial.css';
function Testimonial(props) {
  return (
    <>
      <p id="testimonials"></p>
      <div class="testimonials">
        <div className="testimonial-content">
          <p>Clients Opinion</p>
          <h1>Testimonials</h1>
          <div id="icon">
            <i style={{ fontSize: '24px' }} className="fa">
              &#xf10d;
            </i>
          </div>
          <div className="testimonial-words">
            <span>
              Thapreel alam has been working on our website for almost 2 months
              now! Happy with the way how results are turning up, W. R. T DA and
              link building aspects - there is a increase. Appreciative about
              the reporting of the work on weekly basis as per our plan and
              discussion. Recommending his SEO services for others
            </span>
            <div className="testimonial-wordsby">
              <h4>-Shreyas Mallikarjun</h4>
              <span>Founder of SUPERRlife</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonial;
