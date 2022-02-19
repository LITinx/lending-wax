let darkMode = localStorage.getItem('lightMode')
const darkModeToggle = document.querySelector('.nav__button-switch')
const enableDark = () => {
	document.body.classList.add('lightMode')

	localStorage.setItem('lightMode', 'enabled')
}
const disableDark = () => {
	document.body.classList.remove('lightMode')

	localStorage.setItem('lightMode', null)
}
darkModeToggle.addEventListener('click', () => {
	const darkMode = localStorage.getItem('lightMode')
	if (darkMode !== 'enabled') {
		enableDark()
	} else {
		disableDark()
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
