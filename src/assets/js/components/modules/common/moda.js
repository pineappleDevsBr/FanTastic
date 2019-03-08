class Moda {
  constructor(vet) {
    this.data = vet;
    this.dataObj = [];
    this.amodal = false;
    this.moda = null;
    this.setup();
  }

  setup() {
    this.createModa();
    this.defineModa();
  }

  createModa() {
    for (let i = 0; i < this.data.length; i += 1) {
      const obj = {
        number: this.data[i],
        cont: 1,
      };
      let haveNumber = 0;
      for (let index = 0; index < this.dataObj.length; index += 1) {
        if (obj.number === this.dataObj[index].number) {
          this.dataObj[index].cont += 1;
          haveNumber += 1;
        }
      }
      if (haveNumber === 0) { this.dataObj.push(obj); }
    }
  }

  defineModa() {
    let contAmodal = 0;
    let modaMaior = [{ number: 0, cont: 0 }];

    for (let i = 0, j = 0; i < this.dataObj.length; i += 1) {
      if (this.dataObj[j].cont === this.dataObj[i].cont) {
        contAmodal += 1;
      }
    }

    if (contAmodal === this.dataObj.length) {
      this.amodal = true;
    } else {
      for (let i = 0; i < this.dataObj.length; i += 1) {
        if (modaMaior[0].cont < this.dataObj[i].cont) {
          modaMaior = [];
          modaMaior[0] = this.dataObj[i];
        } else if (modaMaior[0].cont === this.dataObj[i].cont) {
          modaMaior.push(this.dataObj[i]);
        }
      }
    }

    if (this.amodal) {
      this.moda = 'Amodal';
    } else {
      this.moda = [];
      modaMaior.forEach((obj, i) => {
        this.moda[i] = obj.number;
      });
    }
  }

  getResult() {
    return this.dataObj;
  }

  getModa() {
    return this.moda;
  }
}

export default{
  create(vet) {
    return new Moda(vet);
  },
};

export const Class = Moda;

