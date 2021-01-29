import {Component} from "react";
import React from "react";

class Input extends Component {
  state = {
    text: "",
    error: ""
  }

  onChange(e) {
		if(!this.props.user.id){
      this.setState({error: 'must be logged in to post message'});
      return;
    }
      this.setState({text: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();
    const { messageText } = e.target
    const user = this.props.user;
    if(!user.username){
      this.setState({error: 'must be logged in to post message'});
      return;
    }
    if(this.state.text === ''){
      this.setState({error: 'cannot post an empty message'});
      return;
    }
    console.log('TRYING TO SEND MESSAGEE: ', messageText);

    this.props.handleSendMessage(messageText.value);

    this.setState(
      {
        text: "",
        error: ''
      });
  }

  render() {
    return (
      <div className="input-wrapper">
        <form onSubmit={e => this.onSubmit(e)}>
          <p className='form-error'>{this.state.error}</p>
          <input
            onChange={e => this.onChange(e)}
            value={this.state.text}
            name='messageText'
            type="text"
            placeholder="Enter your message and press ENTER"
            // autoFocus={true}
          />
          <button className='btn'>Post Message</button>
        </form>
      </div>
    );
  }
}

export default Input;
