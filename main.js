var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);

//////////////
////ES8//////
/////////////

// let obj = {
// 	username0: 'Santa',
// 	username1: 'Rudolf',
// 	username2: 'Mr.Grinich'
// }

// Object.keys(obj).forEach((key, index) => {
// 	console.log(key, obj[key])
// })

// Object.values(obj).forEach(value => {
// 	console.log(value)
// })

// Object.entries(obj).forEach(value => {
// 	console.log(value)
// })

// Object.entries(obj).map(value => {
// 	return console.log(value[1] + value[0].replace('username', ''))
// })


//////////////////////////
////Advanced Looping//////
//////////////////////////

// const basket = ['apples', 'oranges', 'grapes']
// const detailBasket = {
// 	apples: 5,
// 	oranges: 10,
// 	grapes: 1000
// }


// for (item of basket) {
// 	console.log(item)
// }

// for (item in detailBasket) {
// 	console.log(item)
// }













