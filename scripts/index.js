import { getRecipes } from "./api.js";
import { RecipeCard } from "./constructor/displayCards.js";
import {filteredCards} from "./utils/searchBar.js";
import { Alerts } from "./utils/alerts.js";



//console.log(RecipeCard);
//7 Keep data and create display filters 






/*export const dropdownFilters = (recipes) => {
	let ingredients = [];
	let appliances = [];
	let ustensils = [];
	recipes.forEach((recipe) => {
		ingredients = [
			...new Set([...ingredients, ...recipe.ingredients.map((i) => i.ingredient)])].sort();
		ustensils = [...new Set([...ustensils, ...recipe.ustensils.map((u) => u)])].sort();
		appliances = [...new Set([...appliances, ...[recipe.appliances]])].sort();
	});
	return { ingredients, ustensils, appliances };
};
console.log(dropdownFilters)*/


//3 container card recipes
//display cards recipes
const recipesSection = document.querySelector(".receipe-container");
const displayCards = (recipes) => {
  recipes.forEach((recipe) => {
    recipesSection.append(new RecipeCard(recipe).createRecipeCard);
  });
};

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

const init = async () => {
  
  const { recipes } = await getRecipes();
  //dropdownFilters(recipes);
  
  displayCards(recipes);
  displayAlert(recipes);
  console.log(recipes);
 
};
init();






