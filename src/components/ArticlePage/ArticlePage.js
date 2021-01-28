import React, { Component } from 'react';
import AllContext from '../../context/AllContext';
import spinner from '../../images/spinner.png';
import './ArticlePage.css';
import YammaApiService from '../../services/yamma-api-service';

import { Link } from 'react-router-dom';
import ChatApp from '../ChatApp/ChatApp';
import ArticleCard from '../ArticleCard/ArticleCard';

export default class ArticlePage extends Component {
  state = {
    loading: true,
  };
  static contextType = AllContext;

  componentDidMount() {
    const { eventId } = this.props.match.params;
    if (this.context.eventContext.ids[eventId] || this.state.loading === false) return;

    YammaApiService.fetchEvent(eventId)
      .then((eventRes) => {
        //console.log('This is the event recieved: ', eventRes);

        const category = eventRes.categories.split(' ');

        YammaApiService.fetchEventsCategory(category[0])
          .then((categoryRes) => {
            //console.log('this is the category recieved: ', categoryRes);
            this.setState({ loading: false });
            this.context.eventContext.processEvents([eventRes, ...categoryRes.events]);
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
    console.log(event);

    return (
      <div className='article-content'>
        <h1>{event ? event.title : 'Loading'}</h1>
        {/* <p>Region: {article.region}</p> */}
        <p>Category: {event ? event.categories : 'Loading'}</p>
        <p>{event ? event.description : 'Loading'}</p>
      </div>
    );
  };

  createRelatedContent = (event, numberOfRelatedArticles = 4) => {
    const relatedCategories = event.categories.split(' ');
    const { ids } = this.context.eventContext;

    const category = this.context.eventContext.getCorrespondingCategory(
      relatedCategories[0]
    );

    //naive approach to different relevant articles when article changes
    const relatedArray = this.context.eventContext[category];
    let relatedItems = new Array(numberOfRelatedArticles);
    for (let i = 0; i < numberOfRelatedArticles; i++) {
      relatedItems[i] = relatedArray[Math.floor(Math.random() * relatedArray.length)];
    }

    const articleCards = relatedItems.map( (id, i) => {
      const article = ids[id]

      return <ArticleCard key={i} className='article-related-card' article={article} />
    });

    return articleCards;

  };


  render() {
    const { user } = this.context.userContext

    const { eventId } = this.props.match.params;
    const event = this.context.eventContext.ids[eventId];

    const articleContent = this.createArticleContent(event);
    const relatedArticles = event ? this.createRelatedContent(event) : 'Loading';//<h2><img src={spinner} alt='loading-spinner'/>Loading</h2>;

    return (
      //<div>YAY!</div>
      <div className='article-page'>
        <div className='article-body'>
          {articleContent}

          <div className='chat-section'>
            <ChatApp eventId={eventId} user={user}/>
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
