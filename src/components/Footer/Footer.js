import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  mybutton = document.getElementById('myBtn');

  renderFooterLinks() {
    return (
      <ul className='footer-links'>
        <li>
          <div
            onClick={this.props.displayLanding}
            className='li-links fake-link'
            to='/about'>
            About
          </div>
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
            className='li-links fake-link'>
            ▲ Top ▲
          </p>
        </li>
      </ul>
    );
  }

  render() {
    return (
      <footer className='footer'>
        <div className='footer-group'>
          <div className='footer-title'>Yamma</div>
          <p className='footer-copyright'>All rights reserved Yamma©</p>
        </div>
        <div>{this.renderFooterLinks()}</div>
      </footer>
    );
  }
}

export default Footer;
