import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Sidebar extends Component {
    render() {
        return (
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                <a href="index3.html" className="brand-link">
                    <span className="brand-text font-weight-light font-weight-bold">Meal Generator Systems</span>
                </a>

                <div className="sidebar">

                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            <li className="nav-item user-panel mt-3 pb-3 mb-3 d-flex">
                                <Link to={`/home`} className="nav-link">
                                    <i className="nav-icon fas fa-th"></i> <p>Recipe Generator</p>
                                </Link>
                            </li>
                            <li className="nav-item user-panel mt-3 pb-3 mb-3 d-flex">
                                <Link to={`/top-recomended`} className="nav-link">
                                    <i className="nav-icon fas fa-copy"></i> <p>Top Recomended</p>
                                </Link>
                            </li>
                            <li className="nav-item user-panel mt-3 pb-3 mb-3 d-flex">
                                <Link to={`/veg-recipes`} className="nav-link">
                                    <i className="nav-icon fas fa-chart-pie"></i> <p>Vegetarian Recipes</p>
                                </Link>
                            </li>
                            <li className="nav-item user-panel mt-3 pb-3 mb-3 d-flex">
                                <Link to={`/non-veg-recipes`} className="nav-link">
                                    <i className="nav-icon fas fa-tree"></i> <p>Non-Vegetarian Recipes</p>
                                </Link>
                            </li>
                            <li className="nav-item user-panel mt-3 pb-3 mb-3 d-flex">
                                <Link to={`/cuisines`} className="nav-link">
                                    <i className="nav-icon fas fa-edit"></i> <p>Cuisines</p>
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