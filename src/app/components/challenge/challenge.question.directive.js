(function() {
  'use strict';

  angular
    .module('weilerDevChallenge')
    .directive('challengeQuestion', challengeQuestion);

  /** @ngInject */
  function challengeQuestion() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/challenge/challenge.question.html',
      scope: {
        question: '=',
        number: '='
      },
      controller: ChallengeQuestionController,
      controllerAs: 'challengeQuestion',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function ChallengeQuestionController() {
      var co = this;

    }
  }

})();