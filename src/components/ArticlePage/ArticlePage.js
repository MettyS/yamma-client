import React, { Component } from 'react';
import EventContext from '../../context/EventContext';
import './ArticlePage.css';
import YammaApiService from '../../services/yamma-api-service';

import { Link } from 'react-router-dom';
import ChatApp from '../ChatApp/ChatApp';
import ArticleCard from '../ArticleCard/ArticleCard';

export default class ArticlePage extends Component {
  state = {
    loading: true,
  };
  static contextType = EventContext;

  componentDidMount() {
    const { eventId } = this.props.match.params;
    if (this.context.ids[eventId] || this.state.loading === false) return;

    YammaApiService.fetchEvent(eventId)
      .then((eventRes) => {
        //console.log('This is the event recieved: ', eventRes);

        const category = eventRes.categories.split(' ');

        YammaApiService.fetchEventsCategory(category[0])
          .then((categoryRes) => {
            //console.log('this is the category recieved: ', categoryRes);
            this.setState({ loading: false });
            this.context.processEvents([eventRes, ...categoryRes.events]);
          })
          .catch((er) => {
            throw er;
          });
      })
      .catch((er) => {
        console.log('error in fetching event with id: ', eventId);
        console.log('ERROR: ', er);
      });
  }

  createArticleContent = (event) => {

    return (
      <div className='article-content'>
        <h1>{event ? event.title : 'Loading'}</h1>
        {/* <p>Region: {article.region}</p> */}
        <p>Category: {event ? event.categories : 'Loading'}</p>
        <p>{event ? event.description : 'Loading'}</p>
      </div>
    );
  };

  createRelatedContent = (event) => {
    const relatedCategories = event.categories.split(' ');
    const { ids } = this.context;

    const category = this.context.getCorrespondingCategory(
      relatedCategories[0]
    );

    const relatedArray = this.context[category];
    const relatedItems = relatedArray.slice(-4);

    const articleCards = relatedItems.map( id => {
      const article = ids[id]

      return <ArticleCard className='article-related-card' article={article} />
    });

    return articleCards;

  };


  render() {
    //console.log('CONTEXT IS: ', this.context);
    console.log(this.context);

    const { eventId } = this.props.match.params;
    const event = this.context.ids[eventId];

    const articleContent = this.createArticleContent(event);
    const relatedArticles = event ? this.createRelatedContent(event) : 'Loading';

    return (
      //<div>YAY!</div>
      <div className='article-page'>
        <div className='article-body'>
          {articleContent}

          <div className='chat-section'>
            <ChatApp eventId={eventId} />
          </div>
        </div>

        <br></br>

        <h3 className='related-h3'>Related</h3>

        <div className='related-section'>
          <ul className='related-articles-list'>
            {relatedArticles}
          </ul>
        </div>
      </div>
    );
  }
}
