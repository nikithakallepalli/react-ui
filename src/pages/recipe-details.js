import React, {Component} from 'react';
import axios from "axios";
import Rating from "react-rating";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

export default class RecipeDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            recipeDetils: {ingredients: []},
            ingredients: [],
            recipe_tags: [],
            directions: [],
        };
    }

    handleRating = (value) => {
        console.log(value)
        this.setState({isLoading: true});
        const url = 'http://127.0.0.1:5000/api/recipes/rating';
        const data = this.state.recipeDetils;
        data.user_rating = value;
        const bodyFormData = {data}
        console.log(bodyFormData)
        this.state.recipeDetils.rating = value
        toast.success("Your rating Updated!")
        // axios.post(url, bodyFormData)
        //     .then(result => {
        //         console.info(result)
        //         if (result.data.message === "Updated rating successfully") {
        //             toast("Wow so easy!")
        //         }
        //     })
        //     .catch(error => {
        //         console.log(error);
        //         this.setState({authError: true, isLoading: false});
        //     });
    }

    componentDidMount() {
        const url = 'http://127.0.0.1:5000/api/recipes/cuisine';
        const reqBody = {recipe_id: localStorage.getItem('detilsId')}
        axios.post(url, reqBody)
            .then(response => {
                const data = response.data;
                data.ingredientsCount = data.ingredients.length;
                this.setState({recipeDetils: data, ingredients: data.ingredients.splice(0, 4), recipe_tags: data.recipe_tags, directions: data.directions});
            })
            .catch(error => {
                this.setState({toDashboard: true});
                console.log(error);
            });
    }

    render() {

        return (
            <div className="content-wrapper">
                <ToastContainer/>
                <div className="app-content">
                    <div className="recipe recipe-access-type-free p3-text background-light">
                        <div className="breadcrumbs-wrapper wrapper"></div>
                        <div className="recipe-summary wrapper">
                            <div className="recipe-details">
                                <div className="primary-info-text">
                                    <div className="primary-info-left-wrapper">
                                        <h1 className="recipe-title font-bold h2-text primary-dark">{this.state.recipeDetils.title}</h1>
                                        <span className="attribution">
                                            <a className="source-link font-bold micro-text greyscale-3" title="BETTY CROCKER" aria-label="BETTY CROCKER" href="/page/betty-crocker">BETTY CROCKER</a>
                                        </span>
                                        <a href="#reviews" className="recipe-details-rating p2-text primary-orange" title="See Reviews" aria-label="See Reviews">
                                            <Rating
                                                onChange={(rate) => this.handleRating(rate)}
                                                placeholderRating={this.state.recipeDetils.rating}
                                                emptySymbol={<img src="http://dreyescat.github.io/react-rating/assets/images/star-grey.png" className="icon"/>}
                                                placeholderSymbol={<img src="http://dreyescat.github.io/react-rating/assets/images/star-red.png" className="icon"/>}
                                                fullSymbol={<img src="http://dreyescat.github.io/react-rating/assets/images/star-red.png" className="icon"/>}
                                            />
                                            <span className="count font-bold micro-text">(17)</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="review-snippet media">
                                    <div className="review-content font-normal p2-text">
                                        <a className="reviewer-name font-bold" aria-label="Shivonne Obrien" href="#"></a>
                                        <a href="#">{this.state.recipeDetils.description}</a>
                                    </div>
                                </div>
                                <div className="summary-item-wrapper">
                                    <div className="recipe-summary-item  h2-text"><span className="value font-light h2-text">{this.state.recipeDetils.ingredientsCount}</span><span className="unit font-normal p3-text">Ingredients</span></div>
                                    <div className="recipe-summary-item unit h2-text"><span className="value font-light h2-text">{this.state.recipeDetils.mins}</span><span className="unit font-normal p3-text">Minutes</span></div>
                                    <div className="recipe-summary-item nutrition h2-text"><span className="value font-light h2-text">500</span><span className="unit font-normal p3-text">Calories</span></div>
                                </div>
                            </div>
                            <div className="recipe-details-image">
                                <img alt="Vanilla Buttercream Frosting" src="https://i0.wp.com/worldfoodtour.co.uk/wp-content/uploads/2013/06/neptune-placeholder-48.jpg" className="recipe-image" data-pin-url="https://www.yummly.com/recipe/Vanilla-Buttercream-Frosting-2052255" data-pin-description="Vanilla Buttercream Frosting with Powdered Sugar, Butter, Vanilla, Milk." width="640" height="640"/>
                            </div>
                        </div>
                        <div className="recipe-horizontal-rule greyscale-4">
                            <hr/>
                        </div>

                        <div className="recipe-wrapper wrapper">
                            <div className="recipe-info wrapper">
                                <div className="recipe-ingredients wrapper">
                                    <div className="ingredients-header exp-default" id="ingredients"><h3 className="ingrs-header-title title h4-text primary-dark">Ingredients</h3>
                                        <div className="flex-expander"></div>
                                        <div className="unit-serving-wrapper">
                                            <div className="units units-imperial"><span className="first font-bold micro-caps" data-units="IMPERIAL">US</span><span className="separator micro-caps greyscale-3">|</span><span className="last font-bold micro-caps" data-units="METRIC">METRIC</span></div>
                                            <div className="flex-expander"></div>
                                            <div className="servings micro-caps font-bold"><span className="greyscale-1">4 SERVINGS</span></div>
                                        </div>
                                    </div>
                                    <div className="shopping-list-ingredients">
                                        {this.state.ingredients.map((ingredient, index) =>
                                            <div className="add-ingredient show-add">
                                                <div className="card-action no-padding type-add ">
                                                    <i className="fa fa-plus-circle add-ingredients" aria-hidden="true"></i>
                                                </div>
                                                <li className="IngredientLine text-capitalize">
                                                    <span className="ingredient">{ingredient}</span>
                                                </li>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="recipe-horizontal-rule greyscale-4">
                            <hr/>
                        </div>
                        <div className="wrapper tags-wrapper"><h3 className="title h4-text primary-dark">Recipe Tags</h3>
                            <ul className="recipe-tags">
                                {this.state.recipe_tags.map((tags, index) =>
                                    <li className="recipe-tag micro-text font-bold" title="Course: Desserts">
                                        <a className="tag-link primary-teal" title="Desserts" aria-label="Desserts" href="#">{tags}</a>
                                    </li>
                                )}
                            </ul>
                        </div>

                        <div className="recipe-horizontal-rule greyscale-4">
                            <hr/>
                        </div>

                        <div className="wrapper tags-wrapper"><h3 className="title h4-text primary-dark">Directions</h3>
                            <div className="shopping-list-ingredients">
                                {this.state.directions.map((direction, index) =>
                                    <div className="add-ingredient show-add">
                                        <div className="card-action no-padding type-add ptr">
                                            <div className="numberCircle ">{index + 1}</div>
                                        </div>
                                        <li className="IngredientLine text-capitalize">
                                            <span className="ingredient">{direction}</span>
                                        </li>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="footer"></div>
                    </div>
                </div>
            </div>
        )
    }
}