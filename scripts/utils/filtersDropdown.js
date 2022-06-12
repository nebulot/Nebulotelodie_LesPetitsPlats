/* Dom three dropdown btn
const ingredientBtn = document.querySelector(".btn-ingredient");
const applianceBtn = document.querySelector(".btn-appliance");
const ustensilBtn = document.querySelector(".btn-ustensil");

export class DropdownHandler {
  typeArray = ["ingredient", "appliance", "utensil"];

  constructor(data) {
    this._id = data.id;
    this._name = data.name;
    this._description = data.description;
    this._time = data.time;
    this._servings = data.servings;
    this._ustensils = data.ustensils;
    this._ingredients = data.ingredients;
    this._appliance = data.appliance;
	this._typeArray = data.typeArray;

    this._typeArray.forEach((type) => {
      let list = `.${type}-list-wrapper`;
      let input = `input-${type}`;
      this.openDropdown(type, list, input);
      this.closeDropdown(type, list);
      this.inputListener(type, input);
    });
    this.refreshTags();
  }

  openDropdown(type, list, input) {
    let dropdown = `.button-${type}`;
    const dropdownBtn = document.querySelector(dropdown);
    const dropdownList = document.querySelector(list);
    const dorpdownInput = document.getElementById(input);
    dropdownBtn.addEventListener("click", function () {
      dropdownBtn.classList.add("opened");
      dropdownList.classList.add("expanded");
      dorpdownInput.focus();
    });
  }

  closeDropdown(type, list) {
    let close = `.close-dropdown-${type}`;
    let dropdown = `.button-${type}`;
    const dropdownButton = document.querySelector(dropdown);
    const closeBtn = document.querySelector(close);
    const dropdownList = document.querySelector(list);

    closeBtn.addEventListener("click", () => {
      dropdownButton.classList.remove("opened");
      dropdownList.classList.remove("expanded");
    });
  }

  inputListener(type, input) {
    const dropdownInput = document.getElementById(input);
    dropdownInput.addEventListener("input", (e) =>
      this.updateDropdown(e, type)
    );
  }

  updateDropdown(e, type) {
    const userInput = e.target.value.toLowerCase();
    const dropdownItem = document.getElementsByClassName(type);
    const dropdownArray = Array.from(dropdownItem);

    dropdownArray.forEach((dropdownItem) => {
      if (
        userInput.length >= 3 &&
        dropdownItem.innerHTML.toLowerCase().includes(userInput)
      ) {
        dropdownItem.style.display = "block";
      } else if (
        userInput.length >= 3 &&
        !dropdownItem.innerHTML.toLowerCase().includes(userInput)
      ) {
        dropdownItem.style.display = "none";
      } else if (userInput.length < 2) {
        dropdownItem.style.display = "block";
      }
    });
  }

  refreshTags() {
    this._typeArray.forEach(type => {
      const dropdownItem = document.getElementsByClassName(type);
      const dropdownArray = Array.from(dropdownItem);
      
      dropdownArray.forEach((element) => {
        element.addEventListener('click', () => {
          
          this.createTag(element, type);
          selectedTags.push(element.innerHTML);
         
          this.updateSelectRecipes();
          this.getRecipes.update(globalRecipesList);
          this.dropdownsBuilder.update(globalRecipesList, selectedTags);
          this.refreshTags();
          this.alerts.handleAlert();
        });
      });
    })
  }
}

/*













//7 bis create li to put ingredients[array]
// ingredients[ingredient : "name", quantity : number, unit: "name"]

get ingredientsList() {
    
    let ingredientsList = "";

    this._ingredients.forEach((ingredient) => {
      ingredientsList += `
      <li class = "list-item ingredients">${ingredient.ingredient} : ${
        ingredient.quantity ?? ""
      } ${ingredient.unit ?? ""} </li>`;
    });
    return ingredientsList;
  }

  // create appliance, recipes.appliance = "name"
  get appliancesList() {
    let appliancesList = "";

    this._appliances.forEach((appliance) => {
      appliancesList += `
      <li class = "list-item appliances">${appliance.appliance}</li>`;
    });
    return appliancesList;
  }

  // create ustensils, receipes.ustensils[array], array type name ["","",""...]

  get ustensilsList() {
    
    let ustensilsList = "";

    this._ustensils.forEach((ustensil) => {
      ustensilsList += `
      <li class = "list-item ustensils">${ustensil.ustensils} </li>`;
    });
    return ustensilsList;
  }





  //7 create dropdownToggle for the three button (ingredients, appliance and ustensils)

  get openandcloseDropdown() {

	// ingredient button dropdown display 
    const ingredientWrapper = document.createElement("div");
    document
      .querySelector(".list-wrapper ingredient-list-wrapper rouned")
      .insertAdjacentHTML(
        "afterbegin",
        ingredientWrapper.innerHTML = `
		<label for ="input-ingredient"></label>
		<input id ="input-ingredient"  class="input-dropdown" type ="search" placeholder="chercher un ingredient">
		  <button class="close-dropdown-tag close-dropdown-ingredient" type="button">
		  <i class ="fas fa-chevron-up" aria-hidden = "true"></i>
		  </button>
        <ul class ="dropdown-list ingredients-list">${this.ingredientsList}
		</ul>		 
	   </div>
	 `);
	 ingredientBtn.append(ingredientWrapper)

    // appliance button dropdown display 
  const applianceWrapper = document.createElement("div");
    document
      .querySelector(".list-wrapper appliance-list-wrapper rouned")
      .insertAdjacentHTML(
        "afterbegin",
        applianceWrapper.innerHTML = `
		<label for ="input-appliance"></label>
		<input id ="input-appliance"  class="input-dropdown" type ="search" placeholder="chercher un appareil">
		  <button class="close-dropdown-tag close-dropdown-appliance" type="button">
		  <i class ="fas fa-chevron-up" aria-hidden = "true"></i>
		  </button>
        <ul class ="dropdown-list appliances-list">${this.appliancesList}
		</ul>		 
	   </div>
	 `);
	 applianceBtn.append(applianceWrapper);

	 // ustensils button dropdown display 


	  const ustensilWrapper = document.createElement("div");
	  document
		.querySelector(".list-wrapper ustensil-list-wrapper rouned")
		.insertAdjacentHTML(
		  "afterbegin",
		  ustensilWrapper.innerHTML = `
		  <label for ="input-ustensil"></label>
		  <input id ="input-ustensil"  class="input-dropdown" type ="search" placeholder="chercher un ustensil">
			<button class="close-dropdown-tag close-dropdown-ustensil" type="button">
			<i class ="fas fa-chevron-up" aria-hidden = "true"></i>
			</button>
		  <ul class ="dropdown-list ustensils-list">${this.ustensilsList}
		  </ul>		 
		 </div>
	   `
		);
		ustensilBtn.append(ustensilWrapper);
	  }
	}












DOM
const selectedFilters = [];


const ingredientWrapper = document.querySelector(".ingredient-list-wrapper");
const ingredientArrow = document.querySelector(".dropdown-ingredient-toggle");
const ingredientInput = document.querySelector("#input-ingredient");


const applianceWrapper = document.querySelector(".appliance-list-wrapper");
const applianceArrow = document.querySelector(".dropdown-appliance-toggle");
const applianceInput = document.querySelector("#input-appliance");


const ustensilWrapper = document.querySelector(".ustensil-list-wrapper");
const ustensilArrow = document.querySelector(".dropdown-ustensil-toggle");
const ustensilInput = document.querySelector("#input-ustensil");

//create display for the three dropdown

export const getDropdown = (recipes) => {
	constructor { ingredients, ustensils, appliances } = dropdownFilters(recipes);

	// show ingredient when you click on toggle ingredient
	 
	ingredientBtn.addEventListener("click", () => {
		if (ingredientWrapper.classList.contains("ingredient-list_nodisplay")) {
			ingredientArrow.classList.replace("fa-chevron-down", "fa-chevron-up");
			ingredientWrapper.classList.replace("ingredient-list_nodisplay","ingredient-list_display")
			applianceArrow.classList.replace("fa-chevron-up", "fa-chevron-down");
			ustensilArrow.classList.replace("fa-chevron-up", "fa-chevron-down");
			ustensilWrapper.classList.replace("ustensils-list_display", "ustensils-list_nodisplay")
			applianceWrapper.classList.replace("appliance-list_display", "appliance-list_nodisplay")
			applianceWrapper.innerHTML = "";
			ingredients.forEach((ingredient) => {
				return ingredientWrapper.append(
					createDom("li", `${ingredient}`, { class: "ingredients-item" })
				);
			});
		} else {
			ingredientArrow.classList.replace("fa-chevron-up", "fa-chevron-down");
			ingredientWrapper.classList.replace("ingredient-list_display", "ingredient-list_nodisplay")
			ingredientWrapper.innerHTML = "";
		}
		getIngredientItems();
	});

	ingredientInput.addEventListener("keyup", (e) => {
		ingredientWrapper.innerHTML = "";
		if (e.target.value.length >= 3) {
			const box = e.target.value.toLowerCase();
			const results = ingredients.filter((ingredient) => {
				return ingredient.toLowerCase().includes(box);
			});
			results.forEach((result) => {
				return ingredientWrapper.append(createDom("li", `${result}`, { class: "ingredients-item" }));
			});
		}
	 getIngredientItems();
	});

	const getIngredientItems = () => {
		const ingredientItems = document.querySelectorAll(".ingredients-item");
		ingredientItems.forEach((item) => {
			item.addEventListener("click", () => {
				selectedFilters.push(item.textContent);
				const selectedFiltersNoDuplicata = [...new Set(selectedFilters)];
				createFiltersBar(selectedFiltersNoDuplicata, recipes);
			});
		});
	};

	// show appliance when you click on appliance toggle

	applianceBtn.addEventListener("click", () => {
		if (applianceWrapper.classList.contains("appliance-list_nodisplay")) {
			applianceArrow.classList.replace("fa-chevron-down", "fa-chevron-up");
			ingredientArrow.classList.replace("fa-chevron-up", "fa-chevron-down");
			ustensilArrow.classList.replace("fa-chevron-up", "fa-chevron-down");
			applianceWrapper.classList.replace("appliance-list_nodisplay", "appliance-list_display");
			ingredientWrapper.classList.replace("ingredient-list_nodisplay", "ingredient-list_nodisplay")
			ustensilWrapper.classList.replace("ustensils-list_display", "ustensils-list_nodisplay")
			appliances.forEach((appliance) => {
				applianceWrapper.innerHTML += `<li class="appliances-item">${appliance}</li>`;
				ustensilWrapper.innerHTML = "";
				ingredientWrapper.innerHTML = "";
			});
		} else {
			applianceArrow.classList.replace("fa-chevron-up", "fa-chevron-down");
			applianceWrapper.classList.replace("appliance-list_display", "appliance-list_nodisplay")
			applianceWrapper.innerHTML = "";
		}
		getApplianceItems();
	});

	applianceInput.addEventListener("keyup", (e) => {
		applianceWrapper.innerHTML = "";
		if (e.target.value.length > 3) {
			const box = e.target.value.toLowerCase();
			const results = appliance.filter((item) => {
				return item.toLowerCase().includes(box);
			});
			results.forEach((result) => {
				return applianceWrapper.append(createDom("li", `${result}`, { class: "appliance-item" }));
			});
		}
		getApplianceItems();
	});

	const getApplianceItems = () => {
		const applianceItems = document.querySelectorAll(".appliance-item");
		applianceItems.forEach((item) => {
			item.addEventListener("click", () => {
				selectedFilters.push(item.textContent);
				const selectedFiltersNoDuplicata = [...new Set(selectedFilters)];
				createFiltersBar(selectedFiltersNoDuplicata, recipes);
			});
		});
	};

	//create ustensils display when you click on the button
	ustensilBtn.addEventListener("click", () => {
		if (ustensilWrapper.classList.contains("ustensil-list")) {
			applianceArrow.classList.replace("fa-chevron-up", "fa-chevron-down");
			applianceWrapper.classList.replace("appliance-list_display", "appliance-list_nodisplay")
			applianceWrapper.innerHTML = "";
			ingredientArrow.classList.replace("fa-chevron-up", "fa-chevron-down");
			ingredientWrapper.classList.replace("ingredient-list_diplay", "ingredient-list_nodisplay")
			ingredientWrapper.innerHTML = "";
			ustensilArrow.classList.replace("fa-chevron-down", "fa-chevron-up");
			ustensilWrapper.classList.replace("ustensils-list_nodisplay","ustensils-list_nodisplay")
			ustensils.forEach((ustensil) => {
				return ustensilWrapper.append(createDom("li", `${ustensil}`, { class: "ustensils-item" }));
			});
		} else {
			ustensilArrow.classList.replace("fa-chevron-up", "fa-chevron-down");
			ustensilWrapper.classList.replace("ustensils-list_display","ustensils-list_nodisplay")
			ustensilWrapper.innerHTML = "";
		}
		getUstensilsInput();
	});

	ustensilInput.addEventListener("keyup", (e) => {
		ustensilWrapper.innerHTML = "";
		if (e.target.value.length > 3) {
			const box = e.target.value.toLowerCase();
			const results = ustensils.filter((ustensil) => {
				return ustensil.toLowerCase().includes(box);
			});
			results.forEach((result) => {
				return ustensilWrapper.append(createDom("li", `${result}`, { class: "ustensils-item" }));
			});
		}
		getUstensilInput();
	});

	const getUstensilInput = () => {
		const ustensilItems = document.querySelectorAll(".ustensils-item");
		ustensilItems.forEach((item) => {
			item.addEventListener("click", () => {
				selectedFilters.push(item.textContent);
				const selectedFiltersNoDuplicata = [...new Set(selectedFilters)];
				createFiltersBar(selectedFiltersNoDuplicata, recipes);
			});
		});
	};
};

// open and close 3 buttons filters 
let buttons = document.querySelectorAll(".btn");
let buttonValue;
buttons.forEach((btn) => {
  // OPEN CLOSE FILTER
  btn.addEventListener("click", () => {
    buttonValue = btn.getAttribute("value");
    // console.log(buttonValue, btn);
    openclosefilters.isFiltersInteractive(btn, buttonValue);
  });
});*/
