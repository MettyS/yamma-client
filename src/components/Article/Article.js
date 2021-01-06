import React from 'react'
import { Link } from 'react-router-dom'

export default function Article(props) {
  
        return(
            <div>
                <Link to={`/article/${props.id}`}>
                    <h2>{props.title}</h2>
                </Link>
                <div>
                    <p>{props.content}</p>
                </div>
            </div>
        )
}

