import React, { Component } from 'react'
import UserContext from '../../context/UserContext'
import './ArticlePage.css'

export default class ArticlePage extends Component{
    static contextType = UserContext
    
    render(){
        const { articles = [] } = this.context
        const { id } = this.props.match.params
        const article = articles.find(art => parseInt(art.id) === parseInt(id))

        return(
            <div className="article-page">
                <h1>{article.title}</h1>
                <p>{article.content}</p>


            </div>
        )
    }

}

