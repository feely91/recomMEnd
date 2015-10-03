var blocks;
(function (blocks) {
    'use strict';
    var LoggerService = (function () {
        function LoggerService($log, toastr) {
            this.$log = $log;
            this.toastr = toastr;
            this.showToasts = true;
        }
        LoggerService.prototype.error = function (message, data, title) {
            this.toastr.error(message, title);
            this.$log.error('Error: ' + message, data);
        };
        LoggerService.prototype.info = function (message, data, title) {
            this.toastr.info(message, title);
            this.$log.info('Info: ' + message, data);
        };
        LoggerService.prototype.success = function (message, data, title) {
            this.toastr.success(message, title);
            this.$log.info('Success: ' + message, data);
        };
        LoggerService.prototype.warning = function (message, data, title) {
            this.toastr.warning(message, title);
            this.$log.warn('Warning: ' + message, data);
        };
        LoggerService.prototype.log = function (message, data) {
            this.$log.log(message, data);
        };
        return LoggerService;
    })();
    factory.$inject = ['$log', 'toastr'];
    function factory($log, toastr) {
        return new LoggerService($log, toastr);
    }
    angular
        .module('blocks.logger')
        .factory('logger', factory);
})(blocks || (blocks = {}));
