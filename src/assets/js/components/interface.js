class Interface {
  constructor() {
    this.buttonsSubmit = document.querySelectorAll('button[type=submit]');
    this.setup();
  }

  setup() {
    this.setupListeners();
  }

  setupListeners() {
    this.buttonsSubmit.forEach((elm) => {
      elm.addEventListener('keydown', (evt) => {
        if (evt.which === 9) { evt.preventDefault(); }
      });
    });
  }
}

export default {
  create() {
    return new Interface();
  },
};

export const Class = Interface;
