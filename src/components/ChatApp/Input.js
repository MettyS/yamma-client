import {Component} from "react";
import React from "react";

class Input extends Component {
  state = {
    text: "",
    error: ""
  }

  onChange(e) {
      this.setState({text: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();
    const user = this.props.user;
    if(!user.id){
      this.setState({error: 'must be logged in to post message'});
      return;
    }
    if(this.state.text === ''){
      this.setState({error: 'cannot post an empty message'});
      return;
    }

    
    this.props.handleSendMessage(this.state.text);
    this.setState(
      {
        text: "",
        error: ''
      });
  }

  render() {
    return (
      <div className="Input">
        <form onSubmit={e => this.onSubmit(e)}>
          <p className='form-error'>{this.state.error}</p>
          <input
            onChange={e => this.onChange(e)}
            value={this.state.text}
            type="text"
            placeholder="Enter your message and press ENTER"
            // autoFocus={true}
          />
          <button>Send</button>
        </form>
      </div>
    );
  }
}

export default Input;