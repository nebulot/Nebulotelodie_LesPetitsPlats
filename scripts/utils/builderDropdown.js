
export class DropdownsBuilder {
  constructor(type) {
      this.type = type;
      this.color = this.Color();
  }
  Color() {
      switch (this.type) {
          case 'ingredients':
              return 'primary';
          case 'appareils':
              return 'success';
          case 'ustensiles':
              return 'danger';
          default:
              console.log('ERROR');
      }
  }
  hiddenDrop() {

    const buttons = document.createElement("div");
    buttons.classList =  `btn-${this.type}-container col-1 px-0 input-group `;
    buttons.id = "hidden";

    const btnOne = document.createElement("button");
      btnOne.classList = `form-control form-control-lg py-4 btn-${this.type} ingredients btn  btn-${this.color} rounded-left border-0`;
      btnOne.innerText = this.type[0].toUpperCase() + this.type.substr(1);
      const btnOpen = document.createElement('button');
      btnOpen.classList = `input-group-text px-3 rounded-right border-0 text-white bg-${this.color}`;
      btnOpen.innerHTML = '<i class="fas fa-chevron-down"></i>';

      buttons.appendChild(btnOne);
      buttons.appendChild(btnOpen);
      return buttons;
  }
     

      
  openedDrop() {
      const buttons = document.createElement('div');
      const wrapper = document.createElement('div');
      const input = document.createElement('input');
      const btn = document.createElement('button');
      const listItem = document.createElement('div');

      buttons.className = `row rounded mx-0 bg-${this.color} ${this.type}`;
      buttons.id = 'opened';
      wrapper.classList = `col input-group list-wrapper`;
      input.classList = `input-dropdown form-control form-control-lg py-4 rounded-left border-0 text-white bg-${this.color}`;
      input.id = `input-${this.type}`;
      input.type = 'text';
      input.name = `input-${this.type}`;
      input.placeholder = `Rechercher un ${this.type.substr(0, this.type.length - 1)}`;
      btn.classList = `input-group-text px-3 rounded-right border-0 text-white bg-${this.color}`;
      btn.innerHTML = '<i class="fas fa-chevron-up"></i>';                 
      listItem.classList = `rounded-bottom border-0 text-white bg-${this.color} tag-result`;

      wrapper.appendChild(input);
      wrapper.appendChild(btn);
      buttons.appendChild(wrapper);
      buttons.appendChild(listItem);
      return buttons;
      
  }
  make() {
    return [this.hiddenDrop(), this.openedDrop()];
    
  }
  
  
  }
  
  
  

