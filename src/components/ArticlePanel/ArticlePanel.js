import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import ArticleCard from '../ArticleCard/ArticleCard'
import './ArticlePanel.css';
//import EventContext from '../../context/EventContext';
import YammaApiService from '../../services/yamma-api-service';
import EventContext from '../../context/EventContext';

export default class ArticlePanel extends Component {
  constructor(props) {
    super(props);
    const state = {
      NUM_ARTICLE_CARDS: 6,
    };
    this.state = state;
  }

  static contextType = EventContext;

  componentDidMount() {
    YammaApiService.fetchEvents()
      .then((res) => {
        this.context.processEvents(res.events);
      })
      .catch((er) => {
        console.log('ERROR: ', er);
      });
  }

  createArticleCards = () => {
    const { ids } = this.context;
    const firstSixIds = Object.keys(ids).slice(0, 6);

    const linkItems = firstSixIds.map((id, i) => {
      const article = ids[id];
      return (
        <ArticleCard key={i} className='article-panel-card' article={article} />
      );
    });

    return linkItems;
  };

  render() {
    const articleCards = this.createArticleCards();

    return (
      <div className='articlepanel-container'>
        <ul className='article-ul'>{articleCards}</ul>
      </div>
    );
  }
}
