import doT from 'dot';
import Chart from 'chart.js';
import Order from '../common/order';
import Moda from '../common/moda';
import StandardDeviation from '../common/standardDeviation';

class Continue {
  constructor(vet, name, separatrix, process) {
    this.At = null;
    this.result = null;
    this.intervalNumber = null;
    this.medianValue = null;
    this.modeValue = null;
    this.meanValue = null;
    this.separatrixResult = null;
    this.standardDeviationResult = null;
    this.variation = null;
    this.dataMode = [];
    this.k = [];
    this.simpleFrequencyPercentage = [];
    this.accumulatedFrequncy = [];
    this.accumulatedFrequncyPercentage = [];
    this.dynamicTable = [];
    this.vetInterval = [];
    this.vet = vet;
    this.name = name;
    this.separatrixItems = separatrix;
    this.process = process;
    this.canvasHolder = document.querySelector('[data-canvas]');
    this.continueTemplate = doT.template(`<div class="c-result__table"><table cellspacing="0" cellpadding="0" border="0" style="text-align:center"><tr class="table__header"><th class="table__item">Classes</th><th class="table__item">{{=it.name}}</th><th class="table__item">Frequenca Simples</th><th class="table__item">Frequenca Relativa</th><th class="table__item">Frequenca Acumulada</th><th class="table__item">Frequenca Acumulada %</th></tr>{{~it.dynamicTable :value:index}}  <tr class="table__lines"><td class="table__item">{{=value.class}}</td><td class="table__item">{{=value.valorInicial}} |&#8212; {{=value.valorFinal}}</td><td class="table__item">{{=value.cont}}</td><td class="table__item">{{=value.fr}}</td><td class="table__item">{{=value.fa}}</td><td class="table__item">{{=value.fac}}</td></tr>{{~}}</table></div><br/><div class="table__informations"><div class="cell__information" ><p class="cell__title">Moda</p><p>{{=value.moda}}</p></div><div class="cell__information" ><p class="cell__title">  Média</p><p> {{=value.media}}</p></div><div class="cell__information" ><p class="cell__title">  Mediana</p><p> {{=value.mediana}}</p></div><div class="cell__information" ><p class="cell__title">${this.separatrixItems.isChecked}</p><p> {{=it.separatrixResult}}</p></div><div class="cell__information" ><p class="cell__title"> Desvio Padrão</p><p> {{=it.desvioPadrao}}</p></div><div class="cell__information" ><p class="cell__title"> Coeficiente de Variação</p><p> {{=it.coeficientevariacao}}</p></div></div>`);
    this.continueResult = '';
    this.setup();
  }

  setup() {
    this.oraganizedArray();
    this.amplitude();
    this.classes();
    this.valueInterval();
    this.createModa();
    this.interval();
    this.generateFrequency();
    this.separatrix();
    this.media();
    this.moda();
    this.mediana();
    this.standardDeviation();
    this.coefficientVariation();
    this.createTable();
    this.createChart();
  }

  oraganizedArray() {
    this.vet = Order.create(this.vet, 'crescent').getResult();
  }

  amplitude() {
    this.At = this.vet[this.vet.length - 1] - this.vet[0];
  }

  classes() {
    this.K = [parseInt(Math.sqrt(this.vet.length))-1,parseInt(Math.sqrt(this.vet.length)),parseInt(Math.sqrt(this.vet.length))+1]; // eslint-disable-line
  }

  valueInterval() {
    let D = this.At + 1;
    let i = 0;
    while (i === 0) {
      for (let j = 0; j < 3; j += 1) {
        if (D % this.K[j] === 0) {
          this.intervalNumber = D / this.K[j];
          i += 1;
          break;
        }
      }
      D += 1;
    }
  }

  createModa() {
    let x = this.vet[0];
    let y = null;
    while (x <= this.vet[this.vet.length - 1]) {
      y = x + this.intervalNumber;
      for (let i = 0; i < this.vet.length; i += 1) {
        if ((this.vet[i] >= x) && (this.vet[i] < y)) {
          this.dataMode = Moda.create(this.vet).getResult();
        }
      }
      x += this.intervalNumber;
    }
  }

  interval() {
    let valorInicial = this.dataMode[0].number;
    let cont = this.dataMode[0].cont;
    let valorFinal = valorInicial + this.intervalNumber;

    for (let i = 1; i < this.dataMode.length; i += 1) {
      if (this.dataMode[i].number >= valorFinal) {
        const obj = new Object(); // eslint-disable-line
        obj.valorInicial = valorInicial;
        obj.valorFinal = valorFinal;
        obj.cont = cont;
        this.vetInterval.push(obj);
        valorInicial = valorFinal;
        valorFinal = valorInicial + this.intervalNumber;
        cont = this.dataMode[i].cont;
      } else if (this.dataMode[i].number < valorFinal) {
        cont += this.dataMode[i].cont;
      }
    }
    const obj = new Object(); // eslint-disable-line
    obj.valorInicial = valorInicial;
    obj.valorFinal = valorFinal;
    obj.cont = cont;
    this.vetInterval.push(obj);
  }

  generateFrequency() {
    let cont = 0;

    for (let i = 0; i < this.vetInterval.length; i += 1) {
      this.simpleFrequencyPercentage[i] = ((this.vetInterval[i].cont / this.vet.length) * 100).toFixed(2); // eslint-disable-line
      this.accumulatedFrequncy[i] = this.vetInterval[i].cont + cont;
      this.accumulatedFrequncyPercentage[i] = ((this.accumulatedFrequncy[i] / this.vet.length) * 100).toFixed(2); // eslint-disable-line
      cont = this.vetInterval[i].cont + cont;
    }
  }

  separatrixGeral(valuePosicao) {
    const posicao = valuePosicao;
    let I = null;// eslint-disable-line
    let find = null;// eslint-disable-line
    let facAnt = null;// eslint-disable-line
    for (let i = 0; i < this.vet.length; i += 1) {
      if (parseInt(posicao) == i) { // eslint-disable-line
        const aux = this.vet[i];
        for (let j = 0; j < this.vetInterval.length; j += 1) {
          if ((aux >= this.vetInterval[j].valorInicial) && (aux < this.vetInterval[j].valorFinal)) {
            I = this.vetInterval[j].valorInicial;
            find = this.vetInterval[j].cont;
            if (j - 1 < 0) {
              facAnt = 0;
            } else {
              facAnt = this.accumulatedFrequncy[j - 1];
            }
          }
        }
      }
    }
    this.result = (I + ((posicao - facAnt) / find) * this.intervalNumber).toFixed(2); //eslint-disable-line
  }

  separatrix() {
    const posicao = Number((this.separatrixItems.range / 100) * this.vet.length).toFixed(2);
    this.separatrixGeral(posicao);
    this.separatrixResult = this.result;
  }

  mediana() {
    const posicao = this.vet.length / 2;
    this.separatrixGeral(posicao);
    this.medianValue = this.result;
  }

  media() {
    let mediaparcial = null;
    for (let i = 0; i < this.vetInterval.length; i += 1) {
      mediaparcial += ((this.vetInterval[i].valorFinal + this.vetInterval[i].valorInicial) / 2) * this.vetInterval[i].cont; // eslint-disable-line
    }

    this.meanValue = (mediaparcial / this.vet.length).toFixed(2);
  }

  moda() {
    let maior = null;
    let posicao = null;
    for (let i = 0; i < this.vetInterval.length; i += 1) {
      if (this.vetInterval[i].cont > maior) {
        maior = this.vetInterval[i].cont;
        posicao = i;
      }
    }
    this.modeValue = (this.vetInterval[posicao].valorFinal + this.vetInterval[posicao].valorInicial) / 2; // eslint-disable-line
  }

  standardDeviation() {
    const medias = [];
    this.vetInterval.forEach((elm, i) => {
      medias[i] = {
        number: (elm.valorInicial + elm.valorFinal) / 2,
        cont: this.vetInterval[i].cont,
      };
    });
    this.standardDeviationResult = StandardDeviation.create(medias, this.meanValue, this.process).getResult(); // eslint-disable-line
  }

  coefficientVariation() {
    this.variation = ((this.standardDeviationResult / this.meanValue) * 100).toFixed(2);
  }

  createTable() {
    for (let i = 0; i < this.vetInterval.length; i += 1) {
      const obj = {
        class: i + 1,
        valorInicial: this.vetInterval[i].valorInicial,
        valorFinal: this.vetInterval[i].valorFinal,
        cont: this.vetInterval[i].cont,
        fr: this.simpleFrequencyPercentage[i],
        fa: this.accumulatedFrequncy[i],
        fac: this.accumulatedFrequncyPercentage[i],
        moda: this.modeValue,
        media: this.meanValue,
        mediana: this.medianValue,
        separatrixResult: this.separatrixResult,
        desvioPadrao: this.standardDeviationResult,
        coeficientevariacao: this.variation,
      };

      this.dynamicTable.push(obj);
    }

    this.continueResult = this.continueTemplate({ name: this.name, dynamicTable: this.dynamicTable, separatrixResult: this.separatrixResult, desvioPadrao: this.standardDeviationResult, coeficientevariacao: this.variation, }); // eslint-disable-line
  }

  createChart() {
    const labelsName = [];
    const canvas = document.createElement('canvas');
    this.canvasHolder.innerHTML = '';

    this.vetInterval.forEach((obj, index) => { labelsName[index] = `${obj.valorInicial} |- ${obj.valorFinal}`; });

    const continueChart = new Chart(canvas, { // eslint-disable-line
      type: 'bar',
      data: {
        labels: labelsName,
        datasets: [{
          label: 'Frequencia Relativa',
          data: this.simpleFrequencyPercentage,
          stack: 's1',
          borderWidth: 1,
          backgroundColor: [
            'rgba(106, 0, 227, 0.2)',
            'rgba(0, 204, 126, 0.2)',
            'rgba(209, 88, 50, 0.2)',
            'rgba(0, 153, 94, 0.2)',
            'rgba(71, 0, 151, 0.2)',
            'rgba(26, 170, 216, 0.2)',
          ],

          borderColor: [
            'rgba(106, 0, 227, 1)',
            'rgba(0, 204, 126, 1)',
            'rgba(209, 88, 50, 1)',
            'rgba(0, 153, 94, 1)',
            'rgba(71, 0, 151, 1)',
            'rgba(26, 170, 216, 1)',
          ],
        }],
      },
      options: {
        scales: {
          xAxes: [{
            categoryPercentage: 1,
            barPercentage: 1,
          }],
        },
      },
    });
    Chart.scaleService.updateScaleDefaults('linear', {
      ticks: {
        min: 0,
      },
    });

    this.canvasHolder.appendChild(canvas);
  }

  getResult() {
    return this.continueResult;
  }
}


export default{
  create(vet, name, separatrix, process) {
    return new Continue(vet, name, separatrix, process);
  },
};

export const Class = Continue;
