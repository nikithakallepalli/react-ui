import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from "../elements/header";
import Sidebar from "../elements/sidebar";
import Footer from "../elements/footer";

export default class Cuisines extends Component {
    render() {
        return (
            <div className="content-wrapper">
                <div className="content-header">
                    <section className="content">
                        <div className="container-fluid">
                            {/*<h2 className="text-center display-4">Search</h2>*/}
                            <div className="row">
                                <div className="col-md-12 pantry-ingredient-search">
                                    <form className="suggest-form desktop pantry-search">
                                        <div role="combobox" aria-haspopup="listbox" aria-owns="react-autowhatever-1" aria-expanded="false" className="ingredient-suggest-container">
                                            <input type="text" autoComplete="off" aria-autocomplete="list" aria-controls="react-autowhatever-1" className="ingredient-suggest-input p1-text" name="IngredientSuggestInput" placeholder="Enter your ingredients"/>
                                            <div id="react-autowhatever-1" role="listbox" className="suggestion-container">
                                                <div className="search-bubbles-section">
                                                    <div className="pantry-suggest-tooltip micro-text font-normal"></div>
                                                    <p className="micro-caps font-bold search-bubble-title greyscale-3">Suggested Ingredients</p>
                                                    <div className="search-bubbles has-gradient" id="pantry-suggested-ingredients">
                                                        <div className="suggested-ingredient floating button" data-name="egg" data-id="7f618abd-9024-4c59-865c-06909f41f5d1" data-imageurl="https://res.cloudinary.com/db3xqmyhn/image/upload/v1539898464/ings_img/eggs.jpg">
                                                                <span className="ingredient-content">
                                                                    <img alt="" src="https://res.cloudinary.com/db3xqmyhn/image/upload/w_24,c_scale/v1539898464/ings_img/eggs.jpg" className="ingredient-image" srcSet="https://res.cloudinary.com/db3xqmyhn/image/upload/w_48,c_scale/v1539898464/ings_img/eggs.jpg 2x" width="24" height="24"/>
                                                                    <span className="ingredient-name">egg</span>
                                                                </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <i className="fa fa-plus-circle" aria-hidden="true"></i>
                                        <i className="fa fa-times-circle" aria-hidden="true"></i>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}