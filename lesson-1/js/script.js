var mainList = {
	budget: budget,
	nameMagazine: magazineName,
	shopGoods: [],
	employers: new Object,
	open: true
}

for (let i = 0; i < 1; i++) {
	
	var budget = prompt("Ваш бюджет за месяц?");
	
	if ((typeof(budget)) === 'string' && budget != '' && budget.length < 50 ) {
		console.log('Все верно!');
		mainList.budget = budget;

	} else {
		console.log('Не верно! Введите заново');
		--i	
		}	
}
()
while 

for (let i = 0; i < 1; i++) {	
	
	var magazineName = prompt("Название вашего магазина?");
	
	if ((typeof(magazineName)) === 'string' && magazineName != '' && magazineName.length < 50 ) {
		console.log('Все верно!');
		mainList.nameMagazine = magazineName;

	} else {
		console.log('Не верно! Введите заново');
		--i	
		}	
}

for (let i = 0; i < 5; i++) {
	
	let a = prompt("Какой тип товаров будем продавать?");
	
	if ((typeof(a)) === 'string' && a != '' && a.length < 50 ) {
		console.log('Все верно!');
		mainList.shopGoods[i] = a;
	} else {
		console.log('Не верно! Введите заново');
		--i	
		}	
}

var time = 19;

if (time < 0) {
	console.log('Такого просто не может быть');
} else if (time > 8 && time < 20) {
	console.log('Время работать!');
	} else if (time < 24) {
		console.log('Уде слишком поздно!');
		} else {
			console.log('В сутках только 24 часа!');
		};

console.log(mainList);

var budgetPerDay = budget/30;

	alert("Ваш бюджет за один день = "+ budgetPerDay);

var myNum          = 33721;
var num            = String(myNum);
var split          = num.split('');
var multiplication = split[0]*split[1]*split[2]*split[3]*split[4];

console.log(multiplication);

var multiplicationNum = multiplication ** 3;
// var multiplicationNum = Math.pow(multiplication, 3); как правильнее?
var multiplicationNum = String(multiplicationNum);

console.log(multiplicationNum[0]+multiplicationNum[1]);





