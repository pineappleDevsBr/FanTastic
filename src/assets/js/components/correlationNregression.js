import MicroModal from 'micromodal';

class CorrelationNRegression {
  constructor() {
    this.submitButton = document.querySelector('[data-button-cr]');
    this.modalMessage = document.querySelector('[data-modal]').querySelector('[data-modal-message]');
    this.dataX = { name: null, value: null, somX: null, somXsqr: null };
    this.dataY = { name: null, value: null, somY: null, somYsqr: null };
    this.dataXY = null;
    this.dataR = null;
    this.setup();
  }

  setup() {
    this.setupListeners();
  }

  setupListeners() {
    this.submitButton.addEventListener('click', (evt) => {
      evt.preventDefault();
      this.recoverData();
      this.validateData();
    });
  }

  recoverData() {
    this.dataX.name = document.querySelector('[data-cr-name-x]').value;
    this.dataY.name = document.querySelector('[data-cr-name-y]').value;
    this.dataX.value = document.querySelector('[data-cr-x]').value.replace(/,/, '.');
    this.dataY.value = document.querySelector('[data-cr-y]').value.replace(/,/, '.');
  }

  validateData() {
    if (!this.dataX.name || !this.dataY.name || !this.dataX.value || !this.dataY.value ) { // eslint-disable-line
      this.modalMessage.innerHTML = 'Preencha todos os campos!!!';
      MicroModal.show('modal-1');
    } else {
      this.convertData();
      this.generateMatrix();
      this.generateR();
    }
  }

  convertData() {
    this.dataX.value = this.dataX.value.split(/;/);
    this.dataY.value = this.dataY.value.split(/;/);
    this.dataX.value = this.dataX.value.map(num => parseFloat(num));
    this.dataY.value = this.dataY.value.map(num => parseFloat(num));
  }

  generateMatrix() {
    for (let index = 0; index < this.dataX.value.length; index += 1) {
      this.dataX.somX += this.dataX.value[index];
      this.dataY.somY += this.dataY.value[index];
      this.dataX.somXsqr += Math.pow(this.dataX.value[index], 2); // eslint-disable-line
      this.dataY.somYsqr += Math.pow(this.dataY.value[index], 2); // eslint-disable-line
      this.dataXY += (this.dataX.value[index] * this.dataY.value[index]);
    }
  }

  generateR() {
    const size = this.dataX.value.length;
    this.dataR = (size * this.dataXY) - (this.dataX.somX * this.dataY.somY);

    const qd1 = (size * this.dataX.somXsqr) - Math.pow(this.dataX.somX, 2); // eslint-disable-line
    const qd2 = (size * this.dataY.somYsqr) - Math.pow(this.dataY.somY, 2); // eslint-disable-line

    this.dataR = this.dataR / Math.sqrt(qd1 * qd2);

    console.log(this.dataR);
  }
}

export default {
  create() {
    return new CorrelationNRegression();
  },
};

export const Class = CorrelationNRegression;
