var app = angular.module('myApp',[]);
app.controller('tableCtrl', function($scope) {
	$scope.languages = [{category:'WEB',level:'Top',language:'PHP, HTML, ASP, C# / JavaScript, jQuery'},
						{category:'WEB',level:'Middle',language:'JAVA / React.js, Angular.js'},
						{category:'PROGRAM',level:'Top',language:'C#, VisualBasic, JAVA'},
						{category:'PROGRAM',level:'Middle',language:'C++'},
						{category:'DBMS',level:'Top',language:'MS-SQL, MariaDB(MySQL)'}];
});

app.controller('timelineCtrl', function($scope) {
	$scope.dataset = [

	{date:'2011.03'
	,content:'국제기능올림픽대회에 출전하여 지방(강원도)대회에서 금메달을 수상하였습니다.'},

	{date:'2011.08'
	,content:'국제기능올림픽대회에서 강원도 대표로 전국대회에 출전하여 은메달을 수상하였으며, 이 과정에서 서버 및 네트워크 기술을 익혔습니다.'},

	{date:'2012.08'
	,content:'한국보건의료인국가시험원이라는 기관에 입사하게 되어 이 후 2017.08까지 5년간 근무를 하며 C#, JAVA, ASP.NET, Angular.js, AJAX를 익혔습니다.'},

	{date:'2017.08'
	,content:'한국보건의료인국가시험원 퇴사'},

	{date:'2018.01'
	,content:'다솜엔터테인먼트이라는 스타트업 기업에 입사하여 근무를 하며 React.js에 대하여 익혔습니다.'}

	];
});