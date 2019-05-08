// import MicroModal from 'micromodal';

class Normal {
  constructor() {
    this.elm = document.querySelector('[data-normal]');
    this.submitbutton = this.elm.querySelector('[data-button-normal]');
    this.media = null;
    this.standardDeviation = null;
    this.intervalAnalysisValue = { type: null, data: null };
    this.intervalAnalysis = {
      span: this.elm.querySelector('[data-select-span]'),
      select: this.elm.querySelector('[data-select-value]'),
    };
    this.setup();
  }

  setup() {
    this.setupListeners();
  }

  setupListeners() {
    this.intervalAnalysis.select.addEventListener('change', () => { this.changeSelect(); });
    this.submitbutton.addEventListener('click', (evt) => {
      evt.preventDefault();

      this.recoverData();
      this.validateData();
    });
  }

  changeSelect() {
    this.intervalAnalysis.span.innerHTML = this.intervalAnalysis.select.value;

    if (this.intervalAnalysis.select.value !== 'entre') {
      this.elm.querySelector('[data-interval]').type = 'number';
    } else {
      this.elm.querySelector('[data-interval]').type = 'text';
    }
  }

  recoverData() {
    const holder = document.querySelector('[data-normal]');

    this.media = holder.querySelector('[data-normal-media]').value;
    this.standardDeviation = holder.querySelector('[data-normal-dp]').value;
    this.intervalAnalysisValue.type = holder.querySelector('[data-select-value]').value;
    this.intervalAnalysisValue.data = holder.querySelector('[data-interval]').value;
  }

  validateData() {
    if (!this.media || !this.standardDeviation || this.intervalAnalysisValue.type == ' -- ' || !this.intervalAnalysisValue.data) { // eslint-disable-line
      alert('digite todos dados');
    }
  }
}

export default {
  create() {
    return new Normal();
  },
};

export const Class = Normal;
