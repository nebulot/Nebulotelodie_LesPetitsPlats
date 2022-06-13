
//2 GET DATA
export const getRecipes = (async () => {
    
  return await fetch("/scripts/data/recipe.json")
      .then((res) => {
        return res.json();       
      })
      
      .catch((err) => {
        err.message;
        
        console.log(getRecipes());
      });
   });

  

 

  

