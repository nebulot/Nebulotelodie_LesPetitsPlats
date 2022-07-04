class DropdownsBuilder {
  constructor(type) {
    this.type = type;
    this.color = this.Color();
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
        console.log("ERROR");
    }
  }

  //container display open or hidden => index.js global
  inactiveDrop() {
    const container = document.createElement("div");
    container.classList = `${this.type} col-1 px-0 input-group `;
    container.id = "inactive";

    const btnOne = document.createElement("button");
    btnOne.classList = `form-control form-control-lg py-4 btn-${this.type} ${this.type}  btn-${this.color} rounded-left border-0`;
      // UPPERCASE   and   
   //substr() method return the part of a character string between the starting index and a certain number of characters after it.
    btnOne.innerText = this.type[0].toUpperCase() + this.type.substr(1);


    const btnOpen = document.createElement("button");
    btnOpen.classList = `input-group-text px-3 rounded-right border-0 text-white bg-${this.color}`;
    btnOpen.innerHTML = '<i class="fas fa-chevron-down"></i>';

    container.appendChild(btnOne);
    container.appendChild(btnOpen);
    console.log(btnOne);
    return container;
    
  }
 

  activeDrop() {
    const container = document.createElement("div");
    const wrapper = document.createElement("div");
    const input = document.createElement("input");
    const btn = document.createElement("button");
    const listItem = document.createElement("div");

    container.id = "active";
    container.className = `row rounded mx-0 bg-${this.color} ${this.type}`;

    wrapper.classList = `col input-group list-wrapper`;
    input.classList = `input-dropdown form-control form-control-lg py-4 rounded-left border-0 text-white bg-${this.color}`;
    input.id = `input-${this.type}`;
    input.type = "text";
    input.name = this.type;
    input.placeholder = `Rechercher un ${this.type.substr(
      0,
      this.type.length - 1
    )}`;

    btn.classList = `input-group-text px-3 rounded-right border-0 text-white bg-${this.color}`;
    btn.innerHTML = `<i class="fas fa-chevron-up"></i>`;

    listItem.classList = `rounded-bottom border-0 text-white bg-${this.color} result`;

    wrapper.appendChild(input);
    wrapper.appendChild(btn);
    container.appendChild(wrapper);
    container.appendChild(listItem);
    return container;
  }
  make() {
    return [this.inactiveDrop(), this.activeDrop()];
  }
}
