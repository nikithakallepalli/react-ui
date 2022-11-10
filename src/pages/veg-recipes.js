import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Rating from "react-rating";
import axios from "axios";


export default class TopRecomended extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            popularRecipes: [],
        };
    }

    componentDidMount() {
        const url = 'http://127.0.0.1:5000/api/recipes/popular';
        axios.get(url)
            .then(response => {
                const data = response.data;
                this.setState({popularRecipes: data.recipes.slice(0, 4)});
                this.setState({isLoading: false});
            })
            .catch(error => {
                this.setState({toDashboard: true});
                console.log(error);
            });
    }

    render() {
        const isLoading = this.state.isLoading;
        return (
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="pantry-recipe-grid RecipeGrid">
                        <section className="pantry-grid-header">
                            <h4 className="grid-title h4-text primary-dark font-bold">Top Recomended Recipes</h4>
                        </section>
                        {isLoading ? (
                            <img src="https://flevix.com/wp-content/uploads/2021/08/Preloader.gif" alt=""/>
                        ) : (
                            <div>
                                <section className="flex-row card-list">
                                    {this.state.popularRecipes.map((recipe, index) =>
                                            <div className="recipe-card ingredients-hover single-recipe visible GuidedRecipe YummlyOriginal" data-url="5-Ingredient-Sugar-Cookies-2376884" role="link" id="05-Ingredient-Sugar-Cookies-2376884">
                                    <span className="paywall-action-text justification-flag font-bold background-light micro-text">
                                    <span className="icon locked  y-icon" data-icon=""></span>
                                    <span className="text ">Original</span></span>
                                                <div className="recipe-card-img-wrapper">
                                                    <img alt="5-Ingredient Sugar Cookies Recipe" src="https://i0.wp.com/worldfoodtour.co.uk/wp-content/uploads/2013/06/neptune-placeholder-48.jpg" className="recipe-card-img placeholder" data-pin-description="5-Ingredient Sugar Cookies with Granulated Sugar, Salted Butter, Granulated Sugar, Large Eggs, All-Purpose Flour, Baking Soda." width="220" height="220"/>
                                                    <img alt="5-Ingredient Sugar Cookies Recipe" src="https://i0.wp.com/worldfoodtour.co.uk/wp-content/uploads/2013/06/neptune-placeholder-48.jpg" className="recipe-card-img full" data-pin-description="5-Ingredient Sugar Cookies with Granulated Sugar, Salted Butter, Granulated Sugar, Large Eggs, All-Purpose Flour, Baking Soda." width="220" height="220"/>
                                                    <a className="card-ingredients font-light micro-text flex-column" tabIndex="-1" title="5-Ingredient Sugar Cookies" aria-label="5-Ingredient Sugar Cookies" href="#">
                                                        <span title="baking soda, granulated sugar, salted butter, all-purpose flour, large eggs, granulated sugar">baking soda, granulated sugar, salted butter, all-purpose flour and 2 more</span></a></div>
                                                <Link className="link-overlay" tabIndex="-1" title={recipe.title} aria-label={recipe.title} onClick={() => this.handleViewRecipe(recipe)} to={`/recipe-details`}></Link>
                                                <div className="card-info-wrapper flex-row">
                                                    <div className="card-info primary-dark">
                                                        <a className="card-title two-line-truncate p2-text font-normal text-capitalize" title={recipe.title} aria-label={recipe.title} href="#">{recipe.title}</a>
                                                        <a className="review-stars micro-text" tabIndex="-1" title="Rated 4.17 Out of 5 by Yummly Users" aria-label="Rated 4.17 Out of 5 by Yummly Users" href="#">
                                                            <Rating
                                                                placeholderRating={recipe.rating}
                                                                emptySymbol={<img src="http://dreyescat.github.io/react-rating/assets/images/star-grey.png" className="icon"/>}
                                                                placeholderSymbol={<img src="http://dreyescat.github.io/react-rating/assets/images/star-red.png" className="icon"/>}
                                                                fullSymbol={<img src="http://dreyescat.github.io/react-rating/assets/images/star-yellow.png" className="icon"/>}
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="card-action no-padding type-add primary-teal">
                                                        <i className="fa fa-plus-circle font" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                            </div>
                                    )}
                                </section>
                                <section className="spinner-section">
                                    <div className="spinner light"><img alt="" src="https://x.yummlystatic.com/web/1x1.png" loading="lazy" width="200" height="200"/></div>
                                </section>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}