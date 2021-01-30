import React, { Component } from 'react';

import UserContext from '../../context/UserContext';
// import TokenService from '../../services/token-service';

import Messages from './Messages';
import Input from './Input';

import './ChatApp.css';

class ChatApp extends Component {
  static contextType = UserContext;

  constructor(props, context) {
    super(props);
    this.state = {
      messages: props.messages,
      user: context.user,
      messageLoadError: props.messageLoadError,
      messageSendError: null,
      loading: props.loading,
      eventId: props.eventId,
    };
  }

  render() {
    const { messages, loading } = this.props;
    const { user } = this.context;

    return (
      <div className='chat-section'>
        <div>
          <h2>Live Chat</h2>
        </div>
        <Messages messages={messages} user={user} loading={loading} />
        <Input
          handleSendMessage={(message) => {
            this.props.handleSendMessage(message);
          }}
          user={user}
        />
      </div>
    );
  }
}

export default ChatApp;
