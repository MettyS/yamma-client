import React, {Component} from 'react'

export default class ChatPanel extends Component{
    render(){
        return(
            <div>
                <ul>
                    {this.props.messages.map(message => {
                        return(
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