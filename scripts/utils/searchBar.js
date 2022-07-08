
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
  } else {
      searchResult = [...recipes];
      queryLength = 0;
      results.innerHTML = '';
  }
}

//DISPLAY create recipe card when write your name on the searchbar
function displayRecipes(data) {
  results.innerHTML = '';
  data.forEach(recipe => {
      let card = new RecipeCard(recipe).make();
      results.appendChild(card);
      

  });
  console.log(results);
    
}


  



//filtered by name and numbers of letters >2 write 3 letters
//if letters = display blog vs number = display none
function filteredCards(letters, elements) {
  let count = 0;
  if (letters.length > 2) {
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].textContent.toLowerCase().includes(letters)) {
        count++;
        elements[i].style.display = "block";
      } else {
        elements[i].style.display = "none";
      }
    }
  }
  return count;
};

