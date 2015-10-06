module app.core {
    'use strict';
	export interface IDataService {
		getMessageCount(): angular.IPromise<any>;
		createUser(name: string, email: string, password: string): any;
		getUser(id: number): any;
		updateUser(id: number, name: string, email: string, password: string): any;
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
		createUser(name: string, email: string, password: string): any {
			return this.$http.post('api/createUser', { name: name, email: email, pass: password } )
				.then(function success(response: any): any {
				return response.data;
			}, function fail(response: any): any {
				return 'Failed to get people';
			});
		}
		getUser(id: number): any {
			return this.$http.get('api/getUser/' + id)
				.then(function success(response: any): any {
				return response.data;
			}, function fail(response: any): any {
				return 'Failed to get people';
			});
		}
		updateUser(id: number, name: string, email: string, password: string): any {
			return this.$http.post('api/updateUser/' + id, { name: name, email: email, pass: password } )
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
