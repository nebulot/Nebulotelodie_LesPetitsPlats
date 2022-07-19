
//ARRAY METHOD 
let recipes = [];


// GET JSON DATA API
function getRecipes () {
  const recipes = fetch("./scripts/data/recipes.json")
        .then(data => data.json())
        .catch(err => console.log('Error', err));
    return recipes;
}
console.log(recipes);

// INIT //async here not in index.js
async function initRecipes() {
  recipes = await getRecipes();
  initFilters(recipes);
  dropdownValues(recipes);
  displayRecipes(recipes);
  //console.log(recipes); Array(50);
  searchRecipes(recipes, searchBarInput);
}

const searchRecipes = (recipes, searchBarInput) => {  
  searchBarInput.addEventListener("keyup", (e) => {
      if (e.target.value.length >= 3) {
        let result = [];
        results.innerHTML = "";
        const query = e.target.value.toLowerCase();
        for (let i = 0; i < recipes.length; i++) {
          const { name, ingredients, description } = recipes[i];
          const includesName = name.toLowerCase().includes(query);
          const includesDescription = description.toLowerCase().includes(query);
          let includesIngredients = false;
          for (let y = 0; y < ingredients.length; y++) {
            if (ingredients[y].ingredient.toLowerCase().includes(query)) {
              includesIngredients = true;
            }
          }
          console.log(searchBarInput);
          if (includesName || includesDescription || includesIngredients) {
            result.push(recipes[i]);
          }
        }
  
        if (result.length) {
          results.innerHTML = "";
          displayRecipes(result);
        }
  
        if (!result.length) {
          results.innerHTML = "";
          const alert = document.createElement("span");
          alert.className = "alert_Msg bg-danger rounded text-white py-4";
          alert.innerHTML = `Aucune recette ne correspond à votre critère… </br> vous pouvez
          chercher « tarte aux pommes », « poisson », etc`
          results.appendChild(alert);	
        
        }
      }

      if (e.target.value.length <= 3) {
        results.innerHTML = "";
        displayRecipes(recipes);
      }
    });
  };

 //DISPLAY create recipe card when write your word on the searchbar
function displayRecipes(data) {
  results.innerHTML = '';
  data.forEach(recipe => {
      let card = new RecipeCard(recipe).make();
      results.appendChild(card);
});
  // console.log(results); ok 
    
} 

