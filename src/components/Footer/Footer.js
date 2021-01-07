import React, { Component } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

class Footer extends Component {
  renderFooterLinks() {
    return (
      <nav>
        <ul className='footer-links'>
          <li>
            <Link to='/' className='li-links'>▲ Top ▲</Link>
          </li>
          <li className='footer-bars'>|</li>
          <li>
            <Link to='/about' className='li-links'>About</Link>
          </li>
          <li className='footer-bars'>|</li>
          <li>
            <Link to='/contact' className='li-links'>Contact</Link>
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
          <p className='footer-copyright'>All rights reserved @Yamma</p>
        </div>
        <div>{this.renderFooterLinks()}</div>
      </footer>
    );
  }
}

export default Footer;
