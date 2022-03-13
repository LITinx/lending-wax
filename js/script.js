let lightMode = localStorage.getItem('lightMode')
const lightModeToggle = document.querySelector('.nav__button-switch')
const enableLight = () => {
	document.body.classList.add('light-mode')

	localStorage.setItem('lightMode', 'enabled')
}
const disableLight = () => {
	document.body.classList.remove('light-mode')
	localStorage.setItem('lightMode', null)
}
if (lightMode === 'enabled') {
	enableLight()
}

lightModeToggle.addEventListener('click', () => {
	lightMode = localStorage.getItem('lightMode')
	if (lightMode !== 'enabled') {
		enableLight()
	} else {
		disableLight()
	}
})
const ibg = () => {
	const ibg = document.querySelectorAll('.lightMode')
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('.nav__button-switch')) {
			ibg[i].style.background = 'url(../image/night.svg)'
		}
	}
}
ibg()
