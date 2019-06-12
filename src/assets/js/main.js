import SimpleTabs from 'simple-tabs-js';
import Interface from './components/interface';
import AccessibillityBar from './components/accessibility-bar';
import Login from './components/login';
import Descriptive from './components/descriptive';
import Uniform from './components/uniform';
import Binomial from './components/binomial';
import Normal from './components/normal';
import CorrelationNRegression from './components/correlationNregression';
import ExportPDF from './components/exportPDF';
import JumpButton from './components/jumpButton';
import HelpBox from './components/helpBox';
import ChangeBox from './components/changeBox';

window.onload = (() => {
  AccessibillityBar.create('[data-accessibillity-bar]');
  Login.create();
  ExportPDF.create();
  Interface.create();
  JumpButton.create();
  HelpBox.create();
  Descriptive.create();
  Uniform.create();
  Binomial.create();
  Normal.create();
  CorrelationNRegression.create();

  const tabs = new SimpleTabs('[data-form]', { // eslint-disable-line
    minHeight: false,
    callback: (dataTabs) => { ChangeBox.create(dataTabs); },
  });
});
