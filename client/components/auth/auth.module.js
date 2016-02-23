'use strict';

angular.module('cuckooApp.auth', [
  'cuckooApp.constants',
  'cuckooApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
