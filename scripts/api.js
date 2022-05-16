
//2 GET DATA
export const getRecipes = (async () => {
    
  return await fetch("scripts/recipe.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        
        return data.recipes;
          
      })
      .catch((err) => {
        err.message;
      });
  })();

  /* + function constructor
export function renderRecipes(data) {
  // console.log(data);
  this.data = data;
  this.returnRecipes = function (data) {
    console.log(data);
    return data;
  };
}*/

