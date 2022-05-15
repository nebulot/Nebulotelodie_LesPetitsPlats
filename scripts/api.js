
//2 GET DATA
export const getRecipes = (async () => {
    await fetch("./recipe.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        index.get_Recipes(data.recipes);
  
      })
      .catch((err) => {
        err.message;
      });
  })();

  // + function constructor
export function renderRecipes(data) {
  // console.log(data);
  this.data = data;
  this.returnRecipes = function (data) {
    console.log(data);
    return data;
  };
}

