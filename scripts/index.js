

import { getRecipes } from "./api.js";
import { RecipeCard } from "./constructor/displayCards.js";



//6 Keep data and create display filters

/*const dropdownFilters = (recipes) => {
  let ingredients = [];
  let appliance = [];
  let ustensils = [];*/
  

//open and close the three butons filter
console.log(getRecipes);
console.log(RecipeCard);

//3 container card recipes
//display cards recipes
const recipesSection = document.querySelector(".receipe-container");
export const displayCards = (recipes) => {
  recipes.forEach((recipe) => {
    recipesSection.append(new RecipeCard(recipe).createRecipeCard);
  });
};
console.log(displayCards);


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


//5 bis Get ustensils / appliance / ingredients (without the duplicate)
/*const allAppliances = [];
for (let i=0; i<recipes.length; i++){
  let appliances = recipes[i].appliance;
  allAppliances.push(appliances);
}
const appliancesNoDuplicate = new Set(allAppliances);
const appliancesFilterArray = Array.from(appliancesNoDuplicate);

const allUstensils = [];
for (let i=0; i<recipes.length; i++){
  let ustensils = recipes[i].ustensils;
  allUstensils.push(ustensils);
}
// but lowercase and uppercase (coco / Coco research x2 = > no duplicate, use toLowerCase); 
const allUstensilsJoin = allUstensils.flat();
const lowercaseUstensils = allUstensilsJoin.map(x => x.toLowerCase());
const ustentilsNoDuplicate = new Set(lowercaseUstensils);
const ustensilsFilterArray = Array.from(ustentilsNoDuplicate);

const allIngredients = [];
for (let i=0; i<recipes.length; i++){
  let ingredients = recipes[i].ingredients;
  allIngredients.push(ingredients);
}const ingredientsNoDuplicate = new Set(allIngredients);
const ingredientsFilterArray = Array.from(ingredientsNoDuplicate);

// display filters for all 
const appliance = new FiltersList(applianceFilterBtn, applianceFilterList, applianceFilterArray);
appliance.display();
const ustensils = new FiltersList(ustensilsFilterBtn, ustensilsFilterList, ustensilsFilterArray);
ustensils.display();
const ingredients = *new FiltersList(ingredientsFilterBtn, ingredientsFilterList, IngredientsFilterArray);
ingredients.display();*/

//5 focus on searchbar and check all recipes : nodeList(50)

export const searchBarInput = document.querySelector(".search-bar");
searchBarInput.addEventListener("keyup", (e) => {
  const searchRecipes = e.target.value;
  const cards = document.querySelectorAll(".card");
  filteredCards(searchRecipes, cards);
});

//filtered by name and numbers of letters >2 write 3 letters
//if letters = display blog vs number = display none
function filteredCards(letters, elements) {
  if (letters.length > 2) {
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].textContent.toLowerCase().includes(letters)) {
        elements[i].style.display = "block";
      } else {
        elements[i].style.display = "none";
      }
    }
  }
}



const init = async () => {
  const { recipes } = await getRecipes();
  //dropdownFilters(recipes);
  displayCards(recipes);
  
  
  
};
init();
