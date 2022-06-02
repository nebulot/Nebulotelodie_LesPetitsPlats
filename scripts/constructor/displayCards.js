
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
	}
  

  get recipeCard() {
	  document.querySelector(".receipe-container").insertAdjacentHTML(
		  "afterbegin",
     `  <article class="receipe_card">
		<a href="#">
		<div class="card_img">
			<div class="card_recipe">
			<h2 class="card_title">${this._name}</h2>
			<div class="card_time">
			<i class="card_oclock"></i>
			<p class="card_min">${this._time}min</p>
			</div>
			</div>
			<div class="card_content">
			<ul class="card_ingredients">
							listCard_HTML
							</ul>
							<p class="card_description">
							${this._description}
							</p>
						  </div>
						  </div>
					  </a>
					</article>`
					
	);
  }
}

