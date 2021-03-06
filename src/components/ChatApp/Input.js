import { Component } from 'react';
import React from 'react';
import './Input.css';

class Input extends Component {
  state = {
    text: '',
    error: '',
  };

  onChange(e) {
    if (!this.props.user || !this.props.user.id) {
      this.setState({ error: 'must be logged in to post message' });
      return;
    }
    if (e.target.value.length > 0) {
      return this.setState({ text: e.target.value, error: null });
    }
    this.setState({ text: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const { messageText } = e.target;
    const user = this.props.user;
    if (!user.username) {
      this.setState({ error: 'must be logged in to post message' });
      return;
    }
    if (this.state.text === '') {
      this.setState({ error: 'cannot post an empty message' });
      return;
    }

    this.props.handleSendMessage(messageText.value);

    this.setState({
      text: '',
      error: '',
    });
  }

  render() {
    return (
      <div className='input-wrapper' id='live-chat'>
        <form onSubmit={(e) => this.onSubmit(e)}>
          <p className='form-error'>{this.state.error}</p>
          <input
            onChange={(e) => this.onChange(e)}
            value={this.state.text}
            name='messageText'
            type='text'
            placeholder='Enter your message and press ENTER'
            // autoFocus={true}
          />
          <button id='submit-message' className='btn'>
            Post Message
          </button>
        </form>
      </div>
    );
  }
}

export default Input;
