import React, { Component } from 'react'
import UserContext from '../../context/UserContext'
import './CategoryPage.css'

export default class CategoryPage extends Component{
    static contextType = UserContext

    render(){
        const { categories = [] } = this.context
        const { id } = this.props.match.params
        const category = categories.find(cat => parseInt(cat.id) === parseInt(id))

        console.log(category)

        return(
            <div className="category-page">
                <h1>{category.name}</h1>
                <p>{category.content}</p>
            </div>
        )
    }
}