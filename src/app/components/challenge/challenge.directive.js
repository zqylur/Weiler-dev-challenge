(function() {
  'use strict';

  angular
    .module('weilerDevChallenge')
    .directive('challenge', challenge);

  /** @ngInject */
  function challenge() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/challenge/challenge.html',
      scope: {
        challenge: '='
      },
      controller: ChallengeController,
      controllerAs: 'challenge',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function ChallengeController() {
      var co = this;

    }
  }

})();