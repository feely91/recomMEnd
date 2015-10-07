module app.core {
    'use strict';
	export interface IDataService {
		getMessageCount(): angular.IPromise<any>;
		createUser(name: string, email: string, password: string, callback: Function): any;
		getUser(id: number, callback: Function): any;
		updateUser(id: number, name: string, email: string, password: string, callback: Function): any;
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
		createUser(name: string, email: string, password: string, callback: Function): any {
			this.$http.post('api/createUser', { name: name, email: email, pass: password })
				.then(function success(response: any): any {
					callback(null, response.data);
				}, function fail(response: any): any {
					callback('Failed to get people', null);
				});
		}
		getUser(id: number, callback: Function): any {
			this.$http.get('api/getUser/' + id)
				.then(function success(response: any): any {
					callback(null, response.data);
				}, function fail(response: any): any {
					callback('Failed to get people', null);
				});
		}
		updateUser(id: number, name: string, email: string, password: string, callback: Function): any {
			// console.log('DATASERVICE TS UPDATE USER');
			// console.log('DATASERVICE TS ID = ' + id);
			// console.log('DATASERVICE TS NAME = ' + name);
			// console.log('DATASERVICE TS EMAIL = ' + email);
			this.$http.post('api/updateUser/' + id, { name: name, email: email, pword: password })
				.then(function success(response: any): any {
					// console.log('DATASERVICE TS UPDATEUSER = ' + response.data);
					callback(null, response.data);
				}, function fail(response: any): any {
					// console.log('DATASERVICE TS UPDATEUSER ERROR = ' + response);
					callback('Failed to get people', null);
				});
		}
	}
	angular
        .module('app.core')
        .service('dataService', DataService);
}
