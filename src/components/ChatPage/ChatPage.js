import React, { Component } from 'react'
import UserContext from '../../context/UserContext'

export default class ChatPanel extends Component {
  static contextType = UserContext

  render() {
    const {messages=[]} = this.context

    console.log(messages)

    return (
      <div>
        <ul>
          {messages.chat.map(message => {
            return (
              <li key={message.id}>
                {message.senderId}
                {message.text}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}