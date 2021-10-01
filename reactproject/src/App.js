import './App.css';
import React from "react";

export default class App extends React.Component {
  //creation of our recipe list
  state = {
    recipes: [
      "Pizza Pie",
      "Steak",
      "Apple Pie",
      "Chocolate Ice Cream",
      "Cheese Sticks",
      "Chicken",
      "Waffles",
      "Cheese Cake",
      "Vanilla Cake",
      "Cheese Burger"
    ],
    searchTerm: "P"
  };


  render() {

    let matchedRecipes = this.state.recipes.filter((recipe) => {
      return recipe.toLocaleUpperCase().includes(this.state.searchTerm.toLocaleUpperCase());
    })

    //pre create list of repices using map looping
    let recipesList = matchedRecipes.map((recipe) => {
      return <li>{recipe}</li>;
    });

    //display premade list
    return (
      <div>
        <h2>Recipes</h2>
        <input value={this.state.searchTerm} onChange={(event) => {
          this.updateSearch(event);
        }}
        />
        <ul>{recipesList}</ul>
      </div>
    );
  }
  updateSearch(event) {
    this.setState({ searchTerm: event.target.value });
  }
}