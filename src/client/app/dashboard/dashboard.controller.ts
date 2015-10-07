module app.dashboard {
	'use strict';
	class DashboardController {
		public static $inject: any[] = ['$q', 'dataService', 'logger'];
		news: Object = {
			title: 'New News Title',
			description: 'Make this something else'
		};
		messageCount: number = 0;
		people: any[] = [];
		title: string = 'Home';
		constructor(private $q: angular.IQService,
			private dataService: core.IDataService,
			private logger: blocks.ILoggerService) {
			this.activate();
		}
		activate(): any {
			var instance: DashboardController = this;
			var promises: any = [this.getMessageCount(), this.getPeople()];
			return this.$q.all(promises).then(function(): void {
                instance.logger.info('Activated Dashboard View');
            });
		}
		getMessageCount(): void {
			var instance: DashboardController = this;
			this.dataService.getMessageCount().then(function(data: number): void {
                console.log(data);
				instance.messageCount = data;
            });
		}
		getPeople(): void {
			// var instance: DashboardController = this;
			// this.dataService.getPeople().then(function(data: Object[]): void {
			// 	console.log(data);
			// 	instance.people = data;
			// });
		}
	}
	angular
        .module('app.dashboard')
        .controller('DashboardController', DashboardController);
}
