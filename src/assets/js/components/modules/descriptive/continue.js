import Order from '../common/orderNumbers';

class Continue {
  constructor(vet) {
    this.vet = vet;
    this.At = null;
    this.k = [];
    this.result = null;
    this.intervalNumber = null;
    this.setup();
  }

  setup() {
    this.oraganizedArray();
    this.amplitude();
    this.classes();
    this.interval();
    this.moda();
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
    console.log(D);
    let i = 0;
    while (i === 0) {
      for (let j = 0; j < 3; j += 1) {
        if (D % this.K[j] === 0) {
          this.intervalNumber = D / this.K[j];
          console.log(D, this.K[j], this.intervalNumber);
          i += 1;
          break;
        }
      }
      D += 1;
    }
  }

  moda() {
    let x = this.vet[0];
    let y = null;
    while (x <= this.vet[this.vet.length - 1]) {
      y = x + this.intervalNumber;
      for (let i = 0; i < this.vet.length; i += 1) {
        if ((this.vet[i] >= x) && (this.vet[i] < y)) {
          // Aqui vai entrar a moda, o objeto
        }
      }
      x += this.intervalNumber;
    }
  }
}

export default{
  create(vet) {
    return new Continue(vet);
  },
};

export const Class = Continue;
