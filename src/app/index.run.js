(function() {
  'use strict';

  angular
    .module('weilerDevChallenge')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
