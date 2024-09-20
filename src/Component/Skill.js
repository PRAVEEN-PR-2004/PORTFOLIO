import React from 'react';
import './Skill.css';

const Skill = () => {
  return (
    <div className="skill-section">
      <div className="skill-container">
        <h1 className='heading-skill'>SKILLS</h1>
        <div className="progress-bar">
          <p>Java</p>
          <div className="progress">
            <div className="progress-fill" style={{ width: '85%', backgroundColor: '#00ffbf' }}></div>
          </div>
        </div>
        <div className="progress-bar">
          <p>Dsa in java</p>
          <div className="progress">
            <div className="progress-fill" style={{ width: '50%', backgroundColor: '#00ffbf' }}></div>
          </div>
        </div>

        <div className="progress-bar">
          <p>React</p>
          <div className="progress">
            <div className="progress-fill" style={{ width: '80%', backgroundColor: '#00ffbf' }}></div>
          </div>
        </div>


        <div className="progress-bar">
          <p>Tailwind-CSS</p>
          <div className="progress">
            <div className="progress-fill" style={{ width: '70%', backgroundColor: '#00ffbf' }}></div>
          </div>
        </div>

        <div className="progress-bar">
          <p>Bootstrap</p>
          <div className="progress">
            <div className="progress-fill" style={{ width: '90%', backgroundColor: '#00ffbf' }}></div>
          </div>
        </div>

        <div className="progress-bar">
          <p>Mongodb</p>
          <div className="progress">
            <div className="progress-fill" style={{ width: '50%', backgroundColor: '#00ffbf' }}></div>
          </div>
        </div>
        <div className="progress-bar">
          <p>Mysql</p>
          <div className="progress">
            <div className="progress-fill" style={{ width: '50%', backgroundColor: '#00ffbf' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
