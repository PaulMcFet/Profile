import React from 'react';
import './About.css';
import profilePicture from '../../assets/profile-picture.jpg';

const About = () => {
  return (
    <section id="about" className="about">
      <img src={profilePicture} alt="Profile" />
      <div className="about-text">
        <h2>About Me</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac libero ac lorem semper interdum.</p>
      </div>
    </section>
  );
}

export default About;