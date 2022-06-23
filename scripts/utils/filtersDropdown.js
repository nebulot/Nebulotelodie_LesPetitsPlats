/*import { RecipeCard } from "../constructor/displayCards.js";
import { filteredCards } from "./searchBar.js";


/*export const ingredientMap = new Map();
export const applianceMap = new Map();
export const ustensilMap = new Map();

// filters [ingredients, appliances, ustensils] dropdown 

export class dropdownFilters {
  constructor (recipes, selectedTags) {
    this.addFilters(recipes, selectedTags);
  }

//7 Keep data and create display filters 
// keep arrays clean and create a new arrays for the researchs  
  addFilters(recipes,selectedTags) {

      let ingredients = [];
      let appliances = [];
      let ustensils = [];

    
    
    const dropdownIngredients = document.querySelector('.ingredients-list');
    recipes.forEach((recipe) => {
      recipe.ingredients.forEach((ingredient) => {
        this.updateMap(ingredient.ingredient, recipe.id, ingredientMap, selectedTags);
      });
    });
    this.createLi(dropdownIngredients, ingredients, "list-item ingredient");

    const dropdownAppliances = document.querySelector('.appliances-list');
    recipes.forEach((recipe) => {
      this.updateMap(recipe.appliance, recipe.id, appliances, selectedTags);
    })
    this.createLi(dropdownAppliances, appliances, "list-item appliance");

    const dropdownUtensils = document.querySelector('.utensils-list');
    recipes.forEach((recipe) => {
      recipe.utensils.forEach((utensil) => {
        this.updateMap(utensil, recipe.id, ustensils, selectedTags);
      });
    });
    this.createLi(dropdownUtensils, ustensils, "list-item utensil");
  }
}

  /*create updateMap 
  //create li for all list [ingredients btn, appliances btn, ustensils btn]

  updateMap(filter, id, map, selectedTags) {
    let key = filter.toLowerCase();
    key = key.charAt(0).toUpperCase() + key.slice(1);
    if(!selectedTags.includes(key) || RecipeCard.length == filteredCards.length) { //check if key isn't contained in selected tags => prevent tag from being selected twice: if tag has been selected, it doesn't appear in the dropdown anymore
      if (map.has(key)) {
        let idsArray = map.get(key);
        idsArray.push(id);
        map.set(key, idsArray);
      } else {
        map.set(key, [id]);
      }
    }
    //console.log(key);
    return this.updateMap();
 }



  createLi(HTMLElement,map,className) {
    let filterKeys = Array.from(map.keys());
    let filterList = filterKeys.map((element) => {
      return  `<li class="${className}">${element}</li>`;
    });

    filterList.forEach((li) => {
      HTMLElement.innerHTML = HTMLElement.innerHTML + li;
    });
    return this.createLi;
  }
  

  update(recipes, selectedTags) {
    this.removeChildOf('.ingredients-list', 'ingredient');
    this.removeChildOf('.appliances-list', 'appliance');
    this.removeChildOf('.utensils-list', 'utensil');
    this.addFilters(recipes, selectedTags);
  }
}






      /*recipes.forEach((recipe) => {
        ingredient = [
          ...new Set([...ingredient, ...recipe.ingredients.map((i) => i.ingredients)])].sort();
        ustensil = [...new Set([...ustensil, ...recipe.ustensils.map((u) => u)])].sort();
        appliance = [...new Set([...appliance, ...[recipe.appliances]])].sort();
      });
      return { ingredient, ustensil, appliance };
    };*/
   


