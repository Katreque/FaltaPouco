(function(){
  'use strict'

  const {app} = require('electron');
  const fs = require('fs');
  const path = require('path');

  angular.module('FaltaPouco')
    .controller('controllerConfig', ['VALOR_INIT', '$location', function(VALOR_INIT, $location){
        self = this;

        var data = [{"horasDia":VALOR_INIT}];
        var configPath = path.join(__dirname, 'config.json');

        self.atualizaConfig = function(){
          fs.writeFile(configPath, data, (err) => {
            if(err) throw err;
          });
        }
    }])
}())
