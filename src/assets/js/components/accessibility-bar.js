import Cookie from 'js-cookie';

class AccessibilityBar {
  constructor(elm) {
    this.elm = document.querySelector(elm);
    this.container = document.documentElement;
    this.contrastButton = this.elm.querySelector('[data-contrast-button]');
    this.hasContrast = false;

    this.setupListeners();
    this.applyInitialState();
  }

  applyInitialState() {
    const isConstrast = Cookie.get('isContrast');

    if (isConstrast) {
      this.container.classList.add('accessibility-mode');
      this.contrastButton.classList.add('is-active');
      this.hasContrast = true;
    }
  }

  setupListeners() {
    this.contrastButton.addEventListener('click', () => {
      this.container.classList.toggle('accessibility-mode');
      this.contrastButton.classList.toggle('is-active');

      if (this.hasContrast) {
        Cookie.remove('isContrast');
        this.hasContrast = false;
      } else {
        Cookie.set('isContrast', 'isContrast');
        this.hasContrast = true;
      }
    });
  }
}

export default {
  create(elm) {
    return new AccessibilityBar(elm);
  },
};

export const Class = AccessibilityBar;
