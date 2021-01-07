import React, { Component } from 'react'
import UserContext from '../../context/UserContext'

export default class ArticlePage extends Component{
    static contextType = UserContext
    
    render(){
        console.log("is this passing")
        const { article = [] } = this.context
        console.log(article)
        return(
            <div>
                <h2>{article.title}</h2>
                <p>{article.content}</p>
            </div>
        )
    }

}

