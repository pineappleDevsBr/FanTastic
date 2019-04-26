import Modal from 'micromodal';
import * as math from 'mathjs';

class Binomial {
  constructor() {
    this.elm = document.querySelector('[data-binomial]');
    this.buttonSubmit = this.elm.querySelector('[data-button-binomial]');
    this.modalMessage = document.querySelector('[data-modal]').querySelector('[data-modal-message]');
    this.size = null;
    this.event = null;
    this.sucess = null;
    this.failure = null;
    this.probabilityValue = [];

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

    this.size = parseFloat(bigData.querySelector('[data-size]').value);
    this.sucess = parseFloat(bigData.querySelector('[data-sucess]').value);
    this.failure = parseFloat(bigData.querySelector('[data-failure]').value);

    this.event = (bigData.querySelector('[data-event]').value).split(/;/);
    this.event = this.event.map(num => parseFloat(num));
    console.log(this.event);
  }

  validateData() {
    if (!this.size || !this.event || !this.sucess || !this.failure) {
      this.modalMessage.innerHTML = 'Preencha todos os dados!';
      Modal.show('modal-1');
    } else {
      this.probability();
      // this.median();
      // this.standardDeviation();
    }
  }

  probability() {
    this.event.forEach((i) => {
      const pao = {
        a: Binomial.combinatorialAnalysis(this.size, this.event[i]),
        b: Math.pow(this.sucess, this.event[i]), // eslint-disable-line
        c: Math.pow(this.failure, (this.size - this.event[i])) // eslint-disable-line
      };

      console.log(pao);
    });

    console.log(this.probabilityValue);
  }

  static combinatorialAnalysis(n, k) {
    return (math.factorial(n) / ((math.factorial(k) * (math.factorial(n - k)))));
  }
}

export default {
  create() {
    return new Binomial();
  },
};

export const Class = Binomial;
