import SimpleTabs from 'simple-tabs-js';

class HelpBox {
  constructor() {
    this.elm = document.querySelector('[data-help-box]');
    this.openButton = this.elm.querySelector('[data-button-open]');
    this.closeButton = this.elm.querySelector('[data-button-close]');
    this.items = Array.from(this.elm.querySelectorAll('[data-item]'));
    this.contents = Array.from(this.elm.querySelectorAll('[data-height]'));
    this.tabs = SimpleTabs;
    this.contentsObj = [];
    this.currentIndex = { elm: null, isOpen: false };
    this.setup();
  }

  setup() {
    this.createObjects();
    this.setMaxHeightDefault();
    this.setupsListeners();
  }

  createObjects() {
    this.contents.forEach((elm, i) => {
      this.contentsObj[i] = { elm, isOpen: false };
    });
  }

  setMaxHeightDefault() {
    this.contents.forEach((elm) => {
      const element = elm;
      element.style.maxHeight = 0;
    });
  }

  setupsListeners() {
    this.openButton.addEventListener('click', () => { this.toggleClass(); });
    this.closeButton.addEventListener('click', () => {
      this.toggleClass();
      this.setMaxHeightDefault();
    });

    this.items.forEach((elm, i) => {
      elm.addEventListener('click', () => { this.setMaxHeight(i); });
    });
  }

  toggleClass() {
    this.elm.classList.toggle('is-active');
  }

  setMaxHeight(i) {
    const dataHeight = this.contentsObj[i].elm.firstElementChild.offsetHeight;

    if (this.currentIndex.elm != null && this.currentIndex.isOpen) {
      this.currentIndex.elm.style.maxHeight = 0;
      this.currentIndex.isOpen = false;
    } else if (this.currentIndex.elm != null && !this.currentIndex.isOpen) {
      this.contentsObj[i].isOpen = true;
      this.contentsObj[i].elm.style.maxHeight = `${dataHeight}px`;
    }

    if (this.contentsObj[i].elm !== this.currentIndex.elm) {
      this.contentsObj[i].isOpen = true;
      this.contentsObj[i].elm.style.maxHeight = `${dataHeight}px`;
      this.currentIndex = this.contentsObj[i];
    }
  }
}

export default {
  create() {
    return new HelpBox();
  },
};

export const Class = HelpBox;
