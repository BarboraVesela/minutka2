'use strict';

console.log('funguju!');


const alarmTimer = (event) => {
	event.preventDefault()
	let time = Number(document.querySelector('.time-input').value)

	const secondsElm = document.querySelector('.alarm__seconds')
	const alarmElm = document.querySelector('.alarm')

	alarmElm.classList.remove('alarm--ring')

	secondsElm.textContent = String(time)

	const countdown = () => {
		if (time > 0) {
			time -= 1
			secondsElm.textContent = String(time)
		}
		if (time <= 0) {
			clearInterval(casovac)
			alarmElm.classList.add('alarm--ring')
			document.querySelector('audio').play()
		}
	}

	const casovac = setInterval(countdown, 1000)
}

const formularElm = document.querySelector('.controls')
formularElm.addEventListener('submit', alarmTimer)