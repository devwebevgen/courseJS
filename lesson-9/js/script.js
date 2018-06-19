window.addEventListener('DOMContentLoaded', function() {
	
	let tab = document.getElementsByClassName('info-header-tab'),
		tabContent = document.getElementsByClassName('info-tabcontent'),
		info = document.getElementsByClassName('info-header')[0],
		btnLearnMore = document.querySelector('.info');

	function hideTabContent (a) {
		for (let i = a; i< tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		} 
	}
	hideTabContent(1);

	function showTabContent(b) {
		if (tabContent[b].classList.contains('hide')) {
			hideTabContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	info.addEventListener('click', function(event) {
		let target = event.target;
		if (target.className == 'info-header-tab') {
			for (let i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					showTabContent(i);
					break;
				}
			}
		}		
	})


	let deadline = '2018-03-20';

	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()),
		seconds = Math.floor((t / 1000) % 60),
		minutes = Math.floor((t / 1000 / 60) % 60),
		hours = Math.floor(t / (1000 * 60 * 60));

		return {
			'total': t,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	};
	function setClock(id, endtime) {
		let timer = document.getElementById(id),
			hours = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			seconds = timer.querySelector('.seconds');

			function updateClock() {
				let t = getTimeRemaining(endtime);

				if(t.total <= 0) {
					clearInterval(timeInterval);
					t.hours = 0;
					t.minutes = 0;
					t.seconds = 0;
				}
				if (t.hours < 10) t.hours = ("0" + t.hours); 
				if (t.minutes < 10) t.minutes = ("0" + t.minutes); 
				if (t.seconds < 10) t.seconds = ("0" + t.seconds); 
				
				hours.innerHTML = t.hours; 
				minutes.innerHTML = t.minutes
				seconds.innerHTML = t.seconds;	

			};

			updateClock();

			var timeInterval = setInterval(updateClock, 1000);

	}
	setClock('timer', deadline);
	//modal

	var more = document.querySelector('.more'),
		overlay = document.querySelector('.overlay'),
		close = document.querySelector('.popup-close');

	
	let myEv = function myEv() {
		more.classList.add('more-splash');
		overlay.style.display = 'block';		
		document.body.style.overflow = 'hidden';
	}		
	more.addEventListener('click', myEv);
	
	close.addEventListener('click', function() {
		overlay.style.display = 'none';
		this.classList.remove('more-splash');
		document.body.style.overflow = '';
	});	

	

	btnLearnMore.onclick = function(event) {
		var target = event.target;
		if (target.className != 'description-btn') return;

		myEv(target);
	};
});
