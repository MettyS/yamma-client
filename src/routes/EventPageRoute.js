import React, { Component } from 'react';
import ArticlePanel from '../components/ArticlePanel';
import ChatPanel from '../components/ChatPanel';
import RelatedArticleList from '../components/RelatedArticleList';

import Header from '../components/Header/Header';

class EventPage extends Component {
    render() {
        return (
            <div className='eventpage-container'>
              <Header />
            </div>
        )
    }

}

export default EventPage;