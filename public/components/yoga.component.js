(function() {
  'use strict'

  angular.module('app')
    .component('yogaComponent', {
      templateUrl: '../templates/yoga.template.html',
      controller: YogaController
    })
  YogaController.$inject = ['$state']
  function YogaController($state) {
    const vm = this
    vm.$onInit = onInit
    function onInit() {
      $state.go('yoga')
    }
  }
})()
