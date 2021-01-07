import React, { Component } from 'react'
import UserContext from '../../context/UserContext'
import { Link } from 'react-router-dom'

export class CategoryList extends Component {
  static contextType = UserContext

  render() {
    const { categories = [] } = this.context
    return (
      <div className='categorylist-container'>
        <ul>
          {categories.map((category) =>
            <li key={parseInt(category.id)}>
              <Link to={`/event/category/${category.name}`}>
                {category.name}<br></br>{' '}
              </Link>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default CategoryList;
