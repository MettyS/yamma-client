import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// expects props with className && article
export default class ArticleCard extends Component {


  createArticleCard = () => {
    console.log(this.props);

    const article = this.props.article;

    return (
      <Link
        to={`/event/article/${article.id}/${article.title}`}
        className={'article-card' + this.props.className}
        key={article.id}>
        <li className='article-list-item'>
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
        </li>
      </Link>
    );
  }

  render() {
    const card = this.createArticleCard();

    return card
  }

}