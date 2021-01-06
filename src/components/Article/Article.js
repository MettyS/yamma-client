import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../../context/UserContext'

export default class Article extends Component{
    static contextType = UserContext
    
    render(){
        const { id, title, content } = this.props;
        console.log("this.props: ", this.props)
        return(
            <div>
                <Link to={`/article/${id}`}>
                    <h2>{title}</h2>
                </Link>
                <div>
                    <p>{content}</p>
                </div>
            </div>
        )
    }

}

