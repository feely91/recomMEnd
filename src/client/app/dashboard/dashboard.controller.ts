module app.dashboard {
	'use strict';
	class DashboardController {
		public static $inject: any[] = ['$q', 'dataservice', 'logger'];
		news: Object = {
			title: 'New News Title',
			description: 'Make this something else'
		};
		messageCount: number = 0;
		people: any[] = [];
		title: string = 'Home';

		constructor(private $q: angular.IQService,
			private dataService: core.dataservice,
			private logger: blocks.ILoggerService) {
			this.activate();
		}
		activate(): any {
			var promises: any = [this.getMessageCount(), this.getPeople()];
			return this.$q.all(promises).then(function(): void {
                this.logger.info('Activated Dashboard View');
            });
		}
		getMessageCount(): number {
			 return this.dataService.getMessageCount().then(function (data: any): number {
                this.messageCount = data;
                return this.messageCount;
            });
		}
		getPeople(): any[] {
			return this.dataService.getPeople().then(function (data: any): any[] {
				this.people = data;
				return this.people;
			});
		}
	}
	angular
        .module('app.dashboard')
        .controller('DashboardController', DashboardController);
}
