(function(){
  'use strict'

  const fs = require('fs');
  const path = require('path');

  angular.module('FaltaPouco')
    .controller('controllerConfig', ['VALOR_INIT', '$location', 'DIR_CONFIG', function(VALOR_INIT, $location, DIR_CONFIG){
        self = this;

        this.data = undefined;

        var horaParse = function(string){
          var parsed = string + ':00:00';
          if(parseInt(parsed) < 10){
            var parsed = '0' + parsed;
            parsed = {"horaStart": parsed}
            return parsed;
          }
          parsed = {"horaStart": parsed}
          return parsed;
        }

        self.atualizaConfig = function(){
          var data = horaParse(this.data);
          fs.writeFile(DIR_CONFIG, JSON.stringify(data), (err) => {
            if(err) throw err;
          });
        }
    }])
}())
