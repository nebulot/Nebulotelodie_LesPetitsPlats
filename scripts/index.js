///////////////////////5 DOM for "searchbar" and 8 "tags"/////////////////////////////
const dropdownsBar = document.querySelector(".btns-dropdown");
const tags = document.querySelector(".tags");



//////////// 9 create an alert display under searchbar to success or danger research //////
let globalRecipesList = recipes.slice();
console.log(recipes); //=> searchBar arrayalgo.js

// research array from all btns dropdownfilters
//=> function on click() check dropdownsBar.js
const initFilters = (recipes) => {
	let ingredients = [];
	let appareil = [];
	let ustensiles = [];
  //console.log(ingredients); ok []
  //console.log(appareil); ok []

recipes.forEach((recipe) => {
  ingredients = [
          // chercher un tri doublons, majuscules,...
    ...new Set([...ingredients, ...recipe.ingredients.map((i) => i.ingredient)])].sort();
  ustensiles = [...new Set([...ustensiles, ...recipe.ustensils.map((u) => u)])].sort();
  appareil = [...new Set([...appareil, ...[recipe.appliance]])].sort();
  //console.log(ingredients); ok {'coco' 'noix de coco' .....}/recette
  //console.log(appareil); ok {'four','blender '}/recette
});
return { ingredients, appareil, ustensiles };
}

////////////////////////////////INIT////////////////////////////////
//error stop async 
/*function init() {
7 dropdown => dropdown.js
8 tag searchbar => tags.js
const tag = new Tag('ingredients', 'lait de coco').make();
    tagsBox.appendChild(tag);
    const tag2 = new Tag('appareils', 'four').make();
    tagsBox.appendChild(tag2);
    const tag3 = new Tag ('ustensiles', 'fouet').make();
    tagsBox.appendChild(tag3); 
};
init();*/

///////////////////////    (5) SEARCHBAR  arrayAlgo.js  ////////////////////////////////
const main = document.querySelector(".main");
const search = document.querySelector(".input-group ");
const results = document.querySelector(".results .receipe-container");
const searchBarInput = search.querySelector("#search-bar");
const submit = search.querySelector("span");


//5 focus on searchbar and check all recipes : nodeList(50) Alert
//+>searchBar.js

//////////////////////     (7)   DROPDOWN ////////////////////////////
window.addEventListener('load', initRecipes);   //ask computer to querylength ?
searchBarInput.addEventListener('input', searchRecipes);   //searchBar.js function
search.addEventListener('submit', (e) => e.preventDefault()); 

////////////////////////// TAGS BTN ////////////////////////////////////
//global   
  

/////////////   RECIPE  RESULT CARD //////////////////////
// let searchResult => searchBar.js

function displayResults() {
  for (let recipe of searchResult) {
      results.appendChild(recipe);
      
  }
  // displayResults give the number results of the research on the search bar
};