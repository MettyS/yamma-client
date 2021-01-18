import React, { Component } from 'react';
import UserContext from '../../context/UserContext';
import './ArticlePage.css';
import { Link } from 'react-router-dom';
import ChatPage from '../ChatApp/ChatApp';

export default class ArticlePage extends Component {
  static defaultProps = {
    match: {
      params: {},
    },
  };

  static contextType = UserContext;

  render() {
    const { articles = [] } = this.context;
    const { title } = this.props.match.params;
    const article = articles.find((art) => art.title === title);
    const relatedRegion = article.region.split(', ');
    const relatedType = article.type.split(', ');

    return (
      <div>
        <div className='article-page'>
          <div className='article-chat'>
            <div className='article-content'>
              <h1>{article.title}</h1>
              <p>Region: {article.region}</p>
              <p>Category: {article.type}</p>
              <p>{article.content}</p>
            </div>
            <div className='chat-page'>
              <ChatPage />
            </div>
          </div>

          <br></br>

          <h3 className='related-h3'>Related</h3>

          {/* <h4>Region: </h4> */}

          {/* <div className='related-section'>
            <ul className='related-region'>
              {relatedRegion.map((para, i) => (
                <Link key={i} to={`/event/category/${para}`}>
                  <li className='region-link'>
                    {para}
                    <br></br>{' '}
                  </li>
                </Link>
              ))}
            </ul> */}

            {/* <h4>Type: </h4> */}

            {/* <ul className='related-category'>
              {relatedType.map((para, i) => (
                <Link key={i} to={`/event/category/${para}`}>
                  <li className='category-link'>
                    {para}
                    <br></br>{' '}
                  </li>
                </Link>
              ))}
            </ul>
          </div> */}
        </div>
      </div>
    );
  }
}
