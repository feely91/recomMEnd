var app;
(function (app) {
    var core;
    (function (core) {
        'use strict';
        var DataService = (function () {
            function DataService($http, $q, logger) {
                this.$http = $http;
                this.$q = $q;
                this.logger = logger;
            }
            DataService.prototype.getMessageCount = function () {
                return this.$q.when(0);
            };
            DataService.prototype.getPeople = function () {
                return this.$http.get('api/people')
                    .then(function success(response) {
                    return response.data;
                }, function fail(response) {
                    return 'Failed to get people';
                });
            };
            DataService.$inject = ['$http', '$q', 'logger'];
            return DataService;
        })();
        angular
            .module('app.core')
            .service('dataService', DataService);
    })(core = app.core || (app.core = {}));
})(app || (app = {}));
