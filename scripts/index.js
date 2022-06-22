import { getRecipes } from "./api.js";
import { RecipeCard } from "./constructor/displayCards.js";
import { Alerts } from "./utils/alerts.js";
import { dropdownBuilder } from "./utils/builderDropdown.js";
import { dropdownFilters } from "./utils/filtersDropdown.js";


//console.log(RecipeCard);


/*export const addFilters = (recipes) => {
	let ingredient = [];
	let appliance = [];
	let ustensil = [];
	recipes.forEach((recipe) => {
		ingredient = [
			...new Set([...ingredient, ...recipe.ingredients.map((i) => i.ingredients)])].sort();
		ustensil = [...new Set([...ustensil, ...recipe.ustensils.map((u) => u)])].sort();
		appliance = [...new Set([...appliance, ...[recipe.appliances]])].sort();
	});
	return { ingredient, ustensil, appliance };
};*/

//3 container card recipes
//display cards recipes
const recipesSection = document.querySelector(".receipe-container");
const displayCards = (recipes) => {
  recipes.forEach((recipe) => {
    //console.log(recipe); ok
    recipesSection.append(new RecipeCard(recipe).createRecipeCard);
    console.log(RecipeCard);
    //console.log(createRecipeCard);

  });
};

// 8 create an alert display under searchbar to success or danger research 
export const displayAlert = (count) => {
  const alerts = document.querySelector(".alerts");
  alerts.append(new Alerts(count).handleAlert());
  }

const init = async () => {
  
  const { recipes } = await getRecipes();
  //recupere les listes dans recettes 
  //let lists = addFilters(recipes);  
  displayCards(recipes);
  console.log(recipes);
  // envoi tout au dropdown builder
  let dropdownBuild = new dropdownBuilder();
  let dropdownFilter = new dropdownFilters(recipes, []);
  
  //console.log(dropdownFilter);
  console.log(dropdownBuild);

 
};
init();






