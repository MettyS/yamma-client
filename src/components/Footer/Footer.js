import React, { Component } from 'react';
import './Footer.css';
import YammaLogo from '../../images/YammaLogo.png';
import { Link } from 'react-router-dom';

class Footer extends Component {
  renderFooterLinks() {
    return (
      <nav>
        <ul className='footer-links'>
          <li>
            <Link to='/'>Back top</Link>
          </li>
          <li>
            <Link>Private Policy</Link>
          </li>
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
        <img src={YammaLogo} alt='logo' className='footer-logo' />
        <h1 title='footer-title'>Yamma</h1>
        <div>{this.renderFooterLinks()}</div>
        <h3>All rights reserve @Yamma</h3>
      </footer>
    );
  }
}

export default Footer;
