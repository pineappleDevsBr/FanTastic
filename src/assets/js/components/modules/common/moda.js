class Moda {
  constructor(vet) {
    this.data = vet;
    this.dataObj = [];
    this.setup();
    return this.dataObj;
  }

  setup() {
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
}

export default{
  create(vet) {
    return new Moda(vet);
  },
};

export const Class = Moda;

