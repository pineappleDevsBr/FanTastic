import Modal from 'micromodal';
// import doT from 'dot';

class Binomial {
  constructor() {
    this.elm = document.querySelector('[data-binomial]');
    this.buttonSubmit = this.elm.querySelector('[data-button-binomial]');
    this.modalMessage = document.querySelector('[data-modal]').querySelector('[data-modal-message]');
    this.size = null;
    this.event = null;
    this.sucess = null;
    this.failure = null;
    this.standardDeviationValue = null;
    this.probabilityValue = null;

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
      this.median();
      this.standardDeviation();
      // this.createResult();
    }
  }

  probability() {
    this.event.forEach((i) => {
      const probabilityObject = {
        a: Binomial.combinatorialAnalysis(this.size, i),
        b: Math.pow(this.sucess, i), // eslint-disable-line
        c: Math.pow(this.failure, (this.size - i)), // eslint-disable-line
      };

      probabilityObject.d = ((probabilityObject.a * probabilityObject.b * probabilityObject.c) * 100).toFixed(2); // eslint-disable-line
      probabilityObject.d = parseFloat(probabilityObject.d);

      this.probabilityValue += probabilityObject.d;
    });
  }

  static combinatorialAnalysis(n, k) {
    if (!k) {
      return 1;
    }

    return (Binomial.factorial(n) / ((Binomial.factorial(k) * (Binomial.factorial(n - k)))));
  }

  static factorial(n) {
    if (n === 1 || n === 0) {
      return 1;
    }

    return n * Binomial.factorial(n - 1);
  }

  median() {
    this.media = this.size * this.sucess;
  }

  standardDeviation() {
    this.standardDeviationValue = Math.sqrt(this.size * this.sucess * this.failure);
  }
}

export default {
  create() {
    return new Binomial();
  },
};

export const Class = Binomial;
