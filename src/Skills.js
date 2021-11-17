import React from 'react';
import './Skills.css';
import { styled } from '@mui/material/styles';
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';
function Skills(props) {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
  }));
  return (
    <div className="skills">
      <div className="skills-content">
        <p>What I Know</p>
        <h1>My Skills</h1>
      </div>
      <div className="progress">
        <div id="progress-box1">
          <div>
            <h3>SEO</h3>
            <BorderLinearProgress variant="determinate" value={95} />
          </div>
          <div>
            <h3>SEM (Google Ads, Bing Ads)</h3>
            <BorderLinearProgress variant="determinate" value={90} />
          </div>
          <div>
            <h3>Social Media Marketing</h3>
            <BorderLinearProgress variant="determinate" value={95} />
          </div>
        </div>
        <div id="progress-box2">
          <div>
            <h3>Content Writing</h3>
            <BorderLinearProgress variant="determinate" value={80} />
          </div>
          <div>
            <h3>Branding</h3>
            <BorderLinearProgress variant="determinate" value={85} />
          </div>
          <div>
            <h3>Strategic Thinking</h3>
            <BorderLinearProgress variant="determinate" value={80} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
