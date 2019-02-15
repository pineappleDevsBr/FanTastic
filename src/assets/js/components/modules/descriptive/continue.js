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
    let Result = null;
    console.log(D);
    let i = 0;
    while( i == 0) {
      for(let j = 0; j < 3; j += 1){
        if (D % K[j] === 0){
          Result = D / K[j];
          console.log(D + '/' + K[j] + '=' + Result);
          i += 1;
          break
        }  
      }
      D++;
    }
  }
}