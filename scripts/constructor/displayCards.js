// create DOM recipe CARD

export class RecipeCard {
  constructor(data) {
    this._id = data.id;
    this._name = data.name;
    this._description = data.description;
    this._time = data.time;
    this._servings = data.servings;
    this._ustensils = data.ustensils;
    this._ingredients = data.ingredients;
    this._appliance = data.appliance;
    console.log(data);
  }

  get recipeCard() {
    const recipeContainer = document.createElement("div");
    recipeContainer.className = "recipeCard col-12 col-md-6 col-lg-4";
    document.querySelector(".receipe-container").insertAdjacentHTML(
      "afterbegin",
      recipeContainer.innerHTML = ` 
	  <div class="card rounded border-0">
	    <div class="card-header bg-secondary"></div>
	    <div class="card-body bg-light">
	    <div class="title-time">
		 <h2 class="card-title m-0 font-weight-light">
		   ${this._name}
		 </h2>
		 <div class="recipe_time">
		 <i class="far fa-clock"></i>
		 <h3 class="time">${this._time}min</h3>
	   </div>
	 </div>
	 <div class="ingredients-directions row">
	   <ul class="ingredient-list list-group list-unstyled bg-light">
	   </ul>
	   <p class="card-text">
	   ${this._description}
	   </p>
	 </div>
   </div>
   </div>
   </div>`
    );
	this.ingredientsCard();
  }

// create li to put ingredients[array].ingredients.ingredients
get ingredientsCard() {
	const ingredients = recipeCard.querySelector('.recipe-ingredient-list');
    const ingredientsList = recipe.ingredients.map(ingredient => {
		if(ingredient.quantity) {
return
`<li class = "ingredient-list">${ingredient.ingredient} : ${ingredient.quantity ?? ''} ${ingredient.unit ?? ''}</li>`
} else {
	`<li class = "ingredient-list">${ingredient.ingredient}`	
}
});
}
}
