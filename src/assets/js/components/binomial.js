import Modal from 'micromodal';
import doT from 'dot';
import Jump from 'jump.js';

class Binomial {
  constructor() {
    this.elm = document.querySelector('[data-binomial]');
    this.buttonSubmit = this.elm.querySelector('[data-button-binomial]');
    this.modalMessage = document.querySelector('[data-modal]').querySelector('[data-modal-message]');
    this.binomialTemplate = doT.template('<div class="c-prob-result"><p class="c-prob-result__cell">Probabilidade: {{=it.probabilidade }}%</p><p class="c-prob-result__cell">Média: {{=it.media}}</p><p class="c-prob-result__cell">Desvio Padrão: {{=it.desvioPadrao }}</p></div>');
    this.holderResult = document.querySelector('[data-result-holder]');
    this.canvasHolder = document.querySelector('[data-canvas]');
    this.media = null;
    this.size = null;
    this.event = null;
    this.sucess = null;
    this.failure = null;
    this.standardDeviationValue = null;
    this.probabilityValue = null;
    this.result = null;

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

    this.size = bigData.querySelector('[data-size]').value;
    this.sucess = bigData.querySelector('[data-sucess]').value;
    this.failure = bigData.querySelector('[data-failure]').value;
    this.event = bigData.querySelector('[data-event]').value;
  }

  validateData() {
    const regExpNumber = /^[\d]+([;,.][\d]+)*$/;

    if (!this.size || !this.event || !this.sucess || !this.failure) {
      this.modalMessage.innerHTML = 'Preencha todos os dados!';
      Modal.show('modal-1');
    } else if (!regExpNumber.test(this.event)) {
      this.modalMessage.innerHTML = 'Preencha todos os campos corretamente!';
      Modal.show('modal-1');
    } else {
      this.convertData();
      this.probability();
      this.median();
      this.standardDeviation();
      this.createLayout();
      this.appendResult();
    }
  }

  convertData() {
    this.size = parseFloat(this.size.replace(/,/g, '.'));
    this.sucess = parseFloat(this.sucess.replace(/,/g, '.'));
    this.failure = parseFloat(this.failure.replace(/,/g, '.'));

    this.event = this.event.split(/;/);
    this.event = this.event.map(num => parseFloat(num));
  }

  probability() {
    this.probabilityValue = null;

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
    this.standardDeviationValue = (Math.round(this.standardDeviationValue * 100)) / 100;
  }

  createLayout() {
    this.result = this.binomialTemplate({
      probabilidade: this.probabilityValue,
      media: this.media,
      desvioPadrao: this.standardDeviationValue,
    });
  }

  appendResult() {
    if (this.result !== undefined) {
      if (this.holderResult.className.indexOf('is-active') === -1) {
        this.holderResult.classList.add('is-active');
      }

      this.holderResult.querySelector('[data-table-result]').innerHTML = '';
      this.canvasHolder.innerHTML = '';
      this.holderResult.querySelector('[data-table-result]').innerHTML = this.result;
      setTimeout(() => {
        Jump('.s-section--result');
      }, 500);
    }
  }
}

export default {
  create() {
    return new Binomial();
  },
};

export const Class = Binomial;
