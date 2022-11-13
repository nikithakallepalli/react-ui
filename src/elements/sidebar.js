import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from './../logo5.png';
export default class Sidebar extends Component {
    render() {
        return (
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                <a href="#" className="brand-link">
                    <img src={logo} alt={"logo"} className="brnd-logo"/>
                </a>

                <div className="sidebar">

                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

                            <li className="nav-item user-panel mt-3  d-flex">
                                <a href="/login" className="nav-link" style={{'width': '100px'}}>
                                    <p>Login</p>
                                </a>

                                <a href="/register" className="nav-link">
                                    <p>Register</p>
                                </a>
                            </li>

                            <li className="nav-item user-panel mt-3  d-flex">
                                <Link to={`/home`} className="nav-link">
                                     <p>Recipe Generator</p>
                                </Link>
                            </li>
                            <li className="nav-item user-panel mt-3  d-flex">
                                <Link to={`/top-recomended`} className="nav-link">
                                    <p>Top Recomended</p>
                                </Link>
                            </li>
                            <li className="nav-item user-panel mt-3  d-flex">
                                <Link to={`/veg-recipes`} className="nav-link">
                                    <p>Vegetarian Recipes</p>
                                </Link>
                            </li>
                            <li className="nav-item user-panel mt-3  d-flex">
                                <Link to={`/non-veg-recipes`} className="nav-link">
                                     <p>Non-Vegetarian Recipes</p>
                                </Link>
                            </li>
                            <li className="nav-item user-panel mt-3  d-flex">
                                <Link to={`/cuisines`} className="nav-link">
                                   <p>Cuisines</p>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <p>&nbsp;</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <p>&nbsp;</p>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
        )
    }
}