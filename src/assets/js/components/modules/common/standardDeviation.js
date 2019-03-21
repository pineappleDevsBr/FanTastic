class StandardDeviation {
  constructor(dataModa, media, process) {
    this.data = dataModa;
    this.media = media;
    this.process = process;
    this.result = null;
    this.setup();
  }

  setup() {
    this.data.forEach((elm) => {
      this.result += Math.pow((elm.number - this.media), 2) * elm.cont ;
    });

    if (this.process === 'amostra') {
      this.result = this.result / (this.data.length - 1); 
    } else if (this.process === 'populacao') {
      this.result = this.result / this.data.length;
    }

    this.result = Math.sqrt(this.result);
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