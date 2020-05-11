import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <div className="container">
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <Link to="/" className="navbar-brand" href=""><b>Monitoring Tools</b></Link>
                    </div>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link"><b>Tools</b></Link>
                        </li>
                        <li className="nav-item">
                            <b className="nav-link">|</b>
                        </li>
                        <li className="nav-item">
                            <Link to="/ratings" className="nav-link"><b>Ratings</b></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header
