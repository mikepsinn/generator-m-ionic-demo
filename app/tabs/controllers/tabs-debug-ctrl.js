'use strict';
angular.module('tabs')
.controller('TabsDebugCtrl', function (Tabs, TabsConfig) {

  // bind data from service
  this.someData = Tabs.someData;
  this.ENV = TabsConfig.ENV;
  this.BUILD = TabsConfig.BUILD;

  console.log('Hello from your Controller: TabsCtrl in module tabs:. This is your controller:', this);
  // TODO: do your controller thing

});
