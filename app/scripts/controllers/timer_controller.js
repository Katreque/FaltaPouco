(function(){
  'use strict'

  const notifier = require('node-notifier')

  angular.module('FaltaPouco')
    .controller('controllerTimer', ['timerModel', 'VALOR_INIT', '$location', function(timerModel, VALOR_INIT, $location){
      var self = this;

      self.timerInit = new timerModel();

      var timer = new Timer();
      var flag = 0;

      self.triggerTimer = function(){
        if(flag === 0){
          flag++;
          self.timerInit.valorBtn = "Paradinha";
          return timer.start({countdown: true, startValues: {hours:parseInt(VALOR_INIT) }});
        }
        flag--;
        self.timerInit.valorBtn = "Voltar ao trabalho";
        return timer.pause();
      }

      timer.addEventListener('secondsUpdated', function (e) {
        $('#timer').html(timer.getTimeValues().toString());
        if(timer.getTimeValues().hours === (parseInt(VALOR_INIT) - 1)){
          //Criar um service para trabalhar com esses eventos corretamente.
          notifier.notify('Birrrrllllllll! Uma hora de trabalho se passou!');
        }
      });

      timer.addEventListener('started', function (e) {
        $('#timer').html(timer.getTimeValues().toString());
      });
    }])
}())
