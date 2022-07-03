
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

// INIT
async function initRecipes() {
  recipes = await getRecipes();
  console.log(getRecipes());
}

function searchResultsRecipes() {
  const query = this.value;
  if (query.length > 2) {
      let [Array, results] = [[], []];
      // CHECK FOR ERASE STRING / Keep old search OR reload all recipes
      if (queryLength > query.length) {
          Array = [...recipes];
      } else {
          Array = searchResult.length > 0 ? [...searchResult] : [...recipes];
      }

      results = Array.filter(recipe => {
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
}





//5 focus on searchbar and check all recipes : nodeList(50)
/* const searchBarInput = document.querySelector(".search-bar");
searchBarInput.addEventListener("keyup", (e) => {
  const searchRecipes = e.target.value;
  const cards = document.querySelectorAll(".card");
  let count = filteredCards(searchRecipes, cards);
  displayAlert(count);
  console.log(searchRecipes);
});


//filtered by name and numbers of letters >2 write 3 letters
//if letters = display blog vs number = display none
export function filteredCards(letters, elements) {
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
*/
