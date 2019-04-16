import Modal from 'micromodal';
import doT from 'dot';
import Jump from 'jump.js';

class Uniform {
  constructor() {
    this.elm = document.querySelector('[data-uniform]');
    this.buttonSubmit = this.elm.querySelector('[data-button-uniform]');
    this.modalMessage = document.querySelector('[data-modal]').querySelector('[data-modal-message]');
    this.holderResult = document.querySelector('[data-result-holder]');
    this.uniformTemplate = doT.template('<div> <p>{{=it.probabilidade}}%</p><p>{{=it.desvioPadrao}}</p><p>{{=it.media}}</p><p>{{=it.coeficienteVaricao}}</p></div>');
    this.intervalAnalysisValue = { type: null, data: null };
    this.maxPoint = null;
    this.minPoint = null;
    this.probability = null;
    this.result = null;
    this.intervalAnalysis = {
      span: this.elm.querySelector('[data-select-span]'),
      select: this.elm.querySelector('[data-select-value]'),
    };

    this.setup();
  }

  setup() {
    this.setupListeners();
  }

  setupListeners() {
    this.intervalAnalysis.select.addEventListener('change', () => { this.changeSelect(); });
    this.buttonSubmit.addEventListener('click', (evt) => {
      evt.preventDefault();
      this.recoverData();
      this.validateData();
    });
  }

  changeSelect() {
    this.intervalAnalysis.span.innerHTML = this.intervalAnalysis.select.value;

    if (this.intervalAnalysis.select.value !== 'entre') {
      document.querySelector('[data-interval]').type = 'number';
    } else {
      document.querySelector('[data-interval]').type = 'text';
    }
  }

  recoverData() {
    this.maxPoint = Number(document.querySelector('[data-max]').value);
    this.minPoint = Number(document.querySelector('[data-min]').value);
    this.intervalAnalysisValue.type = document.querySelector('[data-select-value]').value;
    this.intervalAnalysisValue.data = document.querySelector('[data-interval]').value;

    if (this.intervalAnalysisValue.type === 'entre') {
      this.intervalAnalysisValue.data = this.intervalAnalysisValue.data.split(/;/);
      this.intervalAnalysisValue.data = this.intervalAnalysisValue.data.map(num => Number(num));
    }
  }

  validateData() {
    if (this.maxPoint === '' || this.minPoint === '' || this.intervalAnalysisValue.type === ' -- ' || this.intervalAnalysisValue.data === '') {
      this.modalMessage.innerHTML = 'Peencha todos os campos!';
      Modal.show('modal-1');
    } else if (this.intervalAnalysisValue.type === 'entre' && this.intervalAnalysisValue.data.length > 2) {
      this.modalMessage.innerHTML = "Caso a escolha do intervalo seja 'entre', digite somente com dois dados!";
      Modal.show('modal-1');
    } else {
      this.generateProbability();
      this.generateLayout();
      this.appendResult();
    }
  }

  generateProbability() {
    switch (this.intervalAnalysisValue.type) {
      case 'menor':
        this.probability = (1 / (this.maxPoint - this.minPoint)) * (this.intervalAnalysisValue.data - this.minPoint) * 100; // eslint-disable-line
        break;
      case 'maior':
        this.probability = (1 / (this.maxPoint - this.minPoint)) * (this.maxPoint - this.intervalAnalysisValue.data) * 100; // eslint-disable-line
        break;
      case 'entre':
        this.probability = (1 / (this.maxPoint - this.minPoint)) * (this.intervalAnalysisValue.data[1] - this.intervalAnalysisValue.data[0]) * 100; // eslint-disable-line
        break;
      default: {
        break;
      }
    }

    this.probability = this.probability.toFixed();
  }

  generateLayout() {
    this.result = this.uniformTemplate({ probabilidade: this.probability });
  }

  appendResult() {
    if (this.result !== undefined) {
      if (this.holderResult.className.indexOf('is-active') === -1) {
        this.holderResult.classList.add('is-active');
      }

      this.holderResult.firstElementChild.firstElementChild.innerHTML = '';
      this.holderResult.firstElementChild.firstElementChild.innerHTML = this.result;
      setTimeout(() => {
        Jump('.s-section--result');
      }, 500);
    }
  }
}

export default {
  create() {
    return new Uniform();
  },
};

export const Class = Uniform;
