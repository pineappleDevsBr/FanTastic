class Douglinhas {
  constructor() {
    this.elm = document.querySelector('[data-doug]');
    this.listHolder = this.elm.querySelector('[list-holder]');
    this.heightChat = this.listHolder.firstElementChild.offsetHeight;
    this.title = this.elm.querySelector('[data-title]');
    this.isOpen = false;
    this.setup();
  }

  setup() {
    this.setupListener();
  }

  setupListener() {
    this.title.addEventListener('click', () => this.setMaxHeight());
  }

  setMaxHeight() {
    if (this.isOpen) {
      this.listHolder.style.maxHeight = 0;
      this.isOpen = !this.isOpen;
    } else {
      this.listHolder.style.maxHeight = `${this.heightChat}px`;
      this.isOpen = !this.isOpen;
    }
  }
}

export default {
  create() {
    return new Douglinhas();
  },
};

export const Class = Douglinhas;
