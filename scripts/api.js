
//2 GET DATA
export const getRecipes = (async () => {
    
  return await fetch("/scripts/data/recipe.json")
      .then((res) => {
        return res.json();
      })
      /*.then((data) => {
        
      return data.recipes;
          
      })*/
      .catch((err) => {
        err.message;
      });
  });

  

