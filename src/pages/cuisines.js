import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Cuisines extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cuisines: [
                {name: 'American', image: "https://x.yummlystatic.com/web/bubble/cuisine/american.png"},
                {name: 'African', image: "https://x.yummlystatic.com/web/bubble/cuisine/italian.png"},
                {name: 'Italian', image: "https://x.yummlystatic.com/web/bubble/cuisine/italian.png"},
                {name: 'Canadian', image: "https://x.yummlystatic.com/web/bubble/cuisine/southern.png"},
                {name: 'European', image: "https://x.yummlystatic.com/web/bubble/cuisine/spanish.png"},
                {name: 'Mexican', image: "https://x.yummlystatic.com/web/bubble/cuisine/mexican.png"},
                {name: 'Thai', image: "https://x.yummlystatic.com/web/bubble/cuisine/thai.png"},
                {name: 'Chinese', image: "https://x.yummlystatic.com/web/bubble/cuisine/chinese.png"},
                {name: 'Indian', image: "https://x.yummlystatic.com/web/bubble/cuisine/indian.png"},
                {name: 'French', image: "https://x.yummlystatic.com/web/bubble/cuisine/french.png"},
                {name: 'Greek', image: "https://x.yummlystatic.com/web/bubble/cuisine/greek.png"}
            ],
            isLoading: true
        };
    }

    handleViewCuisine = (value) => {
        console.log(value);
        localStorage.setItem("cuisineDetilsName", value.name);
    }

    render() {
        return (
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="pantry-recipe-grid RecipeGrid">
                        <section className="pantry-grid-header">
                            <h4 className="grid-title h4-text primary-dark font-bold">Cuisines</h4>
                        </section>
                        <div className="row">
                            {this.state.cuisines.map((cuisine, index) =>
                                <Link className="col-md-3 pd-b" key={`${index}-il`} href="#" onClick={() => this.handleViewCuisine(cuisine)} to={`/cuisine-details`}>
                                    <img className="cuisine-image" src={cuisine.image} alt={cuisine.name}/>
                                    <div className="centered">{cuisine.name}</div>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}