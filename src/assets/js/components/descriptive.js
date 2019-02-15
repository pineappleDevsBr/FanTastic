import Ordinal  from 'modules/descriptive/ordinal';
import Nominal  from 'modules/descriptive/nominal';
import Discreta from 'modules/descriptive/discreta';
import Continua from 'modules/descriptive/continua';

class Descriptive {
  constructor() {
    this.button = document.querySelector('[data-button-descriptive]');
    this.elm = null;
    this.radioHolder = null;
    this.listRadio = null;
    this.data = null;
    this.orderOrdinal = null;
    this.result = null;
    this.setup();
  }
  
  setup() {
    this.setupListener()
  }
  
  setupListener() {
    this.button.addEventListener('click', (evt) => {
      evt.preventDefault();
      this.recoverData()
      this.choiceTypeVariable()

      console.log(this.result);
      
    })
  }
  
  recoverData() {
    this.elm = document.querySelector('[data-descriptive]');
    this.radioHolder = this.elm.querySelector('[data-radios]');
    this.listRadio = this.radioHolder.querySelectorAll('input');
    this.data = this.elm.querySelector('[data-dados]');
    this.orderOrdinal = this.elm.querySelector('[data-order]')
  }

  choiceTypeVariable() {
    if(this.listRadio[0].checked == true) {

      this.result = new Ordinal(this.data, this.orderOrdinal);

    } else if (this.listRadio[1].checked == true) {

      this.result = new Nominal(this.data)

    } else if (this.listRadio[2].checked == true) {

      this.result = new Discreta(this.data)

    } else if (this.listRadio[3].checked == true) {

      this.result = new Continua(this.data)

    }
  }
}