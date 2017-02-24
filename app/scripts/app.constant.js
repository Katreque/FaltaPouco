(function(){
  'use strict'

  const fs = require('fs');
  const path = require('path');

  var DirConfig = __dirname + '\\config.json';
  var ValInit = JSON.parse(fs.readFileSync(DirConfig));

  angular.module('FaltaPouco')
    .constant('DIR_CONFIG', DirConfig)
    .constant('VALOR_INIT', ValInit.horaStart)
}())
