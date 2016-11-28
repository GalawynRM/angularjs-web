/*globals angular, app, vcache*/
(function (angular) {
    'use strict';

    app.config(['$logProvider', function ($logProvider) {
        $logProvider.debugEnabled(true);
    }]);

    var config = {
        brand: "Angularjs Web",
        credits: "Galawyn &copy; 2016",
        version: "0.0.1",
        cache: vcache,
        googleApi: ""
    };

    app.factory("ConfigService", function ($q, $log) {
        return config;
    });

}(window.angular));
