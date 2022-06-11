import { getRecipes } from "./api.js";
import { RecipeCard } from "./constructor/displayCards.js";
import {filteredCards} from "./utils/searchBar.js";
import { Alerts } from "./utils/alerts.js";
//console.log(RecipeCard);



//3 container card recipes
//display cards recipes
const recipesSection = document.querySelector(".receipe-container");
const displayCards = (recipes) => {
  recipes.forEach((recipe) => {
    recipesSection.append(new RecipeCard(recipe).createRecipeCard);
  });
};
console.log(recipesSection);
console.log(RecipeCard);
console.log(displayCards);


//5 focus on searchbar and check all recipes : nodeList(50)
export const searchBarInput = document.querySelector(".search-bar");
searchBarInput.addEventListener("keyup", (e) => {
  const searchRecipes = e.target.value;
  const cards = document.querySelectorAll(".card");
  filteredCards(searchRecipes, cards);
  console.log(searchRecipes);
});

//6 focus alert and put, change or remove research
const alerts = document.querySelector(".alerts");
const displayAlert = (recipes) => {
  recipes.forEach((recipe) => {
    alerts.append(new Alerts(recipe).handleAlert());
  });
}


//7 Keep data and create display filters 
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
  displayAlert(recipes);
  
  
  console.log(recipes);
  
  
  
};
init();






