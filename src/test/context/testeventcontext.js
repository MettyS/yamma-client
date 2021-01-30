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
  // shouldUpdate = false;

  constructor(props) {
    super(props);
    const state = {
      ids: {
        '1' : {
          id: 1,
          title:
            'Man killed by Lakewood police fired on law enforcement, police say ',
          categories: 'US_West',
          description:
            'Lakewood police on Wednesday identified the 32-year-old shot and killed by officers Tuesday afternoon, alleging that the suspect shot at law enforcement before they returned fire.',
          event_img:
            'https://www.bing.com/th?id=OVFT.tYaTPDyXhSRVDzWyK69FBi&pid=News',
          source_name: 'The Denver Post',
          source_url:
            'https://www.denverpost.com/2021/01/13/lakewood-police-shooting-suspect-id/',
          source_img:
            'https://www.bing.com/th?id=AR_fb1118bba536481ce2948b28b5e4dec5',
          date_created: '2021-01-13T23:05:57.950Z',
          date_published: '2021-01-13T22:19:00.000Z',
          archived: false,
        }
      }, // obj of key=event.id value=event
      us: [], // event.id's with category 'US'
      usWest: ['1'], // event.id's with category 'US_West',
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
    }
    console.log('INVALID CATEGORY :(')
    throw new Error('not a valid category:' + rawCategory);
  };

  processEvents = (eventArr) => {
    console.log('process events');
    // let newEventAndIdPairs = {};
    // let newIdAndCategoryPairs = {
    //   us: [],
    //   usWest: [],
    //   usNortheast: [],
    //   usSouth: [],
    //   usMidwest: [],
    //   business: [],
    //   politics: [],
    //   technology: [],
    //   science: [],
    //   health: [],
    // };

    // eventArr.forEach((ev) => {
    //   if (this.state.ids[ev.id]) {
    //     return;
    //   }
    //   this.shouldUpdate = true;

    //   ev.categories.split(' ').forEach((rawCategory) => {
    //     const category = this.getCorrespondingCategory(rawCategory);
    //     newIdAndCategoryPairs[category].push(ev.id);
    //     //this.addIdToCategory(ev.id, category);
    //   });

    //   newEventAndIdPairs[ev.id] = ev;
    // });

    // if (this.shouldUpdate)
    //   this.addAllNewContent(newEventAndIdPairs, newIdAndCategoryPairs);
  };

  addAllNewContent = (ids, categoryArrays) => {
    console.log('add all new content');
    // let compositeCategoryContent = {};
    // Object.keys(categoryArrays).forEach((category) => {
    //   compositeCategoryContent[category] = [
    //     ...this.state[category],
    //     ...categoryArrays[category],
    //   ];
    // });

    // this.shouldUpdate = false;

    // this.setState({
    //   ids: { ...this.state.ids, ...ids },
    //   ...compositeCategoryContent,
    // });
  };

  render = () => {
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
      error: null,
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
