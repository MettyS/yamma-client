import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import AboutUs from './AboutUs'
import Important from './Important'
import ContactUs from './ContactUs'
import Button from '../components/Button/Button'

class IntroForm extends Component {
    state = { error: null }

    handleIntroSelect = event => {
        event.preventDefault()
    }

    renderInterLinks() {
        return(
            <Switch>
                <Route path="/aboutus" component={AboutUs} />
                <Route path="/important" component={Important} />
                <Route path="/contactus" component={ContactUs} />
            </Switch>
        )
    }

    render(){
        return(
            <div>
                <Button type='click'>
                    {this.renderIntroLinks()}
                </Button>
            </div>
        )
    }
} 

export default IntroForm