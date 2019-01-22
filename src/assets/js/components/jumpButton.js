import Jump from 'jump.js';

class JumpButton {
  constructor(elm, target) {
    this.elm = document.querySelector(elm);
    this.target = document.querySelector(target);
    this.setup();
  }

  setup() {
    this.setupListener();
  }

  setupListener() {
    this.elm.addEventListener('click', () => {
      JumpButton.jumpToTarget(this.target);
    });
  }

  static jumpToTarget(target) {
    Jump(target);
  }
}

export default {
  create(elm, target) {
    return new JumpButton(elm, target);
  },
};

export const Class = JumpButton;
