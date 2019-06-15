import Modal from 'micromodal';
import doT from 'dot';
import Jump from 'jump.js';

class Uniform {
  constructor() {
    this.elm = document.querySelector('[data-uniform]');
    this.buttonSubmit = this.elm.querySelector('[data-button-uniform]');
    this.modalMessage = document.querySelector('[data-modal]').querySelector('[data-modal-message]');
    this.buttonEmpty = document.querySelector('[button-uniform-empty]');
    this.holderResult = document.querySelector('[data-result-holder]');
    this.canvasHolder = document.querySelector('[data-canvas]');
    this.uniformTemplate = doT.template('<div class="c-prob-result"> <p class="c-prob-result__cell">Probabilidade: {{=it.probabilidade}}%</p><p class="c-prob-result__cell">Desvio Padrão: {{=it.desvioPadrao}}</p><p class="c-prob-result__cell">Média: {{=it.media}}</p><p class="c-prob-result__cell">Coeficiente de Variação: {{=it.coeficienteVaricao}}</p></div>');
    this.intervalAnalysisValue = { type: null, data: null };
    this.maxPoint = null;
    this.minPoint = null;
    this.probability = null;
    this.media = null;
    this.standartDeviation = null;
    this.coefficientOfVariation = null;
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
    this.buttonEmpty.addEventListener('click', () => Uniform.setEmpty());
    this.intervalAnalysis.select.addEventListener('change', () => { this.changeSelect(); });
    this.buttonSubmit.addEventListener('click', (evt) => {
      evt.preventDefault();
      this.recoverData();
      this.validateData();
    });
  }

  static setEmpty() {
    document.querySelector('[data-max]').value = '';
    document.querySelector('[data-min]').value = '';
    document.querySelector('[data-interval]').value = '';
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
    this.maxPoint = Number(document.querySelector('[data-max]').value.replace(/,/g, '.'));
    this.minPoint = Number(document.querySelector('[data-min]').value.replace(/,/g, '.'));
    this.intervalAnalysisValue.type = document.querySelector('[data-select-value]').value;
    this.intervalAnalysisValue.data = document.querySelector('[data-interval]').value.replace(/,/g, '.');

    if (this.intervalAnalysisValue.type === 'entre') {
      this.intervalAnalysisValue.data = this.intervalAnalysisValue.data.split(/;/);
      this.intervalAnalysisValue.data = this.intervalAnalysisValue.data.map(num => Number(num));
    }
  }

  validateData() {
    const regExpNumber = /^[\d]+([;,.][\d]+)*$/;

    if (this.maxPoint === '' || this.minPoint === '' || this.intervalAnalysisValue.type === ' -- ' || this.intervalAnalysisValue.data === '') {
      this.modalMessage.innerHTML = 'Peencha todos os campos!';
      Modal.show('modal-1');
    } else if (this.intervalAnalysisValue.type === 'entre' && this.intervalAnalysisValue.data.length > 2) {
      this.modalMessage.innerHTML = "Caso a escolha do intervalo seja 'entre', digite somente dois dados!";
      Modal.show('modal-1');
    } else if (!regExpNumber.test(this.intervalAnalysisValue.data)) {
      this.modalMessage.innerHTML = 'Preencha os campos corretamente!!!';
      Modal.show('modal-1');
    } else {
      this.generateProbability();
      this.generateMedia();
      this.generateStandartDeviation();
      this.generateCoefficientOfVariation();
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

  generateMedia() {
    this.media = (this.maxPoint + this.minPoint) / 2;
  }

  generateStandartDeviation() {
    this.standartDeviation = Math.sqrt((Math.pow((this.maxPoint - this.minPoint), 2)) / 12 ).toFixed(2) // eslint-disable-line
  }

  generateCoefficientOfVariation() {
    this.coefficientOfVariation = (this.standartDeviation / this.media) * 100;
    this.coefficientOfVariation = (Math.round(this.coefficientOfVariation * 100)) / 100;
  }

  generateLayout() {
    this.result = this.uniformTemplate({
      probabilidade: this.probability,
      desvioPadrao: this.standartDeviation,
      media: this.media,
      coeficienteVaricao: this.coefficientOfVariation,
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
    return new Uniform();
  },
};

export const Class = Uniform;
