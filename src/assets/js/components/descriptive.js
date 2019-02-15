// import Ordinal from './components/modules/descriptive/ordinal';
// import Nominal from './components/modules/descriptive/nominal';
// import Discreta from './components/modules/descriptive/discreta';
// import Continue from './modules/descriptive/continue';

class Descriptive {
  constructor() {
    this.button = document.querySelector('[data-button-descriptive]');
    this.elm = null;
    this.radioHolder = null;
    this.listRadio = null;
    this.data = null;
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
        if (labels[i].getAttribute('id') === 'nominal') {
          orderOrdinal.removeAttribute('disabled');
        } else {
          orderOrdinal.setAttribute('disabled', true);
        }
      });
    }
  }

  setupListener() {
    this.button.addEventListener('click', (evt) => {
      evt.preventDefault();
      this.recoverData();
      this.convertArray();
      // this.choiceTypeVariable();
      console.log(this.result);
    });
  }

  convertArray() {
    this.data = this.data.split(';');
    console.log(this.data);

    this.dataConverted = this.data.map(num => parseInt(num, 10));
    console.log(this.dataConverted);
  }

  recoverData() {
    this.elm = document.querySelector('[data-descriptive]');
    this.radioHolder = this.elm.querySelector('[data-radios]');
    this.listRadio = this.radioHolder.querySelectorAll('input');
    this.data = this.elm.querySelector('[data-dados]').value;
    this.orderOrdinal = this.elm.querySelector('[data-order]').value;
  }

  // choiceTypeVariable() {
  //   if (this.listRadio[0].checked === true) {
  //     this.result = new Ordinal(this.dataConverted, this.orderOrdinal);
  //   } else if (this.listRadio[1].checked === true) {
  //     this.result = new Nominal(this.dataConverted);
  //   } else if (this.listRadio[2].checked === true) {
  //     this.result = new Discreta(this.dataConverted);
  //   } else if (this.listRadio[3].checked === true) {
  //     this.result = new Continue(this.dataConverted);
  //   }
  // }
}

export default{
  create() {
    return new Descriptive();
  },
};

export const Class = Descriptive;
