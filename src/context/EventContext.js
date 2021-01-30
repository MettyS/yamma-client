import React, { Component } from 'react';

const EventContext = React.createContext({
  // event values are ordered with oldest in the front newest at the end
  ids: {}, // obj of key=event.id value=event
  us: [], // event.id's with category 'US'
  usWest: [], // event.id's with category 'US_West',
  usNortheast: [], // event.id's with category 'US_Northeast'
  usSouth: [], // event.id's with category 'US_South'
  usMidwest: [], // event.id's with category 'US_Midwest'
  business: [], // event.id's with category 'Business'
  politics: [], // event.id's with category 'Politics'
  technology: [], // event.id's with category 'Technology'
  science: [], // event.id's with category 'Science'
  health: [], // event.id's with category 'Health'

  error: null,
  setError: () => {},
  clearError: () => {},
  processEvents: () => {},
  getCorrespondingCategory: () => {},
  //addIdToCategory: () => {}
});

export default EventContext;

export class EventProvider extends Component {
  shouldUpdate = false;

  constructor(props) {
    super(props);
    const state = {
      ids: {}, // obj of key=event.id value=event
      us: [], // event.id's with category 'US'
      usWest: [], // event.id's with category 'US_West',
      usNortheast: [], // event.id's with category 'US_Northeast'
      usSouth: [], // event.id's with category 'US_South'
      usMidwest: [], // event.id's with category 'US_Midwest'
      business: [], // event.id's with category 'Business'
      politics: [], // event.id's with category 'Politics'
      technology: [], // event.id's with category 'Technology'
      science: [], // event.id's with category 'Science'
      health: [], // event.id's with category 'Health'

      error: null,
    };

    this.state = state;
  }

  setError = (error) => {
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  getCorrespondingCategory = (rawCategory) => {
    switch (rawCategory) {
      case 'US':
        return 'us';
      case 'US_West':
        return 'usWest';
      case 'US_Northeast':
        return 'usNortheast';
      case 'US_South':
        return 'usSouth';
      case 'US_Midwest':
        return 'usMidwest';
      case 'Business':
        return 'business';
      case 'Politics':
        return 'politics';
      case 'Technology':
        return 'technology';
      case 'Science':
        return 'science';
      case 'Health':
        return 'health';
      default:
        throw new Error('not a valid category:' + rawCategory);
    }
  };

  processEvents = (eventArr) => {
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

    eventArr.forEach((ev) => {
      if (this.state.ids[ev.id]) {
        return;
      }
      this.shouldUpdate = true;

      ev.categories.split(' ').forEach((rawCategory) => {
        const category = this.getCorrespondingCategory(rawCategory);
        newIdAndCategoryPairs[category].push(ev.id);
        //this.addIdToCategory(ev.id, category);
      });

      newEventAndIdPairs[ev.id] = ev;
    });

    if (this.shouldUpdate)
      this.addAllNewContent(newEventAndIdPairs, newIdAndCategoryPairs);
  };

  addAllNewContent = (ids, categoryArrays) => {
    let compositeCategoryContent = {};
    Object.keys(categoryArrays).forEach((category) => {
      compositeCategoryContent[category] = [
        ...this.state[category],
        ...categoryArrays[category],
      ];
    });

    this.shouldUpdate = false;

    this.setState({
      ids: { ...this.state.ids, ...ids },
      ...compositeCategoryContent,
    });
  };

  render = () => {
    const value = {
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
  };
}
