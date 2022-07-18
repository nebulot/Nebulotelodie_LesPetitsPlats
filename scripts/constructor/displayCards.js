// 4 create DOM recipe CARD

class RecipeCard {
  /*
   * @constructor
   * @param {Object} recipe
   * @param {number} recipe.id
   * @param {string} recipe.name
   * @param {number} recipe.servings
   * @param {number} recipe.time
   * @param {string} recipe.description
   * @param {string} recipe.appliance
   * @param {Array.<string>} recipe.ustensils
   * @param {Array.<Object>} recipe.ingredients
   */

  constructor(recipe) {
    this.recipe = recipe;
    this._id = recipe.id;
    this._name = recipe.name;
    this._description = recipe.description;
    this._time = recipe.time;
    this._servings = recipe.servings;
    this._ingredients = recipe.ingredients;
    this._ustensils = recipe.ustensils;
    this._appliance = recipe.appliance;
  }

  //5 put the ingredients and quantity on the recipeCard (recipeContainer)
  //create li to put ingredients[array].ingredients.ingredients

  get ingredientsList() {
    
    let ingredientsList = "";
    this._ingredients.forEach((ingredient) => {
      if (ingredient.quantity) {
        if (ingredient.unit && ingredient.quantity) {
        ingredientsList += `
      <li class = "recipe-ingredients"><strong>${ingredient.ingredient} : ${
          ingredient.quantity ?? ""
        } ${ingredient.unit ?? ""} </strong></li>`;
      } else {
      ingredientsList += `
      <li class= "recipe-ingredients"><strong>${ingredient.ingredient} :  ${
        ingredient.quantity}</strong>
       </li>`;
    }
      } else {
        ingredientsList += `
      <li class= "recipe-ingredients"><strong>${ingredient.ingredient}</strong></li>`;
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
  make() {
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

