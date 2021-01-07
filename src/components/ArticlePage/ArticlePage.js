import React, { Component } from 'react'
import UserContext from '../../context/UserContext'
import './ArticlePage.css'
import { Link } from 'react-router-dom'
import ChatPage from '../ChatPage/ChatPage'

export default class ArticlePage extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }

    static contextType = UserContext

    render() {
        const { articles = [] } = this.context
        const { title } = this.props.match.params
        const article = articles.find(art => art.title === title)
        const relatedRegion = article.region.split(', ')
        const relatedType = article.type.split(', ')


        return (
            <div>
                <div className="article-page">
                    <h1>{article.title}</h1>
                    <p>Region: {article.region}</p>
                    <p>Category: {article.type}</p>
                    <p>{article.content}</p>

                    <br></br>
                    <h3>Related Articles: </h3>
                    <h4>Region: </h4>
                    <p>{relatedRegion.map((para, i) => <Link className="related-region" key={i} to={`/event/category/${para}`}>{para}<br></br>{' '}</Link>)}</p>
                    <h4>Type: </h4>
                    <p>{relatedType.map((para, i) => <Link className="related-type" key={i} to={`/event/category/${para}`}>{para}<br></br>{' '}</Link>)}</p>
                </div>

                <div className="chat-page">
                    <ChatPage />
                </div>
            </div>
        )
    }

}

