import React, { Component } from 'react';
import EventContext from '../../context/EventContext';
import './ArticlePage.css';
import YammaApiService from '../../services/yamma-api-service';

import { Link } from 'react-router-dom';
import ChatApp from '../ChatApp/ChatApp';

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

    const category = this.context.getCorrespondingCategory(
      relatedCategories[0]
    );
    //console.log('CATEGORY: ', category);

    const relatedArray = this.context[category];
    const relatedItems = relatedArray.slice(-4);
    //console.log('RELATED ITEMS: ', relatedItems);

    return (
      <ul className='related-articles-list'>
        {relatedItems.map((id, i) => {
          const currentItem = this.context.ids[id];
          return (
            <Link key={i} to={`/event/article/${id}/${currentItem.title}`}>
              <li className='related-article-list-item'>
                <img src={currentItem.event_img} alt='' className='article-img' />
                <p className='article-title'>{currentItem.title}</p>
                <p className='article-source'>
                  <img
                    src={currentItem.source_img}
                    alt=''
                    className='article-source-img'
                  />
                  {currentItem.source_name}
                </p>
                <br></br>
              </li>
            </Link>
          );
        })}
      </ul>
    );
  };

  render() {
    //console.log('CONTEXT IS: ', this.context);

    const { eventId } = this.props.match.params;
    const event = this.context.ids[eventId];

    /*const article = articles.find((art) => art.title === title);
    const relatedRegion = article.region.split(', ');
    const relatedType = article.type.split(', ');*/

    //console.log('EVENT IS: ', event);

    //const article = event
    //const relatedCategories = article.categories.split(' ');

    return (
      //<div>YAY!</div>
      <div className='article-page'>
        <div className='article-body'>
          {this.createArticleContent(event)}

          <div className='chat-section'>
            <ChatApp eventId={eventId} />
          </div>
        </div>

        <br></br>

        <h3 className='related-h3'>Related</h3>

        <div className='related-section'>
          <div className='related-articles-wrapper related-wrapper'>
            {event ? this.createRelatedContent(event) : 'Loading'}
          </div>
        </div>
      </div>
    );
  }
}
