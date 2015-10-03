module app.core {
    'use strict';
	export interface IDataService {
		getMessageCount(): angular.IPromise<any>;
		getPeople(): any;
	}
	class DataService implements IDataService {
		public static $inject: any[] = ['$http', '$q', 'logger'];
		constructor(private $http: angular.IHttpService,
			private $q: angular.IQService,
			private logger: blocks.ILoggerService) {
			}

		getMessageCount(): angular.IPromise<any> {
			return this.$q.when(0);
		}
		getPeople(): any {
			return this.$http.get('api/people')
				.then(function success(response: any): any {
				return response.data;
			}, function fail(response: any): any {
				return 'Failed to get people';
			});
		}
	}
	angular
        .module('app.core')
        .service('dataService', DataService);
}
