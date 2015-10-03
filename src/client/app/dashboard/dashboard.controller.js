var app;
(function (app) {
    var dashboard;
    (function (dashboard) {
        'use strict';
        var DashboardController = (function () {
            function DashboardController($q, dataService, logger) {
                this.$q = $q;
                this.dataService = dataService;
                this.logger = logger;
                this.news = {
                    title: 'New News Title',
                    description: 'Make this something else'
                };
                this.messageCount = 0;
                this.people = [];
                this.title = 'Home';
                this.activate();
            }
            DashboardController.prototype.activate = function () {
                var instance = this;
                var promises = [this.getMessageCount(), this.getPeople()];
                return this.$q.all(promises).then(function () {
                    instance.logger.info('Activated Dashboard View');
                });
            };
            DashboardController.prototype.getMessageCount = function () {
                var instance = this;
                this.dataService.getMessageCount().then(function (data) {
                    console.log(data);
                    instance.messageCount = data;
                });
            };
            DashboardController.prototype.getPeople = function () {
                var instance = this;
                this.dataService.getPeople().then(function (data) {
                    console.log(data);
                    instance.people = data;
                });
            };
            DashboardController.$inject = ['$q', 'dataService', 'logger'];
            return DashboardController;
        })();
        angular
            .module('app.dashboard')
            .controller('DashboardController', DashboardController);
    })(dashboard = app.dashboard || (app.dashboard = {}));
})(app || (app = {}));
