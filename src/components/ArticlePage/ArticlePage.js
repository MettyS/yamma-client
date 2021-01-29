import React, { Component } from 'react';
import EventContext from '../../context/EventContext';

import YammaApiService from '../../services/yamma-api-service';

import ChatApp from '../ChatApp/ChatApp';
import ArticleCard from '../ArticleCard/ArticleCard';
import './ArticlePage.css';
import spinner from '../../images/spinner.png';

export default class ArticlePage extends Component {
  state = {
    eventId: null,
    loading: true,
    messages: [],
    messageLoadError: null
  };
  static contextType = EventContext;

  componentDidUpdate(prevProps, state) {
    const prevEventId = prevProps.match.params.eventId;
    const { eventId } = this.props.match.params;

    if(eventId !== prevEventId) {
      this.getEventsAndMessages(eventId)
      .then (newState => {
        this.setState({...newState})
      })
    }

    // const { eventId } = this.props.match.params;
    // console.log('PROPS ID: ', eventId)
    // console.log('prevProps ID ', prevProps.match.params)

    // if(eventId !== prevProps.match.params) {
    //   this.getEventsAndMessages(eventId)
    //   .then (newState => {
    //     this.setState({...newState})
    //   })
    // }
  }

  async getEventsAndMessages(eventId) {
    let newState = {
      eventId: eventId
    };

    try {
      const commentRes = await YammaApiService.fetchComments(eventId)
      console.log('the comment response we got back: ', commentRes.comments);
        
      newState.loading = false;
      newState.messages = commentRes.comments;

      if (!(this.context.ids[eventId])) {
        const eventRes = await YammaApiService.fetchEvent(eventId)
        const categories = eventRes.categories.split(' ');

        const relatedEventsRes = await YammaApiService.fetchEventsCategory(categories[0])

        console.log(relatedEventsRes)
        this.context.processEvents([eventRes, ...(relatedEventsRes.events)]);

      }
    }
    catch (er) {
      console.log('ERROR: ', er);
      newState.eventLoadError = er;
    }
    
    return newState;


    // YammaApiService.fetchComments(eventId)
    // .then( res => {
    //   console.log('the comment response we got back: ', res.comments);
      
    //   newState.loading = false;
    //   newState.messages = res.comments;

    //   if (!(this.context.ids[eventId])) {
    //     YammaApiService.fetchEvent(eventId)
    //       .then((eventRes) => {
    //         const category = eventRes.categories.split(' ');

    //         YammaApiService.fetchEventsCategory(category[0])
    //           .then((categoryRes) => {
    //             this.context.processEvents([eventRes, ...categoryRes.events]);
    //           })
    //           .catch((er) => {
    //             console.log('error in getting related events', er);
    //             throw er;
    //           });
    //       })
    //       .catch((er) => {
    //         console.log('error in fetching event with id', eventId, er);
    //         this.setState({eventLoadError: er});
    //       });
    //   }

    //   console.log('RESETTING ARTICLE PAGE STATE NOW WOOOOOOOOT WOOOOOOOOT', newState)
    //   this.setState({
    //     ...newState
    //   })
    // })
    // .catch(er => {
    //   console.log('error in fetching messages', er);
    //   this.setState({messageLoadError: er}); 
    // })
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (currentThing === nextThing) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }

  handleSendMessage = (message) => {
    const { eventId } = this.state;
    const comment = {
      content: message
    }

    console.log('COMMON SENDING IS: ', comment);

    YammaApiService.postComment(comment, eventId)
    .then(res => {
      console.log('COMMENT RES IS: ', res);
      this.setState({
        messageSendError: null,
        messages: [...this.state.messages, res]
      })
    })
    .catch(er => {
      console.log(er);
      this.setState({messageSendError: er })
    })
  }



  componentDidMount() {
    console.log('_________________________________________ new mount')
    const { eventId } = this.props.match.params;
    
    this.getEventsAndMessages(eventId)
    .then (newState => {
      this.setState({...newState})
    })
  }

  createArticleContent = (event) => {
    if(!event)
      return (<div className='article-content'>'Loading...'</div>)

    const date = new Date(event.date_published)
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
              <a href={`${event.source_url}`} target='_blank' rel='noopener noreferrer' id='see-original-article' className='btn'>See Original Article</a>
            </div>
          </div>
          <div className='foot-panel'>
            <p>{`${date.toDateString()}   ${date.getHours()}:${date.getMinutes()}`}</p>
          </div>

        </div>
      )
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
      relatedItems[i] = relatedArray[Math.floor(Math.random() * relatedArray.length)];
    }

    const articleCards = relatedItems.map( (id, i) => {
      const article = ids[id]

      return <ArticleCard key={i} className='article-related-card' article={article} />
    });

    return articleCards;

  };



  render() {
    // const { user } = this.context.userContext

    const { loading, messages, messageLoadError } = this.state;
    console.log('ARTICLE PAGE RENDER... LOADING IS: ', loading, messages);
    console.log('JUST CHECKING ARTICLEs PROPS', this.props)
    const { eventId } = this.props.match.params;
    const event = this.context.ids[eventId];

    const articleContent = this.createArticleContent(event);
    const relatedArticles = event ? this.createRelatedContent(event) : 'Loading';

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
              handleSendMessage={message => {
                this.handleSendMessage(message)
                }}/>
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
