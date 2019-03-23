class StandardDeviation {
  constructor(dataModa, media, process) {
    this.data = dataModa;
    this.media = media;
    this.process = process;
    this.dataLength = 0;
    this.result = null;
    this.setup();
  }

  setup() {
    this.data.forEach((elm) => {
      this.result += ((elm.number - this.media) ** 2) * elm.cont;
      this.dataLength += elm.cont;
    });

    if (this.process === 'amostra') {
      this.result = this.result / (this.dataLength - 1);
    } else if (this.process === 'censo') {
      this.result = this.result / this.dataLength;
    }

    this.result = Math.sqrt(this.result).toFixed(2);
  }

  getResult() {
    return this.result;
  }
}

export default {
  create(dataModa, media, process) {
    return new StandardDeviation(dataModa, media, process);
  },
};

export const Class = StandardDeviation;
