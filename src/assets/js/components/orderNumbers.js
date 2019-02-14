class Order {
  constructor(vet, type){
    this.vet = vet;
    this.type = type;
    this.setup();
    return this.vet;
  }
  setup(){

    if(this.type === "crescent") {this.orderCrescent()}
    else if (this.type === "descreasing") {this.orderDescreasing()}
    
  }

  orderCrescent() {
    for ( let i = 0; i < this.vet.length; i += 1) {
      for ( let j = 0; j < this.vet.length; j += 1){
        if ( this.vet[i] < this.vet[j]) {
          let aux = this.vet[i];
          this.vet[i] = this.vet[j];
          this.vet[j] = aux;
        }
      }
    }
  }


  orderDescreasing() {
    for ( let i = 0; i < this.vet.length; i += 1) {
      for ( let j = 0; j < this.vet.length; j += 1){
        if ( this.vet[i] > this.vet[j]) {
          let aux = this.vet[j];
          this.vet[j] = this.vet[i];
          this.vet[i] = aux;
        }
      }
    }
  }
}