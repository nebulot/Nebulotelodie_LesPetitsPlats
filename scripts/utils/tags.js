///////////////////////////////(13) Tags Bar filter////////////////////////////////////////
 
const createTagsBar = (selectedTagsStop, type, recipes) => {
    const tags = document.querySelector(".tags");
	tags.innerHTML ="";
	selectedTagsStop.forEach((tag) => {
		  const tagsBox = document.createElement("button");
		  tagsBox.className = `btn_tags ${type} w-auto rounded d-flex align-items-center text-white`;
		  tagsBox.innerHTML = tag + `<span><i class="far fa-times-circle ms-2"></i></span>`;		  
		  tags.append(tagsBox); 
		  //console.log(tag); // ok ex ananas
		  //console.log(tags); // div class Tags
		  //console.log(tagsBox); //div button+span
		  
	});
	researchOnTags(recipes, selectedTagsStop);
	
  }	

  /*close tags///
  function closeTags(e) {
    const tagsBtn = [...tags.querySelectorAll("button")];
    console.log(tagsBtn);
    const [container] = tagsBtn.filter(btn => btn.contains(e.target));
	container.remove();
} */


	const researchOnTags = (recipes, selectedTagsStop) => {
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
		results.innerHTML="";
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
		console.log(result);
	};
};

const listenOnTagBar = (tags, recipes) => {
	tags.forEach((tag) => {
		tag.addEventListener("click", () => {
			removeTag(tag, tags,recipes);
		});
	});
	console.log(tags); //button + class erreur change de couleurs
};

const removeTag = (selectedTag, arrayOfTags, recipes) => {
	const index = arrayOfTags.indexOf(selectedTag);
	arrayOfTags.slice(index, 0);
	selectedTag.remove();
	selectedTags.splice(0, selectedTags.length)
	if (!arrayOfTags.length) {
		results.innerHTML = "";
		displayRecipes(recipes);
	} else {
		researchOnTags(recipes, arrayOfTags);
		//console.log(selectedTag); //show on console the last tags used.
	    //console.log(index); //when  close the tag show nbr (0)
	    //console.log(arrayOfTags) //array move btn-tags
		console.log(selectedTags);
	}
};
