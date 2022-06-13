import { getRecipes } from "./api.js";
import { RecipeCard } from "./constructor/displayCards.js";
import {filteredCards} from "./utils/searchBar.js";
import { Alerts } from "./utils/alerts.js";

//console.log(RecipeCard);
//7 Keep data and create display filters 



// 8 button filters open and close
// open and close 3 buttons filters 

/*let buttons = document.querySelectorAll(".btn");
let buttonValue;
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttonValue = btn.getAttribute("value");
    // console.log(buttonValue, btn);
    openclosefilters.isFiltersInteractive(btn, buttonValue);
  });
});*/

//3 container card recipes
//display cards recipes
const recipesSection = document.querySelector(".receipe-container");
const displayCards = (recipes) => {
  recipes.forEach((recipe) => {
    //console.log(recipe); ok
    recipesSection.append(new RecipeCard(recipe).createRecipeCard);
  });
};

//5 focus on searchbar and check all recipes : nodeList(50)
export const searchBarInput = document.querySelector(".search-bar");
searchBarInput.addEventListener("keyup", (e) => {
  const searchRecipes = e.target.value;
  const cards = document.querySelectorAll(".card");
  let count = filteredCards(searchRecipes, cards);
  displayAlert(count);
  console.log(searchRecipes);
});

//6 focus alert and put, change or remove research

const displayAlert = (count) => {
  const alerts = document.querySelector(".alerts");
  alerts.append(new Alerts(count).handleAlert());
  }

const init = async () => {
  
  const { recipes } = await getRecipes();
  //dropdownFilters(recipes);
  displayCards(recipes);
  console.log(recipes);
 
};
init();






