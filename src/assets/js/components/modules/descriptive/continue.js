import Order from '../common/orderNumbers';

class Continue {
  constructor(vet) {
    this.vet = vet;
    this.At = null;
    this.k = [];
    this.result = null;
    this.setup();
  }

  setup() {
    this.oraganizedArray();
    this.amplitude();
    this.classes();
    this.interval();
  }

  oraganizedArray() {
    this.vet = Order.create(this.vet, 'crescent');
    console.log(this.vet);
  }

  amplitude() {
    this.At = this.vet[this.vet.length - 1] - this.vet[0];
    console.log(this.At);
  }

  classes() {
    this.K = [parseInt(Math.sqrt(this.vet.length))-1,parseInt(Math.sqrt(this.vet.length)),parseInt(Math.sqrt(this.vet.length))+1]; // eslint-disable-line
    console.log(this.K);
  }

  interval() {
    let D = this.At + 1;
    let i = 0;
    console.log(D);
    while (i === 0) {
      for (let j = 0; j < 3; j += 1) {
        if (D % this.K[j] === 0) {
          this.result = D / this.K[j];
          console.log(D, this.K[j], this.result);
          i += 1;
          break;
        }
      }
      D += 1;
    }
  }
}

export default{
  create(vet) {
    return new Continue(vet);
  },
};

export const Class = Continue;
