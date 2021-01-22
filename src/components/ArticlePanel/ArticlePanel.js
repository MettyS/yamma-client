import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ArticleCard from '../ArticleCard/ArticleCard'
import './ArticlePanel.css';
import EventContext from '../../context/EventContext';
import YammaApiService from '../../services/yamma-api-service';

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
    const firstSixIds = Object.keys(ids).slice(0, 6)
    console.log(firstSixIds);

    const linkItems = firstSixIds.map(id => {
      return <ArticleCard className='article-panel-card' article={ids[id]} />
    });

    return linkItems;
  };

  render() {
    const articleCards = this.createArticleCards();

    return (
      <div className='articlepanel-container'>
        <ul className='article-ul'>
          {articleCards}
        </ul>
      </div>
    );
  }
}
