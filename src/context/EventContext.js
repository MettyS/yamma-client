import React, { Component } from 'react';

const EventContext = React.createContext({
  // event values are ordered with oldest in the front newest at the end
  ids: {},           // obj of key=event.id value=event
  us: [],           // event.id's with category 'US'
  usWest: [],       // event.id's with category 'US_West', 
  usNortheast: [],  // event.id's with category 'US_Northeast'
  usSouth: [],      // event.id's with category 'US_South'
  usMidwest: [],    // event.id's with category 'US_Midwest'
  business: [],     // event.id's with category 'Business'
  politics: [],     // event.id's with category 'Politics'
  technology: [],   // event.id's with category 'Technology'
  science: [],      // event.id's with category 'Science'
  health: [],       // event.id's with category 'Health'

  error: null,
  setError: () => {},
  clearError: () => {},
  processEvents: () => {},
  setEvents: () => {},
  addIdToCategory: () => {}
})



export class EventProvider extends Component {
  constructor(props) {
    super(props);
    const state = {
      ids: {},          // obj of key=event.id value=event
      us: [],           // event.id's with category 'US'
      usWest: [],       // event.id's with category 'US_West', 
      usNortheast: [],  // event.id's with category 'US_Northeast'
      usSouth: [],      // event.id's with category 'US_South'
      usMidwest: [],    // event.id's with category 'US_Midwest'
      business: [],     // event.id's with category 'Business'
      politics: [],     // event.id's with category 'Politics'
      technology: [],   // event.id's with category 'Technology'
      science: [],      // event.id's with category 'Science'
      health: [],       // event.id's with category 'Health'

      error: null
    } //user: {}, error: null };

    // const jwtPayload = TokenService.parseAuthToken();

    // if (jwtPayload)
    //   state.user = {
    //     id: jwtPayload.user_id,
    //     name: jwtPayload.name,
    //     username: jwtPayload.sub,
    //   };

    this.state = state;
    // IdleService.setIdleCallback(this.logoutBecauseIdle);
  }

  setError() {}
  clearError() {}
  processEvents() {}
  setEvents() {}
  addIdToCategory() {}


  render() {
    const value = {
      ids: this.state.ids,          
      us: this.state.us,           
      usWest: this.state.usWest,       
      usNortheast: this.state.usNortheast,  
      usSouth: this.state.usSouth,      
      usMidwest: this.state.usMidwest,    
      business: this.state.business,     
      politics: this.state.politics,     
      technology: this.state.technology,   
      science: this.state.science,      
      health: this.state.health,       

      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      processEvents: this.processEvents,
      setEvents: this.setEvents,
      addIdToCategory: this.addIdToCategory
    };
    return (
      <EventContext.Provider value={value}>
        {this.props.children}
      </EventContext.Provider>
    );
  }

}

