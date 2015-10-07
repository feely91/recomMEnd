var app;
(function (app) {
    var admin;
    (function (admin) {
        'use strict';
        var AdminController = (function () {
            function AdminController(dataService, logger) {
                this.dataService = dataService;
                this.logger = logger;
                this.name = '';
                this.email = '';
                this.password = '';
                this.title = 'Admin';
                this.activate();
            }
            AdminController.prototype.activate = function () {
                this.logger.info('Activated Admin View');
                this.setUser(1);
            };
            AdminController.prototype.updateUser = function (id, name, email, password) {
                this.dataService.updateUser(id, name, email, password, function (err, data) {
                    if (err) {
                        console.log('ADMIN CONTROLLER UPDATEUSER ERR ' + err);
                    }
                    else {
                    }
                });
            };
            AdminController.prototype.setUser = function (id) {
                var instance = this;
                this.dataService.getUser(id, function (err, data) {
                    if (err) {
                        console.log('SETUSER ERROR = ' + err);
                    }
                    if (data) {
                        instance.id = id;
                        instance.name = data.name;
                        instance.email = data.email;
                        instance.password = data.pword;
                    }
                });
            };
            AdminController.$inject = ['dataService', 'logger'];
            return AdminController;
        })();
        angular
            .module('app.admin')
            .controller('AdminController', AdminController);
    })(admin = app.admin || (app.admin = {}));
})(app || (app = {}));
