import React, { Component } from 'react';
import EventContext from '../../context/EventContext';
import YammaApiService from '../../services/yamma-api-service'
import './CategoryPage.css';
// import { Link } from 'react-router-dom';
import ArticleCard from '../ArticleCard/ArticleCard';

export default class CategoryPage extends Component {
  state = {
    loading: true
  }
  static defaultProps = {
    match: {
      params: {},
    },
  };

  static contextType = EventContext;

  componentDidMount() {
    const { category } = this.props.match.params;
    const contextCategory = this.context.getCorrespondingCategory(category)

    console.log(this.context);
    if (this.context[contextCategory].length) {
      if(this.state.loading === false)
        return
      else {
        this.setState({loading: false});
        return;
      }
    }


    YammaApiService.fetchEventsCategory(category)
          .then((categoryRes) => {
            console.log(categoryRes);
            this.context.processEvents(categoryRes.events);
            this.setState({ loading: false });
          })
          .catch((er) => {
            console.log('error fetching this category: ', category)
            console.log(er);
          });
  }

  createRelatedArticles = (events) => {
    return events.map(eventId => {
      const article = this.context.ids[eventId]
      return <ArticleCard className='article-panel-card' article={article} />
    })
  }

  render() {
    const { category } = this.props.match.params;
    const contextCategory = this.context.getCorrespondingCategory(category)
    const events = this.context[contextCategory];
    console.log(events);
    const relatedArticles = this.state.loading ? 'Loading...' : this.createRelatedArticles(events);
    
    console.log(category);

    return (
      <div className='categorypage-container'>
        <h1>{category}</h1>
        {/* <p>{category.content}</p> */}
        <br></br>
        <ul className='related-ul'>
          {relatedArticles}
        </ul>
      </div>
    );
  }
}
