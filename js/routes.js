/*globals app, window, vcache*/
(function (angular, app) {
    'use strict';
    app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

        $routeProvider
            .when('/', {
                redirectTo: '/home'
            })
            .when('/home', {
                templateUrl: 'views/home/home.html' + '?v=' + vcache,
                controller: 'homeController',
                activetab: "home",
                title: "Home"
            })
            .otherwise({
                redirectTo: '/home'
            });

        $locationProvider.html5Mode({enabled: true, rewriteLinks: false}).hashPrefix('*');
    }]);

}(window.angular, app));
