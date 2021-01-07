import React, { Component } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

class Footer extends Component {
  renderFooterLinks() {
    return (
      <nav>
        <ul className='footer-links'>
          <li>
            <Link to='/'>Back top</Link>
          </li>
          <li className='footer-bars'>|</li>
          <li>
            <Link>Private Policy</Link>
          </li>
          <li className='footer-bars'>|</li>
          <li>
            <Link>Copyright</Link>
          </li>
        </ul>
      </nav>
    );
  }

  render() {
    return (
      <footer className='footer'>
        {/* <img src={YammaLogo} alt='logo' className='footer-logo' /> */}
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
