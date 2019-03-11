class Median {
  constructor(vet, type) {
    this.data = vet;
    this.type = type;
    this.result = null;
    this.setup();
  }

  setup() {
    if (this.data.length % 2 === 0) {
      if (this.type === 'word') {
        this.result = [this.data[((this.data.length / 2) - 1)], this.data[(this.data.length / 2)]];
      } else if (this.type === 'number') {
        this.result = (this.data[((this.data.length / 2) - 1)] + this.data[(this.data.length / 2)]) / 2; // eslint-disable-line
      }
    } else {
      this.result = this.data[parseInt((this.data.length / 2), 10)];
    }
  }

  getResult() {
    return this.result;
  }
}

export default{
  create(vet, type) {
    return new Median(vet, type);
  },
};

export const Class = Median;
