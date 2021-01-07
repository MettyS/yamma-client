import React, { Component } from 'react'
import UserContext from '../../context/UserContext'
import './CategoryPage.css'
import { Link } from 'react-router-dom'

export default class CategoryPage extends Component{
    static defaultProps = {
        match: {
            params: {}
        }
    }

    static contextType = UserContext

    render(){
        const { categories=[] } = this.context
        const { name } = this.props.match.params
        const category = categories.find(cat => cat.name === name)
        const relatedArticles = category.related_articles.split(', ')      

        return(
            <div className="category-page">
                <h1>{category.name}</h1>
                <p>{category.content}</p>
                <br></br>
                
                <h3>Related Articles: </h3>
                <p>{relatedArticles.map((para, i) => 
                    <Link className="related-articles" key={i} to={`/event/article/${para}`}>{para}<br></br>{' '}
                    </Link>)}
                </p>
            </div>
        )
    }
}