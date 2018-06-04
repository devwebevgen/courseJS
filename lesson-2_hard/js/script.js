var week =  ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскрсенье'];
var date = new Date();
var currentDayWeek = date.getUTCDay();

week[currentDayWeek] = week[currentDayWeek].italics();

document.write(week[0] + '<br>' + week[1] + '<br>' + week[2] + '<br>' + week[3] + '<br>' + week[4] + '<br>' + week[5].bold() + '<br>' + week[6].bold());

var arr = ['223', '334', '435', '5576', '667', '771', '83'];
for (let i = 0; i < 7; i++) {
	var str = arr[i]; 
	if (str[0] == 3 || str[0] == 7) {
		console.log(arr[i]);
	}	
}

