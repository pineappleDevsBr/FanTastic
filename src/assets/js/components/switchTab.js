class SwitchTab {
  constructor(elm) {
    this.elm = document.querySelector(elm);
    this.tabs = this.elm.querySelector('[data-tab]');
    this.boxes = this.elm.querySelector('[data-box]');
    this.tabsList = this.tabs.querySelectorAll('li');
    this.boxesList = this.boxes.querySelectorAll('div');
    this.currentIndex = 0;
    this.setup();
  }

  setup() {
    this.setupListeners();
  }

  setupListeners() {
    for (let i = 0; i < this.tabsList.length; i += 1) {
      const index = i;
      this.tabsList[i].addEventListener('click', this.toggleClass.bind(this, index));
    }
  }

  toggleClass(index) {
    this.boxesList[this.currentIndex].classList.remove('is-active');
    this.boxesList[index].classList.add('is-active');
    this.currentIndex = index;
  }
}

export default{
  create(elm) {
    return new SwitchTab(elm);
  },
};

export const Class = SwitchTab;
