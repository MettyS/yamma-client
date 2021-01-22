import React, { Component } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

class Footer extends Component {
  mybutton = document.getElementById('myBtn');

  renderFooterLinks() {
    return (
      <nav>
        <ul className='footer-links'>
          <li>
            <Link to='/about' className='li-links'>
              About
            </Link>
          </li>
          {/* <li className='footer-bars'>|</li> */}
          {/* <li>
            <Link to='/contact' className='li-links'>
              Contact
            </Link>
          </li> */}
          <li className='footer-bars'>|</li>
          <li>
            <p
              onClick={() => (document.documentElement.scrollTop = 0)}
              id='myBtn'
              title='Go to top'
              className='li-links'>
              ▲ Top ▲
            </p>
          </li>
        </ul>
      </nav>
    );
  }

  render() {
    return (
      <footer className='footer'>
        <div className='footer-group'>
          <h1 className='footer-title'>Yamma</h1>
          <p className='footer-copyright'>All rights reserved Yamma©</p>
        </div>
        <div>{this.renderFooterLinks()}</div>
      </footer>
    );
  }
}

export default Footer;
