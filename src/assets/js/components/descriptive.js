import Jump from 'jump.js';
import Nominal from './modules/descriptive/nominal';
// import Nominal from './components/modules/descriptive/nominal';
// import Discreta from './components/modules/descriptive/discreta';
import Continue from './modules/descriptive/continue';

class Descriptive {
  constructor() {
    this.button = document.querySelector('[data-button-descriptive]');
    this.buttonFile = document.querySelector('[data-button-file]');
    this.holderResult = document.querySelector('[data-result-holder]');
    this.elm = null;
    this.radioHolder = null;
    this.listRadio = null;
    this.data = null;
    this.dataName = null;
    this.orderOrdinal = null;
    this.result = null;
    this.dataConverted = [];
    this.setup();
  }

  setup() {
    Descriptive.disableLabel();
    this.setupListener();
  }

  static disableLabel() {
    const labelsList = document.querySelector('[data-radios]');
    const labels = labelsList.querySelectorAll('input');
    const orderOrdinal = document.querySelector('[data-order]');

    for (let i = 0; i < labels.length; i += 1) {
      labels[i].addEventListener('click', () => {
        if (labels[i].getAttribute('id') === 'ordinal') {
          orderOrdinal.removeAttribute('disabled');
        } else {
          orderOrdinal.setAttribute('disabled', true);
        }
      });
    }
  }

  setupListener() {
    this.buttonFile.addEventListener('change', () => { this.readFile(); });
    this.button.addEventListener('click', (evt) => {
      evt.preventDefault();
      this.recoverData();
      this.convertArray();
      this.choiceTypeVariable();
      this.appendResult();
    });
  }

  readFile() {
    if (window.File && window.FileReader && window.FileList && window.Blob) {
      const file = this.buttonFile.files[0];
      const inputFile = document.querySelector('[data-dados]');
      const regExp = [/^.txt/, /^.csv/];
      if (regExp[0].test(file.name) || regExp[1].test(file.name)) {
        const reader = new FileReader();
        reader.onload = () => {
          inputFile.value = reader.result;
        };
        reader.readAsText(file);
      } else (alert('Escolha um arquivo no formato .txt ou .csv'));
    } else { alert('Seu navegador nao suporta essa funcionalidade :('); }
  }

  recoverData() {
    this.elm = document.querySelector('[data-descriptive]');
    this.radioHolder = this.elm.querySelector('[data-radios]');
    this.listRadio = this.radioHolder.querySelectorAll('input');
    this.data = this.elm.querySelector('[data-dados]').value;
    this.dataName = this.elm.querySelector('[data-name]').value;
    this.orderOrdinal = this.elm.querySelector('[data-order]').value;
  }

  convertArray() {
    this.data = this.data.split(/,|;/);
    this.dataConverted = this.data.map(num => parseFloat(num, 10));
  }

  choiceTypeVariable() {
    if (this.listRadio[0].checked === true) {
      this.result = Nominal.create(this.data, this.dataName).getResult();
    } else if (this.listRadio[1].checked === true) {
      // this.result = new Ordinal(this.dataConverted, this.orderOrdinal);
    } else if (this.listRadio[2].checked === true) {
      // this.result = new Discreta(this.dataConverted);
    } else if (this.listRadio[3].checked === true) {
      this.result = Continue.create(this.dataConverted);
    }
  }

  appendResult() {
    if (this.result !== undefined) {
      if (this.holderResult.className.indexOf('is-active') === -1) {
        this.holderResult.classList.add('is-active');
      }

      this.holderResult.firstElementChild.innerHTML = '';
      this.holderResult.firstElementChild.innerHTML = this.result;
      setTimeout(() => {
        Jump('.s-section--result');
      }, 500);
    }
  }
}

export default{
  create() {
    return new Descriptive();
  },
};

export const Class = Descriptive;
