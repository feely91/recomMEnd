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
            DataService.prototype.createUser = function (name, email, password, callback) {
                this.$http.post('api/createUser', { name: name, email: email, pass: password })
                    .then(function success(response) {
                    callback(null, response.data);
                }, function fail(response) {
                    callback('Failed to get people', null);
                });
            };
            DataService.prototype.getUser = function (id, callback) {
                this.$http.get('api/getUser/' + id)
                    .then(function success(response) {
                    callback(null, response.data);
                }, function fail(response) {
                    callback('Failed to get people', null);
                });
            };
            DataService.prototype.updateUser = function (id, name, email, password, callback) {
                // console.log('DATASERVICE TS UPDATE USER');
                // console.log('DATASERVICE TS ID = ' + id);
                // console.log('DATASERVICE TS NAME = ' + name);
                // console.log('DATASERVICE TS EMAIL = ' + email);
                this.$http.post('api/updateUser/' + id, { name: name, email: email, pword: password })
                    .then(function success(response) {
                    // console.log('DATASERVICE TS UPDATEUSER = ' + response.data);
                    callback(null, response.data);
                }, function fail(response) {
                    // console.log('DATASERVICE TS UPDATEUSER ERROR = ' + response);
                    callback('Failed to get people', null);
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
