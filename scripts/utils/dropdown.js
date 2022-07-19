//text create with [active] and [inactive] problem

let selectedTags = [];
//use second solution dom Element and function onclick();
const dropdownValues = (recipes) => {
  const { ingredients, appareil, ustensiles } = initFilters(recipes);
};

//////////DOM ELEMENTS/////////////////////////////
// close and open dropdown
const btn1 = document.getElementById("btn-ingredients");
const btn2 = document.getElementById("btn-appareils");
const btn3 = document.getElementById("btn-ustensiles");

const appareilInput = document.querySelector(".appareil_input");
const ustensilsInput = document.querySelector(".ustensils_input");

const li = document.getElementsByClassName("result");

const ingredientIcon = document.getElementsByClassName("ingredients_arrow");
const appareilsIcon = document.getElementsByClassName("appliance_arrow");
const ustensilsIcon = document.getElementsByClassName("ustensils_arrow");

//main.addEventListener("click", closeAll);
//search.addEventListener("click", closeAll);

btn1.onclick = function () {
  let contentBtn = document.getElementById("links-ingredients");
  //let ingredientsIcon = document.getElementsByClassName("ingredients_arrow");
  //shrink the button
  if (contentBtn.style.display !== "none") {
    contentBtn.style.display = "none";
  } else {
    contentBtn.style.display = "block";
    //expand the button
    //ingredientsIcon.classList.replace("fa-chevron-down", "fa-chevron-up");
    const tags = initFilters(recipes);
    console.log(tags);
    const ul = document.querySelector("#links-ingredients .result");
    //ul.innerHTML = "";
    tags.ingredients.forEach((ingredient) => {
      const li = document.createElement("li");
      li.textContent = ingredient;
      li.className = "ingredient_item";
      ul.appendChild(li);
      //console.log(li);
      //console.log(ul);
    });
    
  }
  const li = document.querySelectorAll(".ingredient_item");
  listIngredientsItems(li);
};

const listIngredientsItems = (li) => {
 li.forEach((item) => {
    item.addEventListener("click", () => {
      selectedTags.push(item.textContent);
      const selectedTagsStop = [...new Set(selectedTags)];
      createTagsBar(selectedTagsStop, "bg-primary", recipes);
      //console.log(selectedTags); ok ['pomme']
      });
      //console.log(li); ok li.ingredient_item
      //console.log(item); ok balise <li class>name</li>
  });
};
//console.log(listIngredientsItems);


const ingredientsInput = document.querySelector("#input-ingredients");
ingredientsInput.addEventListener("keyup", (e) => {
  const tags = initFilters(recipes);
  const query = e.target.value.toLowerCase();
  const ul = document.querySelector("#links-ingredients .result");
  //console.log(query); //ok scibe pomm....
  const searchresults = tags.ingredients.filter((ingredient) => {
    return ingredient.toLowerCase().includes(query);
  });
  //console.log(searchresults); nbr [2] and name "pomme"..
  let li = [];
  li.forEach((item) => {
    item.addEventListener("click", () => {
      li.textContent = ingredient;
      li.push(item.textContent);
      
      //createTagsBar(selectedTagsStop, "bg-primary", recipes);
      //console.log(selectedTags); ok ['pomme']
      });
  //li.push(searchresults.textContent);
  console.log(searchresults);
    });
  console.log(li); 


  //ul.innerHtml ="";
   //let li = [];
  //li.push(item.textContent); //déclarer un tableau
 //searchresults.textContent = "li"; rajoute dans console un element
  //searchresults.forEach((result) => {
    // avoir un élément html pour replacer nos données (résultats console)
    //searchresults.textContent = ;
    //li.push(searchresults);
    //results.innerHtml = result;
  //});
  
  listIngredientsItems(li);
});


////////////////////////////////BUTTON 2 APPAREIL//////////////////////////////////

btn2.onclick = function () {
  let contentBtn2 = document.getElementById("links-appareils");

  //shrink the button
  if (contentBtn2.style.display !== "none") {
    contentBtn2.style.display = "none";
  } else {
    contentBtn2.style.display = "block";
    //expand the button
    const tags = initFilters(recipes);
    tags.appareil.forEach((appliance) => {
      const ul = document.querySelector("#links-appareils .result");
      const li = document.createElement("li");
      li.textContent = appliance;
      li.className = "appareil_item";
      ul.appendChild(li);
    });
  }
  listAppareilsItems();
};

const listAppareilsItems = () => {
  const appareilsItems = document.querySelectorAll(".appareil_item");
  appareilsItems.forEach((item) => {
    item.addEventListener("click", () => {
      selectedTags.push(item.textContent);
      const selectedTagStop = [...new Set(selectedTags)];
      createTagsBar(selectedTagStop, "bg-success", recipes);
    });
  });
};

///////////////////////////////////////BOUTON 3 USTENSILES/////////////////////////////////////////

btn3.onclick = function () {
  let contentBtn3 = document.getElementById("links-ustensiles");

  //shrink the button
  if (contentBtn3.style.display !== "none") {
    contentBtn3.style.display = "none";
  } else {
    contentBtn3.style.display = "block";
    //expand the button
    const tags = initFilters(recipes);
    tags.ustensiles.forEach((ustensils) => {
      const ul = document.querySelector("#links-ustensiles .result");
      const li = document.createElement("li");
      li.textContent = ustensils;
      li.className = "ustensils_item";
      ul.appendChild(li);
    });
  }
  listUstensilesItems();
};

const listUstensilesItems = () => {
  const ustensilesItems = document.querySelectorAll(".ustensils_item");
  console.log(ustensilesItems); //nodeList (30) li.ustensils_items
  ustensilesItems.forEach((item) => {
    item.addEventListener("click", () => {
      selectedTags.push(item.textContent);
      console.log(selectedTags); // number of selection all (3)
      const selectedTagsStop = [...new Set(selectedTags)];
      createTagsBar(selectedTagsStop, "bg-danger", recipes);
    });
  });
};
