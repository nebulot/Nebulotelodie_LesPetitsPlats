
//import { RecipeCard } from "./constructor/displayCards.js";
import {Tag} from "./utils/tags.js";
import { Alerts } from "./utils/alerts.js";
import { DropdownsBuilder } from "./utils/builderDropdown.js";
import {displayDropdown} from "./utils/displayDropdown.js";

//import arrayAlgorithme 
import { initRecipes } from "./utils/searchBar.js";
import { searchResultsRecipes } from "./utils/searchBar.js";
//import {searchResult} from "./utils/searchBar.js";

//console.log(recipes);

//5 DOM for "searchbar" and 8 "tags"
const dropdownsBar = document.querySelector(".btns-dropdown");
const tags = document.querySelector(".tags");

/*3 container card recipes
//display cards recipes
const recipesSection = document.querySelector(".receipe-container");
const displayCards = (recipes) => {
  recipes.forEach((recipe) => {
    //console.log(recipe); ok
    recipesSection.append(new RecipeCard(recipe).createRecipeCard);
    console.log(RecipeCard);
    //console.log(createRecipeCard); ok

  });
};*/

// 9 create an alert display under searchbar to success or danger research 
export const displayAlert = (count) => {
  const alerts = document.querySelector(".alerts");
  alerts.append(new Alerts(count).handleAlert());
  };


////////////////////////////////INIT////////////////////////////////
async function init() {
  
  /*const { recipes } = await getRecipes();
  displayCards(recipes);
  //console.log(recipes);   //=> search arrayalgo.js*/

  // return bts'dropdown
  const dropdownsValues = ['ingredients', 'appareils', 'ustensiles'];
    for (let type of dropdownsValues) {
        const dropdownsBtn = new DropdownsBuilder(type);
        dropdownsBtn.make().forEach(btn => dropdownsBar.append(btn));
        //console.log(dropdownsBtn); (type : "", color :"");
        //console.log(dropdownsBar); <div "btns-dropdown">
    }
    // console.log(dropdownsValues); results (3)[ingredients,appliances,ustensils]

// 8 alert tag searchbar 
const tag = new Tag('ingredients', 'lait de coco').make();
    tags.appendChild(tag);
    const tag2 = new Tag('appareils', 'four').make();
    tags.appendChild(tag2);
    const tag3 = new Tag ('ustensiles', 'fouet').make();
    tags.appendChild(tag3); 
};
init();



//5 searchbar arrayAlgo.js 
const search = document.querySelector(".input-group");
const searchBarInput = search.querySelector("#search-bar");
const submit = search.querySelector("#search-addon");
  
window.addEventListener('load', initRecipes);   //ask computer to querylength ?
searchBarInput.addEventListener('input', searchResultsRecipes);   //search function
search.addEventListener('submit', (e) => e.preventDefault());//


  // TAGS BTN 
  
  export function closeTags(e) {
    const tagsBtn = [...tags.querySelectorAll("button")];
    const [ container ] = tagsBtn.filter(btn => btn.contains(e.target));
    container.remove();
    //console.log(tagsBtn); ok
  }
  

  //DOM after initialized recipes card on the main 
  
  const ingredients = dropdownsBar.querySelectorAll(".ingredients");
  const appliances = dropdownsBar.querySelectorAll (".appliances");
  const ustensils= dropdownsBar.querySelector(".ustensils");
  const opened = dropdownsBar.querySelectorAll("#opened");
  const hidden = dropdownsBar.querySelectorAll("#hidden");
  const results = document.querySelector("receipe-container");

  //let searchResultsRecipes = [];
  // create submit.addEventListener('click', searchResultsRecipes); arrayAlgo searchBar.js
    

// btn dropdown and search in tag List "li"
hidden.forEach(btn => btn.addEventListener("click", displayDropdown()));
opened.forEach(btn => btn.querySelector("button").addEventListener("click", displayDropdown()));
//opened.forEach(btn => btn.querySelector("input").addEventListener("input", searchTags));


// RESULT CARD //
function displayCards() {
  for (let recipe of searchResult) {
      results.appendChild(recipe);
  }
}

