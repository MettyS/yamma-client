import React, { Component } from 'react'
import UserContext from '../../context/UserContext'
import { Link } from 'react-router-dom'

export class CategoryList extends Component {
  static contextType = UserContext

  render() {
    const { categories = []} = this.context
    return (
      <div className='categorylist-container'>
        <ul>
            {categories.map((category) => 
            <Link key={category.id} to={`/event/category/${category.name}/${parseInt(category.id)}`}>
            <li key={category.id}>
              {category.name}<br></br>{' '}
            </li>
            </Link>
            )}
        </ul>
      </div>
    )
  }
}

export default CategoryList;
