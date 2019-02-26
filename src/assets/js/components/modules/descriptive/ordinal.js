// import doT from 'dot';
// import Chart from 'chart.js';
import Order from '../common/order';
// import Moda from '../common/moda';

class Ordinal {
  constructor(vet, name, order) {
    this.vet = vet;
    this.name = name;
    this.order = order;
    this.dataModa = [];
    this.result = null;
    this.setup();
  }

  setup() {
    this.organizerData();
  }

  organizerData() {
    this.vet = Order.create(this.vet, 'crescent', this.order).getResult();
  }

  getResult() {
    return this.result;
  }
}

export default{
  create(vet, name, order) {
    return new Ordinal(vet, name, order);
  },
};

export const Class = Ordinal;
