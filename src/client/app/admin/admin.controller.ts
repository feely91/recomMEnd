module app.admin {
        'use strict';
        class AdminController {
                public static $inject: any[] = ['dataService', 'logger'];
                id: number;
                name: string = '';
                email: string = '';
                password: string = '';
                title: string = 'Admin';
                constructor(private dataService: core.IDataService,
                        private logger: blocks.ILoggerService) {
                        this.activate();
                }
                activate(): void {
                        this.logger.info('Activated Admin View');
                        this.setUser(1);
                }
                updateUser(id: number, name: string, email: string, password: string): void {
                        this.dataService.updateUser(id, name, email, password, function(err: any, data: any): void {
                                if (err) {
                                        console.log('ADMIN CONTROLLER UPDATEUSER ERR ' + err);
                                } else {
                                        // console.log('ADMIN CONTROLLER UPDATEUSER Rows changed ' + data);
                                }
                        });
                }
                setUser(id: number): void {
                        var instance: AdminController = this;
                        this.dataService.getUser(id, function(err: any, data: any): void {
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
                }
        }
        angular
                .module('app.admin')
                .controller('AdminController', AdminController);
}
