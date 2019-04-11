import SimpleTabs from 'simple-tabs-js';
import JumpButton from './components/jumpButton';
import AccessibillityBar from './components/accessibility-bar';
import HelpBox from './components/helpBox';
import Descriptive from './components/descriptive';

const tabs = new SimpleTabs('[data-form]'); // eslint-disable-line

JumpButton.create('[data-button-home]', '.s-section--form');
HelpBox.create('[data-help-box]');
AccessibillityBar.create('[data-accessibillity-bar]');

Descriptive.create();
