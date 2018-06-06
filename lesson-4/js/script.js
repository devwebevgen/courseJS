var budget,
	magazineName,
	time,
	price,
	question,
	promo,
	discount,
	items

var mainList = {
	budget: budget,
	nameMagazine: magazineName,
	shopGoods: [],
	employers: {},
	open: false,
	shopItems: [],
	discount: true,
	start: function start () {
		budget = prompt("Ваш бюджет за месяц?",'');
		magazineName = prompt("Название вашего магазина?").toUpperCase();
		time = 19;

		while (isNaN(budget) || budget == '' || budget == null) {
			budget = prompt("Ваш бюджет за месяц?");
		}

		for (let i = 0; i < 1; i++) {	
			
			if ((typeof(magazineName)) === 'string' && magazineName != '' && magazineName.length < 50) {
		 		console.log('Все верно!');
				mainList.nameMagazine = magazineName;

		 	} else {
		 		console.log('Не верно! Введите заново');
		 		--i;	
		 		}	
		}
		
		for (let i = 0; i < 1; i++) {	
				
			if ((typeof(budget)) === 'string' && budget != '' && budget.length < 50) {
				console.log('Все верно!');
				mainList.budget = budget;

			} else {
				console.log('Не верно! Введите заново');
				--i;
				}
		}
	},
	recruitEmployers: function recruitEmployers() {
	
		for (var i = 1; i < 5; i++) {
			
			mainList.employers = prompt("Введите имя сотрудника:", '');
			
			if ((typeof(mainList.employers)) === 'string' && mainList.employers != '' && mainList.employers.length < 10) {
				console.log('Все верно!');			
				mainList.employers = i + "). " + mainList.employers;
				console.log(mainList.employers);
			} else {
				console.log('Не верно! Введите заново');
				--i;	
				}	
		}	
		
	},
	chooseGoods: function chooseGoods() {
	
		for (let i = 0; i < 5; i++) {
			
			let a = prompt("Какой тип товаров будем продавать?",'');
			
			if ((typeof(a)) === 'string' && a != '' && a.length < 50) {
				console.log('Все верно!');
				mainList.shopGoods[i] = a;
			} else {
				console.log('Не верно! Введите заново');
				--i;
				}	
		}
	},
	workTime: function workTime(time) {
	
		if (time < 0) {
			console.log('Такого просто не может быть');
		} else if (time > 8 && time < 20) {
			console.log('Время работать!');
			mainList.open = true;
			} else if (time < 24) {
				console.log('Уде слишком поздно!');
				} else {
					console.log('В сутках только 24 часа!');
				};
	},	
	getDiscount: function getDiscount() {
		price = 9900;
		discount = 0.2;
		promo = "lesson-3";

		question = confirm("Хотите скидочку?");	
		//проверка на наличие скидки	
		switch (mainList.discount) {
			case true:
			//проверка на желание получить
				switch (question) {
					case true:
						alert("С какой стати?!");			
						alert("Ладно ладно...");
						// Промо-код для получения					
						for (var i = 0; i < 1; i++) {
							promo = prompt('Чтобы получить скидку введите промо-код:\n lesson-3', "Cюда");																						
							switch (promo) {
								case 'lesson-3':
									break;
								default:
									alert("Руки из ж...?");	
									--i;															
									break;																											
							}						
						}					
						alert("Цена без скидки = " + price);
						alert("Скидка = " + (discount * 100 + "%"));
						//Вычисление скидки
						alert("Цена со скидкой = " + price * (1 - discount));
						break;						
					default:
						alert("Как хотите...");
						break;	
				}
				break;																		
			default:			
				alert("Не сегодня...");	
				break;		
		}	
	},
	chooseShopItems: function chooseShopItems() {
		
		for (let i = 0; i < 1; i++) {

			items = prompt("Перечислите через запятую товары", "");

			if (typeof(items) === "string" && items != '') {
				mainList.shopItems = items.split(",");
				mainList.shopItems.push(prompt('Подождите, еще ', ''));
				mainList.shopItems.sort();
				mainList.shopItems.unshift(null);
				mainList.shopItems.splice(0, 1);							
			} else {
				alert("Введите название правильно!");
				--i;
				}
		}
	}
}
// mainList.start();
// mainList.chooseGoods();
// mainList.workTime(9);
// mainList.getDiscount();
// mainList.recruitEmployers();
mainList.chooseShopItems();
mainList.shopItems.forEach( function chooseShopItems(item) {
	alert("У нас вы можете купить: " + item);	
});

for (var item in mainList.shopItems) {
	console.log("Наш магазин влючает в себя: " + mainList.shopItems[item]);
}
