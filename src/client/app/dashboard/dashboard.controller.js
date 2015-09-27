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
                var promises = [this.getMessageCount(), this.getPeople()];
                return this.$q.all(promises).then(function () {
                    this.logger.info('Activated Dashboard View');
                });
            };
            DashboardController.prototype.getMessageCount = function () {
                return this.dataService.getMessageCount().then(function (data) {
                    this.messageCount = data;
                    return this.messageCount;
                });
            };
            DashboardController.prototype.getPeople = function () {
                return this.dataService.getPeople().then(function (data) {
                    this.people = data;
                    return this.people;
                });
            };
            DashboardController.$inject = ['$q', 'dataservice', 'logger'];
            return DashboardController;
        })();
        angular
            .module('app.dashboard')
            .controller('DashboardController', DashboardController);
    })(dashboard = app.dashboard || (app.dashboard = {}));
})(app || (app = {}));
