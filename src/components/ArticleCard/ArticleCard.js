import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// expects props with className && article
export default class ArticleCard extends Component {
  createArticleCard = () => {
    const { article, className } = this.props;

    return (
      <li className='article-list-item' key={article.id}>
        <Link
          to={`/event/article/${article.id}/${article.title}`}
          className={'article-card ' + className}
          key={article.id}>
          <img src={article.event_img} alt='' className='article-img' />
          <p className='article-title'>{article.title}</p>
          <p className='article-source'>
            <img
              src={article.source_img}
              alt=''
              className='article-source-img'
            />
            {article.source_name}
          </p>
          <br></br>
        </Link>
      </li>
    );
  };

  render() {
    const card = this.createArticleCard();

    return card;
  }
}
