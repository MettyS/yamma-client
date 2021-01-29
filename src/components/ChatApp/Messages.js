import React, { Component } from 'react';

class Messages extends Component {
  renderMessage(message) {
    const { id, user_id, content, username, date_created } = message;

    const date = new Date(date_created);
    const { user } = this.props;
    const className =
      user && user.id === user_id ? 'message self-message' : 'message';

    return (
      <li className={className} key={id}>
        <span
          className='avatar'
          // style={{ backgroundColor: member.clientData.color }}
        />
        <div className='message-body'>
          <div className='username'>{username}</div>
          <div className='content'>{content}</div>
          <p>{`${date.toDateString()}   ${date.getHours()}:${date.getMinutes()}`}</p>
        </div>
      </li>
    );
  }

  render() {
    const { messages, loading } = this.props;
    return (
      <ul className='message-list' tabIndex='0'>
        {loading ? 'Loading...' : messages.map((m) => this.renderMessage(m))}
      </ul>
    );
  }
}

export default Messages;
