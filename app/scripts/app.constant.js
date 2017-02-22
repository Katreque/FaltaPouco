(function(){
  'use strict'

  const fs = require('fs');
  const path = require('path');

  var DirConfig = __dirname + '\\config.json';
  var ValInit = fs.readFile(DirConfig, (err, data) => {
    if(err) throw err;
    return JSON.parse(data);
  })

  angular.module('FaltaPouco')
    .constant('DIR_CONFIG', DirConfig)
    .constant('VALOR_INIT', '08:00:00')
    //Ajustar assincronissidade aqui ao utlizar as constantes;
}())
