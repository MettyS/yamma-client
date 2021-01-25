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
          <Link to='/event/category/US_West' className='subregion-title'>
            <li className='subregion-item'>
              <img
                src={yammawest}
                width='80px'
                height='80px'
                className='subregion-img'
                alt='west'
              />
              West
            </li>
          </Link>
          <Link to='/event/category/US_Midwest' className='subregion-title'>
            <li className='subregion-item'>
              <img
                src={yammamidwest}
                width='80px'
                height='80px'
                className='subregion-img'
                alt='midwest'
              />
              Midwest
            </li>
          </Link>
          <Link to='/event/category/US_South' className='subregion-title'>
            <li className='subregion-item'>
              <img
                src={yammasouth}
                width='80px'
                height='80px'
                className='subregion-img'
                alt='south'
              />
              South
            </li>
          </Link>
          <Link to='/event/category/US_Northeast' className='subregion-title'>
            <li className='subregion-item'>
              <img
                src={yammaeast}
                width='80px'
                height='80px'
                className='subregion-img'
                alt='east'
              />
              East
            </li>
          </Link>
        </ul>

        <hr></hr>

        <ul className='category-ul'>
          <Link to='/event/category/Politics' className='category-title'>
            <li className='category-item'>
              Politics
              <img
                src={politicsicon}
                width='80px'
                height='80px'
                className='category-img'
                alt='politics'
              />
            </li>
          </Link>
          <Link to='/event/category/Business' className='category-title'>
            <li className='category-item'>
              Business
              <img
                src={businessicon}
                width='80px'
                height='80px'
                className='category-img'
                alt='business'
              />
            </li>
          </Link>
          <Link to='/event/category/Health' className='category-title'>
            <li className='category-item'>
              Health
              <img
                src={healthicon}
                width='80px'
                height='80px'
                className='category-img'
                alt='health'
              />
            </li>
          </Link>
          <Link to='/event/category/Technology' className='category-title'>
            <li className='category-item'>
              Tech
              <img
                src={techicon}
                width='80px'
                height='80px'
                className='category-img'
                alt='tech'
              />
            </li>
          </Link>
        </ul>
      </div>
    );
  }
}

export default CategoryList;
