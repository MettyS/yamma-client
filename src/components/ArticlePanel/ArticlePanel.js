import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ArticlePanel.css';
import UserContext from '../../context/UserContext';

export default class ArticlePanel extends Component {
  static contextType = UserContext;

  render() {
    const { articles = [] } = this.context;
    return (
      <div className='articlepanel-container'>
        <ul className='article-ul'>
          {/*needs to change when we have a correct path for the article-->*/}
          {articles.map((article) => (
            <Link
              to={`/event/article/${article.title}`}
              className='article-title'
              key={parseInt(article.id)}>
              <li className='article-list-item'>
                {article.title}
                <br></br>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    );
  }
}
