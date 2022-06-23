import { getRecipes } from "./api.js";
import { RecipeCard } from "./constructor/displayCards.js";
import { Alerts } from "./utils/alerts.js";
import { dropdownBuilder } from "./utils/builderDropdown.js";
//import { dropdownFilters } from "./utils/filtersDropdown.js";

//console.log(recipes);

//DOM for "searchbar" and "tags"
const searchbar = document.querySelector(".input-group");
const tags = document.querySelector(".tags");

//3 container card recipes
//display cards recipes
const recipesSection = document.querySelector(".receipe-container");
const displayCards = (recipes) => {
  recipes.forEach((recipe) => {
    //console.log(recipe); ok
    recipesSection.append(new RecipeCard(recipe).createRecipeCard);
    console.log(RecipeCard);
    //console.log(createRecipeCard); ok

  });
};

const init = async () => {
  
  const { recipes } = await getRecipes();
  displayCards(recipes);
  console.log(recipes);
  // envoi tout au dropdown builder
  let dropdownBuild = new dropdownBuilder();
  //let dropdownFilter = new dropdownFilters(recipes, []);
  
  //console.log(dropdownFilter);
  console.log(dropdownBuild);

 
};
init();

// 8 create an alert display under searchbar to success or danger research 
export const displayAlert = (count) => {
  const alerts = document.querySelector(".alerts");
  alerts.append(new Alerts(count).handleAlert());
  }

  //DOM after initialized recipes card on the main 
  const ingredients = querySelectorall(".ingredients");
  const appliances = querySelector (".appliances");
  const ustensils= querySelector(".ustensils");
  const resultsReceipe = querySelector(".receipe-container");

  // TAGS BTN
  
function closeTags(e) {
  const tagsBtn = [...tags.querySelectorAll("button")];
  const [ container ] = tagsBtn.filter(btn => btn.contains(e.target));
  container.remove();
}





