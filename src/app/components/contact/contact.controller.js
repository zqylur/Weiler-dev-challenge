(function() {
  'use strict';

  angular
    .module('weilerDevChallenge')
    .controller('ContactController', ContactController);

  /** @ngInject */
  function ContactController() {
    var contact = this;
    contact.weilerSrc = 'https://s3-us-west-2.amazonaws.com/weiler/assets/images/FB_IMG_1429572617234.jpg';
  }
})();
