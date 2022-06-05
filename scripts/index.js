

import { getRecipes } from "./api.js";
import { RecipeCard } from "./constructor/displayCards.js";


//6 Keep data and create display filters

/*const dropdownFilters = (recipes) => {
  let ingredients = [];
  let appliance = [];
  let ustensils = [];*/
  

//open and close the three butons filter
console.log(getRecipes);

//3 container card recipes
//display cards recipes
const recipesSection = document.querySelector(".receipe-container");
export const displayCards = (recipes) => {
  recipes.forEach((recipe) => {
    recipesSection.append(new RecipeCard(recipe).recipeCard);
  });
};

// open and close 3 buttons filters 
let buttons = document.querySelectorAll(".btn");
let buttonValue;
buttons.forEach((btn) => {
  // OPEN CLOSE FILTER
  btn.addEventListener("click", () => {
    buttonValue = btn.getAttribute("value");
    // console.log(buttonValue, btn);
    openclosefilters.isFiltersInteractive(btn, buttonValue);
  });
});

const init = async () => {
  const { recipes } = await getRecipes();
  //dropdownFilters(recipes);
  displayCards(recipes);
  
};
init();
