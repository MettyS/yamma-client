import React, { Component } from 'react';

import UserContext from '../../context/UserContext';
import YammaApiService from '../../services/yamma-api-service';
import TokenService from '../../services/token-service';

import Messages from "./Messages";
import Input from "./Input";

function randomName() {
  const adjectives = [
    "autumn", "hidden", "bitter", "misty", "silent", "empty", "dry", "dark",
    "summer", "icy", "delicate", "quiet", "white", "cool", "spring", "winter",
    "patient", "twilight", "dawn", "crimson", "wispy", "weathered", "blue",
    "billowing", "broken", "cold", "damp", "falling", "frosty", "green", "long",
    "late", "lingering", "bold", "little", "morning", "muddy", "old", "red",
    "rough", "still", "small", "sparkling", "throbbing", "shy", "wandering",
    "withered", "wild", "black", "young", "holy", "solitary", "fragrant",
    "aged", "snowy", "proud", "floral", "restless", "divine", "polished",
    "ancient", "purple", "lively", "nameless"
  ];
  const nouns = [
    "waterfall", "river", "breeze", "moon", "rain", "wind", "sea", "morning",
    "snow", "lake", "sunset", "pine", "shadow", "leaf", "dawn", "glitter",
    "forest", "hill", "cloud", "meadow", "sun", "glade", "bird", "brook",
    "butterfly", "bush", "dew", "dust", "field", "fire", "flower", "firefly",
    "feather", "grass", "haze", "mountain", "night", "pond", "darkness",
    "snowflake", "silence", "sound", "sky", "shape", "surf", "thunder",
    "violet", "water", "wildflower", "wave", "water", "resonance", "sun",
    "wood", "dream", "cherry", "tree", "fog", "frost", "voice", "paper", "frog",
    "smoke", "star"
  ];
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  return adjective + noun;
}

function randomColor() {
  return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
}






class ChatApp extends Component {
  static contextType = UserContext;

  state = {
    messages: [],
    user: null,
    messageLoadError: null,
    messageSendError: null,
    loading: true,
    eventId: null
  }
  //_isMounted = false;

  // state = {
  //   messages: [],
  //   member: {
  //     username: randomName(),
  //     color: randomColor(),
  //   }
  // }

  // constructor() {
  //   super();
  //   const yamma_chat_testId = "IcG7CRvgSzktTp02"
  //   this.drone = new window.Scaledrone(yamma_chat_testId, {
  //     data: this.state.member
  //   });
  //   this.drone.on('open', error => {
  //     if (error) {
  //       return console.error(error);
  //     }
  //     const member = {...this.state.member};
  //     member.id = this.drone.clientId;
  //     this.setState({member});
  //   });
  //   const room = this.drone.subscribe("observable-room");
  //   room.on('data', (data, member) => {
  //     const messages = this.state.messages;
  //     messages.push({member, text: data});
  //     this.setState({messages});
  //   });
  // }

  // onSendMessage = (message) => {
  //   this._isMounted = true;
  //   this.drone.publish({
  //     room: "observable-room",
  //     message
  //   });
  // }

  // componentWillUnmount() {
  //   this._isMounted = false;
  // }

  handleSendMessage = (message) => {
    const { eventId } = this.state;
    const comment = {
      content: message
    }

    YammaApiService.postComment(comment, eventId)
    .then(res => {
      console.log(res);
      this.setState({
        messageSendError: null
      })
    })
    .catch(er => {
      console.log(er);
      this.setState({messageSendError: er })
    })
  }

  componentDidMount() {
    if(!this.state.loading)
      return;

    const eventId = this.props.eventId;

    YammaApiService.fetchComments(eventId)
      .then( res => {
        console.log('the comment response we got back: ', res.comments);
        
        this.setState({
          eventId: eventId,
          user: this.props.user,
          loading: false,
          messages: res.comments,
          messageLoadError: null
        });

      })
      .catch(er => {
        console.log(er);
        this.setState({messageLoadError: er})
      })
  }

  render() {
    

    return (
      <div>
        <div>
          <h1>Live Chat</h1>
        </div>
        <Messages
          messages={this.state.messages}
          user={this.state.user}
          loading={this.state.loading}
        />
        <Input
          handleSendMessage={this.handleSendMessage}
          user={this.state.user}
        />
      </div>
    );
  }


}

export default ChatApp;