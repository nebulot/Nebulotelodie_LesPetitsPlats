export function displayDropdown(e) {
  
    // close dropdown 
    closeDropdown();
    // ALL BTNS INACTIVE
    [...opened].forEach(elt => elt.style.display = "none");
    [...hidden].forEach(elt => elt.style.display = "flex");
    // ONE BTN ACTIVE
    const [container] = [...opened].filter(elt => elt.contains(e.target)).length > 0
        ? [...opened].filter(elt => elt.contains(e.target))
        : [...hidden].filter(elt => elt.contains(e.target));
    const isOpened = buttons.id;
    const type = container.classList[container.classList.length - 1];
    const [siblingContainer] = [...dropdownsBar.querySelectorAll(`.${type}`)].filter(elt => elt.id != isOpened);
  
    container.style.display = "flex" ? "none" : "flex";
    siblingContainer.style.display = container.style.display == "flex" ? "none" : "flex";
  
  // and tags condition
  if (isOpened == "hidden") {
    listTags(type);
  }
  }
  
  // create CLOSEDROPDOWN 
  function closeDropdown() {
    [...opened].forEach(elt => elt.querySelector("input").value = "");
    [...opened].forEach(elt => elt.style.display = "none");
    [...hidden].forEach(elt => elt.style.display = "flex");
  
  } 