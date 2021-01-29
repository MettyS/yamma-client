import React, { Component } from 'react';
import EventContext from '../../context/EventContext';

import YammaApiService from '../../services/yamma-api-service';

import ChatApp from '../ChatApp/ChatApp';
import ArticleCard from '../ArticleCard/ArticleCard';
import './ArticlePage.css';
// import spinner from '../../images/spinner.png';

export default class ArticlePage extends Component {
  state = {
    eventId: null,
    loading: true,
    messages: [],
    messageLoadError: null,
  };
  static contextType = EventContext;

  componentDidUpdate(prevProps, state) {
    const prevEventId = prevProps.match.params.eventId;
    const { eventId } = this.props.match.params;

    if (eventId !== prevEventId) {
      this.getEventsAndMessages(eventId).then((newState) => {
        this.setState({ ...newState });
      });
    }
  }

  async getEventsAndMessages(eventId) {
    let newState = {
      eventId: eventId,
    };

    try {
      const commentRes = await YammaApiService.fetchComments(eventId);

      newState.loading = false;
      newState.messages = commentRes.comments;

      if (!this.context.ids[eventId]) {
        const eventRes = await YammaApiService.fetchEvent(eventId);
        const categories = eventRes.categories.split(' ');

        const relatedEventsRes = await YammaApiService.fetchEventsCategory(
          categories[0]
        );

        this.context.processEvents([eventRes, ...relatedEventsRes.events]);
      }
    } catch (er) {
      console.log('ERROR: ', er);
      newState.eventLoadError = er;
    }

    return newState;
  }

  handleSendMessage = (message) => {
    const { eventId } = this.state;
    const comment = {
      content: message,
    };

    YammaApiService.postComment(comment, eventId)
      .then((res) => {
        this.setState({
          messageSendError: null,
          messages: [...this.state.messages, res],
        });
      })
      .catch((er) => {
        console.log(er);
        this.setState({ messageSendError: er });
      });
  };

  componentDidMount() {
    const { eventId } = this.props.match.params;

    this.getEventsAndMessages(eventId).then((newState) => {
      this.setState({ ...newState });
    });
  }

  createArticleContent = (event) => {
    if (!event) return <div className='article-content'>'Loading...'</div>;

    const date = new Date(event.date_published);
    return (
      <div className='article-content'>
        <div className='article-banner'>
          <p className='source-title'>{event.source_name}</p>
          <p>{`[ ${event.categories} ]`}</p>
        </div>
        <div className='head-panel'>
          <h1>{event.title}</h1>
          <img src={event.event_img} alt='' className='article-img' />
        </div>
        <div className='body-panel'>
          <p>{event.description}</p>
          <div className='btn'>
            <a
              href={`${event.source_url}`}
              target='_blank'
              rel='noopener noreferrer'
              id='see-original-article'
              className='btn'>
              See Original Article
            </a>
          </div>
        </div>
        <div className='foot-panel'>
          <p>{`${date.toDateString()}   ${date.getHours()}:${date.getMinutes()}`}</p>
        </div>
      </div>
    );
  };

  createRelatedContent = (event, numberOfRelatedArticles = 4) => {
    const relatedCategories = event.categories.split(' ');
    const { ids } = this.context;

    const category = this.context.getCorrespondingCategory(
      relatedCategories[0]
    );

    //naive approach to different relevant articles when article changes
    const relatedArray = this.context[category];
    let relatedItems = new Array(numberOfRelatedArticles);
    for (let i = 0; i < numberOfRelatedArticles; i++) {
      relatedItems[i] =
        relatedArray[Math.floor(Math.random() * relatedArray.length)];
    }

    const articleCards = relatedItems.map((id, i) => {
      const article = ids[id];

      return (
        <ArticleCard
          key={i}
          className='article-related-card'
          article={article}
        />
      );
    });

    return articleCards;
  };

  render() {
    // const { user } = this.context.userContext

    const { loading, messages, messageLoadError } = this.state;
    const { eventId } = this.props.match.params;
    const event = this.context.ids[eventId];

    const articleContent = this.createArticleContent(event);
    const relatedArticles = event
      ? this.createRelatedContent(event)
      : 'Loading';

    return (
      //<div>YAY!</div>
      <div className='article-page'>
        <div className='article-body'>
          {articleContent}

          <ChatApp
            eventId={eventId}
            loading={loading}
            messages={messages}
            messageLoadError={messageLoadError}
            handleSendMessage={(message) => {
              this.handleSendMessage(message);
            }}
          />
        </div>

        <br></br>

        <h3 className='related-h3'>Related</h3>

        <div className='related-section'>
          <ul className='related-articles-list'>{relatedArticles}</ul>
        </div>
      </div>
    );
  }
}
