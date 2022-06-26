
//2 GET DATA
export function getRecipes () {
  const recipes = fetch("/scripts/data/recipe.json")
        .then(data => data.json())
        .catch(err => console.log('Error', err));
    return recipes;
}

/*} = (async () => {
    
  return await fetch("/scripts/data/recipe.json")
      .then((res) => {
        return res.json();       
      })
      
      .catch((err) => {
        err.message;
        
        console.log(getRecipes());
      });
   });
*/
  

 

  

