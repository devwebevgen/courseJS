var nowDate = new Date(),	
	showDate = document.createElement('div'),	
	hours = nowDate.getHours(),
	min = nowDate.getMinutes(),
	sec = nowDate.getSeconds(),
	time = [hours + ":", min + ":", sec];

document.body.appendChild(showDate);
document.body.style.display = 'flex';
document.body.style.flexDirection = 'column';
document.body.style.alignItems = 'center';

function clock() {
	var nowDate = new Date(),
		hours = nowDate.getHours(),
		min = nowDate.getMinutes(),
		sec = nowDate.getSeconds(),
		time = [hours + ":", min + ":", sec];

	if (hours < 10) time[0] = ("0" + time[0]); 
	if (min < 10) time[1] = ("0" + time[1]); 
	if (sec < 10) time[2] = ("0" + time[2]); 
	showDate.innerHTML = time.join('');	
}
setInterval(clock, 1000);