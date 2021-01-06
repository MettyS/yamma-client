import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './ArticlePanel.css'
import UserContext from '../../context/UserContext'

export default class ArticlePanel extends Component {
  static contextType = UserContext

  render() {
    const { articles=[] } = this.context
    console.log("context:", this.context)
    console.log("articles:", articles)

    return( 
      <div className='articlepanel-container'>

      <h1>US News</h1>

      <div>
        <ul>     
        {/*needs to change when we have a correct path for the article-->*/}
        {articles.map((article) =>
          <li key={parseInt(article.id)}> 
            <Link to={`/article/${parseInt(article.id)}`}>{article.title}<br></br>{' '}</Link>
            <button type='click'>View</button>
            <button type='click'>Share</button></li>)}

        </ul>
      </div>

    </div>
    )
  }
  
}