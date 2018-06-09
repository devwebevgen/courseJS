var str = "урок-3-был слишком легким";
var arr;
var strChanged;
var arrChanged;

arr = str.split("р");

var strSplited = arr[0].toUpperCase();
arr.unshift(strSplited + "р");
arr.splice(1, 1);
strChanged = arr.join("");

strChanged = strChanged.split("-");
strChanged = strChanged.join(" ");
console.log(strChanged);
// Строка с Заглавной и с пробелами

strChanged = strChanged.split(" ");
arr = strChanged.pop();
arrChanged = arr.split('и');
arrChanged[1] = 'о';
strChanged.push(arrChanged.join(''));
strChanged = strChanged.join(' ');
// Замена легко
alert(strChanged);

// Новый массив:
var arr = [20, 33, 1, 'Человек', 2, 3];
var sum = 0;

for (var i = 0; i <= arr.length; i++) {

	if (typeof arr[i] === "number") {
		arr[i] = Math.pow(arr[i],3);
		sum += arr[i];
	}
}

console.log(Math.sqrt(sum));

//Создание функции

function takeArg(arg) {	

	if (typeof arg != 'string') {
		alert("Вы ввели не строку!");
	} else {
		alert("Все оК");
	}
	arg = arg.trim();
	if (arg.length > 50) {	
		arg = arg.substr(0, 50) + "(...)";	
	}
	alert(arg);
}
takeArg(prompt('Впишите', ''));

