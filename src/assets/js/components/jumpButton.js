import Jump from 'jump.js';

class JumpButton {
  constructor(elm) {
    this.elm = elm;
    this.target = this.elm.getAttribute('href');
    this.setup();
  }

  setup() {
    this.setupListener();
  }

  setupListener() {
    this.elm.addEventListener('click', (evt) => {
      evt.preventDefault();
      JumpButton.jumpToTarget(this.target);
    });
  }

  static jumpToTarget(target) {
    Jump(target);
  }
}

export default {
  create() {
    const elements = document.querySelectorAll('[data-jump]');
    const instances = [];

    Array.from(elements).forEach((elm) => {
      instances.push(new JumpButton(elm));
    });
  },
};

export const Class = JumpButton;
