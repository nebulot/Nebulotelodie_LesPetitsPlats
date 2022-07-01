
const dropdownsBar = document.querySelector(".btns-dropdown");
const opened = dropdownsBar.querySelectorAll("#opened");
const hidden = dropdownsBar.querySelectorAll("#hidden");
console.log(dropdownsBar);

// btn dropdown and search in tag List "li"
hidden.forEach(btn => btn.addEventListener("click", DropdownsDisplay()));
opened.forEach(btn => btn.querySelector("button").addEventListener("click", DropdownsDisplay()));
//opened.forEach(btn => btn.querySelector("input").addEventListener("input", searchTags));

export class DropdownsDisplay {
  constructor(type) {
      this.type = type;
  }


displayDropdown(e) {
  
    // close dropdown 
    closeDropdown();
    // ALL BTNS INACTIVE
    [...opened].forEach(elt => elt.style.display = "none");
    [...hidden].forEach(elt => elt.style.display = "flex");
    // ONE BTN ACTIVE
    const [container] = [...opened].filter(elt => elt.contains(e.target)).length > 0
        ? [...opened].filter(elt => elt.contains(e.target))
        : [...hidden].filter(elt => elt.contains(e.target));
    const isOpened = container.id;
    const type = container.classList[container.classList.length - 1];
    const [siblingContainer] = [...dropdownsBar.querySelectorAll(`.${this.type}`)].filter(elt => elt.id != isOpened);
  
    container.style.display = "flex" ? "none" : "flex";
    siblingContainer.style.display = container.style.display == "flex" ? "none" : "flex";
  
  // and tags condition
  if (isOpened == "hidden") {
    listTags(type);
  }
  }
  
  // create CLOSEDROPDOWN 
 closeDropdown() {
    [...opened].forEach(elt => elt.querySelector("input").value = "");
    [...opened].forEach(elt => elt.style.display = "none");
    [...hidden].forEach(elt => elt.style.display = "flex");
  
  } 
  //console.log(closeDropdown); ok 
  //console.log(hidden);(nodelist)
  //console.log(opened);(nodelist)
}