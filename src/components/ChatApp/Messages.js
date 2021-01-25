import React, { Component } from 'react'

class Messages extends Component {
    renderMessage(message) {
        const { id, user_id, content, username } = message;

        const { user } = this.props;
        const className = (user && user.id === user_id) ? 'message self-message' : 'message';

        if(className === 'message self-message')
            console.log('detected that the logged in user wrote this message');

        return (
            <li className={className} key={id}>
                <span
                    className="avatar"
                    // style={{ backgroundColor: member.clientData.color }}
                />
                <div className="message-body">
                    <div className="username">
                        {username}
                    </div>
                    <div className="content">{content}</div>
                </div>
            </li>
        );
    }

    render() {
        const { messages, loading } = this.props;
        return (
            <ul className="message-list">
                {loading ? 'Loading...' : messages.map(m => this.renderMessage(m))}
            </ul>
        );
    }
}

export default Messages;
