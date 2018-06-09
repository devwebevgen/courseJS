let btnMenu = document.getElementsByClassName('menu-item'),
	menu = document.querySelector('.menu'),
	title =  document.getElementById('title'),
	column = document.getElementsByClassName('column'),
	adv = document.querySelector('.adv'),
	question = document.createElement('div'),
	promptNote = document.getElementById('prompt');


menu.insertBefore(btnMenu[2], btnMenu[1]);

document.body.style.background = 'url(../img/apple_true.jpg)';

title.innerHTML = 'Мы продаем только подлинную технику Apple';

column[1].removeChild(adv);

column[1].insertBefore(question, promptNote);

promptNote.textContent = prompt('Ваше отношение к технике apple?', 'Запишите тут');
