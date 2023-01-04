import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                        <Link className='navbar-brand' to="/">Employee Management App</Link>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className='nav-link' to="/add-employee">Add new employee</Link>
                                </li>    
                            </ul>
                            </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;