/*globals app, window, vcache*/
(function (angular, app) {
    'use strict';
    app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

        /*var today = new Date(),
            year = today.getFullYear(),
            month = today.getMonth() + 1,
            day = today.getDate();

        if (month < 10) { month = '0' + month; }
        if (day < 10) { day = '0' + day; }*/
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
