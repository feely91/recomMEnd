module blocks {
    'use strict';

    export interface ILoggerService {
        showToasts: boolean;

        error(message: string, data?: any, title?: string): void;
        info(message: string, data?: any, title?: string): void;
        success(message: string, data?: any, title?: string): void;
        warning(message: string, data?: any, title?: string): void;
        log(message: string, data?: any): void;
    }

    class LoggerService implements ILoggerService {
        showToasts: boolean = true;

        constructor(private $log: angular.ILogService, private toastr: Toastr) {
        }

        error(message: string, data: any, title: string): void {
            this.toastr.error(message, title);
            this.$log.error('Error: ' + message, data);
        }

        info(message: string, data: any, title: string): void {
            this.toastr.info(message, title);
            this.$log.info('Info: ' + message, data);
        }

        success(message: string, data: any, title: string): void {
            this.toastr.success(message, title);
            this.$log.info('Success: ' + message, data);
        }

        warning(message: string, data: any, title: string): void {
            this.toastr.warning(message, title);
            this.$log.warn('Warning: ' + message, data);
        }

        log(message: string, data: any): void {
            this.$log.log(message, data);
        }
    }

    factory.$inject = ['$log', 'toastr'];
    function factory($log: angular.ILogService, toastr: Toastr): ILoggerService {
        return new LoggerService($log, toastr);
    }

    angular
        .module('blocks.logger')
        .factory('logger', factory);
}
