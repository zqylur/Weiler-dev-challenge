(function() {
  'use strict';

  angular
    .module('weilerDevChallenge')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, moment) {
    var co = this;

    co.previousChallenges = [{
      timeStarted: moment().format('MMMM Do YYYY, h:mm:ss a'),
      timecompleted: moment().add(3, 'm').format('MMMM Do YYYY, h:mm:ss a'),
      status: 'success',
      statusMessage: 'SUCCESS',
      questions: [{
        status: 'completed'
      },
      {
        status: 'completed'
      },
      {
        status: 'completed'
      },
      {
        status: 'completed'
      },
      {
        status: 'completed'
      }]
    },
    {
      timeStarted: moment().format('MMMM Do YYYY, h:mm:ss a'),
      timecompleted: moment().add(3, 'm').format('MMMM Do YYYY, h:mm:ss a'),
      status: 'failure',
      statusMessage: 'FAILED',
      questions: [{
        status: 'completed'
      },
      {
        status: 'completed'
      },
      {
        status: 'completed'
      },
      {
        status: 'completed'
      },
      {
        status: 'completed'
      }]
    }]

    co.currentChallenge = {
      timeStarted: moment().format('MMMM Do YYYY, h:mm:ss a'),
      timecompleted: moment().add(3, 'm').format('MMMM Do YYYY, h:mm:ss a'),
      status: 'pending',
      statusMessage: 'IN PROGRESS',
      questions: [{
        status: 'completed'
      },
      {
        status: 'completed'
      },
      {
        status: 'pending'
      },
      {
        status: 'notstarted'
      },
      {
        status: 'notstarted'
      }]
    }
  }
})();
