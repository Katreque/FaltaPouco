(function(){
  'use strict'

  angular.module('FaltaPouco')
    .controller('controllerTimer', [function(){
      var self = this;

      var timer = new Timer();
      var flag = 0;

      self.triggerTimer = function(){
        if(flag === 0){
          flag++;
          return timer.start({countdown: true, startValues: {hours:8 }});
        }
        flag--;
        return timer.pause();
      }

      timer.addEventListener('secondsUpdated', function (e) {
        $('#timer').html(timer.getTimeValues().toString());
      });

      timer.addEventListener('started', function (e) {
        $('#timer').html(timer.getTimeValues().toString());
      });
    }])
}())
