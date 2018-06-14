let btnOpenShop = document.getElementById('open-btn'),
	name_value = document.getElementsByClassName('name-value')[0],
	budget_value = document.getElementsByClassName('budget-value')[0],
	goods_value = document.getElementsByClassName('goods-value')[0],
	items_value = document.getElementsByClassName('items-value')[0],
	employers_value = document.getElementsByClassName('employers-value')[0],
	discount_value = document.getElementsByClassName('discount-value')[0],
	open_value = document.getElementsByClassName('isopen-value')[0],

	goodsItem = document.getElementsByClassName('goods-item'),	
	goods_btn = document.getElementsByTagName('button')[1],
	budget_btn = document.getElementsByTagName('button')[2],
	emloyers_btn = document.getElementsByTagName('button')[3],
	im_here = document.getElementsByClassName('im-here')[0],
	inputItems_value = document.querySelector('.choose-item'),
	inputTime_value = document.querySelector('.time-value'),
	inputBudget_value = document.querySelector('.count-budget-value'),
	inputEmployers_value = document.querySelectorAll('.hire-employers-item');

let money;
let mainList = {
	budget: money,
	shopGoods: [],
	employers: {},
	open: false,
	shopItems: [],
	discount: false		
};
let alph =  function (text) {
    return /[а-я]/i.test(text);
}
alert("Найди паСхалку и Получишь хоРАошую сВкидкуА!)");
btnOpenShop.addEventListener('click', () => {
	money = prompt("Ваш бюджет за месяц?",'');	
	
	while (isNaN(money) || money == '' || money == null) {
		money = prompt("Ваш бюджет за месяц?", '');
	}
	budget_value.textContent = money;
	name_value.textContent = prompt("Название вашего магазина?", '').toUpperCase();
	if (money != undefined) budget_btn.removeAttribute('disabled');	
});

goods_btn.addEventListener('click', () => {

	for (let i = 0; i < goodsItem.length; i++) {		
		let a = goodsItem[i].value;		

		if ((typeof(a)) === 'string') {
			mainList.shopGoods[i] = a;
			goods_value.textContent = mainList.shopGoods;
			console.log(goodsItem[i].value);
		} else {
			console.log('Не верно! Введите заново');
			--i;
			}
		
	}
});
inputItems_value.addEventListener('change', () => {			
	
		let items = inputItems_value.value;

		if (isNaN(items) && items != '') {
			mainList.shopItems = items.split(",");
			mainList.shopItems.sort();
			mainList.shopItems.unshift(null);
			mainList.shopItems.splice(0, 1);	
			items_value.textContent = mainList.shopItems;						
		}
});
inputTime_value.addEventListener('change', () => {
	let time = inputTime_value.value;
	
	if (time < 0) {
		console.log('Такого просто не может быть');
		mainList.open = false;
	} else if (time > 8 && time < 20) {
		console.log('Время работать!');
		mainList.open = true;
		} else if (time < 24) {
			console.log('Уде слишком поздно!');
			mainList.open = false;
			} else {
				console.log('В сутках только 24 часа!');
				mainList.open = false;
			};
	if (mainList.open == true) {
		open_value.style.backgroundColor = 'rgb(50, 255, 50)';		
	} else {
		open_value.style.backgroundColor = 'red';
	}
	if (time != undefined) {
		openArea();
	}
});
budget_btn.addEventListener('click', () => {
	inputBudget_value.value = money / 30;
});
emloyers_btn.addEventListener('click', () => {

	for (let i = 0; i < inputEmployers_value.length; i++) {			
		let name = inputEmployers_value[i].value;
		mainList.employers[i] = name;
		if (alph(mainList.employers[i]) == false) {			
			// i--;
			// continue;	
		}
		employers_value.textContent += mainList.employers[i] + ', ';
		
	}
});
im_here.addEventListener('click', () => {		
	let discount = 0.2;
	let promo = "lesson-3";

	alert('Ура! Ты получаешь скидку');	
	discount_value.style.backgroundColor = "rgb(50, 255, 50)";

	for (var i = 0; i < 1; i++) {
		promo = prompt('Чтобы получить скидку введите промо-код:\n lesson-3', "Cюда");																						
		switch (promo) {
			case 'lesson-3':
				break;
			default:
				alert("Руки из ...?");	
				--i;															
				break;																											
		}						
	}					
	alert("Цена без скидки = " + money);
	alert("Скидка = " + (discount * 100 + "%"));
	//Вычисление скидки
	alert("Цена со скидкой = " + money * (1 - discount));	
});
// Блокировка on/off
function openArea() {
	inputBudget_value.setAttribute('disabled', 'disabled');
	inputItems_value.setAttribute('disabled', 'disabled');

	goods_btn.setAttribute('disabled', 'disabled');
	emloyers_btn.setAttribute('disabled', 'disabled');
	budget_btn.setAttribute('disabled', 'disabled');
	for (let i = 0; i < 4; i++) {
		goodsItem[i].setAttribute('disabled', 'disabled');
		if (mainList.open == true) {
			goodsItem[i].removeAttribute("disabled");	
		}		
	}
	for (let i = 0; i < inputEmployers_value.length; i++) {
		inputEmployers_value[i].setAttribute('disabled', 'disabled');
		if (mainList.open == true) {
			inputEmployers_value[i].removeAttribute("disabled");	
		}					
	}
	if (mainList.open == true) {
			inputItems_value.removeAttribute("disabled");	
	}	
}
openArea();
function focusOn() {
	for (let i = 0; i < goodsItem.length; i++) {
		goodsItem[i].addEventListener('focus', () => {
			goods_btn.removeAttribute("disabled");			
		});
	}
	for (let i = 0; i < inputEmployers_value.length; i++) {
		inputEmployers_value[i].addEventListener('focus', () => {
			emloyers_btn.removeAttribute("disabled");			
		});
	}
}
focusOn();

input.onblur = function() {
  if (isNaN(this.value)) { // введено не число
    // показать ошибку
    this.className = "error";
    error.innerHTML = 'Вы ввели не число. Исправьте, пожалуйста.'
  }
};

input.onfocus = function() {
  if (this.className == 'error') { // сбросить состояние "ошибка", если оно есть
    this.className = "";
    error.innerHTML = "";
  }
};