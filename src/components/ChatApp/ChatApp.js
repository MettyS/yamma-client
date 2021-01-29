import React, { Component } from 'react';

import UserContext from '../../context/UserContext';
import YammaApiService from '../../services/yamma-api-service';
import TokenService from '../../services/token-service';

import Messages from './Messages';
import Input from './Input';

import './ChatApp.css';

function randomName() {
  const adjectives = [
    'autumn',
    'hidden',
    'bitter',
    'misty',
    'silent',
    'empty',
    'dry',
    'dark',
    'summer',
    'icy',
    'delicate',
    'quiet',
    'white',
    'cool',
    'spring',
    'winter',
    'patient',
    'twilight',
    'dawn',
    'crimson',
    'wispy',
    'weathered',
    'blue',
    'billowing',
    'broken',
    'cold',
    'damp',
    'falling',
    'frosty',
    'green',
    'long',
    'late',
    'lingering',
    'bold',
    'little',
    'morning',
    'muddy',
    'old',
    'red',
    'rough',
    'still',
    'small',
    'sparkling',
    'throbbing',
    'shy',
    'wandering',
    'withered',
    'wild',
    'black',
    'young',
    'holy',
    'solitary',
    'fragrant',
    'aged',
    'snowy',
    'proud',
    'floral',
    'restless',
    'divine',
    'polished',
    'ancient',
    'purple',
    'lively',
    'nameless',
  ];
  const nouns = [
    'waterfall',
    'river',
    'breeze',
    'moon',
    'rain',
    'wind',
    'sea',
    'morning',
    'snow',
    'lake',
    'sunset',
    'pine',
    'shadow',
    'leaf',
    'dawn',
    'glitter',
    'forest',
    'hill',
    'cloud',
    'meadow',
    'sun',
    'glade',
    'bird',
    'brook',
    'butterfly',
    'bush',
    'dew',
    'dust',
    'field',
    'fire',
    'flower',
    'firefly',
    'feather',
    'grass',
    'haze',
    'mountain',
    'night',
    'pond',
    'darkness',
    'snowflake',
    'silence',
    'sound',
    'sky',
    'shape',
    'surf',
    'thunder',
    'violet',
    'water',
    'wildflower',
    'wave',
    'water',
    'resonance',
    'sun',
    'wood',
    'dream',
    'cherry',
    'tree',
    'fog',
    'frost',
    'voice',
    'paper',
    'frog',
    'smoke',
    'star',
  ];
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  return adjective + noun;
}

function randomColor() {
  return '#' + Math.floor(Math.random() * 0xffffff).toString(16);
}

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
