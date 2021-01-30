import React, { Component } from 'react';
import '../LoginForm/LoginForm.css';
import Modal from '../Modal/Modal';
import './YammaAbout.css';

class YammaAbout extends Component {
  state = {
    // error: null,
    open: true,
  };

  closeMenu = (e) => {
    e.preventDefault();
    const targetClasses = Object.values(e.target.classList)
    if (!targetClasses.includes('overlay') && !targetClasses.includes('close-button')) return;
    this.props.onClose();
  };

  render() {
    // const { error } = this.state;
    return (
      <Modal open={this.props.open} onClose={this.closeMenu}>
      <div className='modal-content'>
        <button className='close-button' onClick={this.closeMenu}>
          Close
        </button>
        <div className='yamma-about'>
          <h1>About Us</h1>
          <div className='top-panel'>
            <p>
              With 2020 being one of the most historically jammed packed years of
              the decade here in America, it feels people need a place, now more
              than ever, to start using thier voice. That's where Yamma comes in.
              We cover U.S. news and events, allowing users to interact with others
              and share their insights. We have plans to
              expand our project to cover world wide issues and topics, so stay tuned.
            </p>
            <p>Join in on the yamma by browsing relevant articles and events.</p>
          </div>
          <div classname='bottom-panel'>
            <p>
              Sample Account:
            </p>
            <p>Username  |  BobbyJoe</p>
            <p>Password  |  My123!@#</p>
          </div>
        </div>
        </div>
      </Modal>
    );
  }
}

export default YammaAbout;
