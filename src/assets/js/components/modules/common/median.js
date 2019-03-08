class Median {
  constructor(vet) {
    this.data = vet;
    this.result = null;
    this.setup();
  }

  setup() {
    if (this.data.length % 2 === 0) {
      this.result = [this.data[((this.data.length / 2) - 1)], this.data[(this.data.length / 2)]];
    } else {
      this.result = this.data[parseInt((this.data.length / 2), 10)];
    }
  }

  getResult() {
    return this.result;
  }
}

export default{
  create(vet) {
    return new Median(vet);
  },
};

export const Class = Median;
