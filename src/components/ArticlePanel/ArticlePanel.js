import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './ArticlePanel.css'
import Button from '../Button/Button'

class ArticlePanel extends Component {

  render() {
    const article_array = ['Article1', 'Article2', 'Article3', 'Article4']
    return( 
      <div className='articlepanel-container'>
        <br></br>
        <br></br>
        <br></br>

        <h1>US News</h1>
        
        <div>
          <ul>     
          {/*needs to change when we have a correct path for the article-->*/}
          {article_array.map((para, i) =>
            <li> 
              <Link key={i} to='/article/article:id'>{para}<br></br>{' '}</Link>
              <Button key={i} type='click'>View</Button>
              <Button key={i} type='click'>Share</Button>
            </li>
          )}
          </ul>
        </div>


      </div>
    )
  }
}

export default ArticlePanel;
