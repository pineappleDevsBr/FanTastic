import Jump from 'jump.js';
import MicroModal from 'micromodal';
import Nominal from './modules/descriptive/nominal';
import Ordinal from './modules/descriptive/ordinal';
import Discreet from './modules/descriptive/discreet';
import Continue from './modules/descriptive/continue';

class Descriptive {
  constructor() {
    this.button = document.querySelector('[data-button-descriptive]');
    this.buttonFile = document.querySelector('[data-button-file]');
    this.holderResult = document.querySelector('[data-result-holder]');
    this.modalMessage = document.querySelector('[data-modal]').querySelector('[data-modal-message]');
    this.elm = null;
    this.radioHolder = null;
    this.separatrisHolder = null;
    this.separatrisItems = null;
    this.listRadio = null;
    this.processList = null;
    this.processChecked = null;
    this.data = null;
    this.dataName = null;
    this.orderOrdinal = null;
    this.result = null;
    this.dataConverted = [];
    this.setup();
  }

  setup() {
    Descriptive.disableLabel();
    Descriptive.changeRange();
    this.setupListener();
  }

  static changeRange() {
    const rangeList = document.querySelector('[data-separatriz]');
    const rangeLabels = Array.from(rangeList.querySelectorAll('[type=radio]'));
    const range = document.querySelector('[data-range]');
    const value = document.querySelector('[data-range-value]');

    rangeLabels.forEach((elm) => {
      elm.addEventListener('click', () => {
        range.setAttribute('step', elm.getAttribute('data-value'));
        value.innerHTML = `${range.value}%`;
      });
    });

    range.addEventListener('input', () => {
      value.innerHTML = `${range.value}%`;
    });
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
          orderOrdinal.value = '';
        }
      });
    }
  }

  setupListener() {
    this.buttonFile.addEventListener('change', () => { this.readFile(); });
    this.button.addEventListener('click', (evt) => {
      evt.preventDefault();
      this.recoverData();
      this.validateNull();
    });
  }

  readFile() {
    if (window.File && window.FileReader && window.FileList && window.Blob) {
      const file = this.buttonFile.files[0];
      const inputFile = document.querySelector('[data-dados]');
      const regExp = [/.txt$/, /.csv$/];
      if (regExp[0].test(file.name) || regExp[1].test(file.name)) {
        const reader = new FileReader();
        reader.onload = () => {
          inputFile.value = reader.result;
        };
        reader.readAsText(file);
      } else {
        this.modalMessage.innerHTML = 'Escolha um arquivo no formato .txt ou .csv';
        MicroModal.show('modal-1');
      }
    } else {
      this.modalMessage.innerHTML = 'Seu navegador nao suporta essa funcionalidade';
      MicroModal.show('modal-1');
    }
  }

  recoverData() {
    this.elm = document.querySelector('[data-descriptive]');
    this.radioHolder = this.elm.querySelector('[data-radios]');
    this.listRadio = this.radioHolder.querySelectorAll('input');
    this.separatrisHolder = this.elm.querySelector('[data-separatriz]');
    this.processList = Array.from(this.elm.querySelector('[data-process]').querySelectorAll('input[type=radio]'));

    this.processList.forEach((elm) => {
      if (elm.checked) {
        this.processChecked = elm.id;
      }
    });

    this.separatrisItems = {
      radios: Array.from(this.separatrisHolder.querySelectorAll('input[type=radio]')),
      range: this.separatrisHolder.querySelector('input[type=range]').value,
      isChecked: null,
    };
    this.separatrisItems.isChecked = this.wichyChecked();

    this.data = this.elm.querySelector('[data-dados]').value;
    this.dataName = this.elm.querySelector('[data-name]').value;
    this.orderOrdinal = this.elm.querySelector('[data-order]').value;
  }

  wichyChecked() {
    let checked = null;

    this.separatrisItems.radios.forEach((elm) => {
      if (elm.checked) { checked = elm.id; }
    });

    return checked;
  }

  validateNull() {
    if (this.listRadio[1].checked) {
      if (!this.data || !this.dataName || !this.orderOrdinal) {
        this.modalMessage.innerHTML = 'Preencha todos os campos!';
        MicroModal.show('modal-1');
      } else {
        this.validateCharacter();
      }
    } else if (!this.data || !this.dataName) {
      this.modalMessage.innerHTML = 'Preencha todos os campos!';
      MicroModal.show('modal-1');
    } else {
      this.validateCharacter();
    }
  }

  validateCharacter() {
    const regExpNumber = /^[\d]+([;,][\d]+)*$/;
    const regExpText = /^[\w]+([;][\w]+)*$/;

    if (this.listRadio[0].checked || this.listRadio[1].checked) {
      if (!regExpText.test(this.data)) {
        this.modalMessage.innerHTML = 'Parece que seus dados estão com um probemas, seus dados nao podem iniciar nem terminar com \';\', tambem nao pode contem separações seguidas!';
        MicroModal.show('modal-1');
      } else {
        this.convertArray();
        this.choiceTypeVariable();
        this.appendResult();
      }
    } else if (!regExpNumber.test(this.data)) {
      this.modalMessage.innerHTML = 'Parece que seus dados estão com um probemas, seus dados nao podem iniciar nem terminar com \';\', tambem nao pode contem separações seguidas!';
      MicroModal.show('modal-1');
    } else {
      this.convertArray();
      this.choiceTypeVariable();
      this.appendResult();
    }
  }

  convertArray() {
    this.data = this.data.split(/;/);
    this.orderOrdinal = this.orderOrdinal.split(/;/);
    this.dataConverted = this.data.map(num => parseFloat(num, 10));
  }

  choiceTypeVariable() {
    if (this.listRadio[0].checked) {
      this.result = Nominal.create(this.data, this.dataName, this.separatrisItems).getResult();
    } else if (this.listRadio[1].checked) {
      this.result = Ordinal.create(this.data, this.dataName, this.orderOrdinal, this.separatrisItems).getResult(); // eslint-disable-line
    } else if (this.listRadio[2].checked) {
      this.result = Discreet.create(this.dataConverted, this.dataName, this.separatrisItems, this.processChecked).getResult(); // eslint-disable-line
    } else if (this.listRadio[3].checked) {
      this.result = Continue.create(this.dataConverted, this.dataName, this.separatrisItems, this.processChecked).getResult(); // eslint-disable-line
    }
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
    return new Descriptive();
  },
};

export const Class = Descriptive;
