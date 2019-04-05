class HelpBox {
  constructor(elm) {
    this.elm = document.querySelector(elm);
    this.openButton = this.elm.querySelector('[data-button-open]');
    this.closeButton = this.elm.querySelector('[data-button-close]');
    this.items = Array.from(this.elm.querySelectorAll('[data-item]'));
    this.contents = Array.from(this.elm.querySelectorAll('[data-height]'));
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
    this.closeButton.addEventListener('click', () => { this.toggleClass(); });

    this.items.forEach((elm, i) => {
      elm.addEventListener('click', () => { this.setMaxHeight(this.contentsObj[i]); });
    });
  }

  toggleClass() {
    this.elm.classList.toggle('is-active');
  }

  setMaxHeight(elm) {
    const element = elm;
    const dataHeight = elm.elm.firstElementChild.offsetHeight;

    if (this.currentIndex.elm != null) {
      this.currentIndex.elm.style.maxHeight = 0;
      this.currentIndex.isOpen = false;
    }

    if (element.elm !== this.currentIndex.elm) {
      element.isOpen = true;
      this.currentIndex = element;
      element.elm.style.maxHeight = `${dataHeight}px`;
    }
  }
}

export default {
  create(elm) {
    return new HelpBox(elm);
  },
};

export const Class = HelpBox;
