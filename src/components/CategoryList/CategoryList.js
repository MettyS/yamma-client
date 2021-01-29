import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import yammawest from '../../images/yammawest.jpg';
import yammamidwest from '../../images/yammamidwest.jpg';
import yammasouth from '../../images/yammasouth.jpg';
import yammaeast from '../../images/yammaeast.jpg';
import politicsicon from '../../images/politicsicon.png';
import businessicon from '../../images/businessicon.png';
import healthicon from '../../images/healthicon.png';
import techicon from '../../images/techicon.png';

export class CategoryList extends Component {
  render() {
    return (
      <div className='categorylist-container'>
        <hr></hr>

        <ul className='subregion-ul'>
          <li className='subregion-item'>
            <Link to='/event/category/US_West' className='subregion-title'>
              <img
                src={yammawest}
                width='80px'
                height='80px'
                className='subregion-img'
                alt='west-category-image'
              />
              West
            </Link>
          </li>
          <li className='subregion-item'>
            <Link to='/event/category/US_Midwest' className='subregion-title'>
              <img
                src={yammamidwest}
                width='80px'
                height='80px'
                className='subregion-img'
                alt='midwest-category-image'
              />
              Midwest
            </Link>
          </li>
          <li className='subregion-item'>
            <Link to='/event/category/US_South' className='subregion-title'>
              <img
                src={yammasouth}
                width='80px'
                height='80px'
                className='subregion-img'
                alt='south-category-image'
              />
              South
            </Link>
          </li>
          <li className='subregion-item'>
            <Link to='/event/category/US_Northeast' className='subregion-title'>
              <img
                src={yammaeast}
                width='80px'
                height='80px'
                className='subregion-img'
                alt='east-category-image'
              />
              East
            </Link>
          </li>
        </ul>

        <hr></hr>

        <ul className='category-ul'>
          <li className='category-item'>
            <Link to='/event/category/Politics' className='category-title'>
              Politics
              <img
                src={politicsicon}
                width='80px'
                height='80px'
                className='category-img'
                alt='politics-category-image'
              />
            </Link>
          </li>
          <li className='category-item'>
            <Link to='/event/category/Business' className='category-title'>
              Business
              <img
                src={businessicon}
                width='80px'
                height='80px'
                className='category-img'
                alt='business-category-image'
              />
            </Link>
          </li>
          <li className='category-item'>
            <Link to='/event/category/Health' className='category-title'>
              Health
              <img
                src={healthicon}
                width='80px'
                height='80px'
                className='category-img'
                alt='health-category-image'
              />
            </Link>
          </li>
          <li className='category-item'>
            <Link to='/event/category/Technology' className='category-title'>
              Tech
              <img
                src={techicon}
                width='80px'
                height='80px'
                className='category-img'
                alt='tech-category-image'
              />
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default CategoryList;
