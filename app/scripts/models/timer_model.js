(function(){
  'use strict'

  angular.module('FaltaPouco')
  .factory('timerModel', ['VALOR_INIT', function(VALOR_INIT){
    class Timer{
      constructor(){
        this.valor = VALOR_INIT;
        this.valorBtn = "Hora de trabalhar!";
      }
    }
    return Timer;
  }])
}())
