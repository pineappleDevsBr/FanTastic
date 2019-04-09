import SwitchTab from './components/switchTab';
import JumpButton from './components/jumpButton';
import AccessibillityBar from './components/accessibility-bar';
import HelpBox from './components/helpBox';
import Descriptive from './components/descriptive';

SwitchTab.create('[data-form]');
SwitchTab.create('[data-dropdown]');
JumpButton.create('[data-button-home]', '.s-section--form');
HelpBox.create('[data-help-box]');
AccessibillityBar.create('[data-accessibillity-bar]');

Descriptive.create();
