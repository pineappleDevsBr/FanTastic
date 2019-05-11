import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

class ExportPDF {
  constructor() {
    this.elm = document.querySelector('[data-export-pdf]');
    this.instances = null;
    this.content = null;
    this.setup();
  }

  setup() {
    this.elm.addEventListener('click', () => {
      this.recoverContent();

      setTimeout(() => {
        this.createPDF();
      }, 2000);
    });
  }

  recoverContent() {
    html2canvas(document.querySelector('.c-form-wrapp--result'), { scale: 10, dpi: 144 }).then((canvas) => {
      this.content = canvas.toDataURL('image/jpg');
    });
  }

  createPDF() {
    this.instances = new jsPDF('p', 'mm', 'a4'); // eslint-disable-line

    this.instances.addImage(this.content, 'JPG', 0, 0, 211, 298);
    // this.instances.internal.scaleFactor = 30;
    this.instances.save('test.pdf');
  }
}

export default {
  create() {
    return new ExportPDF();
  },
};

export const Class = ExportPDF;
