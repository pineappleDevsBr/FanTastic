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
      const probabilityObject = {
        a: Binomial.combinatorialAnalysis(this.size, this.event[i]),
        b: Math.pow(this.sucess, this.event[i]), // eslint-disable-line
        c: (Math.pow(this.failure, (this.size - this.event[i])) * 100).toFixed(2) // eslint-disable-line
      };

      console.log(probabilityObject);
    });

    console.log(this.probabilityValue);
  }

  static combinatorialAnalysis(n, k) {
    if (k === 0) {
      return 1;
    }
    return (Binomial.factorial(n) / ((Binomial.factorial(k) * (Binomial.factorial(n - k)))));
  }

  static factorial(n) {
    if (n === 1) {
      return 1;
    }

    return n * Binomial.factorial(n - 1);
  }
}

export default {
  create() {
    return new Binomial();
  },
};

export const Class = Binomial;
