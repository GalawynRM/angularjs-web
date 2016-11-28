/*globals angular, app, vcache*/
(function (angular) {
    'use strict';

    var config = {
        appName: "AngularjsWeb",
        brand: "Angularjs Web",
        credits: "Galawyn &copy; 2016",
        version: "0.0.1",
        debug: true,
        cache: vcache,
        apiKeys: {
            googleApi: ""
        }
    };

    app.factory("ConfigService", function ($q, $log) {
        return config;
    });

    app.config(['$logProvider', function ($logProvider) {
        $logProvider.debugEnabled(config.debug);
    }]);

    app.config(function (localStorageServiceProvider) {
        localStorageServiceProvider
            .setPrefix(config.appName);
    });

}(window.angular));
