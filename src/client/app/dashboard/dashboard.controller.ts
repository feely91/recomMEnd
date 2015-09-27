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
			var instance: DashboardController = this;
			var promises: any = [this.getMessageCount(), this.getPeople()];
			return this.$q.all(promises).then(function(): void {
                instance.logger.info('Activated Dashboard View');
            });
		}
		getMessageCount(): number {
			var instance: DashboardController = this;
			return this.dataService.getMessageCount().then(function(data: number): number {
                console.log(data);
				instance.messageCount = data;
                return instance.messageCount;
            });
		}
		getPeople(): any[] {
			var instance: DashboardController = this;
			return this.dataService.getPeople().then(function(data: Object[]): Object[] {
				console.log(data);
				instance.people = data;
				return instance.people;
			});
		}
	}
	angular
        .module('app.dashboard')
        .controller('DashboardController', DashboardController);
}
