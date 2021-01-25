import React, { Component } from 'react';
import EventContext from '../../context/EventContext';
import YammaApiService from '../../services/yamma-api-service'
import './CategoryPage.css';
import { Link } from 'react-router-dom';
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
<<<<<<< HEAD
        <h1>{category.name}</h1>
=======
        <h1>{category}</h1>
        {/* <p>{category.content}</p> */}
>>>>>>> c472d03d86d3b9dd639fe9c831ebb4013a43e1b0
        <br></br>
        <ul className='related-ul'>
<<<<<<< HEAD
          {relatedArticles.map((para, i) => (
            <Link
              to={`/event/article/${para}`}
              className='related-title'
              key={i}>
              <li
                key={parseInt(relatedArticles.id)}
                className='related-list-item'>
                {para}
                <br></br>{' '}
              </li>
            </Link>
          ))}
=======
          {relatedArticles}
>>>>>>> c472d03d86d3b9dd639fe9c831ebb4013a43e1b0
        </ul>
      </div>
    );
  }
}
