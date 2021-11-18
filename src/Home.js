import React from 'react';
import './Home.css';
import Button from '@mui/material/Button';
// import AnimatedNumber from 'animated-number-react';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import CountUp from 'react-countup';
function Home(props) {
  //   const value = {
  //     YOE: 2,
  //     CP: 20,
  //     HC: 10,
  //     SR: 9,
  //   };

  //   const YOEValue = (value) => value.toFixed(1);

  //   const CPValue = (value) => value.toFixed(2);
  //   const HCValue = (value) => value.toFixed(2);
  //   const SRValue = (value) => value.toFixed(1);
  return (
    <>
      <div className="home" id="home">
        <div className="home-layout1">
          <div className="content">
            <p id="name">Thapreel Alam</p>
            <p id="posting">Digital Marketing Consultant</p>
            <p id="about-content">
              I am a certified digital marketing professional with 2+ years of
              experience. My goal is to help brands & startups to grow online.
              Are you looking for someone to work on your project or need help?
              Let's have a chat!
            </p>
            <div id="message">
              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  endIcon={<SendIcon />}
                  href="https://api.whatsapp.com/send/?phone=919092744115&text&app_absent=0"
                  style={{ background: '#F75958' }}
                  target="__blank"
                  className="message_send"
                >
                  Leave a message
                </Button>
              </Stack>
            </div>
          </div>
          <div className="image">
            <img src="http://thapreel.com/wp-content/uploads/2021/10/cropped-Thapreel_Alam-removebg.png" alt="Main-picture"/>
          </div>
        </div>

        <div className="home-layout2">
          <div className="box-container1">
            <div className="social-media-image">
              <img src="http://thapreel.com/wp-content/uploads/2021/10/InShot_20211016_201444538-min-890x1024.jpg" alt='Custom picture'/>
            </div>
            <div className="personal-info">
              <h5 className="about-me_subtitle">HELLO!</h5>
              <h2 className="about-me_title">I'm Thapreeel</h2>
              <p>
                I'd love to work with startups & brands to achieve their
                business goals. I have 2+ years of industry experience in SEO,
                SEM, Social Media Marketing (SMM), Email Marketing, Lead
                Generation, Email Marketing, Paid Ads Campaign Management,
                Branding, Content Writing, Content Marketing, and more.
              </p>
              <hr />
              <div className="about_me_contact_info">
                <div>
                  <span>Name</span>
                  <p>Thapreel Alam</p>
                </div>
                <div>
                  <span>Email</span>
                  <p>digital.thapreel@gmail.com</p>
                </div>
                <div>
                  <span>Phone</span>
                  <p>+91 9092744115</p>
                </div>
                <div>
                  <span>Age</span>
                  <p>23 years</p>
                </div>
                <div className="download_cv">
                  <a 
                  href="https://drive.google.com/file/d/1f6wYRbnhitGw2M2tQ2UfYgpt_aWvF7dy/view?usp=sharing"
                  target="__blank"
                  download="https://drive.google.com/file/d/1f6wYRbnhitGw2M2tQ2UfYgpt_aWvF7dy/view?usp=sharing"
                  >
                    <span>Dowload CV</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="box-container2">
            <div id="box1">
              <h3 id="counter">
                {/* <AnimatedNumber value={value.YOE} formatValue={YOEValue} /> */}
                <CountUp
                  start={0}
                  end={2}
                  duration={1}
                  separator=" "
                  decimals={0}
                  decimal=","
                  onEnd={() => console.log('Ended! 👏')}
                  onStart={() => console.log('Started! 💨')}
                ></CountUp>
              </h3>
              <p id="counter-text">YEARS OF EXPERIENCE</p>
            </div>
            <div id="box2">
              <h3 id="counter">
                {/* <AnimatedNumber value={value.CP} formatValue={CPValue} /> */}
                <CountUp
                  start={0}
                  end={20}
                  duration={1}
                  separator=" "
                  decimals={0}
                  decimal=","
                  onEnd={() => console.log('Ended! 👏')}
                  onStart={() => console.log('Started! 💨')}
                ></CountUp>
              </h3>
              <p id="counter-text">COMPLETE PROJECT</p>
            </div>
            <div id="box3">
              <h3 id="counter">
                {/* <AnimatedNumber value={value.HC} formatValue={HCValue} /> */}
                <CountUp
                  start={0}
                  end={10}
                  duration={1}
                  separator=" "
                  decimals={0}
                  decimal=","
                  onEnd={() => console.log('Ended! 👏')}
                  onStart={() => console.log('Started! 💨')}
                ></CountUp>
              </h3>
              <p id="counter-text">HAPPY CLIENT</p>
            </div>
            <div id="box4">
              <h3 id="counter">
                {/* <AnimatedNumber value={value.SR} formatValue={SRValue} /> */}
                <CountUp
                  start={0}
                  end={9}
                  duration={1}
                  separator=" "
                  decimals={0}
                  decimal=","
                  onEnd={() => console.log('Ended! 👏')}
                  onStart={() => console.log('Started! 💨')}
                ></CountUp>
              </h3>
              <p id="counter-text">STAR RATING</p>
            </div>
            {/* <AnimatedNumber value={((value.YOE))} formatValue={formatValue} /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
