//3 container card recipes

import { getRecipes } from "./api.js";
import { RecipeCard } from "./constructor/displayCards.js";

//6 Keep data and create display filters

/*const dropdownFilters = (recipes) => {
  let ingredients = [];
  let appliance = [];
  let ustensils = [];*/
  

//open and close the three butons filter
console.log(getRecipes);

//display cards recipes
const recipesSection = document.querySelector(".receipe-container");
const displayCards = (recipes) => {
  recipes.forEach((recipe) => {
    recipesSection.append(new RecipeCard(recipe).recipeCard);
  });
};

const init = async () => {
  const { recipes } = await getRecipes();
  //dropdownFilters(recipes);
  displayCards(recipes);
};
init();
