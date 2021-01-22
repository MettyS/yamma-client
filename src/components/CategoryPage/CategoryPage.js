import React, { Component } from 'react';
import UserContext from '../../context/UserContext';
import './CategoryPage.css';
import { Link } from 'react-router-dom';

export default class CategoryPage extends Component {
  static defaultProps = {
    match: {
      params: {},
    },
  };

  static contextType = UserContext;

  render() {
    const { categories = [] } = this.context;
    const { name } = this.props.match.params;
    const category = categories.find((cat) => cat.name === name);
    const relatedArticles = category.related_articles.split(', ');
    console.log(categories);

    return (
      <div className='categorypage-container'>
        <h1>{category.name}</h1>
        <br></br>
        <ul className='related-ul'>
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
        </ul>
      </div>
    );
  }
}
