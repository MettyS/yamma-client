import React, { Component } from 'react';

class CategoryError extends Error {
  constructor(message) {
    super(message);
  }
}

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
  getCorrespondingCategory: () => {}
  //addIdToCategory: () => {}
})

export default EventContext;


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
    }

    let shouldUpdate = false;

    this.state = state;

  }

  setError = (error) => {
    this.setState({ error });
  }

  clearError = () => {
    this.setState({ error: null });
  }

  getCorrespondingCategory = (rawCategory) => {
    switch (rawCategory){
      case 'US': return 'us';
      case 'US_West': return 'usWest';
      case 'US_Northeast': return 'usNortheast';
      case 'US_South': return 'usSouth';
      case 'US_Midwest': return 'usMidwest';
      case 'Business': return 'business';
      case 'Politics': return 'politics';
      case 'Technology': return 'technology';
      case 'Science': return 'science';
      case 'Health': return 'health';
      default: throw new CategoryError('not a valid category: ', rawCategory);
    }
  }

  processEvents = (eventArr) => {
    // console.log('PROCESSING EVENTS NOW WITH THIS: ');
    // console.log(eventArr);

    // console.log('MY STATE IS: ', this.state);
    let newEventAndIdPairs = {};
    let newIdAndCategoryPairs = {
      us: [],           
      usWest: [],       
      usNortheast: [],  
      usSouth: [],      
      usMidwest: [],    
      business: [],     
      politics: [],     
      technology: [],   
      science: [],      
      health: [],       
    };

    eventArr.forEach(ev => {
      if(this.state.ids[ev.id] || newEventAndIdPairs[ev.id]) {
        //console.log('not going to add event with duplicate ID = ', ev.id)
        return;
      }
      this.shouldUpdate = true;
      
      ev.categories.split(' ').forEach( rawCategory => {
        const category = this.getCorrespondingCategory(rawCategory);
        newIdAndCategoryPairs[category].push(ev.id);
        //this.addIdToCategory(ev.id, category);
      });

      newEventAndIdPairs[ev.id] = ev;
    })

    if(this.shouldUpdate)
      this.addAllNewContent(newEventAndIdPairs, newIdAndCategoryPairs);
    else
      console.log('nothing to update!');
  }

  addAllNewContent = (ids, categoryArrays) => {
    console.log('ADDING IDS CONTENT: ', ids);
    console.log('ADDING CATEGORIES CONTENT: ', categoryArrays);

    let compositeCategoryContent = {}; 
    Object.keys(categoryArrays).forEach(category => {
      compositeCategoryContent[category] = [...this.state[category], ...categoryArrays[category]]
    });

    this.shouldUpdate = false;

    this.setState({
      ids: {...this.state.ids, ...ids},
      ...compositeCategoryContent
    })
  }

  /*
  addEventAndId = (ev) => {
    this.setState({ ids: {...this.state.ids
      , [ev.id]: ev }})
  }

  addIdToCategory = (id, category) => {
    // console.log('Processing this ID into this category: ', id, category);

    // console.log('THIS AS PER THE addToCategory FUNCTION: ');
    // console.log(this)

    switch (category){
      case 'US': this.setState({ us: [ ...this.state.us, id ] });
        break;
      case 'US_West': this.setState({ usWest: [ ...this.state.usWest, id ] });
        break;
      case 'US_Northeast': this.setState({ usNortheast: [ ...this.state.usNortheast, id ] });
        break;
      case 'US_South': this.setState({ usSouth: [ ...this.state.usSouth, id ] });
        break;
      case 'US_Midwest': this.setState({ usMidwest: [ ...this.state.usMidwest, id ] });
        break;
      case 'Business': this.setState({ business: [ ...this.state.business, id ] });
        break;
      case 'Politics': this.setState({ politics: [ ...this.state.politics, id ] });
        break;
      case 'Technology': this.setState({ technology: [ ...this.state.technology, id ] });
        break;
      case 'Science': this.setState({ science: [ ...this.state.science, id ] });
        break;
      case 'Health': this.setState({ health: [ ...this.state.health, id ] });
        break;
      default: console.log('not a valid category');
    }
  }
  */


  render = () => {
    const value = {
      // ids: this.state.ids,          
      // us: this.state.us,           
      // usWest: this.state.usWest,       
      // usNortheast: this.state.usNortheast,  
      // usSouth: this.state.usSouth,      
      // usMidwest: this.state.usMidwest,    
      // business: this.state.business,     
      // politics: this.state.politics,     
      // technology: this.state.technology,   
      // science: this.state.science,      
      // health: this.state.health,       

      // error: this.state.error,
      ...this.state,
      setError: this.setError,
      clearError: this.clearError,
      processEvents: this.processEvents,
      getCorrespondingCategory: this.getCorrespondingCategory,
      //addIdToCategory: this.addIdToCategory
    };
    return (
      <EventContext.Provider value={value}>
        {this.props.children}
      </EventContext.Provider>
    );
  }

}

