var nowDate = new Date(),	
	showDate = document.createElement('div'),
	showDay = document.createElement('div'),
	showDiff = document.createElement('div'),
	btn = document.createElement('button'),
	input1 = document.createElement('input'),
	input2 = document.createElement('input'),
	input3 = document.createElement('input'),			
	dayWeek = nowDate.getDay(),
	date = nowDate.getDate(),
	month = nowDate.getMonth(),
	year = nowDate.getFullYear(),
	hours = nowDate.getHours(),
	min = nowDate.getMinutes(),
	sec = nowDate.getSeconds(),
	time = [hours + ":", min + ":", sec + " ", date + ".", month + ".", year],
	days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

document.body.appendChild(showDate);
document.body.appendChild(showDay);
document.body.appendChild(btn);
document.body.appendChild(input1);
document.body.appendChild(input2);
document.body.appendChild(input3);
document.body.appendChild(showDiff);
document.body.style.display = 'flex';
document.body.style.flexDirection = 'column';
document.body.style.alignItems = 'center';
showDay.style.marginTop = '40px';
btn.style.marginTop = '40px';
input1.style.marginTop = '40px';
btn.style.cursor = 'pointer';
btn.style.padding = '5px 10px';
btn.style.borderRadius = '10px';
btn.innerHTML = "Show current day";
input1.setAttribute('placeholder', 'Введите уменьшаемую дату');
input2.setAttribute('placeholder', 'Введите вычитаемую дату');
input1.setAttribute('type', 'date');
input2.setAttribute('type', 'date');
input3.setAttribute('type', 'button');
input3.setAttribute('value', 'Жми! Будет счастье');

function clock() {
	var nowDate = new Date(),
		date = nowDate.getDate(),
		month = nowDate.getMonth(),
		year = nowDate.getFullYear(),
		hours = nowDate.getHours(),
		min = nowDate.getMinutes(),
		sec = nowDate.getSeconds(),
		time = [hours + ":", min + ":", sec + " ", date + ".", month + ".", year],
		first = new Date(),
		second = new Date();

	if (date < 10) time[3] = ("0" + time[3]); 
	if (month < 10) time[4] = ("0" + time[4]); 
	showDate.innerHTML = time.join('');	
}
setInterval(clock, 1000);

var showMeDay = function() {
	showDay.innerHTML = days[dayWeek];
}
btn.onclick = showMeDay;

input1.classList.add('enter');		
input2.classList.add('enter2');
function calcQt(){
	let diff = [],	
	inputFirst = [],
	inputSecond = [];

	inputFirst = document.getElementsByClassName('enter')[0].value.split("-");
	inputSecond = document.getElementsByClassName('enter2')[0].value.split("-");
	inputFirst[0] = +inputFirst[0];
	inputSecond[0] = +inputSecond[0];
	inputFirst[1] = +inputFirst[1];
	inputSecond[1] = +inputSecond[1];
	inputFirst[2] = +inputFirst[2];
	inputSecond[2] = +inputSecond[2];

	if (inputFirst[0] >= inputSecond[0] && inputFirst[1] >= inputSecond[1] && inputFirst[2] >= inputSecond[2]) {
		diff[0] = (inputFirst[0] - inputSecond[0]) * 365; //год условно
		diff[1] = (inputFirst[1] - inputSecond[1]) * 30; //месяц условно
		diff[2] = (inputFirst[2] - inputSecond[2]);		//дни
		console.log(diff)
	}
	for (var i = 0; i < diff.length; i++) {
		if (diff[i] != 0) {
			diff = diff[i];
			break;			
		}
	}	
	showDiff.innerHTML = diff;	
}
input3.onclick = calcQt;
