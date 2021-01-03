import React, { Component } from 'react';
import Map from '../components/Map';
import EventList from '../components/EventList';
import Sidebar from '../components/Sidebar'

import Header from '../components/Header/Header'

class DashBoard extends Component {
    render() {
        return (
            <div className='dashboard-container'>
              <Header />
            </div>
        )
    }

}

export default DashBoard;