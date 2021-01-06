import React from 'react'
import { Link } from 'react-router-dom'
import './ArticlePanel.css'
import Button from '../Button/Button'

export default function ArticlePanel(props) {
  console.log("props,", props)

  return( 
    <div className='articlepanel-container'>
      <br></br>
      <br></br>
      <br></br>

      <h1>US News</h1>
      
      <div>
        <ul>     
        {props.articles.map((article) =>
          <li key={article.id}> 
            <Link to={`/article/${article.id}`}>{article.title}<br></br>{' '}</Link>
            <Button type='click'>View</Button>
            <Button type='click'>Share</Button>
          </li>
        )}
        </ul>
      </div>


    </div>
  )
}
