///////// 8  TAGS  /////////
class Tag {
  static #idNum = 0;
  constructor(type, txt) {
    this.type = type;
    this.txt = txt;
    this.color = this.Color();
    this.idNum = Tag.#idNum++;
  }
  Color() {
    switch (this.type) {
      case "ingredients":
        return "primary";
      case "appareils":
        return "success";
      case "ustensiles":
        return "danger";
      default:
        console.log("ERROR ");
    }
  }
  createTagsBar() {
    const tag = document.createElement("button");
    tag.classList = `btn tag w-auto rounded d-flex align-items-center text-white bg-${this.color}`;
    tag.id = `id#${this.idNum}`;
    tag.innerHTML = `${this.txt} <span><i class="far fa-times-circle ms-2"></i></span>`;
   
    return tag;
	
  }
}

///////////////////////////////Tags Bar filter////////////////////////////////////////
 
  const createTagsBar = (selectedTagsStop, recipes) => {
    const tags = document.querySelector(".tags");
	tags.innerHTML ="";
	selectedTagsStop.forEach((tag) => {
		  const tagsBox = document.createElement("button");
		  tagsBox.className = `btn_tags tag w-auto rounded d-flex align-items-center text-white`;
		  tagsBox. innerHTML = tag + `<span><i class="far fa-times-circle ms-2"></i></span>`;		  
		  tags.append(tagsBox); 
		  tagsBox.addEventListener("click", closeTags);
		  //console.log(tags); // div class Tags
		  //console.log(tagsBox); //div button+span
	});
	researchOnFilters(recipes, selectedTagsStop);
	//console.log(recipe)
  }	

  //close tags///
  function closeTags(e) {
    const tagsBtn = [...tags.querySelectorAll("button")];
    console.log(tagsBtn);
    const [container] = tagsBtn.filter(btn => btn.contains(e.target));
    container.remove();
} 


	const researchOnFilters = (recipes, selectedTagsStop) => {
	const tagsQuery = document.querySelectorAll(".btn_tags");
	const tags = Array.from(tagsQuery);
	const result = recipes.filter((recipe) => {
		return tags.every((item) => {
			const formatedItem = item.textContent.toLowerCase();
			return (
				recipe.ingredients.some((i) => {
					return i.ingredient.toLowerCase().includes(formatedItem);
				}) ||
				recipe.appliance.toLowerCase().includes(formatedItem) ||
				recipe.ustensils.some((ustensil) => {
					return ustensil.toLowerCase() === formatedItem;
				})
			);
		});
	});
	//console.log(result); ok number of recipe who match with tags selected

	if (result.length) {
		// show recipes
		displayRecipes(result);
		listenOnTagBar(tags, recipes);
		//console.log(listenOnTagBar);
	} else if (!result.length) {
		//show alert message don't find a recipe
		listenOnTagBar(tags, recipes);
		results.innerHTML = "";
    const alert = document.createElement("span");
    alert.className = "alert_Msg bg-danger rounded text-white py-4";
    alert.innerHTML = `Aucune recette ne correspond à votre critère… </br> vous pouvez
		chercher « tarte aux pommes », « poisson », etc`
		results.appendChild(alert);	
	};
};

const listenOnTagBar = (tags, recipes) => {
	tags.forEach((tag) => {
		tag.addEventListener("click", () => {
			removeFilter(tag, tags, recipes);
		});
	});
	console.log(tags);
};

/*const removeFilter = (selectedTag, arrayOfTag, recipes) => {
	const index = arrayOfTag.indexOf(selectedTag);
	arrayOfTag.slice(index, 0);
	selectedTag.remove();
	selectedTags.splice(0, selectedTags.length)
	if (!arrayOfTag.length) {
		results.innerHTML = "";
		displayRecipes(recipes);
	} else {
		researchOnFilters(recipes, arrayOfTag);
	}
};*/

