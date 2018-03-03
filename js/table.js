var app = angular.module('myApp',[]);
app.controller('tableCtrl', function($scope) {
	$scope.languages = [{category:'WEB',level:'Top',language:'PHP, HTML, ASP, C# / JavaScript, jQuery'},
						{category:'WEB',level:'Middle',language:'JAVA / React.js, Angular.js'},
						{category:'PROGRAM',level:'Top',language:'C#, VisualBasic, JAVA'},
						{category:'PROGRAM',level:'Middle',language:'C++'},
						{category:'DBMS',level:'Top',language:'MS-SQL, MariaDB(MySQL)'}];
});

app.controller('worksCtrl', function($scope) {
	$scope.dataset = [

	{num:'01',title:'한국보건의료인국가시험원 랜딩페이지',viewport:'Original : 데스크탑 / Renewal : 반응형',palette1:'#5cbe15',palette2:'#61baff',palette3:'#fb7878',
	content1:'기존 관리하고 있던 한국보건의료인국가시험원의 메인 페이지를 리뉴얼 하였습니다. css를 최대한 활용하여 불필요한 이미지를 제거하고 가독성을 극대화하였습니다.',
	content2:'공공기관 사이트로서 보다 많은 사용자 환경에 대응하기 위해 익스플로러 8까지의 호환성 지원, 웹 접근성 관리가 되어 있습니다.',
	button_name1:'Original Page', button_href1:'http://www.kuksiwon.or.kr/Examination/Default.aspx',
	button_name2:'Renewal Page', button_href2:'kuksiwon.html',
	img:'image/kuksiwon.png'},

	{num:'02',title:'한국보건의료인국가시험원 근태관리시스템',viewport:'반응형',palette1:'#fb7878',palette2:'',palette3:'',
	content1:'기존 관리하고 있던 한국보건의료인국가시험원의 메인 페이지를 리뉴얼 하였습니다. css를 최대한 활용하여 불필요한 이미지를 제거하고 가독성을 극대화하였습니다.',
	content2:'공공기관 사이트로서 보다 많은 사용자 환경에 대응하기 위해 익스플로러 8까지의 호환성 지원, 웹 접근성 관리가 되어 있습니다.',
	button_name1:'Sample Page', button_href1:"javascript:window.open('kuksiwon_attendance.html','','width=950,height=500,menubar=no,scrollbars=no,status=no')",
	button_name2:'', button_href2:'',
	img:'image/kuksiwon_attendance.png'},

	{num:'03',title:'다솜 엔터테인먼트 웹 페이지',viewport:'반응형',palette1:'#e8554e',palette2:'#03af88',palette3:'#8d6fbc',
	content1:'다솜 엔터테인먼트의 웹 페이지입니다.',
	content2:'홈페이지 사용자의 대상 및 환경을 고려하여 스마트폰, 태블릿 등에서도 이용할 수 있도록 반응형 웹 방식으로 구현하였습니다.',
	button_name1:'Original Page', button_href1:'http://www.dearmystar.com',
	button_name2:'', button_href2:'',
	img:'image/dasom.png'}

	];
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
	,content:'다솜엔터테인먼트이라는 스타트업 기업에서 근무를 하며 React.js에 대하여 익혔습니다.'}

	];
});