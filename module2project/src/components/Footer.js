import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Rent up to 8 books per account a week. Indulge your literary cravings with one of the greatest.
        </p>
        <p className='footer-subscription-text'>
         Sign Up Now
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Register</Button>
          </form>
        </div>
      </section>
      
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Bala's    overly focused  Library
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>End-Semester Assessment Project</small>
     
        </div>
      </section>
    </div>
  );
}

export default Footer;