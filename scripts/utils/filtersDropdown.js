import { DropdownsBuilder } from './builderDropdown.js';
import { ingredientsMap, appliancesMap, utensilsMap } from './builderDropdown.js';
import { RecipeCard } from "./constructor/displayCards.js";
import { getRecipes } from '../api.js';
import { recipes } from '../index.js';
import {Alerts} from '../utils/alerts.js';


// when you choose on the dropdown toogle => one tag 
export let selectedTags = [];

// open close and select tag on btn dropdown-list

export class DropdownHandler {
	// create new array with Array.prototype.map
	//type Array : Array<string>
  selectedTagsMap = New Map();
  typeArray = ["ingredient", "appliance", "utensil"];

  constructor(RecipeCard, DropdownsBuilder,)
   {
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