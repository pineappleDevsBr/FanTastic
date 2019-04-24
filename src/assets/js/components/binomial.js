import Modal from 'micromodal';

class Binomial {
  constructor() {
    this.elm = document.querySelector('[data-binomial]');
    this.buttonSubmit = this.elm.querySelector('[data-button-binomial]');
    this.modalMessage = document.querySelector('[data-modal]').querySelector('[data-modal-message]');
    this.size = null;
    this.event = null;
    this.sucess = null;
    this.failure = null;

    this.setup();
  }

  setup() {
    this.setupListeners();
  }

  setupListeners() {
    this.buttonSubmit.addEventListener('click', (evt) => {
      evt.preventDefault();

      this.recoverData();
      this.validateData();
    });
  }

  recoverData() {
    const bigData = document.querySelector('[data-binomial]');

    this.size = Number(bigData.querySelector('[data-size]').value);
    this.sucess = Number(bigData.querySelector('[data-sucess]').value);
    this.failure = Number(bigData.querySelector('[data-failure]').value);

    this.event = (bigData.querySelector('[data-event]').value).split(/;/);
    this.event = this.event.map(num => Number(num));
  }

  validateData() {
    if (!this.size || !this.event || !this.sucess || !this.failure) {
      this.modalMessage.innerHTML = 'Preencha todos os dados!';
      Modal.show('modal-1');
    } else {
      this.modalMessage.innerHTML = `size: ${this.size}<br />event: ${this.event}<br />sucess: ${this.sucess}<br />failure ${this.failure}`; // eslint-disable-line
      Modal.show('modal-1');
    }
  }
}

export default {
  create() {
    return new Binomial();
  },
};

export const Class = Binomial;
