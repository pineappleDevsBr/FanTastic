import MicroModal from 'micromodal';
import Jump from 'jump.js';
import doT from 'dot';

class CorrelationNRegression {
  constructor() {
    this.submitButton = document.querySelector('[data-button-cr]');
    this.modalMessage = document.querySelector('[data-modal]').querySelector('[data-modal-message]');
    this.holderResult = document.querySelector('[data-result-holder]');
    this.canvasHolder = document.querySelector('[data-canvas]');
    this.containerResult = document.createElement('div');
    this.crTemplate = doT.template('<div class="c-prob-result"><p class="c-prob-result__cell"><b>Coeficiente de correlação:</b><br /> {{=it.cr}}</p><p class="c-prob-result__cell"><b>Nivel de correlção:</b> <br />{{=it.crNvl}}</p><p class="c-prob-result__cell"><b>Equação da reta:</b> <br />{{=it.equaCR}}</p></div>');
    this.dataX = { name: null, value: null, somX: null, somXsqr: null };
    this.dataY = { name: null, value: null, somY: null, somYsqr: null };
    this.dataXY = null;
    this.dataR = null;
    this.dataA = null;
    this.dataB = null;
    this.rateR = null;
    this.inputX = document.createElement('input');
    this.inputY = document.createElement('input');
    this.containerFuture = document.createElement('div');
    this.valueX = null;
    this.valueY = null;
    this.result = null;
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
      this.regression();
      this.futureProjection();
      this.createResult();
      this.appendResult();
    }
  }

  convertData() {
    this.dataX.value = this.dataX.value.split(/;/);
    this.dataY.value = this.dataY.value.split(/;/);
    this.dataX.value = this.dataX.value.map(num => parseFloat(num));
    this.dataY.value = this.dataY.value.map(num => parseFloat(num));
  }

  generateMatrix() {
    this.dataX.somX = null;
    this.dataY.somY = null;
    this.dataX.somXsqr = null;
    this.dataY.somYsqr = null;
    this.dataXY = null;

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
    this.dataR = this.dataR * 100;
    this.dataR = Math.round(this.dataR);
    this.dataR = this.dataR / 100;

    if (this.dataR < 0.3) {
      this.rateR = 'inexistente ou muito fraca';
    } else if (this.dataR >= 0.3 && this.dataR < 0.6) {
      this.rateR = 'fraca';
    } else if (this.dataR >= 0.6 && this.dataR <= 1) {
      this.rateR = 'média a forte';
    }
  }

  regression() {
    const size = this.dataX.value.length;
    this.dataA = (size * this.dataXY) - (this.dataX.somX * this.dataY.somY);
    const qd1 = (size * this.dataX.somXsqr) - Math.pow(this.dataX.somX, 2); // eslint-disable-line
    this.dataA = (this.dataA / qd1).toFixed(2);
    this.dataB = (this.dataY.somY / size) - (this.dataA * (this.dataX.somX / size));
    this.dataB = (Math.round(this.dataB * 100)) / 100;
  }

  futureProjection() {
    this.containerFuture.innerHTML = '';
    this.inputX.addEventListener('keyup', (e) => { this.listenerX(e); });
    this.inputY.addEventListener('keyup', (e) => { this.listenerY(e); });

    const elemA = document.createElement('p');
    const nodeA = document.createTextNode(` = ${this.dataA} x`);
    const elemB = document.createElement('p');
    const nodeB = document.createTextNode(`+${this.dataB}`);

    elemA.appendChild(nodeA);
    elemB.appendChild(nodeB);

    this.containerFuture.appendChild(this.inputY);
    this.containerFuture.appendChild(elemA);
    this.containerFuture.appendChild(this.inputX);
    this.containerFuture.appendChild(elemB);
  }

  listenerX(e) {
    if (this.inputX.value === '') {
      this.inputY.value = '';
    } else {
      this.valueX = e.currentTarget.value;

      this.valueY = ((this.dataA * this.valueX) + this.dataB).toFixed(2);
      this.inputY.value = this.valueY;
    }
  }

  listenerY(e) {
    if (this.inputY.value === '') {
      this.inputX.value = '';
    } else {
      this.valueY = e.currentTarget.value;
      this.valueX = ((this.valueY - this.dataB) / this.dataA).toFixed(2);
      this.inputX.value = this.valueX;
    }
  }

  createResult() {
    this.containerResult.innerHTML = '';
    this.result = this.crTemplate({
      cr: this.dataR,
      crNvl: this.rateR,
      equaCR: `y = ${this.dataA}x + ${this.dataB}`,
    });

    const resultCells = document.createElement('div');

    resultCells.innerHTML = this.result;

    this.containerResult.appendChild(resultCells);
    this.containerResult.appendChild(this.containerFuture);
  }

  appendResult() {
    if (this.containerResult !== undefined) {
      if (this.holderResult.className.indexOf('is-active') === -1) {
        this.holderResult.classList.add('is-active');
      }

      this.holderResult.querySelector('[data-table-result]').innerHTML = '';
      this.canvasHolder.innerHTML = '';
      this.holderResult.querySelector('[data-table-result]').appendChild(this.containerResult);
      setTimeout(() => {
        Jump('.s-section--result');
      }, 500);
    }
  }
}

export default {
  create() {
    return new CorrelationNRegression();
  },
};

export const Class = CorrelationNRegression;
