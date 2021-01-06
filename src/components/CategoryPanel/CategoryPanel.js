import React, { Component } from 'react'
import UserContext from '../../context/UserContext'
import Button from '../Button/Button'

export class CategoryList extends Component {
  static contextType = UserContext

  render() {
    const {categories = []} = this.context
    console.log("categories: ", categories)
    return (
      <div className='categorylist-container'>
        <ul>
          <Button>
            {categories.map((category) => 
            <li key={category.id}>
              {category.name}
            </li>)}
          </Button>
        </ul>
      </div>
    )
  }
}

export default CategoryList;
