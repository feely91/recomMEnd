(function () {
    'use strict';

    angular
        .module('app.admin')
        .controller('AdminController', AdminController);

    AdminController.$inject = ['logger', 'dataService'];
    /* @ngInject */
    function AdminController(logger) {
        var vm = this;
        vm.title = 'Admin';
        
        vm.id;
        vm.name;
        vm.email;
        vm.password;

        activate();

        function activate() {
            logger.info('Activated Admin View');
            this.setUser(1);
        }
        
        function updateUser(id, name, email, password) {
            
            this.dataService.updateUser(id, name, email, password, function(err, data){
                
            });
            
        }
        
        function setUser(id) {
            this.dataService.getUser(id, function(err, data) {
                
            });
            
        }
    }
})();
