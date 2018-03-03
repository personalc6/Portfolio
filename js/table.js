var app = angular.module('myApp',[]);
app.controller('tableCtrl', function($scope) {
	$scope.languages = [{category:'WEB',level:'Top',language:'PHP, HTML, ASP, C# / JavaScript, jQuery'},
						{category:'WEB',level:'Middle',language:'JAVA / React.js, Angular.js'},
						{category:'PROGRAM',level:'Top',language:'C#, VisualBasic, JAVA'},
						{category:'PROGRAM',level:'Middle',language:'C++'},
						{category:'DBMS',level:'Top',language:'MS-SQL, MariaDB(MySQL)'}];
});

app.controller('worksCtrl', function($scope) {
	$scope.names = [{title:'kuksiwon',content:'none',image:'image/kuksiwon.jpg'},
					{title:'dasom',content:'none',image:'image/dasom.jpg'},
					{title:'test',content:'none',image:'image/kuksiwon2.jpg'}];
});