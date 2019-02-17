import Order from '../orderNumbers';

class Continue {
  constructor(vet) {
    this.vet = vet;
    this.At = null;
    this.k = [];
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
    this.vet = new Order(this.vet, "crescent");
  }

  amplitude() {
    this.At = this.vet[this.vet.length - 1] - this.vet[0];
    console.log(this.At);
  }

  classes() {
    this.K = [parseInt(Math.sqrt(this.vet.length))-1,parseInt(Math.sqrt(this.vet.length)),parseInt(Math.sqrt(this.vet.length))+1];
    console.log(this.K);
  }

  interval() {
    let D = At+1;
    let intervalNumber = null;
    console.log(D);
    let i = 0;
    while( i == 0) {
      for(let j = 0; j < 3; j += 1){
        if (D % K[j] === 0){
          intervalNumber = D / K[j];
          console.log(D + '/' + K[j] + '=' + intervalNumber);
          i += 1;
          break
        }
      }
      D++;
    }
  }

  moda() {
    let x = this.vet[0];

    while(x <= this.vet[this.vet.length - 1] ) {
      y = x + this.intervalNumber;

      for (let i = 0; i < vet.length; i += 1) {
        if (( vet[i] >= x) && (vet[i] < y)) {
          //Aqui vai entrar a moda, o objeto
        }
      
      }

      x += intervalNumber;
    }
  }
}

export default{
  create() {
    return new Continue();
  },
};

export const Class = Continue;