class Options {
	constructor(height, width, bg, fontSize, textAlign) {
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	}
	createDiv() {
		let tag = prompt("Введите название тега: ", "");
		tag = document.createElement(`${tag}`); 
		document.body.appendChild(tag);
		let write = prompt("Введите текст элемента: ", "");
		tag.textContent = `${write}`;
		tag.style.cssText = prompt("Введите параметры стилей: ", "");
	}
}
let new1 = new Options();
new1.createDiv();
