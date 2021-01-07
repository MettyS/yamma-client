import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './ArticlePanel.css'
import UserContext from '../../context/UserContext'

export default class ArticlePanel extends Component {
  static contextType = UserContext

  render() {
    const { articles=[] } = this.context
    return( 
      <div className='articlepanel-container'>
        <ul className='article-ul'>     
        {/*needs to change when we have a correct path for the article-->*/}
        {articles.map((article) =>
          <li key={parseInt(article.id)} className='article-list-item'> 
            <Link to={`/article/${parseInt(article.id)}`}>{article.title}<br></br>{' '}</Link>
            <button type='click' className='article-buttons'>View</button>
            <button type='click' className='article-buttons'>Share</button></li>)}
        </ul>
      </div>
    )
  }
}