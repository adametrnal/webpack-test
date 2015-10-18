'use strict';
var AlertButtons = require('./alert-buttons');
var LameDomBinding = require('./lame-dom-binding');
var TestES6 = require('./test-es6');
require('./index.css');
document.addEventListener('DOMContentLoaded', function() {
  AlertButtons.setupButtons();
  LameDomBinding.bindEls(document.getElementById('textarea1'), document.getElementById('textarea2'));
  TestES6.run();
});

