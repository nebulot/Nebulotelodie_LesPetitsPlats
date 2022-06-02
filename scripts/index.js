//3 container card recipes

import { getRecipes } from "./api.js";
import { RecipeCard } from "./constructor/displayCards.js";

//Keep data and create display

const dropdownFilters = (recipes) => {
  let ingredients = [];
  let apparatus = [];
  let ustensils = [];
  recipes.forEach((recipe) => {
    ingredients = [
      ...new Set([
        ...ingredients,
        ...recipe.ingredients.map((i) => i.ingredient),
      ]),
    ].sort();
    ustensils = [
      ...new Set([...ustensils, ...recipe.ustensils.map((u) => u)]),
    ].sort();
    apparatus = [...new Set([...apparatus, ...[recipe.appliance]])].sort();
  });
  return { ingredients, ustensils, apparatus };
};

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
  dropdownFilters(recipes);
  displayCards(recipes);
};
init();
