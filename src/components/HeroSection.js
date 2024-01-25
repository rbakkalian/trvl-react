import React from 'react';
import '../App.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './HeroSection.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faPlayCircle);

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='videos/video-1.mp4' autoPlay loop muted/>
      <h1>Adventure Awaits</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Link to='/sign-up'>
          <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Get Started</Button>
        </Link>
        <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
        <a href={'https://www.youtube.com/watch?v=SbYXkOAoZpI'} target="_blank" rel="noopener noreferrer">
          Watch Trailer
        </a> <FontAwesomeIcon icon={faPlayCircle} className='play-circle-icon'/> </Button>
      </div>
    </div>
  )
}

export default HeroSection
