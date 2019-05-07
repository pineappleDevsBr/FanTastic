import MicroModal from 'micromodal';
import Jump from 'jump.js';
import user from '../../../_data/credentials.json';

class Login {
  constructor() {
    this.openButton = document.querySelector('[data-open-login]');
    this.submitButton = document.querySelector('[data-submit-login]');
    this.sectionForm = document.querySelector('[data-section-form]');
    this.credentials = user.user;
    this.email = null;
    this.password = null;
    this.setup();
  }

  setup() {
    this.setupListeners();
  }

  setupListeners() {
    this.openButton.addEventListener('click', () => { MicroModal.show('modal-2'); });
    this.submitButton.addEventListener('click', (evt) => { this.validateUser(evt); });
  }

  validateUser(evt) {
    evt.preventDefault();

    this.email = document.querySelector('[data-email-login]');
    this.password = document.querySelector('[data-password-login]');


    if (this.email.value === this.credentials.login && this.password.value === this.credentials.password) { // eslint-disable-line
      this.sectionForm.classList.add('is-active');
      MicroModal.close('modal-2');

      setTimeout(() => {
        Jump(this.sectionForm);
      }, 300);
    } else {
      this.email.setCustomValidity('Invalid field.');
    }
  }
}

export default {
  create() {
    return new Login();
  },
};

export const Class = Login;
