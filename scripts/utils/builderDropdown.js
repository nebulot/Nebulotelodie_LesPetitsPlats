//import { dropdownFilters } from "./filtersDropdown.js";
//import {ingredientMap, applianceMap, ustensilMap} from "./filtersDropdown.js";
import { RecipeCard } from "../constructor/displayCards.js";
import { Alerts } from "./alerts.js";


/*const dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
const dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
  return new bootstrap.Dropdown(dropdownToggleEl)
})
*/

// create tag when you chouse you item under dropdownlist
// @ param selectedTags : Array<string>

export let selectedTags = [];

//create display dropdown toggle whith the three buttons

export class dropdownBuilder {
  // create tag when you choose your item
  selectedTagsMap = new Map();
  //three buttons' array  typeArray : Array<string>
  typeArray = ["ingredient", "ustensil", "appliance"];
  

  constructor(
    /*
     * @constructor
     * @param displayCards : RecipeCard
     * @param alerts : Alerts
     * @param searchBar :
     * @param
     */
    RecipeCard, 
    
  ) {
	
    this.typeArray.forEach((type) => {
      let list = `.${type}-list-wrapper`;
      let input = `input-${type}`;
      let element = 
      this.openDropdown(type, list, input);
      this.closeDropdown(type, list);
      this.inputListener(type, input);
      //console.log(list);
      //console.log(input);
    });
    this.removeTags();
    
	
  }

  // create li 
  
      
   
    
  

  //part 1 OPEN dropdown and list for all buttons whent you click opened and expanded toggle and see input label
  openDropdown(type, list, input) {
    let dropdown = `.btn-${type}`;
    const dropdownBtn = document.querySelector(dropdown);
    const dropdownList = document.querySelector(list);
    const dropdownInput = document.getElementById(input);
    const itemList = document.createElement("li");
    itemList.className = `list-item-${type}`;
    itemList.innerHTML = `${element}`;
    dropdownList.append(itemList);

    dropdownBtn.addEventListener("click", () => {
      dropdownBtn.classList.add("opened");
      dropdownList.classList.add("expanded");
      dropdownInput.focus();
      
    });
    return itemList;
    
}

//part 2 CLOSE dropdown and list for all buttons whenyou click close no visibility on toggle and input label
  closeDropdown(type, list) {
    let close = `.close-dropdown-${type}`;
    let dropdown = `.btn-${type}`;
    const dropdownBtn = document.querySelector(dropdown);
    const toggleBtn = document.querySelector(close);
    const dropdownList = document.querySelector(list);

    toggleBtn.addEventListener("click", () => {
      dropdownBtn.classList.remove("opened");
      dropdownList.classList.remove("expanded");
      console.log(dropdownBtn);
    });
    console.log(dropdownList);
}

// part 3 create an event with the buttons' input 
inputListener(type, input) {
  const dropdownInput = document.getElementById(input);
  dropdownInput.addEventListener('input', (e) =>
    this.updateDropdownOnInput(e, type)
  );
}

updateDropdownOnInput(e, type) {
  const userInput = e.target.value.toLowerCase();
  const dropdownItem = document.getElementsByClassName(type);
  const dropdownArray = Array.from(dropdownItem);

  //for each with the same condition to the searchBar.js
  dropdownArray.forEach((dropdownItem) => {
    if (
      userInput.length >= 3 &&
      dropdownItem.innerHTML.toLowerCase().includes(userInput)
    ) {
      dropdownItem.style.display = 'block';
    } else if(userInput.length >= 3 &&
      !dropdownItem.innerHTML.toLowerCase().includes(userInput)){
      dropdownItem.style.display = 'none';
    } else if(userInput.length < 2 ){
      dropdownItem.style.display = 'block';
    }
  });
}

// part 4 remove tags when you selected on the list an element
removeTags() {
  this.typeArray.forEach(type => {
    const dropdownItem = document.getElementsByClassName(type);
    const dropdownArray = Array.from(dropdownItem);
    
    dropdownArray.forEach((el) => {
      el.addEventListener('click', () => {
        
        this.createTag(el, type);
        selectedTags.push(el.innerHTML);
       
        this.updateSelectedRecipes();
        this.removeTags();
        
      });
    });
  })
}



	

    }

