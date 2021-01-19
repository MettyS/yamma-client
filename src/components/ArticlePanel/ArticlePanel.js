import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ArticlePanel.css';
import EventContext from '../../context/EventContext';
import YammaApiService from '../../services/yamma-api-service';

export default class ArticlePanel extends Component {
  constructor(props){
    super(props);
    const state = {
      NUM_ARTICLE_CARDS: 6
    }
    this.state = state;
  }

  static contextType = EventContext

  

  componentDidMount() {
    YammaApiService.fetchEvents()
    .then(res => {
      this.context.processEvents(res.events);
    })
    .catch(er => {
      console.log('ERROR: ', er);
    })
  }

  createArticleCards = () => {
    const { ids } = this.context;
    let linkItems = [];

    /*const idKeys = Object.keys(ids);
    console.log('IDKEYS IS ---> ', idKeys);
    for(let i = 0; i<this.state.NUM_ARTICLE_CARDS; i++){
      const id = idKeys[i];
      console.log('the ID is: ', id);
      const article = ids[id];
      console.log('ARTICLE IS: ', article)
      linkItems.push( 
        <Link
          to={`/event/article/${article.title}`}
          className='article-title'
          key={parseInt(id)}>
          <li className='article-list-item'>
            {article.title}
            <br></br>
          </li>
        </Link>
      )
    }*/

    try {
      const idKeys = Object.keys(ids);
      console.log('IDKEYS ARE ===>', idKeys);
      idKeys.forEach((id, index) => {
        if(index >= this.state.NUM_ARTICLE_CARDS)
          throw new Error('friendly exit')

        const article = ids[id];
        linkItems.push(
          <Link
            to={`/event/article/${id}/${article.title}`}
            className='article-title'
            key={parseInt(id)}>
            <li className='article-list-item'>
              {article.title}
              <br></br>
            </li>
          </Link>
        )
      })
    }
    catch (er) {
      console.log(er.message)
      if(er.message === 'friendly exit') {
        console.log('continue')
      }
      else {
        throw er;
      }
    }


    return linkItems;
  }

  render() {

    return (
      <div className='articlepanel-container'>
        <ul className='article-ul'>
          {/*needs to change when we have a correct path for the article-->*/}
          {
           this.createArticleCards()
          }
        </ul>
      </div>
    );
  }
}
