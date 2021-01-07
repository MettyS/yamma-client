import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../../context/UserContext'

export default class Article extends Component{
    static contextType = UserContext
    
    render(){
        return(
            <div>
                <Link to={`/article/${parseInt(this.props.id)}`}>
                    <h2>{this.props.title}</h2>
                </Link>
                <div>
                    <p>{this.props.content}</p>
                </div>
            </div>
        )
    }

}

