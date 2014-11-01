// install   :   cordova plugin add https://github.com/pvsaikrishna/ng-cordova.git
// link      :   https://github.com/apache/cordova-plugin-camera/blob/master/doc/index.md#orgapachecordovacamera

angular.module('ngCordova.plugins.http', [])

  .factory('$cordovaHttp', ['$q', function ($q) {

    return {

      get: function (url, params, headers) {
        var q = $q.defer();

	     window.plugins.CordovaHttpPlugin.get(url, params, headers,
          function (data) {
             q.resolve(data);
          }, function (err) {
             q.reject(err);
          }
        );

        return q.promise;
      }
    };
  }]);
