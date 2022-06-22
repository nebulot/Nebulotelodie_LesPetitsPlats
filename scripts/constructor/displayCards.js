//import { Ingredient } from "../utils/ingredients.js";
// 4 create DOM recipe CARD

export class RecipeCard {
  /*
   * @constructor
   * @param {Object} data
   * @param {number} data.id
   * @param {string} data.name
   * @param {number} data.servings
   * @param {number} data.time
   * @param {string} data.description
   * @param {string} data.appliance
   * @param {Array.<string>} data.ustensils
   * @param {Array.<Object>} data.ingredients
   */

  constructor(data) {
    this._id = data.id;
    this._name = data.name;
    this._description = data.description;
    this._time = data.time;
    this._servings = data.servings;
    this._ingredients = data.ingredients;
    this._ustensils = data.ustensils;
    this._appliance = data.appliance;
  }

  //5 put the ingredients and quantity on the recipeCard (recipeContainer)
  //create li to put ingredients[array].ingredients.ingredients

  get ingredientsList() {
    
    let ingredientsList = "";
    this._ingredients.forEach((ingredient) => {
      if (ingredient.quantity) {
        if (ingredient.unit && ingredient.quantity) {
        ingredientsList += `
      <li class = "recipe-ingredients">${ingredient.ingredient} : ${
          ingredient.quantity ?? ""
        } ${ingredient.unit ?? ""} </li>`;
      } else {
      ingredientsList += `
      <li class= "recipe-ingredients">${ingredient.ingredient} :  ${
        ingredient.quantity}
       </li>`;
    }
      } else {
        ingredientsList += `
      <li class= "recipe-ingredients">${ingredient.ingredient}</li>`;
      }
     });
    return ingredientsList;
  }

  // when description is too long, remove by "&hellip;" => ...
  get shortDescription() {
    const limit = 200;
    if (this._description.length <= limit) return this._description;
    let description = this._description.substr(0, limit - 1);
    return description.substr(0, description.lastIndexOf(" ")) + " &hellip;";
  }

  //5 create display card
  get createRecipeCard() {
    const card = document.createElement("div");
    card.className = "receipe col-12 col-md-6 col-lg-4";
    card.innerHTML = `
    <div class="card rounded border-0">
    <div class="card-header bg-secondary"></div>
	    <div class="card-body bg-light">
	    <div class="title-time">
		 <h5 class="card-title m-0 font-weight-light">
		   ${this._name}
		 </h5>
		 <div class="recipe_time">
		 <i class="far fa-clock"></i>
		 <h5 class="time">${this._time}min</h5>
	   </div>
	 </div>
	 <div class="ingredients-directions row">
	   <ul class="ingredient-list list-group list-unstyled bg-light">
     ${this.ingredientsList}
	   </ul>
	   <p class="card-text">
	   ${this.shortDescription}
	   </p>
	 </div>
   </div>
   </div>`;
   return card
   
    
  }
}
