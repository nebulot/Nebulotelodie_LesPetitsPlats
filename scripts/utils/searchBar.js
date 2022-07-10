//ARRAY METHOD 
let recipes = [];
let searchResult = [];
let queryLength = 0;

// GET JSON DATA API
function getRecipes () {
  const recipes = fetch("./scripts/data/recipes.json")
        .then(data => data.json())
        .catch(err => console.log('Error', err));
    return recipes;
}


// INIT //async here not in index.js
async function initRecipes() {
  recipes = await getRecipes();
  //console.log(recipes); Array(50);
  //Pensez à afficher notre variable, creer au dessus,appelée, stockée
  displayRecipes(recipes);
}

function searchRecipes() {
  const query = this.value;
  if (query.length > 2) {
      let [array, results] = [[], []];
      // CHECK FOR ERASE STRING / Keep old search OR reload all recipes
      if (queryLength > query.length) {
          array = [...recipes];
      } else {
          array = searchResult.length > 0 ? [...searchResult] : [...recipes];
      }

      results = array.filter(recipe => {
          return recipe.name.toLowerCase().includes(query)
              || recipe.description.toLowerCase().includes(query)
              || recipe.ingredients.filter(ingredient => ingredient.ingredient.toLowerCase().includes(query)).length >= 1;
          });

      searchResult = [...results];
      queryLength = query.length;
      displayRecipes(searchResult);

  //create alert when you don't write or just scribe under 3 letters.  
  } else {
      searchResult = [...recipes];
      queryLength = 0;
      results.innerHTML = `<strong><span style="color:red">Aucune recette ne correspond à votre critère… </br>
      Vous pouvez chercher « tarte aux pommes », « poisson », etc...</strong></span>`;
      //console.log(results); ok
  }
}

//DISPLAY create recipe card when write your name on the searchbar
function displayRecipes(data) {
  results.innerHTML = '';
  data.forEach(recipe => {
      let card = new RecipeCard(recipe).make();
      results.appendChild(card);
      

  });
  // console.log(results); ok 
    
}



