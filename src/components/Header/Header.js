import React, { Component } from 'react';
import { Link, Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import './Header.css';
import YammaLogo from '../../images/YammaLogo.png';
import TokenService from '../../services/token-service';
import AboutUs from './AboutUs'
import Important from './Important'
import ContactUs from './ContactUs'

class Header extends Component {
    handleLogoutClick = () => {
        TokenService.clearAuthToken();
    };

    renderLogoutLink() {
        return (
            <div>
                <span className='user_name'>Hi, {this.context.user.name}</span>
                <nav>
                    <Link onClick={this.handleLogoutClick} to='/login'>
                        Logout
          </Link>
                </nav>
            </div>
        );
    }

    renderLoginLink() {
        return (
            <nav>
                <Link to='/login'>Login</Link>
                {' '}<br></br>
                <Link to='/register'>Sign up</Link>
            </nav>
        )
    }

    renderIntroLink() {
        return (
            <Router>
                <div>
                <ul className="home-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to='/aboutus'>About us</Link></li>
                    <li className='bars'>|</li>
                    <li><Link to='/important'>Important Notice</Link></li>
                    <li className='bars'>|</li>
                    <li><Link to='/contactus'>Contact Us</Link></li>
                </ul>
                </div>

                <Switch>
                    <Route path="/aboutus">
                        <AboutUs />
                    </Route>
                    <Route path="/important">
                        <Important />
                    </Route>
                    <Route path="/contactus">
                        <ContactUs />
                    </Route>
                </Switch>
            </Router>
            
        )
    }

    render() {
        return (
            <header className="header">
                <div>
                    <Link to='/' className="title">
                        <img className="logo" src={YammaLogo} alt="Yamma-Logo" />
                        <h1>Yamma</h1>
                    </Link>
                </div>

                <div>{this.renderIntroLink()}</div>

                <div>
                    {TokenService.hasAuthToken()
                        ? this.renderLogoutLink()
                        : this.renderLoginLink()}
                </div>
            </header>
        );
    }
}

export default Header;
