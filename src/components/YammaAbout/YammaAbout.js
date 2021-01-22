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
    if (e.target.className !== 'overlay') {
      return;
    }
    this.setState({ open: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
    this.props.history.push('/');
  };
  render() {
    // const { error } = this.state;
    return (
      <Modal open={this.state.open} onClose={this.closeMenu}>
        <div className='yamma-about'>
          <h1>About Us</h1>
          <p>
            With 2020 being one of the most historically jammed packed years of
            the decade here in America, it feels people need a place, now more
            than ever to start using thier voice. Thats where Yamma comes in.
            Although we only cover U.S. news at the moment we have plans to
            expand to cover world wide issues and topics.
          </p>
          <p>
            Hoodie hashtag post-ironic, kale chips cardigan poutine keffiyeh
            tumeric. Chillwave literally next level fanny pack pabst. Swag
            cornhole poke fashion axe wayfarers venmo, narwhal kitsch
            sustainable keytar leggings. Viral la croix biodiesel, twee poutine
            retro normcore woke vice hoodie literally you probably haven't heard
            of them roof party flannel bitters.
          </p>
        </div>
      </Modal>
    );
  }
}

export default YammaAbout;
