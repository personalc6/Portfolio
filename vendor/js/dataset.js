var app = angular.module('myApp',[]);

app.controller('conditionCtrl', function($scope) {
	$scope.dataset = [{date: "2018-01-14",week: "수",division: "정상",checkin: "09:02",checkout: "퇴근 미체크",other: "",cls: "red"},
					  {date: "2018-01-13",week: "화",division: "정상",checkin: "08:32",checkout: "17:32",other: ""},
					  {date: "2018-01-12",week: "월",division: "정상",checkin: "08:17",checkout: "17:17",other: ""},
					  {date: "2018-01-11",week: "일",division: "휴무",checkin: "",checkout: "",other: ""},
					  {date: "2018-01-10",week: "토",division: "휴무",checkin: "",checkout: "",other: ""},
					  {date: "2018-01-09",week: "금",division: "출장",checkin: "09:00",checkout: "14:21",other: "출장(근무지내)"},
					  {date: "2018-01-08",week: "목",division: "정상",checkin: "07:35",checkout: "16:36",other: ""},
					  {date: "2018-01-07",week: "수",division: "정상",checkin: "08:39",checkout: "17:40",other: ""}];
});

app.controller('informationCtrl', function($scope) {
	$scope.dataset = [{date: "2018-01-14",week: "수",rank: "경영기획국장",name: "임재성",checkin: "07:12",checkout: "16:12",other: ""},
					  {date: "2018-01-14",week: "수",rank: "전산정보부장",name: "임재성",checkin: "08:31",checkout: "17:31",other: "17:33"},
					  {date: "2018-01-14",week: "수",rank: "대리",name: "임재성",checkin: "08:03",checkout: "17:03",other: "17:06"},
					  {date: "2018-01-14",week: "수",rank: "대리",name: "임재성",checkin: "08:41",checkout: "17:41",other: ""},
					  {date: "2018-01-14",week: "수",rank: "주임",name: "임재성",checkin: "08:21",checkout: "17:21",other: ""},
					  {date: "2018-01-14",week: "수",rank: "사원",name: "임재성",checkin: "09:15",checkout: "18:15",other: "출장(근무지내)"},
					  {date: "2018-01-14",week: "수",rank: "사원",name: "임재성",checkin: "09:06",checkout: "18:06",other: ""},
					  {date: "2018-01-14",week: "수",rank: "사원",name: "임재성",checkin: "09:06",checkout: "18:06",other: ""},
					  {date: "2018-01-14",week: "수",rank: "사원",name: "임재성",checkin: "09:02",checkout: "18:02",other: ""},
					  {date: "2018-01-14",week: "수",rank: "사원",name: "임재성",checkin: "09:22",checkout: "18:22",other: ""},
					  {date: "2018-01-14",week: "수",rank: "사원",name: "임재성",checkin: "09:02",checkout: "18:02",other: ""}];
});