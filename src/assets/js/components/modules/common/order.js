class Order {
  constructor(vet, type, orderWords) {
    this.vet = vet;
    this.type = type;
    this.orderWords = orderWords;
    this.vetLetter = [];
    this.setup();
  }

  setup() {
    this.chooseOrder();
  }

  chooseOrder() {
    if (this.orderWords === undefined) {
      if (this.type === 'crescent') { this.orderCrescent(); } else if (this.type === 'descreasing') { this.orderDescreasing(); }
    } else if (this.orderWords !== undefined) {
      this.organizerWords();
    }
  }

  organizerWords() {
    for (let i = 0; i < this.orderWords.length; i += 1) {
      for (let j = 0; j < this.vet.length; j += 1) {
        if (this.orderWords[i] === this.vet[j]) {
          this.vetLetter.push(this.vet[j]);
        }
      }
    }
    this.vet = this.vetLetter;
  }

  organizerWordsNoOder() {
    this.vet = this.vet.sort();

    return this.vet;
  }

  orderCrescent() { // bubbleSort
    let aux = 1;

    for (let i = this.vet.length; i >= 0; i -= 1) {
      for (let j = 0; j < i; j += 1) {
        if (this.vet[j] > this.vet[j + 1]) {
          aux = this.vet[j];
          this.vet[j] = this.vet[j + 1];
          this.vet[j + 1] = aux;
        }
      }
    }
  }


  orderDescreasing() {
    for (let i = 0; i < this.vet.length; i += 1) {
      for (let j = 0; j < this.vet.length; j += 1) {
        if (this.vet[i] > this.vet[j]) {
          const aux = this.vet[j];
          this.vet[j] = this.vet[i];
          this.vet[i] = aux;
        }
      }
    }
  }

  getResult() {
    return this.vet;
  }
}

export default{
  create(vet, type, orderWords) {
    return new Order(vet, type, orderWords);
  },
};

export const Class = Order;
