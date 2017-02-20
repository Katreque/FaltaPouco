(function(){
  'use strict'

  const {app} = require('electron');
  const fs = require('fs');
  const path = require('path');

  angular.module('FaltaPouco')
    .controller('controllerConfig', ['VALOR_INIT', function(VALOR_INIT){
        self = this;

        var data;
        var configPath = path.join(app.getPath('userData'), 'config.json');

        self.atualizaConfig = function(){
          console.log(configPath)
          return fs.writeFileSync(configPath, 'Kappa');
        }
    }])
}())
