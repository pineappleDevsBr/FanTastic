import Modal from 'micromodal';

class Uniform {
  constructor() {
    this.elm = document.querySelector('[data-uniform]');
    this.buttonSubmit = this.elm.querySelector('[data-button-uniform]');
    this.modalMessage = document.querySelector('[data-modal]').querySelector('[data-modal-message]');
    this.intervalAnalysisValue = { type: null, data: null };
    this.maxPoint = null;
    this.minPoint = null;
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
  }

  recoverData() {
    this.maxPoint = document.querySelector('[data-max]').value;
    this.minPoint = document.querySelector('[data-min]').value;
    this.intervalAnalysisValue.type = document.querySelector('[data-select-value]').value;
    this.intervalAnalysisValue.data = document.querySelector('[data-interval]').value;
  }

  validateData() {
    if (this.maxPoint === '' || this.minPoint === '' || this.intervalAnalysisValue.type === ' -- ' || this.intervalAnalysisValue.data === '') {
      this.modalMessage.innerHTML = 'Peencha todos os campos!';
      Modal.show('modal-1');
    } else {
      const teste = `Ponto minimo: ${this.minPoint}<br />Ponto Maximo: ${this.maxPoint}<br />Tipo intervalo: ${this.intervalAnalysisValue.type}<br />Intervalo: ${this.intervalAnalysisValue.data}`;

      this.modalMessage.innerHTML = teste;
      Modal.show('modal-1');
    }
  }
}

export default {
  create() {
    return new Uniform();
  },
};

export const Class = Uniform;
