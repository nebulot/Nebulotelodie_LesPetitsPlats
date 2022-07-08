///////////////////////5 DOM for "searchbar" and 8 "tags"/////////////////////////////
const dropdownsBar = document.querySelector(".btns-dropdown");
const tags = document.querySelector(".tags");

//////////// 9 create an alert display under searchbar to success or danger research //////
let globalRecipesList = recipes.slice();
console.log(recipes);

////////////////////////////////INIT////////////////////////////////
//error stop async 
function init() {
  
  //console.log(recipes);   //=> search arrayalgo.js*/
 
// 8 alert tag searchbar 
const tag = new Tag('ingredients', 'lait de coco').make();
    tags.appendChild(tag);
    const tag2 = new Tag('appareils', 'four').make();
    tags.appendChild(tag2);
    const tag3 = new Tag ('ustensiles', 'fouet').make();
    tags.appendChild(tag3); 
};
init();

///////////////////////    (5) SEARCHBAR  arrayAlgo.js  ////////////////////////////////
const search = document.querySelector("form .input-group ");
const results = document.querySelector("main .receipe-container");

const searchBarInput = search.querySelector("#search-bar");
const submit = search.querySelector("span");



//5 focus on searchbar and check all recipes : nodeList(50) Alert
searchBarInput.addEventListener("keyup", (e) => {
  //const searchRecipes = e.target.value;
//8 alert display 
  const alerts = document.querySelector(".alerts");
  alerts.append(new Alerts().handleAlert);
  console.log(alerts);
  const cards = document.querySelectorAll(".card");
  //let count = filteredCards(searchRecipes, cards);
  //displayAlert(count);
  console.log(searchRecipes);
  
});




//////////////////////     (7)   DROPDOWN ////////////////////////////
const appareils = dropdownsBar.querySelectorAll(".ingredients");
const ustensils = dropdownsBar.querySelectorAll(".ustensiles");
const appliances = dropdownsBar.querySelectorAll(".appareils");

window.addEventListener('load', initRecipes);   //ask computer to querylength ?
searchBarInput.addEventListener('input', searchRecipes);   //searchBar.js function
search.addEventListener('submit', (e) => e.preventDefault()); 

////////////////////////// TAGS BTN ////////////////////////////////////
//global 
  function closeTags(e) {
    const tagsBtn = [...tags.querySelectorAll("button")];
    const [container] = tagsBtn.filter(btn => btn.contains(e.target));
    container.remove();
    //console.log(tagsBtn); ok
  } 

/////////////////////////////// event DROPDOWN global ////////////////////////////////
const dropdown = document.querySelector(".dropdown");
const blocLinks = document.querySelector(".bloc-links");
const btnDrop = document.querySelector(".btn-top");
const liItems = document.querySelectorAll(".dropdown li");

btnDrop.addEventListener("click", toggleDropDown);
let toggleIndex = [];

function toggleDropDown() {
  if (!toggleIndex) {
    blocLinks.style.height = `${blocLinks.scrollHeight}px`;
    toggleIndex = true;
    return;
  }
  blocLinks.style.height = 0;
  toggleIndex = false;
}
liItems.forEach((li) => li.addEventListener("click", toggleDropDown));

/////////////   RECIPE  RESULT CARD //////////////////////
// let searchResult => searchBar.js

function displayResults() {
  for (let recipe of searchResult) {
      results.appendChild(recipe);
  }
  // displayResults give the number results of the research on the search bar
}
