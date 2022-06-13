import { getRecipes } from "../api.js";
import {recipes} from "../index.js";

//to change the selection, when you search on the dropdown 
// create a new array with method array.protoype.map();

export const ingredientsMap = new Map();
export const appliancesMap = new Map();
export const utensilsMap = new Map();

export class DropdownsBuilder {
    /*
     * @constructor
     * @param getRecipes {Array.<recipe>}
     * @param selectedTags {Array.<string>}
     * @param filter {string}
     * @param id {number}
     * @param map {Map<String, Array<Number>>}
     * @param HTMLElement {Element}
     * @param className {string}
     */
      
    constructor(getRecipes, selectedTags) {
      this.createDropdowns(getRecipes, selectedTags);
    }
  
     createDropdowns(getRecipes, selectedTags) {
        // new array/[ingredients, appliances,ustensils] = clear
      ingredientsMap.clear();
      appliancesMap.clear();
      utensilsMap.clear();
         
     //DOM

      const dpdAppliances = document.querySelector('.appliances-list');
      const dpdUtensils = document.querySelector('.utensils-list');
      const dpdIngredients = document.querySelector('.ingredients-list')
       
      recipes.forEach((recipe) => {
        recipe.ingredients.forEach((ingredient) => {
          this.updateMap(ingredient.ingredient, recipe.id, ingredientsMap, selectedTags);
        });
      });
      this.createList(dpdIngredients, ingredientsMap, "list-item ingredient");
  
      recipes.forEach((recipe) => {
        this.updateMap(recipe.appliance, recipe.id, appliancesMap, selectedTags);
      })
      this.createList(dpdAppliances, appliancesMap, "list-item appliance");
  
      recipes.forEach((recipe) => {
        recipe.utensils.forEach((utensil) => {
          this.updateMap(utensil, recipe.id, utensilsMap, selectedTags);
        });
      });
      this.createList(dpdUtensils, utensilsMap, "list-item utensil");
    }
    
  //create map of [ingredient,appliance,utensil] + id recipes choose

    updateMap(filters, id, map, selectedTags) {
      let key = filters.toLowerCase();
      key = key.charAt(0).toUpperCase() + key.slice(1);

      if(!selectedTags.includes(key) || getRecipes.length == recipes.length) {
        if (map.has(key)) {
          let idArray = map.get(key);
          idArray.push(id);
          map.set(key, idArray);
        } else {
          map.set(key, [id]);
        }
      }
   }
    
    createList(HTMLElement, map, className) {
      let filterKeys = Array.from(map.keys());
      let filterList = filterKeys.map((element) => {
        return  `<li class="${className}">${element}</li>`;
        
      });  
      filterList.forEach((li) => {
        HTMLElement.innerHTML = HTMLElement.innerHTML + li;
      });
      console.log(filterKeys);
      console.log(filterList);
    }
  
    update(getRecipes, selectedTags) {
      this.removeChildOf('.ingredients-list', 'ingredient');
      this.removeChildOf('.appliances-list', 'appliance');
      this.removeChildOf('.utensils-list', 'utensil');
      this.createDropdowns(recipesList, selectedTags);
    }
  
    removeChildOf(node, classChange) {
      const parentNode = document.querySelector(node);
    
      for (let index = parentNode.childNodes.length - 1; index >= 0; index--) {
        const child = parentNode.childNodes[index];
      
        if (child.className.split(' ')[1] == classChange) {
          parentNode.removeChild(child);
        }
      }
    }
  }